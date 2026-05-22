import { Button } from "@mariusz.sh/ui";
import { type ComponentProps, forwardRef } from "react";
import { styled } from "../../styled-system/jsx";
import { myButton } from "../../styled-system/recipes";

// Create a styled button using the custom recipe
const StyledMyButton = styled(Button, myButton);

export type MyButtonProps = ComponentProps<typeof StyledMyButton>;

export const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(
	(props, ref) => {
		return <StyledMyButton ref={ref} {...props} />;
	},
);

MyButton.displayName = "MyButton";
