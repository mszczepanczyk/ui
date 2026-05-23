import { Layout } from "./Layout";
import { Navbar } from "./Navbar";

export default {
	default: (
		<Layout.Root>
			<Layout.Header>
				<Navbar.Root>
					<Navbar.Brand>Acme</Navbar.Brand>
					<Navbar.Content>
						<Navbar.Links>
							<Navbar.Item href="/" data-current>
								Dashboard
							</Navbar.Item>
							<Navbar.Item href="/">Settings</Navbar.Item>
						</Navbar.Links>
					</Navbar.Content>
				</Navbar.Root>
			</Layout.Header>
			<Layout.Body>
				<Layout.Main>
					<h2 style={{ margin: 0 }}>Main content</h2>
					<p>Page content goes here.</p>
				</Layout.Main>
			</Layout.Body>
			<Layout.Footer>© Acme</Layout.Footer>
		</Layout.Root>
	),
	withSidebar: (
		<Layout.Root sidebar="left">
			<Layout.Header>
				<Navbar.Root variant="ghost">
					<Navbar.Brand>Acme</Navbar.Brand>
				</Navbar.Root>
			</Layout.Header>
			<Layout.Body>
				<Layout.Sidebar>
					<nav
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 4,
							padding: 16,
						}}
					>
						<a href="/">Overview</a>
						<a href="/">Projects</a>
						<a href="/">Team</a>
					</nav>
				</Layout.Sidebar>
				<Layout.Main>
					<h2 style={{ margin: 0 }}>Dashboard</h2>
					<p>Content beside the sidebar.</p>
				</Layout.Main>
			</Layout.Body>
		</Layout.Root>
	),
};
