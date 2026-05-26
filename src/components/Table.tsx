"use client";

import { ark } from "@ark-ui/react/factory";
import { type ComponentProps, forwardRef } from "react";
import { css, cx } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { table } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(table);

export type TableRootProps = ComponentProps<typeof TableRoot>;
export const TableRoot = withProvider(ark.table, "root");

export type TableHeaderProps = ComponentProps<typeof TableHeader>;
export const TableHeader = withContext(ark.thead, "header");

export type TableBodyProps = ComponentProps<typeof TableBody>;
export const TableBody = withContext(ark.tbody, "body");

export type TableRowProps = ComponentProps<typeof TableRow>;
export const TableRow = withContext(ark.tr, "row");

export type TableHeadProps = ComponentProps<typeof TableHead>;
export const TableHead = withContext(ark.th, "head");

export type TableCellProps = ComponentProps<typeof TableCell>;
export const TableCell = withContext(ark.td, "cell");

export type SortableTableHeadProps = ComponentProps<typeof TableHead> & {
	selected?: boolean;
	order?: "asc" | "desc";
};

export const SortableTableHead = forwardRef<
	HTMLTableCellElement,
	SortableTableHeadProps
>(function SortableTableHead(
	{ selected, order, className, children, ...props },
	ref,
) {
	return (
		<TableHead
			ref={ref}
			className={cx(
				css({
					cursor: "pointer",
					_hover: { color: "fg" },
				}),
				className,
			)}
			tabIndex={0}
			{...props}
		>
			{children}
			<span className={css({ marginLeft: "1", opacity: 0.6 })}>
				{selected ? (order === "asc" ? "▲" : "▼") : "⇅"}
			</span>
		</TableHead>
	);
});

export const Table = {
	Root: TableRoot,
	Header: TableHeader,
	Body: TableBody,
	Row: TableRow,
	Head: TableHead,
	Cell: TableCell,
};
