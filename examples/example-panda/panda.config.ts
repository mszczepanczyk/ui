import { pandaPreset } from "@mariusz.sh/ui/panda-preset";
import { defineConfig } from "@pandacss/dev";

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

	// Extend theme with custom recipes
	theme: {
		extend: {
			tokens: {
				colors: {
					mycolor: { value: "#3b82f6" },
					mycomplexcolor: {
						50: { value: "#fef2f2" },
						100: { value: "#fee2e2" },
						200: { value: "#fecaca" },
						300: { value: "#fca5a5" },
						400: { value: "#f87171" },
						500: { value: "#ef4444" },
						600: { value: "#dc2626" },
						700: { value: "#b91c1c" },
						800: { value: "#991b1b" },
						900: { value: "#7f1d1d" },
						950: { value: "#450a0a" },
					},
				},
			},
		},
	},
});
