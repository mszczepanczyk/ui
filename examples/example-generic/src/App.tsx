import { useState } from "react";
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

function App() {
	const [inputValue, setInputValue] = useState("");
	const [loading, setLoading] = useState(false);

	const handleLoadingToggle = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	};

	return (
		<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}>
			<div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
				{/* Header */}
				<div style={{ textAlign: "center" }}>
					<h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
						@mariusz.sh/ui Component Library
					</h1>
					<p style={{ fontSize: "1.125rem", color: "#666" }}>
						A showcase of all available components - generic CSS example
					</p>
				</div>

				{/* Button Section */}
				<div
					style={{
						padding: "1.5rem",
						border: "1px solid #e0e0e0",
						borderRadius: "8px",
					}}
				>
					<h2
						style={{
							fontSize: "1.5rem",
							fontWeight: "600",
							marginBottom: "1.5rem",
						}}
					>
						Buttons
					</h2>
					<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
					</div>
				</div>

				{/* Input Section */}
				<div
					style={{
						padding: "1.5rem",
						border: "1px solid #e0e0e0",
						borderRadius: "8px",
					}}
				>
					<h2
						style={{
							fontSize: "1.5rem",
							fontWeight: "600",
							marginBottom: "1.5rem",
						}}
					>
						Input
					</h2>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
							maxWidth: "28rem",
						}}
					>
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
							<p style={{ fontSize: "0.875rem", color: "#666" }}>
								You typed: {inputValue}
							</p>
						)}
					</div>
				</div>

				{/* Spinner & Loader Section */}
				<div
					style={{
						padding: "1.5rem",
						border: "1px solid #e0e0e0",
						borderRadius: "8px",
					}}
				>
					<h2
						style={{
							fontSize: "1.5rem",
							fontWeight: "600",
							marginBottom: "1.5rem",
						}}
					>
						Loading States
					</h2>
					<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
						<div>
							<h3 style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "1rem" }}>
								Spinner
							</h3>
							<Group>
								<Spinner size="xs" />
								<Spinner size="sm" />
								<Spinner size="md" />
								<Spinner size="lg" />
								<Spinner size="xl" />
							</Group>
						</div>
						<div>
							<h3 style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "1rem" }}>
								Loader
							</h3>
							<div>
								<Button onClick={handleLoadingToggle}>Toggle Loading</Button>
								<Loader visible={loading}>
									<div
										style={{
											padding: "2rem",
											background: "#f5f5f5",
											borderRadius: "8px",
											marginTop: "1rem",
										}}
									>
										<p>This content is hidden when loading</p>
									</div>
								</Loader>
							</div>
						</div>
					</div>
				</div>

				{/* Layout Components */}
				<div
					style={{
						padding: "1.5rem",
						border: "1px solid #e0e0e0",
						borderRadius: "8px",
					}}
				>
					<h2
						style={{
							fontSize: "1.5rem",
							fontWeight: "600",
							marginBottom: "1.5rem",
						}}
					>
						Layout Components
					</h2>
					<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
						<div>
							<h3 style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "1rem" }}>
								Group
							</h3>
							<Group>
								<Span>Item 1</Span>
								<Span>Item 2</Span>
								<Span>Item 3</Span>
							</Group>
						</div>

						<div>
							<h3 style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "1rem" }}>
								Span
							</h3>
							<Group>
								<Span color="red">Red Span</Span>
								<Span color="green">Green Span</Span>
								<Span color="indigo">Indigo Span</Span>
							</Group>
						</div>

						<div>
							<h3 style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "1rem" }}>
								AbsoluteCenter
							</h3>
							<div
								style={{
									position: "relative",
									height: "8rem",
									background: "#f5f5f5",
									borderRadius: "8px",
								}}
							>
								<AbsoluteCenter>
									<Span>Centered Content</Span>
								</AbsoluteCenter>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
