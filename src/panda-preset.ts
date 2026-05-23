import { definePreset } from "@pandacss/dev";
import { animationStyles } from "./theme/animation-styles";
import { amber } from "./theme/colors/amber";
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
import { yellow } from "./theme/colors/yellow";
import { conditions } from "./theme/conditions";
import { globalCss } from "./theme/global-css";
import { keyframes } from "./theme/keyframes";
import { layerStyles } from "./theme/layer-styles";
import { recipes, slotRecipes } from "./theme/recipes";
import { textStyles } from "./theme/text-styles";
import { colors } from "./theme/tokens/colors";
import { durations } from "./theme/tokens/durations";
import { shadows } from "./theme/tokens/shadows";
import { zIndex } from "./theme/tokens/z-index";

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
				colors,
				durations,
				zIndex,
			},

			semanticTokens: {
				colors: {
					// Foreground colors (text)
					fg: {
						default: {
							value: {
								_light: "{colors.slate.12}",
								_dark: "{colors.slate.12}",
							},
						},

						muted: {
							value: {
								_light: "{colors.slate.11}",
								_dark: "{colors.slate.11}",
							},
						},

						subtle: {
							value: {
								_light: "{colors.slate.10}",
								_dark: "{colors.slate.10}",
							},
						},

						disabled: {
							value: {
								_light: "{colors.slate.8}",
								_dark: "{colors.slate.8}",
							},
						},

						inverted: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.black}",
							},
						},
					},

					// Background colors
					bg: {
						canvas: {
							value: {
								_light: "{colors.slate.1}",
								_dark: "{colors.slate.1}",
							},
						},

						default: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.slate.2}",
							},
						},

						muted: {
							value: {
								_light: "{colors.slate.2}",
								_dark: "{colors.slate.3}",
							},
						},

						subtle: {
							value: {
								_light: "{colors.slate.3}",
								_dark: "{colors.slate.4}",
							},
						},

						emphasized: {
							value: {
								_light: "{colors.slate.4}",
								_dark: "{colors.slate.5}",
							},
						},

						disabled: {
							value: {
								_light: "{colors.slate.3}",
								_dark: "{colors.slate.4}",
							},
						},
					},

					// Border colors
					border: {
						default: {
							value: {
								_light: "{colors.slate.6}",
								_dark: "{colors.slate.6}",
							},
						},

						muted: {
							value: {
								_light: "{colors.slate.5}",
								_dark: "{colors.slate.5}",
							},
						},

						subtle: {
							value: {
								_light: "{colors.slate.4}",
								_dark: "{colors.slate.4}",
							},
						},

						emphasized: {
							value: {
								_light: "{colors.slate.7}",
								_dark: "{colors.slate.7}",
							},
						},

						disabled: {
							value: {
								_light: "{colors.slate.4}",
								_dark: "{colors.slate.4}",
							},
						},

						outline: {
							value: {
								_light: "{colors.slate.8}",
								_dark: "{colors.slate.8}",
							},
						},
					},

					// Accent (primary) color - Nano uses a cyan-blue #1174c0
					accent: {
						default: {
							value: {
								_light: "{colors.blue.9}",
								_dark: "{colors.blue.9}",
							},
						},

						emphasized: {
							value: {
								_light: "{colors.blue.10}",
								_dark: "{colors.blue.10}",
							},
						},

						fg: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.white}",
							},
						},

						muted: {
							value: {
								_light: "{colors.blue.a3}",
								_dark: "{colors.blue.a3}",
							},
						},

						subtle: {
							value: {
								_light: "{colors.blue.a4}",
								_dark: "{colors.blue.a4}",
							},
						},

						text: {
							value: {
								_light: "{colors.blue.11}",
								_dark: "{colors.blue.11}",
							},
						},
					},

					// Status colors
					success: {
						default: {
							value: {
								_light: "{colors.green.9}",
								_dark: "{colors.green.9}",
							},
						},

						emphasized: {
							value: {
								_light: "{colors.green.10}",
								_dark: "{colors.green.10}",
							},
						},

						fg: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.white}",
							},
						},

						muted: {
							value: {
								_light: "{colors.green.a3}",
								_dark: "{colors.green.a3}",
							},
						},

						text: {
							value: {
								_light: "{colors.green.11}",
								_dark: "{colors.green.11}",
							},
						},
					},

					warning: {
						default: {
							value: {
								_light: "{colors.amber.9}",
								_dark: "{colors.amber.9}",
							},
						},

						emphasized: {
							value: {
								_light: "{colors.amber.10}",
								_dark: "{colors.amber.10}",
							},
						},

						fg: {
							value: {
								_light: "{colors.black}",
								_dark: "{colors.black}",
							},
						},

						muted: {
							value: {
								_light: "{colors.amber.a3}",
								_dark: "{colors.amber.a3}",
							},
						},

						text: {
							value: {
								_light: "{colors.amber.11}",
								_dark: "{colors.amber.11}",
							},
						},
					},

					error: {
						default: {
							value: {
								_light: "{colors.red.9}",
								_dark: "{colors.red.9}",
							},
						},

						emphasized: {
							value: {
								_light: "{colors.red.10}",
								_dark: "{colors.red.10}",
							},
						},

						fg: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.white}",
							},
						},

						muted: {
							value: {
								_light: "{colors.red.a3}",
								_dark: "{colors.red.a3}",
							},
						},

						text: {
							value: {
								_light: "{colors.red.11}",
								_dark: "{colors.red.11}",
							},
						},
					},

					info: {
						default: {
							value: {
								_light: "{colors.blue.9}",
								_dark: "{colors.blue.9}",
							},
						},

						emphasized: {
							value: {
								_light: "{colors.blue.10}",
								_dark: "{colors.blue.10}",
							},
						},

						fg: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.white}",
							},
						},

						muted: {
							value: {
								_light: "{colors.blue.a3}",
								_dark: "{colors.blue.a3}",
							},
						},

						text: {
							value: {
								_light: "{colors.blue.11}",
								_dark: "{colors.blue.11}",
							},
						},
					},

					// Highlight (selection) color - Nano uses #44a1d9
					highlight: {
						bg: {
							value: {
								_light: "{colors.blue.a4}",
								_dark: "{colors.blue.a4}",
							},
						},

						fg: {
							value: {
								_light: "{colors.blue.12}",
								_dark: "{colors.blue.12}",
							},
						},
					},

					// Focus ring color
					focusRing: {
						value: {
							_light: "{colors.blue.8}",
							_dark: "{colors.blue.8}",
						},
					},

					// Overlay/mask background - Nano uses rgba(0, 0, 0, 0.4)
					overlay: {
						value: {
							_light: "{colors.black.a6}",
							_dark: "{colors.black.a8}",
						},
					},

					amber,
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
					yellow,
				},

				shadows,

				radii: {
					l1: {
						value: "{radii.xs}",
					},

					l2: {
						value: "{radii.sm}",
					},

					l3: {
						value: "{radii.md}",
					},
				},
			},
		},
	},

	globalCss,
	conditions,
});
