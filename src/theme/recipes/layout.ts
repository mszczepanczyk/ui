import { defineSlotRecipe } from "@pandacss/dev";

export const layout = defineSlotRecipe({
	className: "layout",
	slots: ["root", "header", "body", "sidebar", "main", "footer"],
	base: {
		root: {
			bg: "bg.canvas",
			color: "fg.default",
			display: "flex",
			flexDirection: "column",
			minH: "100dvh",
			width: "full",
		},
		header: {
			flexShrink: "0",
			width: "full",
		},
		body: {
			display: "flex",
			flex: "1",
			flexDirection: "column",
			minH: "0",
			width: "full",
		},
		sidebar: {
			bg: "bg.muted",
			borderColor: "border.default",
			flexShrink: "0",
			overflowY: "auto",
			width: "64",
		},
		main: {
			flex: "1",
			minW: "0",
			overflowY: "auto",
			p: "6",
			width: "full",
		},
		footer: {
			borderColor: "border.default",
			borderTopWidth: "1px",
			flexShrink: "0",
			px: "6",
			py: "4",
			width: "full",
		},
	},
	defaultVariants: {
		sidebar: "none",
	},
	variants: {
		sidebar: {
			none: {
				sidebar: {
					display: "none",
				},
			},
			left: {
				body: {
					flexDirection: "row",
				},
				sidebar: {
					borderRightWidth: "1px",
					display: "block",
				},
			},
			right: {
				body: {
					flexDirection: "row",
				},
				sidebar: {
					borderLeftWidth: "1px",
					display: "block",
					order: "1",
				},
				main: {
					order: "0",
				},
			},
		},
	},
});
