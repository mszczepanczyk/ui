import { defineSlotRecipe } from "@pandacss/dev";

export const navbar = defineSlotRecipe({
	className: "navbar",
	slots: ["root", "brand", "content", "links", "item", "actions"],
	base: {
		root: {
			alignItems: "center",
			bg: "bg.default",
			borderBottomWidth: "1px",
			borderColor: "border.default",
			display: "flex",
			gap: "4",
			minH: "14",
			px: "6",
			width: "full",
		},
		brand: {
			alignItems: "center",
			color: "fg.default",
			display: "flex",
			flexShrink: "0",
			fontWeight: "semibold",
			gap: "2",
		},
		content: {
			alignItems: "center",
			display: "flex",
			flex: "1",
			gap: "4",
			minW: "0",
		},
		links: {
			alignItems: "center",
			display: "flex",
			flexWrap: "wrap",
			gap: "1",
		},
		item: {
			alignItems: "center",
			borderRadius: "l2",
			color: "fg.muted",
			cursor: "pointer",
			display: "inline-flex",
			fontWeight: "medium",
			gap: "1.5",
			outline: "0",
			px: "3",
			py: "2",
			textDecoration: "none",
			transition: "colors",
			transitionProperty: "background-color, color",
			whiteSpace: "nowrap",
			_hover: {
				bg: "bg.subtle",
				color: "fg.default",
			},
			"&[data-current], &[aria-current='page']": {
				bg: "accent.muted",
				color: "accent.text",
			},
			focusVisibleRing: "outside",
		},
		actions: {
			alignItems: "center",
			display: "flex",
			flexShrink: "0",
			gap: "2",
		},
	},
	defaultVariants: {
		size: "md",
		variant: "default",
	},
	variants: {
		variant: {
			default: {},
			transparent: {
				root: {
					bg: "transparent",
					borderBottomWidth: "0",
				},
			},
			ghost: {
				root: {
					bg: "transparent",
					borderBottomWidth: "0",
				},
				item: {
					_hover: {
						bg: "bg.muted",
					},
				},
			},
		},
		size: {
			sm: {
				root: {
					gap: "3",
					minH: "12",
					px: "4",
				},
				item: {
					px: "2.5",
					py: "1.5",
					textStyle: "sm",
				},
			},
			md: {},
			lg: {
				root: {
					gap: "5",
					minH: "16",
					px: "8",
				},
				item: {
					px: "4",
					py: "2.5",
				},
			},
		},
	},
});
