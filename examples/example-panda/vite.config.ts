import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// Map library's styled-system imports to this app's styled-system
			"styled-system": resolve(__dirname, "./styled-system"),
		},
	},
});
