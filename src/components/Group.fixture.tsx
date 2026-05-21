import { Button } from "./Button";
import { Group } from "./Group";

export default {
	horizontal: (
		<Group>
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</Group>
	),
	withGap: (
		<Group gap="4">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</Group>
	),
};
