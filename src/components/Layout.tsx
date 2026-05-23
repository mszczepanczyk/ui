"use client";

import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { createStyleContext } from "styled-system/jsx";
import { layout } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(layout);

export type LayoutRootProps = ComponentProps<typeof LayoutRoot>;
export const LayoutRoot = withProvider(ark.div, "root");

export type LayoutHeaderProps = ComponentProps<typeof LayoutHeader>;
export const LayoutHeader = withContext(ark.header, "header");

export type LayoutBodyProps = ComponentProps<typeof LayoutBody>;
export const LayoutBody = withContext(ark.div, "body");

export type LayoutSidebarProps = ComponentProps<typeof LayoutSidebar>;
export const LayoutSidebar = withContext(ark.aside, "sidebar");

export type LayoutMainProps = ComponentProps<typeof LayoutMain>;
export const LayoutMain = withContext(ark.main, "main");

export type LayoutFooterProps = ComponentProps<typeof LayoutFooter>;
export const LayoutFooter = withContext(ark.footer, "footer");

/** Composable page shell with optional sidebar. */
export const Layout = {
	Root: LayoutRoot,
	Header: LayoutHeader,
	Body: LayoutBody,
	Sidebar: LayoutSidebar,
	Main: LayoutMain,
	Footer: LayoutFooter,
};
