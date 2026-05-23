export const globalCss = {
	extend: {
		"*": {
			"--global-color-border": "colors.border.default",
			"--global-color-placeholder": "colors.fg.subtle",
			"--global-color-selection": "colors.colorPalette.subtle.bg",
			"--global-color-focus-ring": "colors.focusRing",
		},
		html: {
			colorPalette: "slate",
		},
		body: {
			background: "bg.canvas",
			color: "fg.default",
		},
	},
};
