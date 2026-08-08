// Every semantic role (fg, bg, border, success, warning, error, info, primary,
// secondary) owns its own abstract 1-12 / a1-a12 color namespace
// (--colors-<role>-1, --colors-<role>-a3, ...), and every other token for that
// role - default, emphasized, solid.bg, subtle.fg, ... - is just an alias
// into its own namespace (see panda-preset.ts). The *default* scheme is
// nothing more than those 24 slots each aliasing one real scale, hardcoded
// per role there.
//
// Repointing a role at a different scale is therefore always the same 24
// variable copy, for every role, regardless of shape - no per-role step
// tables, no light/dark handling here (that's already baked into how each
// role's own tokens reference its namespace, e.g. bg.muted reads a different
// step in light vs dark - see panda-preset.ts).

export type Role =
	| "fg"
	| "bg"
	| "border"
	| "success"
	| "warning"
	| "error"
	| "info"
	| "primary"
	| "secondary"
	| "highlight"
	| "focusRing"
	| "overlay";

export const ROLES: Role[] = [
	"fg",
	"bg",
	"border",
	"success",
	"warning",
	"error",
	"info",
	"primary",
	"secondary",
	"highlight",
	"focusRing",
	"overlay",
];

export const ROLE_LABELS: Record<Role, string> = {
	fg: "Foreground",
	bg: "Background",
	border: "Border",
	success: "Success",
	warning: "Warning",
	error: "Error",
	info: "Info",
	primary: "Primary",
	secondary: "Secondary",
	highlight: "Highlight",
	focusRing: "Focus ring",
	overlay: "Overlay",
};

export const ROLE_DEFAULT_SCALE: Record<Role, string> = {
	fg: "slate",
	bg: "slate",
	border: "slate",
	success: "green",
	warning: "amber",
	error: "red",
	info: "blue",
	primary: "blue",
	secondary: "slate",
	highlight: "blue",
	focusRing: "blue",
	overlay: "black",
};

const STEPS: string[] = [
	...Array.from({ length: 12 }, (_, i) => String(i + 1)),
	...Array.from({ length: 12 }, (_, i) => `a${i + 1}`),
];

// Panda kebab-cases multi-word token paths for CSS variable names (the
// "focusRing" token compiles to `--colors-focus-ring-*`, not
// `--colors-focusRing-*`), so any role name has to go through this before
// being used to build a variable name.
function roleCssName(role: Role): string {
	return role.replace(/([A-Z])/g, "-$1").toLowerCase();
}

/** CSS variable overrides that repoint `role`'s 24-slot namespace at `scale`. */
export function roleOverrides(
	role: Role,
	scale: string,
): Record<string, string> {
	const cssRole = roleCssName(role);
	const out: Record<string, string> = {};
	for (const step of STEPS) {
		out[`--colors-${cssRole}-${step}`] = `var(--colors-${scale}-${step})`;
	}
	return out;
}

type TokenValue = { value: { _light: string; _dark: string } };

/**
 * A role's 24-slot namespace, aliased from `scale` - used by panda-preset.ts
 * to build the *default* color scheme from ROLE_DEFAULT_SCALE, so the two
 * can't drift apart the way a hand-typed second copy could.
 */
export function rawScale(scale: string): Record<string, TokenValue> {
	const out: Record<string, TokenValue> = {};
	for (const step of STEPS) {
		const ref = `{colors.${scale}.${step}}`;
		out[step] = { value: { _light: ref, _dark: ref } };
	}
	return out;
}
