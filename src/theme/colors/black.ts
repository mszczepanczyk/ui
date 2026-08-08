import { defineSemanticTokens } from "@pandacss/dev";

// Flat monochrome scale: every numbered step is the same solid black, since
// black has no gradient - only the alpha steps vary. `DEFAULT` exists for
// existing bare `{colors.black}` references (shadows, other color files'
// cross-references) that predate this being a full scale.
export const black = defineSemanticTokens.colors({
	DEFAULT: { value: { _light: "#000000", _dark: "#000000" } },
	"1": { value: { _light: "#000000", _dark: "#000000" } },
	"2": { value: { _light: "#000000", _dark: "#000000" } },
	"3": { value: { _light: "#000000", _dark: "#000000" } },
	"4": { value: { _light: "#000000", _dark: "#000000" } },
	"5": { value: { _light: "#000000", _dark: "#000000" } },
	"6": { value: { _light: "#000000", _dark: "#000000" } },
	"7": { value: { _light: "#000000", _dark: "#000000" } },
	"8": { value: { _light: "#000000", _dark: "#000000" } },
	"9": { value: { _light: "#000000", _dark: "#000000" } },
	"10": { value: { _light: "#000000", _dark: "#000000" } },
	"11": { value: { _light: "#000000", _dark: "#000000" } },
	"12": { value: { _light: "#000000", _dark: "#000000" } },
	a1: {
		value: { _light: "rgba(0, 0, 0, 0.05)", _dark: "rgba(0, 0, 0, 0.05)" },
	},
	a2: { value: { _light: "rgba(0, 0, 0, 0.1)", _dark: "rgba(0, 0, 0, 0.1)" } },
	a3: {
		value: { _light: "rgba(0, 0, 0, 0.15)", _dark: "rgba(0, 0, 0, 0.15)" },
	},
	a4: { value: { _light: "rgba(0, 0, 0, 0.2)", _dark: "rgba(0, 0, 0, 0.2)" } },
	a5: { value: { _light: "rgba(0, 0, 0, 0.3)", _dark: "rgba(0, 0, 0, 0.3)" } },
	a6: { value: { _light: "rgba(0, 0, 0, 0.4)", _dark: "rgba(0, 0, 0, 0.4)" } },
	a7: { value: { _light: "rgba(0, 0, 0, 0.5)", _dark: "rgba(0, 0, 0, 0.5)" } },
	a8: { value: { _light: "rgba(0, 0, 0, 0.6)", _dark: "rgba(0, 0, 0, 0.6)" } },
	a9: { value: { _light: "rgba(0, 0, 0, 0.7)", _dark: "rgba(0, 0, 0, 0.7)" } },
	a10: { value: { _light: "rgba(0, 0, 0, 0.8)", _dark: "rgba(0, 0, 0, 0.8)" } },
	a11: { value: { _light: "rgba(0, 0, 0, 0.9)", _dark: "rgba(0, 0, 0, 0.9)" } },
	a12: {
		value: { _light: "rgba(0, 0, 0, 0.95)", _dark: "rgba(0, 0, 0, 0.95)" },
	},
	solid: {
		bg: {
			DEFAULT: {
				value: { _light: "{colors.black.9}", _dark: "{colors.black.9}" },
			},
			hover: {
				value: { _light: "{colors.black.10}", _dark: "{colors.black.10}" },
			},
		},
		fg: { DEFAULT: { value: { _light: "white", _dark: "white" } } },
	},
	subtle: {
		bg: {
			DEFAULT: {
				value: { _light: "{colors.black.a3}", _dark: "{colors.black.a3}" },
			},
			hover: {
				value: { _light: "{colors.black.a4}", _dark: "{colors.black.a4}" },
			},
			active: {
				value: { _light: "{colors.black.a5}", _dark: "{colors.black.a5}" },
			},
		},
		fg: {
			DEFAULT: {
				value: { _light: "{colors.black.a11}", _dark: "{colors.black.a11}" },
			},
		},
	},
	surface: {
		bg: {
			DEFAULT: {
				value: { _light: "{colors.black.a2}", _dark: "{colors.black.a2}" },
			},
			active: {
				value: { _light: "{colors.black.a3}", _dark: "{colors.black.a3}" },
			},
		},
		border: {
			DEFAULT: {
				value: { _light: "{colors.black.a6}", _dark: "{colors.black.a6}" },
			},
			hover: {
				value: { _light: "{colors.black.a7}", _dark: "{colors.black.a7}" },
			},
		},
		fg: {
			DEFAULT: {
				value: { _light: "{colors.black.a11}", _dark: "{colors.black.a11}" },
			},
		},
	},
	outline: {
		bg: {
			hover: {
				value: { _light: "{colors.black.a2}", _dark: "{colors.black.a2}" },
			},
			active: {
				value: { _light: "{colors.black.a3}", _dark: "{colors.black.a3}" },
			},
		},
		border: {
			DEFAULT: {
				value: { _light: "{colors.black.a7}", _dark: "{colors.black.a7}" },
			},
		},
		fg: {
			DEFAULT: {
				value: { _light: "{colors.black.a11}", _dark: "{colors.black.a11}" },
			},
		},
	},
	plain: {
		bg: {
			hover: {
				value: { _light: "{colors.black.a3}", _dark: "{colors.black.a3}" },
			},
			active: {
				value: { _light: "{colors.black.a4}", _dark: "{colors.black.a4}" },
			},
		},
		fg: {
			DEFAULT: {
				value: { _light: "{colors.black.a11}", _dark: "{colors.black.a11}" },
			},
		},
	},
});
