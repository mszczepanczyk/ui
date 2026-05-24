import { Button } from "./Button";

export default {
	solid: <Button variant="solid">Solid Button</Button>,
	outline: <Button variant="outline">Outline Button</Button>,
	subtle: <Button variant="subtle">Subtle Button</Button>,
	plain: <Button variant="plain">Plain Button</Button>,
	sizes: (
		<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
			<Button size="xs">XS</Button>
			<Button size="sm">SM</Button>
			<Button size="md">MD</Button>
			<Button size="lg">LG</Button>
			<Button size="xl">XL</Button>
		</div>
	),
	loading: <Button loading>Loading...</Button>,
	disabled: <Button disabled>Disabled</Button>,
	primary: <Button variant="primary">Primary</Button>,
	secondary: <Button variant="secondary">Secondary</Button>,
	success: <Button variant="success">Success</Button>,
	danger: <Button variant="danger">Danger</Button>,
	warning: <Button variant="warning">Warning</Button>,
	info: <Button variant="info">Info</Button>,
};
