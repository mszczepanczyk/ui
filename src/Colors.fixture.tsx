import { css } from "styled-system/css";
import { type Token, token } from "styled-system/tokens";
import Docs from "./Colors.docs.mdx";
import { Table } from "./components/Table";
import { colorScaleNames, colorScales, semanticColors } from "./panda-preset";
import { hexToHue, hexToSaturation } from "./util/color";

const NEUTRAL_SATURATION_THRESHOLD = 0.08;
const MUTED_SATURATION_THRESHOLD = 0.35;

function colorSortKey(name: string) {
	const hex = colorScales[name as keyof typeof colorScales]["9"].value._light;
	const saturation = hexToSaturation(hex);
	const tier =
		saturation < NEUTRAL_SATURATION_THRESHOLD
			? 2
			: saturation < MUTED_SATURATION_THRESHOLD
				? 1
				: 0;
	return { tier, hue: hexToHue(hex) };
}

const colorNames = [...colorScaleNames].sort((a, b) => {
	const keyA = colorSortKey(a);
	const keyB = colorSortKey(b);
	if (keyA.tier !== keyB.tier) return keyA.tier - keyB.tier;
	return keyA.tier === 2 ? a.localeCompare(b) : keyA.hue - keyB.hue;
});

const steps = Array.from({ length: 12 }, (_, index) => index + 1);

type SemanticColorToken = { path: string };

type SemanticSection = { label: string; tokens: SemanticColorToken[] };

type SemanticGroup = {
	label: string;
	leaves: SemanticColorToken[];
	sections: SemanticSection[];
};

function isColorLeaf(node: unknown): node is { value: unknown } {
	return typeof node === "object" && node !== null && "value" in node;
}

function collectColorLeaves(
	node: unknown,
	path: string,
	out: SemanticColorToken[],
) {
	if (isColorLeaf(node)) {
		out.push({ path });
		return;
	}

	for (const [key, child] of Object.entries(node as Record<string, unknown>)) {
		collectColorLeaves(child, key === "DEFAULT" ? path : `${path}.${key}`, out);
	}
}

function buildSemanticGroup(label: string, node: unknown): SemanticGroup {
	if (isColorLeaf(node)) {
		return { label, leaves: [{ path: label }], sections: [] };
	}

	const leaves: SemanticColorToken[] = [];
	const sections: SemanticSection[] = [];

	for (const [key, child] of Object.entries(node as Record<string, unknown>)) {
		if (isColorLeaf(child)) {
			leaves.push({ path: `${label}.${key}` });
			continue;
		}

		const tokens: SemanticColorToken[] = [];
		collectColorLeaves(child, `${label}.${key}`, tokens);
		sections.push({ label: `${label}.${key}`, tokens });
	}

	return { label, leaves, sections };
}

const semanticGroups = Object.entries(semanticColors).map(([label, node]) =>
	buildSemanticGroup(label, node),
);

function ColorSwatch({ path }: SemanticColorToken) {
	return (
		<div
			className={css({ display: "flex", flexDirection: "column", gap: "1" })}
		>
			<div
				className={css({
					width: "16",
					height: "16",
					borderRadius: "sm",
					border: "1px solid",
					borderColor: "border.default",
					backgroundImage:
						"linear-gradient(45deg, rgba(128, 128, 128, 0.25) 25%, transparent 25%), linear-gradient(-45deg, rgba(128, 128, 128, 0.25) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(128, 128, 128, 0.25) 75%), linear-gradient(-45deg, transparent 75%, rgba(128, 128, 128, 0.25) 75%)",
					backgroundSize: "8px 8px",
					backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
				})}
				title={path}
			>
				<div
					className={css({ width: "full", height: "full", borderRadius: "sm" })}
					style={{ backgroundColor: token.var(`colors.${path}` as Token) }}
				/>
			</div>
			<span
				className={css({
					fontFamily: "mono",
					fontSize: "xs",
					color: "fg.muted",
				})}
			>
				{path}
			</span>
		</div>
	);
}

function ColorSwatchRow({ tokens }: { tokens: SemanticColorToken[] }) {
	return (
		<div className={css({ display: "flex", flexWrap: "wrap", gap: "4" })}>
			{tokens.map((t) => (
				<ColorSwatch key={t.path} {...t} />
			))}
		</div>
	);
}

export default {
	overview: <Docs />,
	scales: (
		<Table.Root style={{ maxWidth: 900 }}>
			<Table.Header>
				<Table.Row>
					<Table.Head>Color</Table.Head>
					{steps.map((step) => (
						<Table.Head key={step}>{step}</Table.Head>
					))}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{colorNames.map((name) => (
					<Table.Row key={name}>
						<Table.Cell className={css({ fontFamily: "mono" })}>
							{name}
						</Table.Cell>
						{steps.map((step) => (
							<Table.Cell
								key={step}
								className={css({ width: "12", height: "12", padding: "0" })}
								title={`${name}.${step}`}
								style={{
									backgroundColor: token.var(`colors.${name}.${step}` as Token),
								}}
							/>
						))}
					</Table.Row>
				))}
			</Table.Body>
		</Table.Root>
	),
	semantic: (
		<div style={{ maxWidth: 900 }}>
			{semanticGroups.map(({ label, leaves, sections }) => (
				<div key={label} className={css({ marginBottom: "6" })}>
					<div
						className={css({
							fontFamily: "mono",
							fontSize: "sm",
							fontWeight: "medium",
							marginBottom: "2",
						})}
					>
						{label}
					</div>
					<ColorSwatchRow tokens={leaves} />
					{sections.map((sec) => (
						<div
							key={sec.label}
							className={css({
								marginTop: "3",
								paddingLeft: "4",
								borderLeft: "1px solid",
								borderColor: "border.subtle",
							})}
						>
							<div
								className={css({
									fontFamily: "mono",
									fontSize: "xs",
									fontWeight: "medium",
									color: "fg.subtle",
									marginBottom: "2",
								})}
							>
								{sec.label}
							</div>
							<ColorSwatchRow tokens={sec.tokens} />
						</div>
					))}
				</div>
			))}
		</div>
	),
};
