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
					fg: {
						default: {
							value: {
								_light: "{colors.gray.12}",
								_dark: "{colors.gray.12}",
							},
						},

						muted: {
							value: {
								_light: "{colors.gray.11}",
								_dark: "{colors.gray.11}",
							},
						},

						subtle: {
							value: {
								_light: "{colors.gray.10}",
								_dark: "{colors.gray.10}",
							},
						},
					},

					border: {
						value: {
							_light: "{colors.gray.4}",
							_dark: "{colors.gray.4}",
						},
					},

					error: {
						value: {
							_light: "{colors.red.9}",
							_dark: "{colors.red.9}",
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
