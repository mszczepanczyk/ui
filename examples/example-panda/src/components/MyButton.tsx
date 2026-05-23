import { Button } from "@mariusz.sh/ui";
import { type ComponentProps, forwardRef, useState } from "react";
import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

// 1. Define custom CSS variants
const myButtonStyles = cva({
	base: {
		borderWidth: "5px",
	},
	variants: {
		intent: {
			danger: {
				bg: "mycomplexcolor.500",
				color: "mycolor",
				borderColor: "mycomplexcolor.700",
				_hover: {
					bg: "mycomplexcolor.600",
					borderColor: "mycomplexcolor.800",
				},
				_active: {
					bg: "mycomplexcolor.700",
				},
			},
			success: {
				bg: "green.500",
				color: "white",
				borderColor: "green.700",
				_hover: {
					bg: "green.600",
				},
			},
		},
		rounded: {
			true: { borderRadius: "full" },
			false: { borderRadius: "l2" },
		},
	},
	defaultVariants: {
		intent: "danger",
		rounded: false,
	},
});

const StyledButton = styled(Button, myButtonStyles);

// 2. Add custom React logic
export type MyButtonProps = ComponentProps<typeof StyledButton> & {
	confirmMessage?: string;
};

export const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(
	({ confirmMessage, onClick, children, ...rest }, ref) => {
		const [confirmed, setConfirmed] = useState(false);

		const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			if (confirmMessage && !confirmed) {
				if (window.confirm(confirmMessage)) {
					setConfirmed(true);
					onClick?.(e);
				}
			} else {
				onClick?.(e);
			}
		};

		return (
			<StyledButton ref={ref} onClick={handleClick} {...rest}>
				{children}
			</StyledButton>
		);
	},
);

MyButton.displayName = "MyButton";
