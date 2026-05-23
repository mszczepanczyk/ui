import { Link } from "./Link";

export default {
	underline: (
		<p>
			Read the <Link href="/docs">documentation</Link> to get started.
		</p>
	),
	plain: (
		<p>
			<Link href="/settings" variant="plain">
				Account settings
			</Link>
		</p>
	),
};
