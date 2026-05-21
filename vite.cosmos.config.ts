import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vite config specifically for Cosmos (no library mode)
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"styled-system": resolve(__dirname, "./styled-system"),
		},
	},
	root: __dirname,
});
