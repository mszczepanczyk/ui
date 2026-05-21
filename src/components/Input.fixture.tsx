import { Input } from "./Input";

export default {
	default: <Input placeholder="Enter text..." />,
	sizes: (
		<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
			<Input size="xs" placeholder="XS Input" />
			<Input size="sm" placeholder="SM Input" />
			<Input size="md" placeholder="MD Input" />
			<Input size="lg" placeholder="LG Input" />
			<Input size="xl" placeholder="XL Input" />
		</div>
	),
	disabled: <Input disabled placeholder="Disabled input" />,
};
