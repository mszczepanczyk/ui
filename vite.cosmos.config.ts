import { resolve } from "node:path";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vite config specifically for Cosmos (no library mode)
export default defineConfig({
	plugins: [react(), mdx()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"styled-system": resolve(__dirname, "./styled-system"),
		},
	},
	root: __dirname,
	css: {
		devSourcemap: true,
	},
	build: {
		rollupOptions: {
			input: resolve(__dirname, "index.html"),
		},
	},
});
