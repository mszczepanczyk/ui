// Export theme configuration for users who want to extend

export {
	ROLE_DEFAULT_SCALE,
	ROLE_LABELS,
	ROLES,
	type Role,
	roleOverrides,
} from "./color-scheme";
export { recipes, slotRecipes } from "./recipes";
export {
	type ThemeContextValue,
	ThemeProvider,
	type ThemeProviderProps,
	useTheme,
} from "./ThemeProvider";
