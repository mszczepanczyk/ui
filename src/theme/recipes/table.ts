import { defineSlotRecipe } from "@pandacss/dev";

export const table = defineSlotRecipe({
	className: "table",
	slots: ["root", "header", "body", "row", "head", "cell"],
	base: {
		root: {
			borderCollapse: "collapse",
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
			borderBottomWidth: "2px",
			borderBottomStyle: "solid",
			borderColor: "border.emphasized",
			color: "fg.muted",
			fontWeight: "medium",
			px: "3",
			py: "2",
			textAlign: "start",
			textStyle: "sm",
			userSelect: "none",
			verticalAlign: "middle",
			whiteSpace: "nowrap",
		},
		cell: {
			borderBottomWidth: "1px",
			borderBottomStyle: "solid",
			borderColor: "border.subtle",
			color: "fg",
			px: "3",
			py: "2",
			verticalAlign: "middle",
		},
	},
});
