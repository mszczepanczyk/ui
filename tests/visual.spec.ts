import { expect, test } from "@playwright/test";

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

// List all fixtures to test
// Format: { component: "ComponentName", fixture: "fixtureName" }
const fixtures = [
	// AbsoluteCenter
	{ component: "AbsoluteCenter", fixture: "default" },
	// Button
	{ component: "Button", fixture: "solid" },
	{ component: "Button", fixture: "outline" },
	{ component: "Button", fixture: "subtle" },
	{ component: "Button", fixture: "plain" },
	{ component: "Button", fixture: "sizes" },
	{ component: "Button", fixture: "loading" },
	{ component: "Button", fixture: "disabled" },
	// Group
	{ component: "Group", fixture: "horizontal" },
	{ component: "Group", fixture: "vertical" },
	// Input
	{ component: "Input", fixture: "default" },
	{ component: "Input", fixture: "withPlaceholder" },
	{ component: "Input", fixture: "disabled" },
	// Loader
	{ component: "Loader", fixture: "default" },
	{ component: "Loader", fixture: "sizes" },
	{ component: "Loader", fixture: "withText" },
	// Span
	{ component: "Span", fixture: "default" },
	// Spinner
	{ component: "Spinner", fixture: "default" },
];

for (const { component, fixture } of fixtures) {
	test(`${component} - ${fixture}`, async ({ page }) => {
		// Build the fixture URL using Cosmos URL structure
		const fixtureUrl = `/?fixture=${encodeURIComponent(
			JSON.stringify({
				path: `src/components/${component}.fixture.tsx`,
				name: fixture,
			}),
		)}`;

		// Navigate to the specific fixture in Cosmos
		await page.goto(fixtureUrl, { waitUntil: "networkidle" });

		// Wait for the iframe element to be present and attached
		const iframeElement = page.locator("iframe");
		await iframeElement.waitFor({ state: "attached", timeout: 10000 });

		// Give time for any animations or async rendering to complete
		await page.waitForTimeout(1000);

		// Take a screenshot of ONLY the iframe element (not the Cosmos UI)
		// This ensures snapshots only break when the component changes, not when the fixture list changes
		await expect(iframeElement).toHaveScreenshot(`${component}-${fixture}.png`, {
			animations: "disabled",
			maxDiffPixels: 100, // Allow minor anti-aliasing differences
		});
	});
}
