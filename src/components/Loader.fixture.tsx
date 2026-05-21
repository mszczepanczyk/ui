import { Button } from "./Button";
import { Loader } from "./Loader";

export default {
	default: (
		<Button>
			<Loader>Submit</Loader>
		</Button>
	),
	withText: (
		<Button>
			<Loader text="Loading...">Submit</Loader>
		</Button>
	),
	spinnerEnd: (
		<Button>
			<Loader text="Saving..." spinnerPlacement="end">
				Submit
			</Loader>
		</Button>
	),
	hidden: (
		<Button>
			<Loader visible={false}>Submit</Loader>
		</Button>
	),
};
