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
					pathsToAliases: false,
					aliasesExclude: [/^styled-system/],
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
					entry: {
						index: resolve(__dirname, "src/index.ts"),
						"panda-preset": resolve(__dirname, "src/panda-preset.ts"),
					},
					formats: ["es"],
				},
				rollupOptions: {
					external: [
						"react",
						"react-dom",
						"react/jsx-runtime",
						/^styled-system\//,
					],
					output: {
						preserveModules: true,
						preserveModulesRoot: "src",
					},
				},
			},
		}),
	};
});
