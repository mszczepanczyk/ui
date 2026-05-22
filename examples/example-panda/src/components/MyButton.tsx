import { Button } from "@mariusz.sh/ui";
import { type ComponentProps, forwardRef } from "react";
import { styled } from "../../styled-system/jsx";
import { myButton } from "../../styled-system/recipes";

// Create a styled button using the custom recipe
const StyledMyButton = styled(Button, myButton);

export type MyButtonProps = ComponentProps<typeof StyledMyButton> & {
	myprop?: boolean;
};

export const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(
	(props, ref) => {
		const { myprop, ...rest } = props;
		return <StyledMyButton ref={ref} {...rest} />;
	},
);

MyButton.displayName = "MyButton";
