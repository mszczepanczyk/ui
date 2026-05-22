import { expect, test } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Visual regression tests for example pages.
 *
 * This test suite takes full-page screenshots of each example project.
 * Tests will fail if the visual appearance changes from the baseline snapshots.
 *
 * Usage:
 * - npm run test:visual         → Run tests (fails on visual changes)
 * - npm run test:visual:update  → Update baseline snapshots
 * - npm run test:visual:report  → Open HTML diff report
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const examples = [
	{ name: "example-panda", port: 5102 },
	{ name: "example-generic", port: 5103 },
	{ name: "example-css", port: 5104 },
];

for (const { name, port } of examples) {
	test(`${name}`, async ({ page }) => {
		await page.goto(`http://localhost:${port}`, { waitUntil: "networkidle" });

		// Inject Liberation fonts for cross-platform consistency
		await page.addStyleTag({
			path: path.resolve(__dirname, "fonts/fonts.css"),
		});

		// Wait for fonts to load
		await page.evaluate(() => document.fonts.ready);

		// Give time for any animations or async rendering to complete
		await page.waitForTimeout(1000);

		// Take a full-page screenshot
		await expect(page).toHaveScreenshot(`${name}.png`, {
			fullPage: true,
			animations: "disabled",
			maxDiffPixelRatio: 0.01,
		});
	});
}
