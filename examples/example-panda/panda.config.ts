import { defineConfig } from "@pandacss/dev";
import { pandaPreset } from "@mariusz.sh/ui/panda-preset";

export default defineConfig({
	// Use the library's preset
	presets: ["@pandacss/preset-base", "@pandacss/preset-panda", pandaPreset],

	// Enable JSX styled factory
	jsxFramework: "react",

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: "styled-system",
});
