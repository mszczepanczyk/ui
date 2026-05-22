"use client";
import { ark } from "@ark-ui/react/factory";
import { createContext, mergeProps } from "@ark-ui/react/utils";
import { type ButtonHTMLAttributes, forwardRef, useMemo } from "react";
import { cx } from "styled-system/css";
import { type ButtonVariantProps, button } from "styled-system/recipes";
import { Group, type GroupProps } from "./Group";
import { Loader } from "./Loader";

interface ButtonLoadingProps {
	/**
	 * If `true`, the button will show a loading spinner.
	 * @default false
	 */
	loading?: boolean | undefined;
	/**
	 * The text to show while loading.
	 */
	loadingText?: React.ReactNode | undefined;
	/**
	 * The spinner to show while loading.
	 */
	spinner?: React.ReactNode | undefined;
	/**
	 * The placement of the spinner
	 * @default "start"
	 */
	spinnerPlacement?: "start" | "end" | undefined;
}

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		ButtonVariantProps,
		ButtonLoadingProps {
	/**
	 * If `true`, the button will be rendered as a child element.
	 * @default false
	 */
	asChild?: boolean | undefined;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(props, ref) {
		const propsContext = useButtonPropsContext();
		const buttonProps = useMemo(
			() => mergeProps<ButtonProps>(propsContext, props),
			[propsContext, props],
		);

		const {
			loading,
			loadingText,
			children,
			spinner,
			spinnerPlacement,
			asChild,
			className,
			...rest
		} = buttonProps;

		const [variantProps, htmlProps] = button.splitVariantProps(rest);
		const recipeClasses = button(variantProps);

		return (
			<ark.button
				type="button"
				ref={ref}
				asChild={asChild}
				className={cx(recipeClasses, className)}
				{...htmlProps}
				data-loading={loading ? "" : undefined}
				disabled={loading || htmlProps.disabled}
			>
				{loading && !asChild ? (
					<Loader
						spinner={spinner}
						text={loadingText}
						spinnerPlacement={spinnerPlacement}
					>
						{children}
					</Loader>
				) : (
					children
				)}
			</ark.button>
		);
	},
);

export interface ButtonGroupProps extends GroupProps, ButtonVariantProps {}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
	function ButtonGroup(props, ref) {
		const [variantProps, otherProps] = useMemo(
			() => button.splitVariantProps(props),
			[props],
		);
		return (
			<ButtonPropsProvider value={variantProps}>
				<Group ref={ref} {...otherProps} />
			</ButtonPropsProvider>
		);
	},
);

const [ButtonPropsProvider, useButtonPropsContext] =
	createContext<ButtonVariantProps>({
		name: "ButtonPropsContext",
		hookName: "useButtonPropsContext",
		providerName: "<PropsProvider />",
		strict: false,
	});
