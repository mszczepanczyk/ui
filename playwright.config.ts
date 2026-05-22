import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [["html", { outputFolder: "playwright-report" }], ["list"]],
	snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}{ext}",
	use: {
		baseURL: "http://localhost:5100",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
	webServer: [
		{
			command: "npm run cosmos",
			url: "http://localhost:5100",
			reuseExistingServer: !process.env.CI,
			timeout: 120000,
		},
		{
			command: "npm run dev -- --port 5102",
			cwd: "./examples/example-panda",
			url: "http://localhost:5102",
			reuseExistingServer: !process.env.CI,
			timeout: 120000,
		},
		{
			command: "npm run dev -- --port 5103",
			cwd: "./examples/example-generic",
			url: "http://localhost:5103",
			reuseExistingServer: !process.env.CI,
			timeout: 120000,
		},
		{
			command: "npm run dev -- --port 5104",
			cwd: "./examples/example-css",
			url: "http://localhost:5104",
			reuseExistingServer: !process.env.CI,
			timeout: 120000,
		},
	],
});
