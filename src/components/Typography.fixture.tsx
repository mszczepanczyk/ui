import { Fragment } from "react";
import { Heading } from "./Heading";

const levels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export default {
	default: (
		<div>
			{levels.map((level) => (
				<Fragment key={level}>
					<Heading as={level}>Heading {level}</Heading>
				</Fragment>
			))}
		</div>
	),
};
