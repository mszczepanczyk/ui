import { Fragment } from "react";
import { Code } from "./Code";
import { Heading } from "./Heading";
import { Kbd } from "./Kbd";
import { Link } from "./Link";
import { Text } from "./Text";

export default {
	headings: (
		<div>
			{(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map((level) => (
				<Fragment key={level}>
					<Heading as={level}>Heading {level}</Heading>
				</Fragment>
			))}
		</div>
	),
	text: <Text>The quick brown fox jumps over the lazy dog.</Text>,
	link: (
		<p>
			Check out the <Link href="/docs">documentation</Link> for more info.
		</p>
	),
	code: <Code>npm install @park-ui/react</Code>,
	kbd: (
		<p>
			Press <Kbd>Cmd</Kbd> + <Kbd>S</Kbd> to save.
		</p>
	),
};
