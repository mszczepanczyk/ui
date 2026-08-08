import { definePreset } from "@pandacss/dev";
import { animationStyles } from "./theme/animation-styles";
import { ROLE_DEFAULT_SCALE, rawScale } from "./theme/color-scheme";
import { amber } from "./theme/colors/amber";
import { black } from "./theme/colors/black";
import { blue } from "./theme/colors/blue";
import { bronze } from "./theme/colors/bronze";
import { brown } from "./theme/colors/brown";
import { crimson } from "./theme/colors/crimson";
import { cyan } from "./theme/colors/cyan";
import { gold } from "./theme/colors/gold";
import { grass } from "./theme/colors/grass";
import { green } from "./theme/colors/green";
import { indigo } from "./theme/colors/indigo";
import { iris } from "./theme/colors/iris";
import { jade } from "./theme/colors/jade";
import { lime } from "./theme/colors/lime";
import { mauve } from "./theme/colors/mauve";
import { mint } from "./theme/colors/mint";
import { neutral } from "./theme/colors/neutral";
import { olive } from "./theme/colors/olive";
import { orange } from "./theme/colors/orange";
import { pink } from "./theme/colors/pink";
import { plum } from "./theme/colors/plum";
import { purple } from "./theme/colors/purple";
import { red } from "./theme/colors/red";
import { ruby } from "./theme/colors/ruby";
import { sage } from "./theme/colors/sage";
import { sand } from "./theme/colors/sand";
import { sky } from "./theme/colors/sky";
import { slate } from "./theme/colors/slate";
import { teal } from "./theme/colors/teal";
import { tomato } from "./theme/colors/tomato";
import { violet } from "./theme/colors/violet";
import { white } from "./theme/colors/white";
import { yellow } from "./theme/colors/yellow";
import { conditions } from "./theme/conditions";
import { globalCss } from "./theme/global-css";
import { keyframes } from "./theme/keyframes";
import { layerStyles } from "./theme/layer-styles";
import { recipes, slotRecipes } from "./theme/recipes";
import { textStyles } from "./theme/text-styles";
import { durations } from "./theme/tokens/durations";
import { shadows } from "./theme/tokens/shadows";
import { zIndex } from "./theme/tokens/z-index";

// https://github.com/primefaces/primereact/blob/master/public/themes/nano/theme.css

export const colorScales = {
	amber,
	black,
	blue,
	bronze,
	brown,
	crimson,
	cyan,
	gold,
	grass,
	gray: neutral,
	green,
	indigo,
	iris,
	jade,
	lime,
	mauve,
	mint,
	olive,
	orange,
	pink,
	plum,
	purple,
	red,
	ruby,
	sage,
	sand,
	sky,
	slate,
	teal,
	tomato,
	violet,
	white,
	yellow,
};

export const colorScaleNames = Object.keys(colorScales);

export const semanticColors = {
	// Foreground colors (text)
	fg: {
		// Each role's own namespace, aliased from ROLE_DEFAULT_SCALE - a color
		// scheme repoints these 24 to a different scale; everything below reads from them.
		...rawScale(ROLE_DEFAULT_SCALE.fg),

		default: {
			value: {
				_light: "var(--colors-fg-12)",
				_dark: "var(--colors-fg-12)",
			},
		},

		muted: {
			value: {
				_light: "var(--colors-fg-11)",
				_dark: "var(--colors-fg-11)",
			},
		},

		subtle: {
			value: {
				_light: "var(--colors-fg-10)",
				_dark: "var(--colors-fg-10)",
			},
		},

		disabled: {
			value: {
				_light: "var(--colors-fg-8)",
				_dark: "var(--colors-fg-8)",
			},
		},

		// gray.1 already flips light/dark on its own (light in light mode,
		// dark in dark mode), which is exactly the inversion this wants -
		// referencing it in both branches, not gray.12 in the dark one.
		inverted: {
			value: {
				_light: "{colors.gray.1}",
				_dark: "{colors.gray.1}",
			},
		},
	},

	// Background colors
	bg: {
		...rawScale(ROLE_DEFAULT_SCALE.bg),

		canvas: {
			value: {
				_light: "var(--colors-bg-1)",
				_dark: "var(--colors-bg-1)",
			},
		},

		default: {
			value: {
				_light: "{colors.gray.1}",
				_dark: "var(--colors-bg-2)",
			},
		},

		muted: {
			value: {
				_light: "var(--colors-bg-2)",
				_dark: "var(--colors-bg-3)",
			},
		},

		subtle: {
			value: {
				_light: "var(--colors-bg-3)",
				_dark: "var(--colors-bg-4)",
			},
		},

		emphasized: {
			value: {
				_light: "var(--colors-bg-4)",
				_dark: "var(--colors-bg-5)",
			},
		},

		disabled: {
			value: {
				_light: "var(--colors-bg-3)",
				_dark: "var(--colors-bg-4)",
			},
		},
	},

	// Border colors
	border: {
		...rawScale(ROLE_DEFAULT_SCALE.border),

		default: {
			value: {
				_light: "var(--colors-border-6)",
				_dark: "var(--colors-border-6)",
			},
		},

		muted: {
			value: {
				_light: "var(--colors-border-5)",
				_dark: "var(--colors-border-5)",
			},
		},

		subtle: {
			value: {
				_light: "var(--colors-border-4)",
				_dark: "var(--colors-border-4)",
			},
		},

		emphasized: {
			value: {
				_light: "var(--colors-border-7)",
				_dark: "var(--colors-border-7)",
			},
		},

		disabled: {
			value: {
				_light: "var(--colors-border-4)",
				_dark: "var(--colors-border-4)",
			},
		},

		outline: {
			value: {
				_light: "var(--colors-border-8)",
				_dark: "var(--colors-border-8)",
			},
		},
	},

	// Accent color - aliases the ambient colorPalette so it tracks whichever
	// scheme is set on an ancestor (see Colors fixture / Cosmos color scheme switcher).
	// `colorPalette` is a utility-only construct, not a real token, so it can't be
	// referenced via the `{colors.x}` alias syntax - use the raw CSS variable instead.
	accent: {
		default: {
			value: {
				_light: "var(--colors-color-palette-9)",
				_dark: "var(--colors-color-palette-9)",
			},
		},

		emphasized: {
			value: {
				_light: "var(--colors-color-palette-10)",
				_dark: "var(--colors-color-palette-10)",
			},
		},

		fg: {
			value: {
				_light: "var(--colors-color-palette-solid-fg)",
				_dark: "var(--colors-color-palette-solid-fg)",
			},
		},

		muted: {
			value: {
				_light: "var(--colors-color-palette-a3)",
				_dark: "var(--colors-color-palette-a3)",
			},
		},

		subtle: {
			value: {
				_light: "var(--colors-color-palette-a4)",
				_dark: "var(--colors-color-palette-a4)",
			},
		},

		text: {
			value: {
				_light: "var(--colors-color-palette-11)",
				_dark: "var(--colors-color-palette-11)",
			},
		},
	},

	// Status colors
	success: {
		...rawScale(ROLE_DEFAULT_SCALE.success),

		default: {
			value: {
				_light: "var(--colors-success-9)",
				_dark: "var(--colors-success-9)",
			},
		},
		emphasized: {
			value: {
				_light: "var(--colors-success-10)",
				_dark: "var(--colors-success-10)",
			},
		},
		fg: {
			value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
		},
		muted: {
			value: {
				_light: "var(--colors-success-a3)",
				_dark: "var(--colors-success-a3)",
			},
		},
		text: {
			value: {
				_light: "var(--colors-success-11)",
				_dark: "var(--colors-success-11)",
			},
		},
		solid: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-9)",
						_dark: "var(--colors-success-9)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-success-10)",
						_dark: "var(--colors-success-10)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
				},
			},
		},
		subtle: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-a3)",
						_dark: "var(--colors-success-a3)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-success-a4)",
						_dark: "var(--colors-success-a4)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-success-a5)",
						_dark: "var(--colors-success-a5)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-a11)",
						_dark: "var(--colors-success-a11)",
					},
				},
			},
		},
		surface: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-a2)",
						_dark: "var(--colors-success-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-success-a3)",
						_dark: "var(--colors-success-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-a6)",
						_dark: "var(--colors-success-a6)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-success-a7)",
						_dark: "var(--colors-success-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-a11)",
						_dark: "var(--colors-success-a11)",
					},
				},
			},
		},
		outline: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-success-a2)",
						_dark: "var(--colors-success-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-success-a3)",
						_dark: "var(--colors-success-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-a7)",
						_dark: "var(--colors-success-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-a11)",
						_dark: "var(--colors-success-a11)",
					},
				},
			},
		},
		plain: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-success-a3)",
						_dark: "var(--colors-success-a3)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-success-a4)",
						_dark: "var(--colors-success-a4)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-success-a11)",
						_dark: "var(--colors-success-a11)",
					},
				},
			},
		},
	},

	warning: {
		...rawScale(ROLE_DEFAULT_SCALE.warning),

		default: {
			value: {
				_light: "var(--colors-warning-9)",
				_dark: "var(--colors-warning-9)",
			},
		},
		emphasized: {
			value: {
				_light: "var(--colors-warning-10)",
				_dark: "var(--colors-warning-10)",
			},
		},
		fg: {
			value: { _light: "{colors.black.9}", _dark: "{colors.black.9}" },
		},
		muted: {
			value: {
				_light: "var(--colors-warning-a3)",
				_dark: "var(--colors-warning-a3)",
			},
		},
		text: {
			value: {
				_light: "var(--colors-warning-11)",
				_dark: "var(--colors-warning-11)",
			},
		},
		solid: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-9)",
						_dark: "var(--colors-warning-9)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-warning-10)",
						_dark: "var(--colors-warning-10)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: { _light: "{colors.black.9}", _dark: "{colors.black.9}" },
				},
			},
		},
		subtle: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-a3)",
						_dark: "var(--colors-warning-a3)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-warning-a4)",
						_dark: "var(--colors-warning-a4)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-warning-a5)",
						_dark: "var(--colors-warning-a5)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-a11)",
						_dark: "var(--colors-warning-a11)",
					},
				},
			},
		},
		surface: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-a2)",
						_dark: "var(--colors-warning-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-warning-a3)",
						_dark: "var(--colors-warning-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-a6)",
						_dark: "var(--colors-warning-a6)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-warning-a7)",
						_dark: "var(--colors-warning-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-a11)",
						_dark: "var(--colors-warning-a11)",
					},
				},
			},
		},
		outline: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-warning-a2)",
						_dark: "var(--colors-warning-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-warning-a3)",
						_dark: "var(--colors-warning-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-a7)",
						_dark: "var(--colors-warning-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-a11)",
						_dark: "var(--colors-warning-a11)",
					},
				},
			},
		},
		plain: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-warning-a3)",
						_dark: "var(--colors-warning-a3)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-warning-a4)",
						_dark: "var(--colors-warning-a4)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-warning-a11)",
						_dark: "var(--colors-warning-a11)",
					},
				},
			},
		},
	},

	error: {
		...rawScale(ROLE_DEFAULT_SCALE.error),

		default: {
			value: {
				_light: "var(--colors-error-9)",
				_dark: "var(--colors-error-9)",
			},
		},
		emphasized: {
			value: {
				_light: "var(--colors-error-10)",
				_dark: "var(--colors-error-10)",
			},
		},
		fg: {
			value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
		},
		muted: {
			value: {
				_light: "var(--colors-error-a3)",
				_dark: "var(--colors-error-a3)",
			},
		},
		text: {
			value: {
				_light: "var(--colors-error-11)",
				_dark: "var(--colors-error-11)",
			},
		},
		solid: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-9)",
						_dark: "var(--colors-error-9)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-error-10)",
						_dark: "var(--colors-error-10)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
				},
			},
		},
		subtle: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-a3)",
						_dark: "var(--colors-error-a3)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-error-a4)",
						_dark: "var(--colors-error-a4)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-error-a5)",
						_dark: "var(--colors-error-a5)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-a11)",
						_dark: "var(--colors-error-a11)",
					},
				},
			},
		},
		surface: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-a2)",
						_dark: "var(--colors-error-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-error-a3)",
						_dark: "var(--colors-error-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-a6)",
						_dark: "var(--colors-error-a6)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-error-a7)",
						_dark: "var(--colors-error-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-a11)",
						_dark: "var(--colors-error-a11)",
					},
				},
			},
		},
		outline: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-error-a2)",
						_dark: "var(--colors-error-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-error-a3)",
						_dark: "var(--colors-error-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-a7)",
						_dark: "var(--colors-error-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-a11)",
						_dark: "var(--colors-error-a11)",
					},
				},
			},
		},
		plain: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-error-a3)",
						_dark: "var(--colors-error-a3)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-error-a4)",
						_dark: "var(--colors-error-a4)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-error-a11)",
						_dark: "var(--colors-error-a11)",
					},
				},
			},
		},
	},

	info: {
		...rawScale(ROLE_DEFAULT_SCALE.info),

		default: {
			value: { _light: "var(--colors-info-9)", _dark: "var(--colors-info-9)" },
		},
		emphasized: {
			value: {
				_light: "var(--colors-info-10)",
				_dark: "var(--colors-info-10)",
			},
		},
		fg: {
			value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
		},
		muted: {
			value: {
				_light: "var(--colors-info-a3)",
				_dark: "var(--colors-info-a3)",
			},
		},
		text: {
			value: {
				_light: "var(--colors-info-11)",
				_dark: "var(--colors-info-11)",
			},
		},
		solid: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-9)",
						_dark: "var(--colors-info-9)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-info-10)",
						_dark: "var(--colors-info-10)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
				},
			},
		},
		subtle: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-a3)",
						_dark: "var(--colors-info-a3)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-info-a4)",
						_dark: "var(--colors-info-a4)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-info-a5)",
						_dark: "var(--colors-info-a5)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-a11)",
						_dark: "var(--colors-info-a11)",
					},
				},
			},
		},
		surface: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-a2)",
						_dark: "var(--colors-info-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-info-a3)",
						_dark: "var(--colors-info-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-a6)",
						_dark: "var(--colors-info-a6)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-info-a7)",
						_dark: "var(--colors-info-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-a11)",
						_dark: "var(--colors-info-a11)",
					},
				},
			},
		},
		outline: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-info-a2)",
						_dark: "var(--colors-info-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-info-a3)",
						_dark: "var(--colors-info-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-a7)",
						_dark: "var(--colors-info-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-a11)",
						_dark: "var(--colors-info-a11)",
					},
				},
			},
		},
		plain: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-info-a3)",
						_dark: "var(--colors-info-a3)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-info-a4)",
						_dark: "var(--colors-info-a4)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-info-a11)",
						_dark: "var(--colors-info-a11)",
					},
				},
			},
		},
	},

	primary: {
		...rawScale(ROLE_DEFAULT_SCALE.primary),

		solid: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-9)",
						_dark: "var(--colors-primary-9)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-primary-10)",
						_dark: "var(--colors-primary-10)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
				},
			},
		},
		subtle: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-a3)",
						_dark: "var(--colors-primary-a3)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-primary-a4)",
						_dark: "var(--colors-primary-a4)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-primary-a5)",
						_dark: "var(--colors-primary-a5)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-a11)",
						_dark: "var(--colors-primary-a11)",
					},
				},
			},
		},
		surface: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-a2)",
						_dark: "var(--colors-primary-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-primary-a3)",
						_dark: "var(--colors-primary-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-a6)",
						_dark: "var(--colors-primary-a6)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-primary-a7)",
						_dark: "var(--colors-primary-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-a11)",
						_dark: "var(--colors-primary-a11)",
					},
				},
			},
		},
		outline: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-primary-a2)",
						_dark: "var(--colors-primary-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-primary-a3)",
						_dark: "var(--colors-primary-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-a7)",
						_dark: "var(--colors-primary-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-a11)",
						_dark: "var(--colors-primary-a11)",
					},
				},
			},
		},
		plain: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-primary-a3)",
						_dark: "var(--colors-primary-a3)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-primary-a4)",
						_dark: "var(--colors-primary-a4)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-primary-a11)",
						_dark: "var(--colors-primary-a11)",
					},
				},
			},
		},
	},

	secondary: {
		...rawScale(ROLE_DEFAULT_SCALE.secondary),

		solid: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-9)",
						_dark: "var(--colors-secondary-9)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-secondary-10)",
						_dark: "var(--colors-secondary-10)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: { _light: "{colors.white.9}", _dark: "{colors.white.9}" },
				},
			},
		},
		subtle: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-a3)",
						_dark: "var(--colors-secondary-a3)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-secondary-a4)",
						_dark: "var(--colors-secondary-a4)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-secondary-a5)",
						_dark: "var(--colors-secondary-a5)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-a11)",
						_dark: "var(--colors-secondary-a11)",
					},
				},
			},
		},
		surface: {
			bg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-a2)",
						_dark: "var(--colors-secondary-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-secondary-a3)",
						_dark: "var(--colors-secondary-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-a6)",
						_dark: "var(--colors-secondary-a6)",
					},
				},
				hover: {
					value: {
						_light: "var(--colors-secondary-a7)",
						_dark: "var(--colors-secondary-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-a11)",
						_dark: "var(--colors-secondary-a11)",
					},
				},
			},
		},
		outline: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-secondary-a2)",
						_dark: "var(--colors-secondary-a2)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-secondary-a3)",
						_dark: "var(--colors-secondary-a3)",
					},
				},
			},
			border: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-a7)",
						_dark: "var(--colors-secondary-a7)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-a11)",
						_dark: "var(--colors-secondary-a11)",
					},
				},
			},
		},
		plain: {
			bg: {
				hover: {
					value: {
						_light: "var(--colors-secondary-a3)",
						_dark: "var(--colors-secondary-a3)",
					},
				},
				active: {
					value: {
						_light: "var(--colors-secondary-a4)",
						_dark: "var(--colors-secondary-a4)",
					},
				},
			},
			fg: {
				DEFAULT: {
					value: {
						_light: "var(--colors-secondary-a11)",
						_dark: "var(--colors-secondary-a11)",
					},
				},
			},
		},
	},

	// Highlight (selection) color - Nano uses #44a1d9
	highlight: {
		...rawScale(ROLE_DEFAULT_SCALE.highlight),

		bg: {
			value: {
				_light: "var(--colors-highlight-a4)",
				_dark: "var(--colors-highlight-a4)",
			},
		},

		fg: {
			value: {
				_light: "var(--colors-highlight-12)",
				_dark: "var(--colors-highlight-12)",
			},
		},
	},

	// Focus ring color
	focusRing: {
		...rawScale(ROLE_DEFAULT_SCALE.focusRing),

		default: {
			value: {
				// Panda kebab-cases this multi-word token path for the CSS
				// variable name, unlike every other (single-word) role.
				_light: "var(--colors-focus-ring-8)",
				_dark: "var(--colors-focus-ring-8)",
			},
		},
	},

	// Overlay/mask background - Nano uses rgba(0, 0, 0, 0.4)
	overlay: {
		...rawScale(ROLE_DEFAULT_SCALE.overlay),

		default: {
			value: {
				_light: "var(--colors-overlay-a6)",
				_dark: "var(--colors-overlay-a8)",
			},
		},
	},
};

export const pandaPreset = definePreset({
	name: "@mariusz.sh/ui",

	theme: {
		extend: {
			animationStyles,
			recipes,
			slotRecipes,
			keyframes,
			layerStyles,
			textStyles,

			tokens: {
				durations,
				zIndex,
			},

			semanticTokens: {
				colors: {
					...semanticColors,

					...colorScales,
				},

				shadows,

				radii: {
					l1: {
						value: "1px",
					},

					l2: {
						value: "1px",
					},

					l3: {
						value: "2px",
					},
				},
			},
		},
	},

	globalCss,
	conditions,
});
