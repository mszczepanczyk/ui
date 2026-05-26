import { Table } from "./Table";

export default {
	simple: (
		<Table.Root style={{ maxWidth: 600 }}>
			<Table.Header>
				<Table.Row>
					<Table.Head>Name</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Role</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Alice Johnson</Table.Cell>
					<Table.Cell>alice@example.com</Table.Cell>
					<Table.Cell>Developer</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Bob Smith</Table.Cell>
					<Table.Cell>bob@example.com</Table.Cell>
					<Table.Cell>Designer</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Carol Davis</Table.Cell>
					<Table.Cell>carol@example.com</Table.Cell>
					<Table.Cell>Manager</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
	withNumbers: (
		<Table.Root style={{ maxWidth: 400 }}>
			<Table.Header>
				<Table.Row>
					<Table.Head>#</Table.Head>
					<Table.Head>Item</Table.Head>
					<Table.Head>Qty</Table.Head>
					<Table.Head>Price</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>1</Table.Cell>
					<Table.Cell>Widget</Table.Cell>
					<Table.Cell>2</Table.Cell>
					<Table.Cell>$9.99</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>2</Table.Cell>
					<Table.Cell>Gadget</Table.Cell>
					<Table.Cell>1</Table.Cell>
					<Table.Cell>$24.99</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>3</Table.Cell>
					<Table.Cell>Doohickey</Table.Cell>
					<Table.Cell>3</Table.Cell>
					<Table.Cell>$4.99</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
	"selected-asc": (
		<Table.Root style={{ maxWidth: 600 }}>
			<Table.Header>
				<Table.Row>
					<Table.Head sortable sortOrder="asc">
						Name
					</Table.Head>
					<Table.Head sortable>
						Email
					</Table.Head>
					<Table.Head sortable>
						Role
					</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Alice Johnson</Table.Cell>
					<Table.Cell>alice@example.com</Table.Cell>
					<Table.Cell>Developer</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Bob Smith</Table.Cell>
					<Table.Cell>bob@example.com</Table.Cell>
					<Table.Cell>Designer</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
	"selected-desc": (
		<Table.Root style={{ maxWidth: 600 }}>
			<Table.Header>
				<Table.Row>
					<Table.Head sortable>
						Name
					</Table.Head>
					<Table.Head sortable sortOrder="desc">
						Email
					</Table.Head>
					<Table.Head sortable>
						Role
					</Table.Head>
				</Table.Row>
			</Table.Header>
		</Table.Root>
	),
};
