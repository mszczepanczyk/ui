import { Button } from "./Button";
import { Navbar } from "./Navbar";

export default {
	default: (
		<Navbar.Root>
			<Navbar.Brand>Acme</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Links>
					<Navbar.Item href="/" data-current>
						Home
					</Navbar.Item>
					<Navbar.Item href="/">Products</Navbar.Item>
					<Navbar.Item href="/">About</Navbar.Item>
				</Navbar.Links>
			</Navbar.Content>
			<Navbar.Actions>
				<Button size="sm" variant="outline">
					Sign in
				</Button>
				<Button size="sm">Get started</Button>
			</Navbar.Actions>
		</Navbar.Root>
	),
	transparent: (
		<Navbar.Root variant="transparent">
			<Navbar.Brand>Acme</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Links>
					<Navbar.Item href="/">Docs</Navbar.Item>
					<Navbar.Item href="/">Blog</Navbar.Item>
				</Navbar.Links>
			</Navbar.Content>
		</Navbar.Root>
	),
	small: (
		<Navbar.Root size="sm">
			<Navbar.Brand>Acme</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Links>
					<Navbar.Item href="/">Home</Navbar.Item>
					<Navbar.Item href="/">Settings</Navbar.Item>
				</Navbar.Links>
			</Navbar.Content>
		</Navbar.Root>
	),
};
