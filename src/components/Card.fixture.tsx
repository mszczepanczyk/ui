import { Button } from "./Button";
import { Card } from "./Card";

export default {
	outline: (
		<Card.Root variant="outline" style={{ maxWidth: 360 }}>
			<Card.Header>
				<Card.Title>Project overview</Card.Title>
				<Card.Description>
					Track progress and collaborate with your team.
				</Card.Description>
			</Card.Header>
			<Card.Body>
				<p style={{ margin: 0 }}>Card body content goes here.</p>
			</Card.Body>
			<Card.Footer>
				<Button size="sm" variant="outline">
					Cancel
				</Button>
				<Button size="sm">Continue</Button>
			</Card.Footer>
		</Card.Root>
	),
	elevated: (
		<Card.Root variant="elevated" style={{ maxWidth: 360 }}>
			<Card.Header>
				<Card.Title>Elevated card</Card.Title>
				<Card.Description>Uses the elevated surface variant.</Card.Description>
			</Card.Header>
		</Card.Root>
	),
	subtle: (
		<Card.Root variant="subtle" style={{ maxWidth: 360 }}>
			<Card.Header>
				<Card.Title>Subtle card</Card.Title>
			</Card.Header>
		</Card.Root>
	),
};
