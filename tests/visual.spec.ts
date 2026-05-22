import { expect, test } from "@playwright/test";
import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Visual regression tests for React Cosmos fixtures.
 *
 * This test suite automatically discovers all fixtures in the Cosmos renderer
 * and takes visual snapshots. Tests will fail if the visual appearance changes
 * from the baseline snapshots.
 *
 * Usage:
 * - npm run test:visual         → Run tests (fails on visual changes)
 * - npm run test:visual:update  → Update baseline snapshots
 * - npm run test:visual:report  → Open HTML diff report
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Automatically discover all fixtures by scanning the component directory.
 * This eliminates the need to manually maintain a fixture list.
 */
async function discoverFixtures() {
	const fixtureFiles = globSync("src/**/*.fixture.{tsx,mdx}", {
		cwd: path.resolve(__dirname, ".."),
	});

	const fixtures: Array<{
		component: string;
		fixture: string;
		fixtureId: { path: string; name?: string };
	}> = [];

	for (const filePath of fixtureFiles) {
		const isMdx = filePath.endsWith(".mdx");
		const extension = isMdx ? ".fixture.mdx" : ".fixture.tsx";
		const componentName = path.basename(filePath, extension);

		if (isMdx) {
			fixtures.push({
				component: componentName,
				fixture: "default",
				fixtureId: { path: filePath },
			});
		} else {
			const fullPath = path.resolve(__dirname, "..", filePath);
			const fixtureModule = await import(fullPath);
			const fixtureExports = fixtureModule.default || {};

			for (const fixtureName of Object.keys(fixtureExports)) {
				fixtures.push({
					component: componentName,
					fixture: fixtureName,
					fixtureId: { path: filePath, name: fixtureName },
				});
			}
		}
	}

	return fixtures.sort((a, b) => {
		// Sort by component name, then by fixture name
		const componentCompare = a.component.localeCompare(b.component);
		return componentCompare !== 0
			? componentCompare
			: a.fixture.localeCompare(b.fixture);
	});
}

// Discover all fixtures at test time
const fixtures = await discoverFixtures();

for (const { component, fixture, fixtureId } of fixtures) {
	test(`${component} - ${fixture}`, async ({ page }) => {
		// Build the fixture URL using Cosmos URL structure
		const fixtureUrl = `/?fixture=${encodeURIComponent(
			JSON.stringify(fixtureId),
		)}`;

		// Navigate to the specific fixture in Cosmos
		await page.goto(fixtureUrl, { waitUntil: "networkidle" });

		// Wait for the iframe element to be present and attached
		const iframeElement = page.locator("iframe");
		await iframeElement.waitFor({ state: "attached", timeout: 10000 });

		// Inject Liberation fonts into the iframe for cross-platform consistency
		const iframeHandle = await page.locator("iframe").elementHandle();
		const contentFrame = await iframeHandle?.contentFrame();
		if (contentFrame) {
			await contentFrame.addStyleTag({
				path: path.resolve(__dirname, "fonts/fonts.css"),
			});
			// Wait for fonts to load in the iframe
			await contentFrame.evaluate(() => document.fonts.ready);
		}

		// Give time for any animations or async rendering to complete
		await page.waitForTimeout(1000);

		// Take a screenshot of ONLY the iframe element (not the Cosmos UI)
		// This ensures snapshots only break when the component changes, not when the fixture list changes
		await expect(iframeElement).toHaveScreenshot(`${component}-${fixture}.png`, {
			animations: "disabled",
			maxDiffPixelRatio: 0.01,
		});
	});
}
