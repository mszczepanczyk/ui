/* eslint-disable */
import type { ConditionalValue } from './conditions';
import type { CssProperties } from './system-types';
import type { Tokens } from '../tokens/index';

export interface UtilityValues {
	aspectRatio: Tokens["aspectRatios"];
	zIndex: Tokens["zIndex"];
	top: Tokens["spacing"];
	left: Tokens["spacing"];
	inset: "auto" | Tokens["spacing"];
	insetInline: Tokens["spacing"];
	insetBlock: Tokens["spacing"];
	insetBlockEnd: Tokens["spacing"];
	insetBlockStart: Tokens["spacing"];
	insetInlineEnd: Tokens["spacing"];
	insetInlineStart: Tokens["spacing"];
	right: Tokens["spacing"];
	bottom: Tokens["spacing"];
	float: "start" | "end" | CssProperties["float"];
	hideFrom: Tokens["breakpoints"];
	hideBelow: Tokens["breakpoints"];
	flexBasis: Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "full";
	flex: "1" | "auto" | "initial" | "none";
	gridAutoColumns: "min" | "max" | "fr";
	gridAutoRows: "min" | "max" | "fr";
	gap: Tokens["spacing"];
	gridGap: Tokens["spacing"];
	gridRowGap: Tokens["spacing"];
	gridColumnGap: Tokens["spacing"];
	rowGap: Tokens["spacing"];
	columnGap: Tokens["spacing"];
	padding: Tokens["spacing"];
	paddingLeft: Tokens["spacing"];
	paddingRight: Tokens["spacing"];
	paddingTop: Tokens["spacing"];
	paddingBottom: Tokens["spacing"];
	paddingBlock: Tokens["spacing"];
	paddingBlockEnd: Tokens["spacing"];
	paddingBlockStart: Tokens["spacing"];
	paddingInline: Tokens["spacing"];
	paddingInlineEnd: Tokens["spacing"];
	paddingInlineStart: Tokens["spacing"];
	marginLeft: "auto" | Tokens["spacing"];
	marginRight: "auto" | Tokens["spacing"];
	marginTop: "auto" | Tokens["spacing"];
	marginBottom: "auto" | Tokens["spacing"];
	margin: "auto" | Tokens["spacing"];
	marginBlock: "auto" | Tokens["spacing"];
	marginBlockEnd: "auto" | Tokens["spacing"];
	marginBlockStart: "auto" | Tokens["spacing"];
	marginInline: "auto" | Tokens["spacing"];
	marginInlineEnd: "auto" | Tokens["spacing"];
	marginInlineStart: "auto" | Tokens["spacing"];
	spaceX: "auto" | Tokens["spacing"] | CssProperties["marginInlineStart"];
	spaceY: "auto" | Tokens["spacing"] | CssProperties["marginBlockStart"];
	outlineColor: Tokens["colors"];
	outline: Tokens["borders"];
	outlineOffset: Tokens["spacing"];
	focusRing: "outside" | "inside" | "mixed" | "none";
	focusVisibleRing: "outside" | "inside" | "mixed" | "none";
	focusRingColor: Tokens["colors"];
	focusRingOffset: Tokens["spacing"];
	focusRingWidth: CssProperties["outlineWidth"];
	focusRingStyle: CssProperties["outlineStyle"];
	divideColor: Tokens["colors"];
	divideStyle: CssProperties["borderStyle"];
	width: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	inlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	height: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	blockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	boxSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	color: Tokens["colors"];
	fontFamily: Tokens["fonts"];
	fontSize: Tokens["fontSizes"];
	fontWeight: Tokens["fontWeights"];
	fontSmoothing: "antialiased" | "subpixel-antialiased";
	letterSpacing: Tokens["letterSpacings"];
	lineHeight: Tokens["lineHeights"];
	textDecorationColor: Tokens["colors"];
	textEmphasisColor: Tokens["colors"];
	textIndent: Tokens["spacing"];
	textShadow: Tokens["shadows"];
	textShadowColor: Tokens["colors"];
	WebkitTextFillColor: Tokens["colors"];
	textWrap: "wrap" | "balance" | "nowrap";
	truncate: boolean;
	background: Tokens["colors"];
	backgroundColor: Tokens["colors"];
	backgroundGradient: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	backgroundLinear: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	textGradient: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	gradientFrom: Tokens["colors"];
	gradientTo: Tokens["colors"];
	gradientVia: Tokens["colors"];
	borderRadius: Tokens["radii"];
	borderTopLeftRadius: Tokens["radii"];
	borderTopRightRadius: Tokens["radii"];
	borderBottomRightRadius: Tokens["radii"];
	borderBottomLeftRadius: Tokens["radii"];
	borderTopRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderRightRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderBottomRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderLeftRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderStartStartRadius: Tokens["radii"];
	borderStartEndRadius: Tokens["radii"];
	borderStartRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderEndStartRadius: Tokens["radii"];
	borderEndEndRadius: Tokens["radii"];
	borderEndRadius: Tokens["radii"] | CssProperties["borderRadius"];
	border: Tokens["borders"];
	borderColor: Tokens["colors"];
	borderInline: Tokens["borders"];
	borderInlineColor: Tokens["colors"];
	borderBlock: Tokens["borders"];
	borderBlockColor: Tokens["colors"];
	borderLeft: Tokens["borders"];
	borderLeftColor: Tokens["colors"];
	borderInlineStart: Tokens["borders"];
	borderInlineStartColor: Tokens["colors"];
	borderRight: Tokens["borders"];
	borderRightColor: Tokens["colors"];
	borderInlineEnd: Tokens["borders"];
	borderInlineEndColor: Tokens["colors"];
	borderTop: Tokens["borders"];
	borderTopColor: Tokens["colors"];
	borderBottom: Tokens["borders"];
	borderBottomColor: Tokens["colors"];
	borderBlockEnd: Tokens["borders"];
	borderBlockEndColor: Tokens["colors"];
	borderBlockStart: Tokens["borders"];
	borderBlockStartColor: Tokens["colors"];
	boxShadow: Tokens["shadows"];
	boxShadowColor: Tokens["colors"];
	filter: "auto";
	blur: Tokens["blurs"];
	backdropFilter: "auto";
	backdropBlur: Tokens["blurs"];
	borderSpacing: Tokens["spacing"] | "auto";
	borderSpacingX: Tokens["spacing"];
	borderSpacingY: Tokens["spacing"];
	transitionTimingFunction: Tokens["easings"];
	transitionDelay: Tokens["durations"];
	transitionDuration: Tokens["durations"];
	transitionProperty: "common" | "colors" | "size" | "position" | "background";
	transition: "all" | "common" | "size" | "position" | "background" | "colors" | "opacity" | "shadow" | "transform";
	animation: Tokens["animations"];
	animationName: "spin" | "ping" | "pulse" | "bounce" | "expand-height" | "collapse-height" | "expand-width" | "collapse-width" | "fade-in" | "fade-out" | "slide-from-left-full" | "slide-from-right-full" | "slide-from-top-full" | "slide-from-bottom-full" | "slide-to-left-full" | "slide-to-right-full" | "slide-to-top-full" | "slide-to-bottom-full" | "slide-from-top" | "slide-from-bottom" | "slide-from-left" | "slide-from-right" | "slide-to-top" | "slide-to-bottom" | "slide-to-left" | "slide-to-right" | "scale-in" | "scale-out" | "bg-position" | "position";
	animationTimingFunction: Tokens["easings"];
	animationDuration: Tokens["durations"];
	animationDelay: Tokens["durations"];
	rotate: "auto" | "auto-3d" | CssProperties["rotate"];
	rotateX: CssProperties["rotate"];
	rotateY: CssProperties["rotate"];
	rotateZ: CssProperties["rotate"];
	scale: "auto" | CssProperties["scale"];
	translate: "auto" | "auto-3d" | CssProperties["translate"];
	translateX: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	translateY: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	translateZ: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	accentColor: Tokens["colors"];
	caretColor: Tokens["colors"];
	scrollbar: "visible" | "hidden";
	scrollbarColor: Tokens["colors"];
	scrollbarWidth: Tokens["sizes"];
	scrollMargin: Tokens["spacing"];
	scrollMarginLeft: Tokens["spacing"];
	scrollMarginRight: Tokens["spacing"];
	scrollMarginTop: Tokens["spacing"];
	scrollMarginBottom: Tokens["spacing"];
	scrollMarginBlock: Tokens["spacing"];
	scrollMarginBlockEnd: Tokens["spacing"];
	scrollMarginBlockStart: Tokens["spacing"];
	scrollMarginInline: Tokens["spacing"];
	scrollMarginInlineEnd: Tokens["spacing"];
	scrollMarginInlineStart: Tokens["spacing"];
	scrollPadding: Tokens["spacing"];
	scrollPaddingBlock: Tokens["spacing"];
	scrollPaddingBlockStart: Tokens["spacing"];
	scrollPaddingBlockEnd: Tokens["spacing"];
	scrollPaddingInline: Tokens["spacing"];
	scrollPaddingInlineEnd: Tokens["spacing"];
	scrollPaddingInlineStart: Tokens["spacing"];
	scrollPaddingLeft: Tokens["spacing"];
	scrollPaddingRight: Tokens["spacing"];
	scrollPaddingTop: Tokens["spacing"];
	scrollPaddingBottom: Tokens["spacing"];
	scrollSnapType: "none" | "x" | "y" | "both";
	scrollSnapStrictness: "mandatory" | "proximity";
	scrollSnapMargin: Tokens["spacing"];
	scrollSnapMarginTop: Tokens["spacing"];
	scrollSnapMarginBottom: Tokens["spacing"];
	scrollSnapMarginLeft: Tokens["spacing"];
	scrollSnapMarginRight: Tokens["spacing"];
	fill: Tokens["colors"];
	stroke: Tokens["colors"];
	srOnly: boolean;
	debug: boolean;
	containerName: CssProperties["containerName"];
	colorPalette: "current" | "transparent" | "rose" | "pink" | "fuchsia" | "purple" | "violet" | "indigo" | "blue" | "sky" | "cyan" | "teal" | "emerald" | "green" | "lime" | "yellow" | "amber" | "orange" | "red" | "neutral" | "stone" | "zinc" | "gray" | "slate" | "black" | "white" | "fg" | "bg" | "border" | "accent" | "success" | "success.solid.bg" | "success.solid" | "success.solid.fg" | "success.subtle.bg" | "success.subtle" | "success.subtle.fg" | "success.surface.bg" | "success.surface" | "success.surface.border" | "success.surface.fg" | "success.outline" | "success.outline.bg" | "success.outline.border" | "success.outline.fg" | "success.plain" | "success.plain.bg" | "success.plain.fg" | "warning" | "warning.solid.bg" | "warning.solid" | "warning.solid.fg" | "warning.subtle.bg" | "warning.subtle" | "warning.subtle.fg" | "warning.surface.bg" | "warning.surface" | "warning.surface.border" | "warning.surface.fg" | "warning.outline" | "warning.outline.bg" | "warning.outline.border" | "warning.outline.fg" | "warning.plain" | "warning.plain.bg" | "warning.plain.fg" | "error" | "error.solid.bg" | "error.solid" | "error.solid.fg" | "error.subtle.bg" | "error.subtle" | "error.subtle.fg" | "error.surface.bg" | "error.surface" | "error.surface.border" | "error.surface.fg" | "error.outline" | "error.outline.bg" | "error.outline.border" | "error.outline.fg" | "error.plain" | "error.plain.bg" | "error.plain.fg" | "info" | "info.solid.bg" | "info.solid" | "info.solid.fg" | "info.subtle.bg" | "info.subtle" | "info.subtle.fg" | "info.surface.bg" | "info.surface" | "info.surface.border" | "info.surface.fg" | "info.outline" | "info.outline.bg" | "info.outline.border" | "info.outline.fg" | "info.plain" | "info.plain.bg" | "info.plain.fg" | "primary" | "primary.solid.bg" | "primary.solid" | "primary.solid.fg" | "primary.subtle.bg" | "primary.subtle" | "primary.subtle.fg" | "primary.surface.bg" | "primary.surface" | "primary.surface.border" | "primary.surface.fg" | "primary.outline" | "primary.outline.bg" | "primary.outline.border" | "primary.outline.fg" | "primary.plain" | "primary.plain.bg" | "primary.plain.fg" | "secondary" | "secondary.solid.bg" | "secondary.solid" | "secondary.solid.fg" | "secondary.subtle.bg" | "secondary.subtle" | "secondary.subtle.fg" | "secondary.surface.bg" | "secondary.surface" | "secondary.surface.border" | "secondary.surface.fg" | "secondary.outline" | "secondary.outline.bg" | "secondary.outline.border" | "secondary.outline.fg" | "secondary.plain" | "secondary.plain.bg" | "secondary.plain.fg" | "highlight" | "focusRing" | "overlay" | "amber.solid.bg" | "amber.solid" | "amber.solid.fg" | "amber.subtle.bg" | "amber.subtle" | "amber.subtle.fg" | "amber.surface.bg" | "amber.surface" | "amber.surface.border" | "amber.surface.fg" | "amber.outline" | "amber.outline.bg" | "amber.outline.border" | "amber.outline.fg" | "amber.plain" | "amber.plain.bg" | "amber.plain.fg" | "blue.solid.bg" | "blue.solid" | "blue.solid.fg" | "blue.subtle.bg" | "blue.subtle" | "blue.subtle.fg" | "blue.surface.bg" | "blue.surface" | "blue.surface.border" | "blue.surface.fg" | "blue.outline" | "blue.outline.bg" | "blue.outline.border" | "blue.outline.fg" | "blue.plain" | "blue.plain.bg" | "blue.plain.fg" | "bronze" | "bronze.solid.bg" | "bronze.solid" | "bronze.solid.fg" | "bronze.subtle.bg" | "bronze.subtle" | "bronze.subtle.fg" | "bronze.surface.bg" | "bronze.surface" | "bronze.surface.border" | "bronze.surface.fg" | "bronze.outline" | "bronze.outline.bg" | "bronze.outline.border" | "bronze.outline.fg" | "bronze.plain" | "bronze.plain.bg" | "bronze.plain.fg" | "brown" | "brown.solid.bg" | "brown.solid" | "brown.solid.fg" | "brown.subtle.bg" | "brown.subtle" | "brown.subtle.fg" | "brown.surface.bg" | "brown.surface" | "brown.surface.border" | "brown.surface.fg" | "brown.outline" | "brown.outline.bg" | "brown.outline.border" | "brown.outline.fg" | "brown.plain" | "brown.plain.bg" | "brown.plain.fg" | "crimson" | "crimson.solid.bg" | "crimson.solid" | "crimson.solid.fg" | "crimson.subtle.bg" | "crimson.subtle" | "crimson.subtle.fg" | "crimson.surface.bg" | "crimson.surface" | "crimson.surface.border" | "crimson.surface.fg" | "crimson.outline" | "crimson.outline.bg" | "crimson.outline.border" | "crimson.outline.fg" | "crimson.plain" | "crimson.plain.bg" | "crimson.plain.fg" | "cyan.solid.bg" | "cyan.solid" | "cyan.solid.fg" | "cyan.subtle.bg" | "cyan.subtle" | "cyan.subtle.fg" | "cyan.surface.bg" | "cyan.surface" | "cyan.surface.border" | "cyan.surface.fg" | "cyan.outline" | "cyan.outline.bg" | "cyan.outline.border" | "cyan.outline.fg" | "cyan.plain" | "cyan.plain.bg" | "cyan.plain.fg" | "gold" | "gold.solid.bg" | "gold.solid" | "gold.solid.fg" | "gold.subtle.bg" | "gold.subtle" | "gold.subtle.fg" | "gold.surface.bg" | "gold.surface" | "gold.surface.border" | "gold.surface.fg" | "gold.outline" | "gold.outline.bg" | "gold.outline.border" | "gold.outline.fg" | "gold.plain" | "gold.plain.bg" | "gold.plain.fg" | "grass" | "grass.solid.bg" | "grass.solid" | "grass.solid.fg" | "grass.subtle.bg" | "grass.subtle" | "grass.subtle.fg" | "grass.surface.bg" | "grass.surface" | "grass.surface.border" | "grass.surface.fg" | "grass.outline" | "grass.outline.bg" | "grass.outline.border" | "grass.outline.fg" | "grass.plain" | "grass.plain.bg" | "grass.plain.fg" | "gray.solid.bg" | "gray.solid" | "gray.solid.fg" | "gray.subtle.bg" | "gray.subtle" | "gray.subtle.fg" | "gray.surface.bg" | "gray.surface" | "gray.surface.border" | "gray.surface.fg" | "gray.outline" | "gray.outline.bg" | "gray.outline.border" | "gray.outline.fg" | "gray.plain" | "gray.plain.bg" | "gray.plain.fg" | "green.solid.bg" | "green.solid" | "green.solid.fg" | "green.subtle.bg" | "green.subtle" | "green.subtle.fg" | "green.surface.bg" | "green.surface" | "green.surface.border" | "green.surface.fg" | "green.outline" | "green.outline.bg" | "green.outline.border" | "green.outline.fg" | "green.plain" | "green.plain.bg" | "green.plain.fg" | "indigo.solid.bg" | "indigo.solid" | "indigo.solid.fg" | "indigo.subtle.bg" | "indigo.subtle" | "indigo.subtle.fg" | "indigo.surface.bg" | "indigo.surface" | "indigo.surface.border" | "indigo.surface.fg" | "indigo.outline" | "indigo.outline.bg" | "indigo.outline.border" | "indigo.outline.fg" | "indigo.plain" | "indigo.plain.bg" | "indigo.plain.fg" | "iris" | "iris.solid.bg" | "iris.solid" | "iris.solid.fg" | "iris.subtle.bg" | "iris.subtle" | "iris.subtle.fg" | "iris.surface.bg" | "iris.surface" | "iris.surface.border" | "iris.surface.fg" | "iris.outline" | "iris.outline.bg" | "iris.outline.border" | "iris.outline.fg" | "iris.plain" | "iris.plain.bg" | "iris.plain.fg" | "jade" | "jade.solid.bg" | "jade.solid" | "jade.solid.fg" | "jade.subtle.bg" | "jade.subtle" | "jade.subtle.fg" | "jade.surface.bg" | "jade.surface" | "jade.surface.border" | "jade.surface.fg" | "jade.outline" | "jade.outline.bg" | "jade.outline.border" | "jade.outline.fg" | "jade.plain" | "jade.plain.bg" | "jade.plain.fg" | "lime.solid.bg" | "lime.solid" | "lime.solid.fg" | "lime.subtle.bg" | "lime.subtle" | "lime.subtle.fg" | "lime.surface.bg" | "lime.surface" | "lime.surface.border" | "lime.surface.fg" | "lime.outline" | "lime.outline.bg" | "lime.outline.border" | "lime.outline.fg" | "lime.plain" | "lime.plain.bg" | "lime.plain.fg" | "mauve" | "mauve.solid.bg" | "mauve.solid" | "mauve.solid.fg" | "mauve.subtle.bg" | "mauve.subtle" | "mauve.subtle.fg" | "mauve.surface.bg" | "mauve.surface" | "mauve.surface.border" | "mauve.surface.fg" | "mauve.outline" | "mauve.outline.bg" | "mauve.outline.border" | "mauve.outline.fg" | "mauve.plain" | "mauve.plain.bg" | "mauve.plain.fg" | "mint" | "mint.solid.bg" | "mint.solid" | "mint.solid.fg" | "mint.subtle.bg" | "mint.subtle" | "mint.subtle.fg" | "mint.surface.bg" | "mint.surface" | "mint.surface.border" | "mint.surface.fg" | "mint.outline" | "mint.outline.bg" | "mint.outline.border" | "mint.outline.fg" | "mint.plain" | "mint.plain.bg" | "mint.plain.fg" | "olive" | "olive.solid.bg" | "olive.solid" | "olive.solid.fg" | "olive.subtle.bg" | "olive.subtle" | "olive.subtle.fg" | "olive.surface.bg" | "olive.surface" | "olive.surface.border" | "olive.surface.fg" | "olive.outline" | "olive.outline.bg" | "olive.outline.border" | "olive.outline.fg" | "olive.plain" | "olive.plain.bg" | "olive.plain.fg" | "orange.solid.bg" | "orange.solid" | "orange.solid.fg" | "orange.subtle.bg" | "orange.subtle" | "orange.subtle.fg" | "orange.surface.bg" | "orange.surface" | "orange.surface.border" | "orange.surface.fg" | "orange.outline" | "orange.outline.bg" | "orange.outline.border" | "orange.outline.fg" | "orange.plain" | "orange.plain.bg" | "orange.plain.fg" | "pink.solid.bg" | "pink.solid" | "pink.solid.fg" | "pink.subtle.bg" | "pink.subtle" | "pink.subtle.fg" | "pink.surface.bg" | "pink.surface" | "pink.surface.border" | "pink.surface.fg" | "pink.outline" | "pink.outline.bg" | "pink.outline.border" | "pink.outline.fg" | "pink.plain" | "pink.plain.bg" | "pink.plain.fg" | "plum" | "plum.solid.bg" | "plum.solid" | "plum.solid.fg" | "plum.subtle.bg" | "plum.subtle" | "plum.subtle.fg" | "plum.surface.bg" | "plum.surface" | "plum.surface.border" | "plum.surface.fg" | "plum.outline" | "plum.outline.bg" | "plum.outline.border" | "plum.outline.fg" | "plum.plain" | "plum.plain.bg" | "plum.plain.fg" | "purple.solid.bg" | "purple.solid" | "purple.solid.fg" | "purple.subtle.bg" | "purple.subtle" | "purple.subtle.fg" | "purple.surface.bg" | "purple.surface" | "purple.surface.border" | "purple.surface.fg" | "purple.outline" | "purple.outline.bg" | "purple.outline.border" | "purple.outline.fg" | "purple.plain" | "purple.plain.bg" | "purple.plain.fg" | "red.solid.bg" | "red.solid" | "red.solid.fg" | "red.subtle.bg" | "red.subtle" | "red.subtle.fg" | "red.surface.bg" | "red.surface" | "red.surface.border" | "red.surface.fg" | "red.outline" | "red.outline.bg" | "red.outline.border" | "red.outline.fg" | "red.plain" | "red.plain.bg" | "red.plain.fg" | "ruby" | "ruby.solid.bg" | "ruby.solid" | "ruby.solid.fg" | "ruby.subtle.bg" | "ruby.subtle" | "ruby.subtle.fg" | "ruby.surface.bg" | "ruby.surface" | "ruby.surface.border" | "ruby.surface.fg" | "ruby.outline" | "ruby.outline.bg" | "ruby.outline.border" | "ruby.outline.fg" | "ruby.plain" | "ruby.plain.bg" | "ruby.plain.fg" | "sage" | "sage.solid.bg" | "sage.solid" | "sage.solid.fg" | "sage.subtle.bg" | "sage.subtle" | "sage.subtle.fg" | "sage.surface.bg" | "sage.surface" | "sage.surface.border" | "sage.surface.fg" | "sage.outline" | "sage.outline.bg" | "sage.outline.border" | "sage.outline.fg" | "sage.plain" | "sage.plain.bg" | "sage.plain.fg" | "sand" | "sand.solid.bg" | "sand.solid" | "sand.solid.fg" | "sand.subtle.bg" | "sand.subtle" | "sand.subtle.fg" | "sand.surface.bg" | "sand.surface" | "sand.surface.border" | "sand.surface.fg" | "sand.outline" | "sand.outline.bg" | "sand.outline.border" | "sand.outline.fg" | "sand.plain" | "sand.plain.bg" | "sand.plain.fg" | "sky.solid.bg" | "sky.solid" | "sky.solid.fg" | "sky.subtle.bg" | "sky.subtle" | "sky.subtle.fg" | "sky.surface.bg" | "sky.surface" | "sky.surface.border" | "sky.surface.fg" | "sky.outline" | "sky.outline.bg" | "sky.outline.border" | "sky.outline.fg" | "sky.plain" | "sky.plain.bg" | "sky.plain.fg" | "slate.solid.bg" | "slate.solid" | "slate.solid.fg" | "slate.subtle.bg" | "slate.subtle" | "slate.subtle.fg" | "slate.surface.bg" | "slate.surface" | "slate.surface.border" | "slate.surface.fg" | "slate.outline" | "slate.outline.bg" | "slate.outline.border" | "slate.outline.fg" | "slate.plain" | "slate.plain.bg" | "slate.plain.fg" | "teal.solid.bg" | "teal.solid" | "teal.solid.fg" | "teal.subtle.bg" | "teal.subtle" | "teal.subtle.fg" | "teal.surface.bg" | "teal.surface" | "teal.surface.border" | "teal.surface.fg" | "teal.outline" | "teal.outline.bg" | "teal.outline.border" | "teal.outline.fg" | "teal.plain" | "teal.plain.bg" | "teal.plain.fg" | "tomato" | "tomato.solid.bg" | "tomato.solid" | "tomato.solid.fg" | "tomato.subtle.bg" | "tomato.subtle" | "tomato.subtle.fg" | "tomato.surface.bg" | "tomato.surface" | "tomato.surface.border" | "tomato.surface.fg" | "tomato.outline" | "tomato.outline.bg" | "tomato.outline.border" | "tomato.outline.fg" | "tomato.plain" | "tomato.plain.bg" | "tomato.plain.fg" | "violet.solid.bg" | "violet.solid" | "violet.solid.fg" | "violet.subtle.bg" | "violet.subtle" | "violet.subtle.fg" | "violet.surface.bg" | "violet.surface" | "violet.surface.border" | "violet.surface.fg" | "violet.outline" | "violet.outline.bg" | "violet.outline.border" | "violet.outline.fg" | "violet.plain" | "violet.plain.bg" | "violet.plain.fg" | "yellow.solid.bg" | "yellow.solid" | "yellow.solid.fg" | "yellow.subtle.bg" | "yellow.subtle" | "yellow.subtle.fg" | "yellow.surface.bg" | "yellow.surface" | "yellow.surface.border" | "yellow.surface.fg" | "yellow.outline" | "yellow.outline.bg" | "yellow.outline.border" | "yellow.outline.fg" | "yellow.plain" | "yellow.plain.bg" | "yellow.plain.fg";
	textStyle: "8xl" | "9xl" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "label";
	layerStyle: "disabled";
	animationStyle: "slide-fade-in" | "slide-fade-out" | "scale-fade-in" | "scale-fade-out";
}



type WithColorOpacityModifier<T> = [T] extends [string] ? `${T}/${string}` & { __colorOpacityModifier?: true } : never

type ImportantMark = "!" | "!important"
type WhitespaceImportant = ` ${ImportantMark}`
type Important = ImportantMark | WhitespaceImportant
type WithImportant<T> = [T] extends [string] ? `${T}${Important}` & { __important?: true } : never

/**
 * Only relevant when using `strictTokens` or `strictPropertyValues` in your config.
 * - Allows you to use an escape hatch (e.g. `[123px]`) to use any string as a value.
 * - Allows you to use a color opacity modifier (e.g. `red/300`) with known color values.
 * - Allows you to use an important mark (e.g. `!` or `!important`) in the value.
 *
 * This is useful when you want to use a value that is not defined in the config or want to opt-out of the defaults.
 *
 * @example
 * css({
 *   fontSize: '[123px]', // ⚠️ will not throw even if you haven't defined 123px as a token
 * })
 *
 * @see https://panda-css.com/docs/concepts/writing-styles#stricttokens
 * @see https://panda-css.com/docs/concepts/writing-styles#strictpropertyvalues
 */
export type WithEscapeHatch<T> = T | `[${string}]` | WithColorOpacityModifier<T> | WithImportant<T>

/**
 * Will restrict the value of properties that have predefined values to those values only.
 *
 * @example
 * css({
 *   display: 'abc', // ❌ will throw
 * })
 *
 * @see https://panda-css.com/docs/concepts/writing-styles#strictpropertyvalues
 */
export type OnlyKnown<Key, Value> = Value extends boolean
  ? Value
  : Value extends `${infer _}` ? Value : never