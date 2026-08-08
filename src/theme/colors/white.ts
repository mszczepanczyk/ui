import { defineSemanticTokens } from "@pandacss/dev";

// Flat monochrome scale: every numbered step is the same solid white, since
// white has no gradient - only the alpha steps vary. `DEFAULT` exists for
// existing bare `{colors.white}` references (other color files' cross-
// references) that predate this being a full scale.
export const white = defineSemanticTokens.colors({
	DEFAULT: { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"1": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"2": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"3": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"4": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"5": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"6": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"7": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"8": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"9": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"10": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"11": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	"12": { value: { _light: "#ffffff", _dark: "#ffffff" } },
	a1: {
		value: {
			_light: "rgba(255, 255, 255, 0.05)",
			_dark: "rgba(255, 255, 255, 0.05)",
		},
	},
	a2: {
		value: {
			_light: "rgba(255, 255, 255, 0.1)",
			_dark: "rgba(255, 255, 255, 0.1)",
		},
	},
	a3: {
		value: {
			_light: "rgba(255, 255, 255, 0.15)",
			_dark: "rgba(255, 255, 255, 0.15)",
		},
	},
	a4: {
		value: {
			_light: "rgba(255, 255, 255, 0.2)",
			_dark: "rgba(255, 255, 255, 0.2)",
		},
	},
	a5: {
		value: {
			_light: "rgba(255, 255, 255, 0.3)",
			_dark: "rgba(255, 255, 255, 0.3)",
		},
	},
	a6: {
		value: {
			_light: "rgba(255, 255, 255, 0.4)",
			_dark: "rgba(255, 255, 255, 0.4)",
		},
	},
	a7: {
		value: {
			_light: "rgba(255, 255, 255, 0.5)",
			_dark: "rgba(255, 255, 255, 0.5)",
		},
	},
	a8: {
		value: {
			_light: "rgba(255, 255, 255, 0.6)",
			_dark: "rgba(255, 255, 255, 0.6)",
		},
	},
	a9: {
		value: {
			_light: "rgba(255, 255, 255, 0.7)",
			_dark: "rgba(255, 255, 255, 0.7)",
		},
	},
	a10: {
		value: {
			_light: "rgba(255, 255, 255, 0.8)",
			_dark: "rgba(255, 255, 255, 0.8)",
		},
	},
	a11: {
		value: {
			_light: "rgba(255, 255, 255, 0.9)",
			_dark: "rgba(255, 255, 255, 0.9)",
		},
	},
	a12: {
		value: {
			_light: "rgba(255, 255, 255, 0.95)",
			_dark: "rgba(255, 255, 255, 0.95)",
		},
	},
	solid: {
		bg: {
			DEFAULT: {
				value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
			},
			hover: {
				value: { _light: "{colors.white.10}", _dark: "{colors.white.10}" },
			},
		},
		fg: { DEFAULT: { value: { _light: "black", _dark: "black" } } },
	},
	subtle: {
		bg: {
			DEFAULT: {
				value: { _light: "{colors.white.a3}", _dark: "{colors.white.a3}" },
			},
			hover: {
				value: { _light: "{colors.white.a4}", _dark: "{colors.white.a4}" },
			},
			active: {
				value: { _light: "{colors.white.a5}", _dark: "{colors.white.a5}" },
			},
		},
		fg: {
			DEFAULT: {
				value: { _light: "{colors.white.a11}", _dark: "{colors.white.a11}" },
			},
		},
	},
	surface: {
		bg: {
			DEFAULT: {
				value: { _light: "{colors.white.a2}", _dark: "{colors.white.a2}" },
			},
			active: {
				value: { _light: "{colors.white.a3}", _dark: "{colors.white.a3}" },
			},
		},
		border: {
			DEFAULT: {
				value: { _light: "{colors.white.a6}", _dark: "{colors.white.a6}" },
			},
			hover: {
				value: { _light: "{colors.white.a7}", _dark: "{colors.white.a7}" },
			},
		},
		fg: {
			DEFAULT: {
				value: { _light: "{colors.white.a11}", _dark: "{colors.white.a11}" },
			},
		},
	},
	outline: {
		bg: {
			hover: {
				value: { _light: "{colors.white.a2}", _dark: "{colors.white.a2}" },
			},
			active: {
				value: { _light: "{colors.white.a3}", _dark: "{colors.white.a3}" },
			},
		},
		border: {
			DEFAULT: {
				value: { _light: "{colors.white.a7}", _dark: "{colors.white.a7}" },
			},
		},
		fg: {
			DEFAULT: {
				value: { _light: "{colors.white.a11}", _dark: "{colors.white.a11}" },
			},
		},
	},
	plain: {
		bg: {
			hover: {
				value: { _light: "{colors.white.a3}", _dark: "{colors.white.a3}" },
			},
			active: {
				value: { _light: "{colors.white.a4}", _dark: "{colors.white.a4}" },
			},
		},
		fg: {
			DEFAULT: {
				value: { _light: "{colors.white.a11}", _dark: "{colors.white.a11}" },
			},
		},
	},
});
