import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// Map styled-system to the installed library's styled-system
			"styled-system": resolve(__dirname, "./node_modules/@mariusz.sh/ui/styled-system"),
		},
	},
});
