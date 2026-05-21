import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
	const isBuild = command === "build";

	return {
		plugins: [
			react(),
			// Only generate types during build
			isBuild &&
				dts({
					include: ["src"],
					exclude: ["src/**/*.fixture.tsx", "src/**/*.test.tsx"],
				}),
		].filter(Boolean),
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
				"styled-system": resolve(__dirname, "./styled-system"),
			},
		},
		// Only apply library build config when building
		...(isBuild && {
			build: {
				lib: {
					entry: resolve(__dirname, "src/index.ts"),
					formats: ["es"],
					fileName: "index",
				},
				rollupOptions: {
					external: ["react", "react-dom", "react/jsx-runtime"],
					output: {
						preserveModules: true,
						preserveModulesRoot: "src",
					},
				},
			},
		}),
	};
});
