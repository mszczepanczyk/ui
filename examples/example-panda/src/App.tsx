import {
	AbsoluteCenter,
	Button,
	ButtonGroup,
	Group,
	Input,
	Loader,
	Span,
	Spinner,
} from "@mariusz.sh/ui";
import { useState } from "react";
import { css } from "../styled-system/css";
import { Container, Stack, VStack } from "../styled-system/jsx";
import { MyButton } from "./components/MyButton";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [loading, setLoading] = useState(false);

	const handleLoadingToggle = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	};

	return (
		<Container maxW="1200px" py="12">
			<VStack gap="12" alignItems="stretch">
				{/* Header */}
				<Stack gap="4" textAlign="center">
					<h1
						className={css({
							fontSize: "4xl",
							fontWeight: "bold",
							color: "fg.default",
						})}
					>
						@mariusz.sh/ui Component Library
					</h1>
					<p
						className={css({
							fontSize: "lg",
							color: "fg.muted",
						})}
					>
						A showcase of all available components built with Park UI, Ark UI,
						and Panda CSS
					</p>
				</Stack>

				{/* Button Section */}
				<Stack
					gap="6"
					p="6"
					borderWidth="1px"
					borderColor="border"
					borderRadius="l2"
				>
					<h2
						className={css({
							fontSize: "2xl",
							fontWeight: "semibold",
							color: "fg.default",
						})}
					>
						Buttons
					</h2>
					<Stack gap="4">
						<Group>
							<Button variant="solid">Solid Button</Button>
							<Button variant="outline">Outline Button</Button>
							<Button variant="subtle">Subtle Button</Button>
							<Button variant="surface">Surface Button</Button>
						</Group>
						<Group>
							<Button size="xs">Extra Small</Button>
							<Button size="sm">Small</Button>
							<Button size="md">Medium</Button>
							<Button size="lg">Large</Button>
							<Button size="xl">Extra Large</Button>
						</Group>
						<ButtonGroup>
							<Button>First</Button>
							<Button>Second</Button>
							<Button>Third</Button>
						</ButtonGroup>
					</Stack>
				</Stack>

				{/* MyButton Section */}
				<Stack
					gap="6"
					p="6"
					borderWidth="1px"
					borderColor="border"
					borderRadius="l2"
				>
					<h2
						className={css({
							fontSize: "2xl",
							fontWeight: "semibold",
							color: "fg.default",
						})}
					>
						MyButton (Extended Button)
					</h2>
					<Stack gap="4">
						<Group>
							<MyButton variant="solid">Solid MyButton</MyButton>
							<MyButton variant="outline">Outline MyButton</MyButton>
							<MyButton variant="myvariant">My Custom Variant</MyButton>
						</Group>
						<Group>
							<MyButton variant="myvariant" size="sm">
								Small Custom
							</MyButton>
							<MyButton variant="myvariant" size="md">
								Medium Custom
							</MyButton>
							<MyButton variant="myvariant" size="lg">
								Large Custom
							</MyButton>
						</Group>
					</Stack>
				</Stack>

				{/* Input Section */}
				<Stack
					gap="6"
					p="6"
					borderWidth="1px"
					borderColor="border"
					borderRadius="l2"
				>
					<h2
						className={css({
							fontSize: "2xl",
							fontWeight: "semibold",
							color: "fg.default",
						})}
					>
						Input
					</h2>
					<Stack gap="4" maxW="md">
						<Input
							placeholder="Enter text..."
							value={inputValue}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setInputValue(e.target.value)
							}
						/>
						<Input size="xs" placeholder="Extra Small Input" />
						<Input size="sm" placeholder="Small Input" />
						<Input size="md" placeholder="Medium Input" />
						<Input size="lg" placeholder="Large Input" />
						<Input size="xl" placeholder="Extra Large Input" />
						{inputValue && (
							<p
								className={css({
									fontSize: "sm",
									color: "fg.muted",
								})}
							>
								You typed: {inputValue}
							</p>
						)}
					</Stack>
				</Stack>

				{/* Spinner & Loader Section */}
				<Stack
					gap="6"
					p="6"
					borderWidth="1px"
					borderColor="border"
					borderRadius="l2"
				>
					<h2
						className={css({
							fontSize: "2xl",
							fontWeight: "semibold",
							color: "fg.default",
						})}
					>
						Loading States
					</h2>
					<Stack gap="6">
						<Stack gap="4">
							<h3
								className={css({
									fontSize: "lg",
									fontWeight: "medium",
									color: "fg.default",
								})}
							>
								Spinner
							</h3>
							<Group alignItems="center">
								<Spinner size="xs" />
								<Spinner size="sm" />
								<Spinner size="md" />
								<Spinner size="lg" />
								<Spinner size="xl" />
							</Group>
						</Stack>
						<Stack gap="4">
							<h3
								className={css({
									fontSize: "lg",
									fontWeight: "medium",
									color: "fg.default",
								})}
							>
								Loader
							</h3>
							<div>
								<Button onClick={handleLoadingToggle}>Toggle Loading</Button>
								<Loader visible={loading}>
									<div
										className={css({
											p: "8",
											bg: "gray.2",
											borderRadius: "l2",
											mt: "4",
										})}
									>
										<p className={css({ color: "fg.default" })}>
											This content is hidden when loading
										</p>
									</div>
								</Loader>
							</div>
						</Stack>
					</Stack>
				</Stack>

				{/* Layout Components */}
				<Stack
					gap="6"
					p="6"
					borderWidth="1px"
					borderColor="border"
					borderRadius="l2"
				>
					<h2
						className={css({
							fontSize: "2xl",
							fontWeight: "semibold",
							color: "fg.default",
						})}
					>
						Layout Components
					</h2>
					<Stack gap="6">
						<Stack gap="4">
							<h3
								className={css({
									fontSize: "lg",
									fontWeight: "medium",
									color: "fg.default",
								})}
							>
								Group
							</h3>
							<Group>
								<Span>Item 1</Span>
								<Span>Item 2</Span>
								<Span>Item 3</Span>
							</Group>
						</Stack>

						<Stack gap="4">
							<h3
								className={css({
									fontSize: "lg",
									fontWeight: "medium",
									color: "fg.default",
								})}
							>
								Span
							</h3>
							<Group>
								<Span color="red">Red Span</Span>
								<Span color="green">Green Span</Span>
								<Span color="indigo">Indigo Span</Span>
							</Group>
						</Stack>

						<Stack gap="4">
							<h3
								className={css({
									fontSize: "lg",
									fontWeight: "medium",
									color: "fg.default",
								})}
							>
								AbsoluteCenter
							</h3>
							<div
								className={css({
									position: "relative",
									h: "32",
									bg: "gray.2",
									borderRadius: "l2",
								})}
							>
								<AbsoluteCenter>
									<Span>Centered Content</Span>
								</AbsoluteCenter>
							</div>
						</Stack>
					</Stack>
				</Stack>
			</VStack>
		</Container>
	);
}

export default App;
