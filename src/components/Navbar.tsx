"use client";

import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { createStyleContext } from "styled-system/jsx";
import { navbar } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(navbar);

export type NavbarRootProps = ComponentProps<typeof NavbarRoot>;
export const NavbarRoot = withProvider(ark.header, "root");

export type NavbarBrandProps = ComponentProps<typeof NavbarBrand>;
export const NavbarBrand = withContext(ark.div, "brand");

export type NavbarContentProps = ComponentProps<typeof NavbarContent>;
export const NavbarContent = withContext(ark.div, "content");

export type NavbarLinksProps = ComponentProps<typeof NavbarLinks>;
export const NavbarLinks = withContext(ark.nav, "links");

export type NavbarItemProps = ComponentProps<typeof NavbarItem>;
export const NavbarItem = withContext(ark.a, "item");

export type NavbarActionsProps = ComponentProps<typeof NavbarActions>;
export const NavbarActions = withContext(ark.div, "actions");

/** Composable navbar for app headers and navigation bars. */
export const Navbar = {
	Root: NavbarRoot,
	Brand: NavbarBrand,
	Content: NavbarContent,
	Links: NavbarLinks,
	Item: NavbarItem,
	Actions: NavbarActions,
};
