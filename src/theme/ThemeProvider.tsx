import type { CSSProperties, ReactNode } from "react";
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { css } from "styled-system/css";
import {
	ROLE_DEFAULT_SCALE,
	ROLES,
	type Role,
	roleOverrides,
} from "./color-scheme";

export type ThemeContextValue = {
	darkMode: boolean;
	accentColor: string;
	roles: Record<Role, string>;
	setDarkMode: (darkMode: boolean) => void;
	setAccentColor: (accentColor: string) => void;
	setRoleScale: (role: Role, scale: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Reads and updates the current theme. Must be called under a ThemeProvider. */
export function useTheme(): ThemeContextValue {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}

export type ThemeProviderProps = {
	children: ReactNode;
	/** @default false */
	defaultDarkMode?: boolean;
	/** Which color scale backs the ambient accent (`colorPalette`). @default "indigo" */
	defaultAccentColor?: string;
	/** Which color scale backs each semantic role (fg, bg, success, ...). Unset roles keep the library default. */
	defaultRoles?: Partial<Record<Role, string>>;
	className?: string;
	style?: CSSProperties;
};

/**
 * Owns the current color scheme (light/dark mode, ambient accent, and which
 * scale backs each semantic role - fg, bg, border, success, warning, error,
 * info, primary, secondary) and applies it to `children`. Nest another
 * ThemeProvider to give a subtree its own scheme. Read or change the current
 * theme from anywhere inside via `useTheme()`.
 */
export function ThemeProvider({
	children,
	defaultDarkMode = false,
	defaultAccentColor = "indigo",
	defaultRoles,
	className,
	style,
}: ThemeProviderProps) {
	const [darkMode, setDarkMode] = useState(defaultDarkMode);
	const [accentColor, setAccentColor] = useState(defaultAccentColor);
	const [roles, setRoles] = useState<Record<Role, string>>(() => ({
		...ROLE_DEFAULT_SCALE,
		...defaultRoles,
	}));

	const setRoleScale = useCallback((role: Role, scale: string) => {
		setRoles((previous) => ({ ...previous, [role]: scale }));
	}, []);

	const value = useMemo<ThemeContextValue>(
		() => ({
			darkMode,
			accentColor,
			roles,
			setDarkMode,
			setAccentColor,
			setRoleScale,
		}),
		[darkMode, accentColor, roles, setRoleScale],
	);

	const overrides = Object.assign(
		{},
		...ROLES.map((role) => roleOverrides(role, roles[role])),
	);

	return (
		<ThemeContext.Provider value={value}>
			<div
				className={`${darkMode ? "dark" : "light"} ${css({ colorPalette: accentColor })}${className ? ` ${className}` : ""}`}
				style={{ ...overrides, ...style }}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
}
