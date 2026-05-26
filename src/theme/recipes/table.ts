import { defineSlotRecipe } from "@pandacss/dev";

export const table = defineSlotRecipe({
	className: "table",
	slots: ["root", "header", "body", "row", "head", "cell"],
	base: {
		root: {
			captionSide: "bottom",
			width: "full",
		},
		header: {
			display: "table-header-group",
		},
		body: {
			display: "table-row-group",
		},
		row: {
			display: "table-row",
		},
		head: {
			color: "fg.muted",
			fontWeight: "semibold",
			h: "10",
			paddingX: "3",
			textAlign: "start",
			verticalAlign: "middle",
		},
		cell: {
			color: "fg",
			h: "10",
			paddingX: "3",
			verticalAlign: "middle",
		},
	},
});
