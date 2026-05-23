"use client";

import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { createStyleContext } from "styled-system/jsx";
import { card } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(card);

export type CardRootProps = ComponentProps<typeof CardRoot>;
export const CardRoot = withProvider(ark.div, "root");

export type CardHeaderProps = ComponentProps<typeof CardHeader>;
export const CardHeader = withContext(ark.div, "header");

export type CardBodyProps = ComponentProps<typeof CardBody>;
export const CardBody = withContext(ark.div, "body");

export type CardFooterProps = ComponentProps<typeof CardFooter>;
export const CardFooter = withContext(ark.div, "footer");

export type CardTitleProps = ComponentProps<typeof CardTitle>;
export const CardTitle = withContext(ark.h3, "title");

export type CardDescriptionProps = ComponentProps<typeof CardDescription>;
export const CardDescription = withContext(ark.div, "description");

/** Composable card with header, body, and footer slots. */
export const Card = {
	Root: CardRoot,
	Header: CardHeader,
	Body: CardBody,
	Footer: CardFooter,
	Title: CardTitle,
	Description: CardDescription,
};
