import { MDXProvider } from "@mdx-js/react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useSelect, useValue } from "react-cosmos/client";
import { css } from "styled-system/css";
import { colorScaleNames } from "./panda-preset";
import {
	ROLE_DEFAULT_SCALE,
	ROLE_LABELS,
	ROLES,
	type Role,
} from "./theme/color-scheme";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";

import "./index.css";

// TODO

// const _H1 = styl_H1("h1");
// const _H2 = styled("h2");
// const _H3 = styled("h3");
// const _H4 = styled("h4");
// const _H5 = styled("h5");
// const _H6 = styled("h6");
// const _P = styled("p");
// const _Ul = styled("ul");
// const _Ol = styled("ol");
// const _Li = styled("li");
// const _A = styled("a");
// const _Blockquote = styled("blockquote");
// const _Code = styled("code");
// const _Pre = styled("pre");

// const _components = {
// 	h1: (props: ComponentProps<typeof H1>) => (
// 		<H1 fontSize="3xl" fontWeight="bold" mb="4" mt="6" {...props} />
// 	),
// 	h2: (props: ComponentProps<typeof H2>) => (
// 		<H2 fontSize="2xl" fontWeight="bold" mb="3" mt="5" {...props} />
// 	),
// 	h3: (props: ComponentProps<typeof H3>) => (
// 		<H3 fontSize="xl" fontWeight="semibold" mb="2" mt="4" {...props} />
// 	),
// 	h4: (props: ComponentProps<typeof H4>) => (
// 		<H4 fontSize="lg" fontWeight="semibold" mb="2" mt="3" {...props} />
// 	),
// 	h5: (props: ComponentProps<typeof H5>) => (
// 		<H5 fontSize="md" fontWeight="semibold" mb="1" mt="2" {...props} />
// 	),
// 	h6: (props: ComponentProps<typeof H6>) => (
// 		<H6 fontSize="sm" fontWeight="semibold" mb="1" mt="2" {...props} />
// 	),
// 	p: (props: ComponentProps<typeof P>) => (
// 		<P mb="4" lineHeight="relaxed" {...props} />
// 	),
// 	ul: (props: ComponentProps<typeof Ul>) => (
// 		<Ul listStyleType="disc" pl="6" mb="4" {...props} />
// 	),
// 	ol: (props: ComponentProps<typeof Ol>) => (
// 		<Ol listStyleType="decimal" pl="6" mb="4" {...props} />
// 	),
// 	li: (props: ComponentProps<typeof Li>) => <Li mb="1" {...props} />,
// 	a: (props: ComponentProps<typeof A>) => (
// 		<A color="indigo.500" textDecoration="underline" {...props} />
// 	),
// 	blockquote: (props: ComponentProps<typeof Blockquote>) => (
// 		<Blockquote
// 			borderLeftWidth="4px"
// 			borderColor="gray.300"
// 			pl="4"
// 			fontStyle="italic"
// 			my="4"
// 			{...props}
// 		/>
// 	),
// 	code: (props: ComponentProps<typeof Code>) => (
// 		<Code
// 			fontFamily="mono"
// 			bg="gray.100"
// 			px="1"
// 			py="0.5"
// 			borderRadius="sm"
// 			fontSize="sm"
// 			{...props}
// 		/>
// 	),
// 	pre: (props: ComponentProps<typeof Pre>) => (
// 		<Pre
// 			fontFamily="mono"
// 			bg="gray.100"
// 			p="4"
// 			borderRadius="md"
// 			overflowX="auto"
// 			mb="4"
// 			{...props}
// 		/>
// 	),
// };

const DARK_MODE_STORAGE_KEY = "cosmos-dark-mode";
const ACCENT_COLOR_STORAGE_KEY = "cosmos-accent-color";

function getStoredDarkMode(): boolean {
	return window.localStorage.getItem(DARK_MODE_STORAGE_KEY) === "true";
}

function getStoredScale(storageKey: string, fallback: string): string {
	const stored = window.localStorage.getItem(storageKey);
	return colorScaleNames.find((name) => name === stored) ?? fallback;
}

// One picker per semantic role, each independently choosing which color scale
// backs it (see theme/color-scheme.ts for how a scale becomes actual CSS vars,
// and theme/ThemeProvider.tsx for the component that applies them below).
//
// `defaultValue` is kept fixed (the library's real default) rather than read
// from storage, so Cosmos's own "Reset to default values" button restores the
// true default instead of getting stuck on whatever was last persisted. The
// persisted value, if any, is instead applied once on mount via `setScale`.
function useRolePicker(role: Role): string {
	const storageKey = `cosmos-role-${role}`;
	const defaultScale = ROLE_DEFAULT_SCALE[role];

	const [scale, setScale] = useSelect(ROLE_LABELS[role], {
		options: colorScaleNames,
		defaultValue: defaultScale,
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: only ever meant to run once, on mount
	useEffect(() => {
		const stored = getStoredScale(storageKey, defaultScale);
		if (stored !== defaultScale) setScale(stored);
	}, []);

	useEffect(() => {
		window.localStorage.setItem(storageKey, scale);
	}, [scale, storageKey]);

	return scale;
}

export default function Decorator({ children }: { children: ReactNode }) {
	const [isDark, setIsDark] = useValue("Dark mode", { defaultValue: false });
	const [accentColor, setAccentColor] = useSelect("Accent color", {
		options: colorScaleNames,
		defaultValue: "indigo",
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: only ever meant to run once, on mount
	useEffect(() => {
		const storedDarkMode = getStoredDarkMode();
		if (storedDarkMode) setIsDark(storedDarkMode);
		const storedAccentColor = getStoredScale(
			ACCENT_COLOR_STORAGE_KEY,
			"indigo",
		);
		if (storedAccentColor !== "indigo") setAccentColor(storedAccentColor);
	}, []);

	// Hooks must be called unconditionally in the same order every render, so
	// each role gets its own explicit call rather than looping over ROLES.
	const fg = useRolePicker("fg");
	const bg = useRolePicker("bg");
	const border = useRolePicker("border");
	const success = useRolePicker("success");
	const warning = useRolePicker("warning");
	const error = useRolePicker("error");
	const info = useRolePicker("info");
	const primary = useRolePicker("primary");
	const secondary = useRolePicker("secondary");
	const highlight = useRolePicker("highlight");
	const focusRing = useRolePicker("focusRing");
	const overlay = useRolePicker("overlay");
	const roleScales: Record<Role, string> = {
		fg,
		bg,
		border,
		success,
		warning,
		error,
		info,
		primary,
		secondary,
		highlight,
		focusRing,
		overlay,
	};

	useEffect(() => {
		window.localStorage.setItem(DARK_MODE_STORAGE_KEY, String(isDark));
	}, [isDark]);

	useEffect(() => {
		window.localStorage.setItem(ACCENT_COLOR_STORAGE_KEY, accentColor);
	}, [accentColor]);

	return (
		<MDXProvider>
			<ThemeProvider
				defaultDarkMode={isDark}
				defaultAccentColor={accentColor}
				defaultRoles={roleScales}
				className={css({
					minH: "100vh",
					background: "bg.canvas",
					color: "fg.default",
				})}
			>
				<SyncCosmosControlsIntoTheme
					isDark={isDark}
					accentColor={accentColor}
					roleScales={roleScales}
				/>
				{children}
			</ThemeProvider>
		</MDXProvider>
	);
}

// ThemeProvider owns its state internally (as it must for real consumers), so
// Cosmos's own controls - the actual source of truth for the preview - are
// pushed in via `useTheme()`'s setters rather than read back out of it.
function SyncCosmosControlsIntoTheme({
	isDark,
	accentColor,
	roleScales,
}: {
	isDark: boolean;
	accentColor: string;
	roleScales: Record<Role, string>;
}) {
	const { setDarkMode, setAccentColor, setRoleScale } = useTheme();

	useEffect(() => {
		setDarkMode(isDark);
	}, [isDark, setDarkMode]);

	useEffect(() => {
		setAccentColor(accentColor);
	}, [accentColor, setAccentColor]);

	useEffect(() => {
		for (const role of ROLES) {
			setRoleScale(role, roleScales[role]);
		}
	}, [roleScales, setRoleScale]);

	return null;
}
