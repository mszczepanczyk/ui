const tokens = {
  "aspectRatios.square": {
    "value": "1 / 1",
    "variable": "var(--aspect-ratios-square)"
  },
  "aspectRatios.landscape": {
    "value": "4 / 3",
    "variable": "var(--aspect-ratios-landscape)"
  },
  "aspectRatios.portrait": {
    "value": "3 / 4",
    "variable": "var(--aspect-ratios-portrait)"
  },
  "aspectRatios.wide": {
    "value": "16 / 9",
    "variable": "var(--aspect-ratios-wide)"
  },
  "aspectRatios.ultrawide": {
    "value": "18 / 5",
    "variable": "var(--aspect-ratios-ultrawide)"
  },
  "aspectRatios.golden": {
    "value": "1.618 / 1",
    "variable": "var(--aspect-ratios-golden)"
  },
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-default)"
  },
  "easings.linear": {
    "value": "linear",
    "variable": "var(--easings-linear)"
  },
  "easings.in": {
    "value": "cubic-bezier(0.4, 0, 1, 1)",
    "variable": "var(--easings-in)"
  },
  "easings.out": {
    "value": "cubic-bezier(0, 0, 0.2, 1)",
    "variable": "var(--easings-out)"
  },
  "easings.in-out": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-in-out)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "0.5rem",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--radii-2xl)"
  },
  "radii.3xl": {
    "value": "1.5rem",
    "variable": "var(--radii-3xl)"
  },
  "radii.4xl": {
    "value": "2rem",
    "variable": "var(--radii-4xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--font-weights-thin)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--font-weights-extralight)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--font-weights-extrabold)"
  },
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--font-weights-black)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    "value": "1.25",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.snug": {
    "value": "1.375",
    "variable": "var(--line-heights-snug)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    "value": "1.625",
    "variable": "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    "value": "2",
    "variable": "var(--line-heights-loose)"
  },
  "fonts.sans": {
    "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "variable": "var(--fonts-mono)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--letter-spacings-widest)"
  },
  "fontSizes.2xs": {
    "value": "0.5rem",
    "variable": "var(--font-sizes-2xs)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "3.75rem",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "6rem",
    "variable": "var(--font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    "value": "8rem",
    "variable": "var(--font-sizes-9xl)"
  },
  "shadows.2xs": {
    "value": "0 1px rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-2xs)"
  },
  "shadows.xs": {
    "value": "var(--shadows-xs)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "var(--shadows-sm)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--shadows-md)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "var(--shadows-lg)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "var(--shadows-xl)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.2xl": {
    "value": "var(--shadows-2xl)",
    "variable": "var(--shadows-2xl)"
  },
  "shadows.inset-2xs": {
    "value": "inset 0 1px rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-inset-2xs)"
  },
  "shadows.inset-xs": {
    "value": "inset 0 1px 1px rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-inset-xs)"
  },
  "shadows.inset-sm": {
    "value": "inset 0 2px 4px rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-inset-sm)"
  },
  "blurs.xs": {
    "value": "4px",
    "variable": "var(--blurs-xs)"
  },
  "blurs.sm": {
    "value": "8px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--spacing-28)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.4.5": {
    "value": "1.125rem",
    "variable": "var(--spacing-4\\.5)"
  },
  "spacing.5.5": {
    "value": "1.375rem",
    "variable": "var(--spacing-5\\.5)"
  },
  "sizes.0": {
    "value": "0rem",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--sizes-3\\.5)"
  },
  "sizes.4.5": {
    "value": "1.125rem",
    "variable": "var(--sizes-4\\.5)"
  },
  "sizes.5.5": {
    "value": "1.375rem",
    "variable": "var(--sizes-5\\.5)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.prose": {
    "value": "65ch",
    "variable": "var(--sizes-prose)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--animations-spin)"
  },
  "animations.ping": {
    "value": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    "variable": "var(--animations-ping)"
  },
  "animations.pulse": {
    "value": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "variable": "var(--animations-pulse)"
  },
  "animations.bounce": {
    "value": "bounce 1s infinite",
    "variable": "var(--animations-bounce)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.transparent": {
    "value": "rgb(0 0 0 / 0)",
    "variable": "var(--colors-transparent)"
  },
  "colors.rose.50": {
    "value": "#fff1f2",
    "variable": "var(--colors-rose-50)"
  },
  "colors.rose.100": {
    "value": "#ffe4e6",
    "variable": "var(--colors-rose-100)"
  },
  "colors.rose.200": {
    "value": "#fecdd3",
    "variable": "var(--colors-rose-200)"
  },
  "colors.rose.300": {
    "value": "#fda4af",
    "variable": "var(--colors-rose-300)"
  },
  "colors.rose.400": {
    "value": "#fb7185",
    "variable": "var(--colors-rose-400)"
  },
  "colors.rose.500": {
    "value": "#f43f5e",
    "variable": "var(--colors-rose-500)"
  },
  "colors.rose.600": {
    "value": "#e11d48",
    "variable": "var(--colors-rose-600)"
  },
  "colors.rose.700": {
    "value": "#be123c",
    "variable": "var(--colors-rose-700)"
  },
  "colors.rose.800": {
    "value": "#9f1239",
    "variable": "var(--colors-rose-800)"
  },
  "colors.rose.900": {
    "value": "#881337",
    "variable": "var(--colors-rose-900)"
  },
  "colors.rose.950": {
    "value": "#4c0519",
    "variable": "var(--colors-rose-950)"
  },
  "colors.pink.50": {
    "value": "#fdf2f8",
    "variable": "var(--colors-pink-50)"
  },
  "colors.pink.100": {
    "value": "#fce7f3",
    "variable": "var(--colors-pink-100)"
  },
  "colors.pink.200": {
    "value": "#fbcfe8",
    "variable": "var(--colors-pink-200)"
  },
  "colors.pink.300": {
    "value": "#f9a8d4",
    "variable": "var(--colors-pink-300)"
  },
  "colors.pink.400": {
    "value": "#f472b6",
    "variable": "var(--colors-pink-400)"
  },
  "colors.pink.500": {
    "value": "#ec4899",
    "variable": "var(--colors-pink-500)"
  },
  "colors.pink.600": {
    "value": "#db2777",
    "variable": "var(--colors-pink-600)"
  },
  "colors.pink.700": {
    "value": "#be185d",
    "variable": "var(--colors-pink-700)"
  },
  "colors.pink.800": {
    "value": "#9d174d",
    "variable": "var(--colors-pink-800)"
  },
  "colors.pink.900": {
    "value": "#831843",
    "variable": "var(--colors-pink-900)"
  },
  "colors.pink.950": {
    "value": "#500724",
    "variable": "var(--colors-pink-950)"
  },
  "colors.fuchsia.50": {
    "value": "#fdf4ff",
    "variable": "var(--colors-fuchsia-50)"
  },
  "colors.fuchsia.100": {
    "value": "#fae8ff",
    "variable": "var(--colors-fuchsia-100)"
  },
  "colors.fuchsia.200": {
    "value": "#f5d0fe",
    "variable": "var(--colors-fuchsia-200)"
  },
  "colors.fuchsia.300": {
    "value": "#f0abfc",
    "variable": "var(--colors-fuchsia-300)"
  },
  "colors.fuchsia.400": {
    "value": "#e879f9",
    "variable": "var(--colors-fuchsia-400)"
  },
  "colors.fuchsia.500": {
    "value": "#d946ef",
    "variable": "var(--colors-fuchsia-500)"
  },
  "colors.fuchsia.600": {
    "value": "#c026d3",
    "variable": "var(--colors-fuchsia-600)"
  },
  "colors.fuchsia.700": {
    "value": "#a21caf",
    "variable": "var(--colors-fuchsia-700)"
  },
  "colors.fuchsia.800": {
    "value": "#86198f",
    "variable": "var(--colors-fuchsia-800)"
  },
  "colors.fuchsia.900": {
    "value": "#701a75",
    "variable": "var(--colors-fuchsia-900)"
  },
  "colors.fuchsia.950": {
    "value": "#4a044e",
    "variable": "var(--colors-fuchsia-950)"
  },
  "colors.purple.50": {
    "value": "#faf5ff",
    "variable": "var(--colors-purple-50)"
  },
  "colors.purple.100": {
    "value": "#f3e8ff",
    "variable": "var(--colors-purple-100)"
  },
  "colors.purple.200": {
    "value": "#e9d5ff",
    "variable": "var(--colors-purple-200)"
  },
  "colors.purple.300": {
    "value": "#d8b4fe",
    "variable": "var(--colors-purple-300)"
  },
  "colors.purple.400": {
    "value": "#c084fc",
    "variable": "var(--colors-purple-400)"
  },
  "colors.purple.500": {
    "value": "#a855f7",
    "variable": "var(--colors-purple-500)"
  },
  "colors.purple.600": {
    "value": "#9333ea",
    "variable": "var(--colors-purple-600)"
  },
  "colors.purple.700": {
    "value": "#7e22ce",
    "variable": "var(--colors-purple-700)"
  },
  "colors.purple.800": {
    "value": "#6b21a8",
    "variable": "var(--colors-purple-800)"
  },
  "colors.purple.900": {
    "value": "#581c87",
    "variable": "var(--colors-purple-900)"
  },
  "colors.purple.950": {
    "value": "#3b0764",
    "variable": "var(--colors-purple-950)"
  },
  "colors.violet.50": {
    "value": "#f5f3ff",
    "variable": "var(--colors-violet-50)"
  },
  "colors.violet.100": {
    "value": "#ede9fe",
    "variable": "var(--colors-violet-100)"
  },
  "colors.violet.200": {
    "value": "#ddd6fe",
    "variable": "var(--colors-violet-200)"
  },
  "colors.violet.300": {
    "value": "#c4b5fd",
    "variable": "var(--colors-violet-300)"
  },
  "colors.violet.400": {
    "value": "#a78bfa",
    "variable": "var(--colors-violet-400)"
  },
  "colors.violet.500": {
    "value": "#8b5cf6",
    "variable": "var(--colors-violet-500)"
  },
  "colors.violet.600": {
    "value": "#7c3aed",
    "variable": "var(--colors-violet-600)"
  },
  "colors.violet.700": {
    "value": "#6d28d9",
    "variable": "var(--colors-violet-700)"
  },
  "colors.violet.800": {
    "value": "#5b21b6",
    "variable": "var(--colors-violet-800)"
  },
  "colors.violet.900": {
    "value": "#4c1d95",
    "variable": "var(--colors-violet-900)"
  },
  "colors.violet.950": {
    "value": "#2e1065",
    "variable": "var(--colors-violet-950)"
  },
  "colors.indigo.50": {
    "value": "#eef2ff",
    "variable": "var(--colors-indigo-50)"
  },
  "colors.indigo.100": {
    "value": "#e0e7ff",
    "variable": "var(--colors-indigo-100)"
  },
  "colors.indigo.200": {
    "value": "#c7d2fe",
    "variable": "var(--colors-indigo-200)"
  },
  "colors.indigo.300": {
    "value": "#a5b4fc",
    "variable": "var(--colors-indigo-300)"
  },
  "colors.indigo.400": {
    "value": "#818cf8",
    "variable": "var(--colors-indigo-400)"
  },
  "colors.indigo.500": {
    "value": "#6366f1",
    "variable": "var(--colors-indigo-500)"
  },
  "colors.indigo.600": {
    "value": "#4f46e5",
    "variable": "var(--colors-indigo-600)"
  },
  "colors.indigo.700": {
    "value": "#4338ca",
    "variable": "var(--colors-indigo-700)"
  },
  "colors.indigo.800": {
    "value": "#3730a3",
    "variable": "var(--colors-indigo-800)"
  },
  "colors.indigo.900": {
    "value": "#312e81",
    "variable": "var(--colors-indigo-900)"
  },
  "colors.indigo.950": {
    "value": "#1e1b4b",
    "variable": "var(--colors-indigo-950)"
  },
  "colors.blue.50": {
    "value": "#eff6ff",
    "variable": "var(--colors-blue-50)"
  },
  "colors.blue.100": {
    "value": "#dbeafe",
    "variable": "var(--colors-blue-100)"
  },
  "colors.blue.200": {
    "value": "#bfdbfe",
    "variable": "var(--colors-blue-200)"
  },
  "colors.blue.300": {
    "value": "#93c5fd",
    "variable": "var(--colors-blue-300)"
  },
  "colors.blue.400": {
    "value": "#60a5fa",
    "variable": "var(--colors-blue-400)"
  },
  "colors.blue.500": {
    "value": "#3b82f6",
    "variable": "var(--colors-blue-500)"
  },
  "colors.blue.600": {
    "value": "#2563eb",
    "variable": "var(--colors-blue-600)"
  },
  "colors.blue.700": {
    "value": "#1d4ed8",
    "variable": "var(--colors-blue-700)"
  },
  "colors.blue.800": {
    "value": "#1e40af",
    "variable": "var(--colors-blue-800)"
  },
  "colors.blue.900": {
    "value": "#1e3a8a",
    "variable": "var(--colors-blue-900)"
  },
  "colors.blue.950": {
    "value": "#172554",
    "variable": "var(--colors-blue-950)"
  },
  "colors.sky.50": {
    "value": "#f0f9ff",
    "variable": "var(--colors-sky-50)"
  },
  "colors.sky.100": {
    "value": "#e0f2fe",
    "variable": "var(--colors-sky-100)"
  },
  "colors.sky.200": {
    "value": "#bae6fd",
    "variable": "var(--colors-sky-200)"
  },
  "colors.sky.300": {
    "value": "#7dd3fc",
    "variable": "var(--colors-sky-300)"
  },
  "colors.sky.400": {
    "value": "#38bdf8",
    "variable": "var(--colors-sky-400)"
  },
  "colors.sky.500": {
    "value": "#0ea5e9",
    "variable": "var(--colors-sky-500)"
  },
  "colors.sky.600": {
    "value": "#0284c7",
    "variable": "var(--colors-sky-600)"
  },
  "colors.sky.700": {
    "value": "#0369a1",
    "variable": "var(--colors-sky-700)"
  },
  "colors.sky.800": {
    "value": "#075985",
    "variable": "var(--colors-sky-800)"
  },
  "colors.sky.900": {
    "value": "#0c4a6e",
    "variable": "var(--colors-sky-900)"
  },
  "colors.sky.950": {
    "value": "#082f49",
    "variable": "var(--colors-sky-950)"
  },
  "colors.cyan.50": {
    "value": "#ecfeff",
    "variable": "var(--colors-cyan-50)"
  },
  "colors.cyan.100": {
    "value": "#cffafe",
    "variable": "var(--colors-cyan-100)"
  },
  "colors.cyan.200": {
    "value": "#a5f3fc",
    "variable": "var(--colors-cyan-200)"
  },
  "colors.cyan.300": {
    "value": "#67e8f9",
    "variable": "var(--colors-cyan-300)"
  },
  "colors.cyan.400": {
    "value": "#22d3ee",
    "variable": "var(--colors-cyan-400)"
  },
  "colors.cyan.500": {
    "value": "#06b6d4",
    "variable": "var(--colors-cyan-500)"
  },
  "colors.cyan.600": {
    "value": "#0891b2",
    "variable": "var(--colors-cyan-600)"
  },
  "colors.cyan.700": {
    "value": "#0e7490",
    "variable": "var(--colors-cyan-700)"
  },
  "colors.cyan.800": {
    "value": "#155e75",
    "variable": "var(--colors-cyan-800)"
  },
  "colors.cyan.900": {
    "value": "#164e63",
    "variable": "var(--colors-cyan-900)"
  },
  "colors.cyan.950": {
    "value": "#083344",
    "variable": "var(--colors-cyan-950)"
  },
  "colors.teal.50": {
    "value": "#f0fdfa",
    "variable": "var(--colors-teal-50)"
  },
  "colors.teal.100": {
    "value": "#ccfbf1",
    "variable": "var(--colors-teal-100)"
  },
  "colors.teal.200": {
    "value": "#99f6e4",
    "variable": "var(--colors-teal-200)"
  },
  "colors.teal.300": {
    "value": "#5eead4",
    "variable": "var(--colors-teal-300)"
  },
  "colors.teal.400": {
    "value": "#2dd4bf",
    "variable": "var(--colors-teal-400)"
  },
  "colors.teal.500": {
    "value": "#14b8a6",
    "variable": "var(--colors-teal-500)"
  },
  "colors.teal.600": {
    "value": "#0d9488",
    "variable": "var(--colors-teal-600)"
  },
  "colors.teal.700": {
    "value": "#0f766e",
    "variable": "var(--colors-teal-700)"
  },
  "colors.teal.800": {
    "value": "#115e59",
    "variable": "var(--colors-teal-800)"
  },
  "colors.teal.900": {
    "value": "#134e4a",
    "variable": "var(--colors-teal-900)"
  },
  "colors.teal.950": {
    "value": "#042f2e",
    "variable": "var(--colors-teal-950)"
  },
  "colors.emerald.50": {
    "value": "#ecfdf5",
    "variable": "var(--colors-emerald-50)"
  },
  "colors.emerald.100": {
    "value": "#d1fae5",
    "variable": "var(--colors-emerald-100)"
  },
  "colors.emerald.200": {
    "value": "#a7f3d0",
    "variable": "var(--colors-emerald-200)"
  },
  "colors.emerald.300": {
    "value": "#6ee7b7",
    "variable": "var(--colors-emerald-300)"
  },
  "colors.emerald.400": {
    "value": "#34d399",
    "variable": "var(--colors-emerald-400)"
  },
  "colors.emerald.500": {
    "value": "#10b981",
    "variable": "var(--colors-emerald-500)"
  },
  "colors.emerald.600": {
    "value": "#059669",
    "variable": "var(--colors-emerald-600)"
  },
  "colors.emerald.700": {
    "value": "#047857",
    "variable": "var(--colors-emerald-700)"
  },
  "colors.emerald.800": {
    "value": "#065f46",
    "variable": "var(--colors-emerald-800)"
  },
  "colors.emerald.900": {
    "value": "#064e3b",
    "variable": "var(--colors-emerald-900)"
  },
  "colors.emerald.950": {
    "value": "#022c22",
    "variable": "var(--colors-emerald-950)"
  },
  "colors.green.50": {
    "value": "#f0fdf4",
    "variable": "var(--colors-green-50)"
  },
  "colors.green.100": {
    "value": "#dcfce7",
    "variable": "var(--colors-green-100)"
  },
  "colors.green.200": {
    "value": "#bbf7d0",
    "variable": "var(--colors-green-200)"
  },
  "colors.green.300": {
    "value": "#86efac",
    "variable": "var(--colors-green-300)"
  },
  "colors.green.400": {
    "value": "#4ade80",
    "variable": "var(--colors-green-400)"
  },
  "colors.green.500": {
    "value": "#22c55e",
    "variable": "var(--colors-green-500)"
  },
  "colors.green.600": {
    "value": "#16a34a",
    "variable": "var(--colors-green-600)"
  },
  "colors.green.700": {
    "value": "#15803d",
    "variable": "var(--colors-green-700)"
  },
  "colors.green.800": {
    "value": "#166534",
    "variable": "var(--colors-green-800)"
  },
  "colors.green.900": {
    "value": "#14532d",
    "variable": "var(--colors-green-900)"
  },
  "colors.green.950": {
    "value": "#052e16",
    "variable": "var(--colors-green-950)"
  },
  "colors.lime.50": {
    "value": "#f7fee7",
    "variable": "var(--colors-lime-50)"
  },
  "colors.lime.100": {
    "value": "#ecfccb",
    "variable": "var(--colors-lime-100)"
  },
  "colors.lime.200": {
    "value": "#d9f99d",
    "variable": "var(--colors-lime-200)"
  },
  "colors.lime.300": {
    "value": "#bef264",
    "variable": "var(--colors-lime-300)"
  },
  "colors.lime.400": {
    "value": "#a3e635",
    "variable": "var(--colors-lime-400)"
  },
  "colors.lime.500": {
    "value": "#84cc16",
    "variable": "var(--colors-lime-500)"
  },
  "colors.lime.600": {
    "value": "#65a30d",
    "variable": "var(--colors-lime-600)"
  },
  "colors.lime.700": {
    "value": "#4d7c0f",
    "variable": "var(--colors-lime-700)"
  },
  "colors.lime.800": {
    "value": "#3f6212",
    "variable": "var(--colors-lime-800)"
  },
  "colors.lime.900": {
    "value": "#365314",
    "variable": "var(--colors-lime-900)"
  },
  "colors.lime.950": {
    "value": "#1a2e05",
    "variable": "var(--colors-lime-950)"
  },
  "colors.yellow.50": {
    "value": "#fefce8",
    "variable": "var(--colors-yellow-50)"
  },
  "colors.yellow.100": {
    "value": "#fef9c3",
    "variable": "var(--colors-yellow-100)"
  },
  "colors.yellow.200": {
    "value": "#fef08a",
    "variable": "var(--colors-yellow-200)"
  },
  "colors.yellow.300": {
    "value": "#fde047",
    "variable": "var(--colors-yellow-300)"
  },
  "colors.yellow.400": {
    "value": "#facc15",
    "variable": "var(--colors-yellow-400)"
  },
  "colors.yellow.500": {
    "value": "#eab308",
    "variable": "var(--colors-yellow-500)"
  },
  "colors.yellow.600": {
    "value": "#ca8a04",
    "variable": "var(--colors-yellow-600)"
  },
  "colors.yellow.700": {
    "value": "#a16207",
    "variable": "var(--colors-yellow-700)"
  },
  "colors.yellow.800": {
    "value": "#854d0e",
    "variable": "var(--colors-yellow-800)"
  },
  "colors.yellow.900": {
    "value": "#713f12",
    "variable": "var(--colors-yellow-900)"
  },
  "colors.yellow.950": {
    "value": "#422006",
    "variable": "var(--colors-yellow-950)"
  },
  "colors.amber.50": {
    "value": "#fffbeb",
    "variable": "var(--colors-amber-50)"
  },
  "colors.amber.100": {
    "value": "#fef3c7",
    "variable": "var(--colors-amber-100)"
  },
  "colors.amber.200": {
    "value": "#fde68a",
    "variable": "var(--colors-amber-200)"
  },
  "colors.amber.300": {
    "value": "#fcd34d",
    "variable": "var(--colors-amber-300)"
  },
  "colors.amber.400": {
    "value": "#fbbf24",
    "variable": "var(--colors-amber-400)"
  },
  "colors.amber.500": {
    "value": "#f59e0b",
    "variable": "var(--colors-amber-500)"
  },
  "colors.amber.600": {
    "value": "#d97706",
    "variable": "var(--colors-amber-600)"
  },
  "colors.amber.700": {
    "value": "#b45309",
    "variable": "var(--colors-amber-700)"
  },
  "colors.amber.800": {
    "value": "#92400e",
    "variable": "var(--colors-amber-800)"
  },
  "colors.amber.900": {
    "value": "#78350f",
    "variable": "var(--colors-amber-900)"
  },
  "colors.amber.950": {
    "value": "#451a03",
    "variable": "var(--colors-amber-950)"
  },
  "colors.orange.50": {
    "value": "#fff7ed",
    "variable": "var(--colors-orange-50)"
  },
  "colors.orange.100": {
    "value": "#ffedd5",
    "variable": "var(--colors-orange-100)"
  },
  "colors.orange.200": {
    "value": "#fed7aa",
    "variable": "var(--colors-orange-200)"
  },
  "colors.orange.300": {
    "value": "#fdba74",
    "variable": "var(--colors-orange-300)"
  },
  "colors.orange.400": {
    "value": "#fb923c",
    "variable": "var(--colors-orange-400)"
  },
  "colors.orange.500": {
    "value": "#f97316",
    "variable": "var(--colors-orange-500)"
  },
  "colors.orange.600": {
    "value": "#ea580c",
    "variable": "var(--colors-orange-600)"
  },
  "colors.orange.700": {
    "value": "#c2410c",
    "variable": "var(--colors-orange-700)"
  },
  "colors.orange.800": {
    "value": "#9a3412",
    "variable": "var(--colors-orange-800)"
  },
  "colors.orange.900": {
    "value": "#7c2d12",
    "variable": "var(--colors-orange-900)"
  },
  "colors.orange.950": {
    "value": "#431407",
    "variable": "var(--colors-orange-950)"
  },
  "colors.red.50": {
    "value": "#fef2f2",
    "variable": "var(--colors-red-50)"
  },
  "colors.red.100": {
    "value": "#fee2e2",
    "variable": "var(--colors-red-100)"
  },
  "colors.red.200": {
    "value": "#fecaca",
    "variable": "var(--colors-red-200)"
  },
  "colors.red.300": {
    "value": "#fca5a5",
    "variable": "var(--colors-red-300)"
  },
  "colors.red.400": {
    "value": "#f87171",
    "variable": "var(--colors-red-400)"
  },
  "colors.red.500": {
    "value": "#ef4444",
    "variable": "var(--colors-red-500)"
  },
  "colors.red.600": {
    "value": "#dc2626",
    "variable": "var(--colors-red-600)"
  },
  "colors.red.700": {
    "value": "#b91c1c",
    "variable": "var(--colors-red-700)"
  },
  "colors.red.800": {
    "value": "#991b1b",
    "variable": "var(--colors-red-800)"
  },
  "colors.red.900": {
    "value": "#7f1d1d",
    "variable": "var(--colors-red-900)"
  },
  "colors.red.950": {
    "value": "#450a0a",
    "variable": "var(--colors-red-950)"
  },
  "colors.neutral.50": {
    "value": "#fafafa",
    "variable": "var(--colors-neutral-50)"
  },
  "colors.neutral.100": {
    "value": "#f5f5f5",
    "variable": "var(--colors-neutral-100)"
  },
  "colors.neutral.200": {
    "value": "#e5e5e5",
    "variable": "var(--colors-neutral-200)"
  },
  "colors.neutral.300": {
    "value": "#d4d4d4",
    "variable": "var(--colors-neutral-300)"
  },
  "colors.neutral.400": {
    "value": "#a3a3a3",
    "variable": "var(--colors-neutral-400)"
  },
  "colors.neutral.500": {
    "value": "#737373",
    "variable": "var(--colors-neutral-500)"
  },
  "colors.neutral.600": {
    "value": "#525252",
    "variable": "var(--colors-neutral-600)"
  },
  "colors.neutral.700": {
    "value": "#404040",
    "variable": "var(--colors-neutral-700)"
  },
  "colors.neutral.800": {
    "value": "#262626",
    "variable": "var(--colors-neutral-800)"
  },
  "colors.neutral.900": {
    "value": "#171717",
    "variable": "var(--colors-neutral-900)"
  },
  "colors.neutral.950": {
    "value": "#0a0a0a",
    "variable": "var(--colors-neutral-950)"
  },
  "colors.stone.50": {
    "value": "#fafaf9",
    "variable": "var(--colors-stone-50)"
  },
  "colors.stone.100": {
    "value": "#f5f5f4",
    "variable": "var(--colors-stone-100)"
  },
  "colors.stone.200": {
    "value": "#e7e5e4",
    "variable": "var(--colors-stone-200)"
  },
  "colors.stone.300": {
    "value": "#d6d3d1",
    "variable": "var(--colors-stone-300)"
  },
  "colors.stone.400": {
    "value": "#a8a29e",
    "variable": "var(--colors-stone-400)"
  },
  "colors.stone.500": {
    "value": "#78716c",
    "variable": "var(--colors-stone-500)"
  },
  "colors.stone.600": {
    "value": "#57534e",
    "variable": "var(--colors-stone-600)"
  },
  "colors.stone.700": {
    "value": "#44403c",
    "variable": "var(--colors-stone-700)"
  },
  "colors.stone.800": {
    "value": "#292524",
    "variable": "var(--colors-stone-800)"
  },
  "colors.stone.900": {
    "value": "#1c1917",
    "variable": "var(--colors-stone-900)"
  },
  "colors.stone.950": {
    "value": "#0c0a09",
    "variable": "var(--colors-stone-950)"
  },
  "colors.zinc.50": {
    "value": "#fafafa",
    "variable": "var(--colors-zinc-50)"
  },
  "colors.zinc.100": {
    "value": "#f4f4f5",
    "variable": "var(--colors-zinc-100)"
  },
  "colors.zinc.200": {
    "value": "#e4e4e7",
    "variable": "var(--colors-zinc-200)"
  },
  "colors.zinc.300": {
    "value": "#d4d4d8",
    "variable": "var(--colors-zinc-300)"
  },
  "colors.zinc.400": {
    "value": "#a1a1aa",
    "variable": "var(--colors-zinc-400)"
  },
  "colors.zinc.500": {
    "value": "#71717a",
    "variable": "var(--colors-zinc-500)"
  },
  "colors.zinc.600": {
    "value": "#52525b",
    "variable": "var(--colors-zinc-600)"
  },
  "colors.zinc.700": {
    "value": "#3f3f46",
    "variable": "var(--colors-zinc-700)"
  },
  "colors.zinc.800": {
    "value": "#27272a",
    "variable": "var(--colors-zinc-800)"
  },
  "colors.zinc.900": {
    "value": "#18181b",
    "variable": "var(--colors-zinc-900)"
  },
  "colors.zinc.950": {
    "value": "#09090b",
    "variable": "var(--colors-zinc-950)"
  },
  "colors.gray.50": {
    "value": "#f9fafb",
    "variable": "var(--colors-gray-50)"
  },
  "colors.gray.100": {
    "value": "#f3f4f6",
    "variable": "var(--colors-gray-100)"
  },
  "colors.gray.200": {
    "value": "#e5e7eb",
    "variable": "var(--colors-gray-200)"
  },
  "colors.gray.300": {
    "value": "#d1d5db",
    "variable": "var(--colors-gray-300)"
  },
  "colors.gray.400": {
    "value": "#9ca3af",
    "variable": "var(--colors-gray-400)"
  },
  "colors.gray.500": {
    "value": "#6b7280",
    "variable": "var(--colors-gray-500)"
  },
  "colors.gray.600": {
    "value": "#4b5563",
    "variable": "var(--colors-gray-600)"
  },
  "colors.gray.700": {
    "value": "#374151",
    "variable": "var(--colors-gray-700)"
  },
  "colors.gray.800": {
    "value": "#1f2937",
    "variable": "var(--colors-gray-800)"
  },
  "colors.gray.900": {
    "value": "#111827",
    "variable": "var(--colors-gray-900)"
  },
  "colors.gray.950": {
    "value": "#030712",
    "variable": "var(--colors-gray-950)"
  },
  "colors.slate.50": {
    "value": "#f8fafc",
    "variable": "var(--colors-slate-50)"
  },
  "colors.slate.100": {
    "value": "#f1f5f9",
    "variable": "var(--colors-slate-100)"
  },
  "colors.slate.200": {
    "value": "#e2e8f0",
    "variable": "var(--colors-slate-200)"
  },
  "colors.slate.300": {
    "value": "#cbd5e1",
    "variable": "var(--colors-slate-300)"
  },
  "colors.slate.400": {
    "value": "#94a3b8",
    "variable": "var(--colors-slate-400)"
  },
  "colors.slate.500": {
    "value": "#64748b",
    "variable": "var(--colors-slate-500)"
  },
  "colors.slate.600": {
    "value": "#475569",
    "variable": "var(--colors-slate-600)"
  },
  "colors.slate.700": {
    "value": "#334155",
    "variable": "var(--colors-slate-700)"
  },
  "colors.slate.800": {
    "value": "#1e293b",
    "variable": "var(--colors-slate-800)"
  },
  "colors.slate.900": {
    "value": "#0f172a",
    "variable": "var(--colors-slate-900)"
  },
  "colors.slate.950": {
    "value": "#020617",
    "variable": "var(--colors-slate-950)"
  },
  "colors.black": {
    "value": "#000000",
    "variable": "var(--colors-black)"
  },
  "colors.black.a1": {
    "value": "rgba(0, 0, 0, 0.05)",
    "variable": "var(--colors-black-a1)"
  },
  "colors.black.a2": {
    "value": "rgba(0, 0, 0, 0.1)",
    "variable": "var(--colors-black-a2)"
  },
  "colors.black.a3": {
    "value": "rgba(0, 0, 0, 0.15)",
    "variable": "var(--colors-black-a3)"
  },
  "colors.black.a4": {
    "value": "rgba(0, 0, 0, 0.2)",
    "variable": "var(--colors-black-a4)"
  },
  "colors.black.a5": {
    "value": "rgba(0, 0, 0, 0.3)",
    "variable": "var(--colors-black-a5)"
  },
  "colors.black.a6": {
    "value": "rgba(0, 0, 0, 0.4)",
    "variable": "var(--colors-black-a6)"
  },
  "colors.black.a7": {
    "value": "rgba(0, 0, 0, 0.5)",
    "variable": "var(--colors-black-a7)"
  },
  "colors.black.a8": {
    "value": "rgba(0, 0, 0, 0.6)",
    "variable": "var(--colors-black-a8)"
  },
  "colors.black.a9": {
    "value": "rgba(0, 0, 0, 0.7)",
    "variable": "var(--colors-black-a9)"
  },
  "colors.black.a10": {
    "value": "rgba(0, 0, 0, 0.8)",
    "variable": "var(--colors-black-a10)"
  },
  "colors.black.a11": {
    "value": "rgba(0, 0, 0, 0.9)",
    "variable": "var(--colors-black-a11)"
  },
  "colors.black.a12": {
    "value": "rgba(0, 0, 0, 0.95)",
    "variable": "var(--colors-black-a12)"
  },
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "colors.white.a1": {
    "value": "rgba(255, 255, 255, 0.05)",
    "variable": "var(--colors-white-a1)"
  },
  "colors.white.a2": {
    "value": "rgba(255, 255, 255, 0.1)",
    "variable": "var(--colors-white-a2)"
  },
  "colors.white.a3": {
    "value": "rgba(255, 255, 255, 0.15)",
    "variable": "var(--colors-white-a3)"
  },
  "colors.white.a4": {
    "value": "rgba(255, 255, 255, 0.2)",
    "variable": "var(--colors-white-a4)"
  },
  "colors.white.a5": {
    "value": "rgba(255, 255, 255, 0.3)",
    "variable": "var(--colors-white-a5)"
  },
  "colors.white.a6": {
    "value": "rgba(255, 255, 255, 0.4)",
    "variable": "var(--colors-white-a6)"
  },
  "colors.white.a7": {
    "value": "rgba(255, 255, 255, 0.5)",
    "variable": "var(--colors-white-a7)"
  },
  "colors.white.a8": {
    "value": "rgba(255, 255, 255, 0.6)",
    "variable": "var(--colors-white-a8)"
  },
  "colors.white.a9": {
    "value": "rgba(255, 255, 255, 0.7)",
    "variable": "var(--colors-white-a9)"
  },
  "colors.white.a10": {
    "value": "rgba(255, 255, 255, 0.8)",
    "variable": "var(--colors-white-a10)"
  },
  "colors.white.a11": {
    "value": "rgba(255, 255, 255, 0.9)",
    "variable": "var(--colors-white-a11)"
  },
  "colors.white.a12": {
    "value": "rgba(255, 255, 255, 0.95)",
    "variable": "var(--colors-white-a12)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "250ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "300ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "400ms",
    "variable": "var(--durations-slowest)"
  },
  "zIndex.hide": {
    "value": -1,
    "variable": "var(--z-index-hide)"
  },
  "zIndex.base": {
    "value": 0,
    "variable": "var(--z-index-base)"
  },
  "zIndex.docked": {
    "value": 10,
    "variable": "var(--z-index-docked)"
  },
  "zIndex.dropdown": {
    "value": 1000,
    "variable": "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": 1100,
    "variable": "var(--z-index-sticky)"
  },
  "zIndex.banner": {
    "value": 1200,
    "variable": "var(--z-index-banner)"
  },
  "zIndex.overlay": {
    "value": 1300,
    "variable": "var(--z-index-overlay)"
  },
  "zIndex.modal": {
    "value": 1400,
    "variable": "var(--z-index-modal)"
  },
  "zIndex.popover": {
    "value": 1500,
    "variable": "var(--z-index-popover)"
  },
  "zIndex.skipLink": {
    "value": 1600,
    "variable": "var(--z-index-skip-link)"
  },
  "zIndex.toast": {
    "value": 1700,
    "variable": "var(--z-index-toast)"
  },
  "zIndex.tooltip": {
    "value": 1800,
    "variable": "var(--z-index-tooltip)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "radii.l1": {
    "value": "var(--radii-xs)",
    "variable": "var(--radii-l1)"
  },
  "radii.l2": {
    "value": "var(--radii-sm)",
    "variable": "var(--radii-l2)"
  },
  "radii.l3": {
    "value": "var(--radii-md)",
    "variable": "var(--radii-l3)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--spacing-28) * -1)",
    "variable": "var(--spacing-28)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--spacing-36) * -1)",
    "variable": "var(--spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--spacing-44) * -1)",
    "variable": "var(--spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--spacing-52) * -1)",
    "variable": "var(--spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--spacing-60) * -1)",
    "variable": "var(--spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--spacing-3\\.5) * -1)",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.-4.5": {
    "value": "calc(var(--spacing-4\\.5) * -1)",
    "variable": "var(--spacing-4\\.5)"
  },
  "spacing.-5.5": {
    "value": "calc(var(--spacing-5\\.5) * -1)",
    "variable": "var(--spacing-5\\.5)"
  },
  "colors.fg.default": {
    "value": "var(--colors-fg-default)",
    "variable": "var(--colors-fg-default)"
  },
  "colors.fg.muted": {
    "value": "var(--colors-fg-muted)",
    "variable": "var(--colors-fg-muted)"
  },
  "colors.fg.subtle": {
    "value": "var(--colors-fg-subtle)",
    "variable": "var(--colors-fg-subtle)"
  },
  "colors.fg.disabled": {
    "value": "var(--colors-fg-disabled)",
    "variable": "var(--colors-fg-disabled)"
  },
  "colors.fg.inverted": {
    "value": "var(--colors-fg-inverted)",
    "variable": "var(--colors-fg-inverted)"
  },
  "colors.bg.canvas": {
    "value": "var(--colors-bg-canvas)",
    "variable": "var(--colors-bg-canvas)"
  },
  "colors.bg.default": {
    "value": "var(--colors-bg-default)",
    "variable": "var(--colors-bg-default)"
  },
  "colors.bg.muted": {
    "value": "var(--colors-bg-muted)",
    "variable": "var(--colors-bg-muted)"
  },
  "colors.bg.subtle": {
    "value": "var(--colors-bg-subtle)",
    "variable": "var(--colors-bg-subtle)"
  },
  "colors.bg.emphasized": {
    "value": "var(--colors-bg-emphasized)",
    "variable": "var(--colors-bg-emphasized)"
  },
  "colors.bg.disabled": {
    "value": "var(--colors-bg-disabled)",
    "variable": "var(--colors-bg-disabled)"
  },
  "colors.border.default": {
    "value": "var(--colors-border-default)",
    "variable": "var(--colors-border-default)"
  },
  "colors.border.muted": {
    "value": "var(--colors-border-muted)",
    "variable": "var(--colors-border-muted)"
  },
  "colors.border.subtle": {
    "value": "var(--colors-border-subtle)",
    "variable": "var(--colors-border-subtle)"
  },
  "colors.border.emphasized": {
    "value": "var(--colors-border-emphasized)",
    "variable": "var(--colors-border-emphasized)"
  },
  "colors.border.disabled": {
    "value": "var(--colors-border-disabled)",
    "variable": "var(--colors-border-disabled)"
  },
  "colors.border.outline": {
    "value": "var(--colors-border-outline)",
    "variable": "var(--colors-border-outline)"
  },
  "colors.accent.default": {
    "value": "var(--colors-accent-default)",
    "variable": "var(--colors-accent-default)"
  },
  "colors.accent.emphasized": {
    "value": "var(--colors-accent-emphasized)",
    "variable": "var(--colors-accent-emphasized)"
  },
  "colors.accent.fg": {
    "value": "var(--colors-accent-fg)",
    "variable": "var(--colors-accent-fg)"
  },
  "colors.accent.muted": {
    "value": "var(--colors-accent-muted)",
    "variable": "var(--colors-accent-muted)"
  },
  "colors.accent.subtle": {
    "value": "var(--colors-accent-subtle)",
    "variable": "var(--colors-accent-subtle)"
  },
  "colors.accent.text": {
    "value": "var(--colors-accent-text)",
    "variable": "var(--colors-accent-text)"
  },
  "colors.success.default": {
    "value": "var(--colors-success-default)",
    "variable": "var(--colors-success-default)"
  },
  "colors.success.emphasized": {
    "value": "var(--colors-success-emphasized)",
    "variable": "var(--colors-success-emphasized)"
  },
  "colors.success.fg": {
    "value": "var(--colors-success-fg)",
    "variable": "var(--colors-success-fg)"
  },
  "colors.success.muted": {
    "value": "var(--colors-success-muted)",
    "variable": "var(--colors-success-muted)"
  },
  "colors.success.text": {
    "value": "var(--colors-success-text)",
    "variable": "var(--colors-success-text)"
  },
  "colors.warning.default": {
    "value": "var(--colors-warning-default)",
    "variable": "var(--colors-warning-default)"
  },
  "colors.warning.emphasized": {
    "value": "var(--colors-warning-emphasized)",
    "variable": "var(--colors-warning-emphasized)"
  },
  "colors.warning.fg": {
    "value": "var(--colors-warning-fg)",
    "variable": "var(--colors-warning-fg)"
  },
  "colors.warning.muted": {
    "value": "var(--colors-warning-muted)",
    "variable": "var(--colors-warning-muted)"
  },
  "colors.warning.text": {
    "value": "var(--colors-warning-text)",
    "variable": "var(--colors-warning-text)"
  },
  "colors.error.default": {
    "value": "var(--colors-error-default)",
    "variable": "var(--colors-error-default)"
  },
  "colors.error.emphasized": {
    "value": "var(--colors-error-emphasized)",
    "variable": "var(--colors-error-emphasized)"
  },
  "colors.error.fg": {
    "value": "var(--colors-error-fg)",
    "variable": "var(--colors-error-fg)"
  },
  "colors.error.muted": {
    "value": "var(--colors-error-muted)",
    "variable": "var(--colors-error-muted)"
  },
  "colors.error.text": {
    "value": "var(--colors-error-text)",
    "variable": "var(--colors-error-text)"
  },
  "colors.info.default": {
    "value": "var(--colors-info-default)",
    "variable": "var(--colors-info-default)"
  },
  "colors.info.emphasized": {
    "value": "var(--colors-info-emphasized)",
    "variable": "var(--colors-info-emphasized)"
  },
  "colors.info.fg": {
    "value": "var(--colors-info-fg)",
    "variable": "var(--colors-info-fg)"
  },
  "colors.info.muted": {
    "value": "var(--colors-info-muted)",
    "variable": "var(--colors-info-muted)"
  },
  "colors.info.text": {
    "value": "var(--colors-info-text)",
    "variable": "var(--colors-info-text)"
  },
  "colors.highlight.bg": {
    "value": "var(--colors-highlight-bg)",
    "variable": "var(--colors-highlight-bg)"
  },
  "colors.highlight.fg": {
    "value": "var(--colors-highlight-fg)",
    "variable": "var(--colors-highlight-fg)"
  },
  "colors.focusRing": {
    "value": "var(--colors-focus-ring)",
    "variable": "var(--colors-focus-ring)"
  },
  "colors.overlay": {
    "value": "var(--colors-overlay)",
    "variable": "var(--colors-overlay)"
  },
  "colors.amber.1": {
    "value": "var(--colors-amber-1)",
    "variable": "var(--colors-amber-1)"
  },
  "colors.amber.2": {
    "value": "var(--colors-amber-2)",
    "variable": "var(--colors-amber-2)"
  },
  "colors.amber.3": {
    "value": "var(--colors-amber-3)",
    "variable": "var(--colors-amber-3)"
  },
  "colors.amber.4": {
    "value": "var(--colors-amber-4)",
    "variable": "var(--colors-amber-4)"
  },
  "colors.amber.5": {
    "value": "var(--colors-amber-5)",
    "variable": "var(--colors-amber-5)"
  },
  "colors.amber.6": {
    "value": "var(--colors-amber-6)",
    "variable": "var(--colors-amber-6)"
  },
  "colors.amber.7": {
    "value": "var(--colors-amber-7)",
    "variable": "var(--colors-amber-7)"
  },
  "colors.amber.8": {
    "value": "var(--colors-amber-8)",
    "variable": "var(--colors-amber-8)"
  },
  "colors.amber.9": {
    "value": "var(--colors-amber-9)",
    "variable": "var(--colors-amber-9)"
  },
  "colors.amber.10": {
    "value": "var(--colors-amber-10)",
    "variable": "var(--colors-amber-10)"
  },
  "colors.amber.11": {
    "value": "var(--colors-amber-11)",
    "variable": "var(--colors-amber-11)"
  },
  "colors.amber.12": {
    "value": "var(--colors-amber-12)",
    "variable": "var(--colors-amber-12)"
  },
  "colors.amber.a1": {
    "value": "var(--colors-amber-a1)",
    "variable": "var(--colors-amber-a1)"
  },
  "colors.amber.a2": {
    "value": "var(--colors-amber-a2)",
    "variable": "var(--colors-amber-a2)"
  },
  "colors.amber.a3": {
    "value": "var(--colors-amber-a3)",
    "variable": "var(--colors-amber-a3)"
  },
  "colors.amber.a4": {
    "value": "var(--colors-amber-a4)",
    "variable": "var(--colors-amber-a4)"
  },
  "colors.amber.a5": {
    "value": "var(--colors-amber-a5)",
    "variable": "var(--colors-amber-a5)"
  },
  "colors.amber.a6": {
    "value": "var(--colors-amber-a6)",
    "variable": "var(--colors-amber-a6)"
  },
  "colors.amber.a7": {
    "value": "var(--colors-amber-a7)",
    "variable": "var(--colors-amber-a7)"
  },
  "colors.amber.a8": {
    "value": "var(--colors-amber-a8)",
    "variable": "var(--colors-amber-a8)"
  },
  "colors.amber.a9": {
    "value": "var(--colors-amber-a9)",
    "variable": "var(--colors-amber-a9)"
  },
  "colors.amber.a10": {
    "value": "var(--colors-amber-a10)",
    "variable": "var(--colors-amber-a10)"
  },
  "colors.amber.a11": {
    "value": "var(--colors-amber-a11)",
    "variable": "var(--colors-amber-a11)"
  },
  "colors.amber.a12": {
    "value": "var(--colors-amber-a12)",
    "variable": "var(--colors-amber-a12)"
  },
  "colors.amber.solid.bg": {
    "value": "var(--colors-amber-solid-bg)",
    "variable": "var(--colors-amber-solid-bg)"
  },
  "colors.amber.solid.bg.hover": {
    "value": "var(--colors-amber-solid-bg-hover)",
    "variable": "var(--colors-amber-solid-bg-hover)"
  },
  "colors.amber.solid.fg": {
    "value": "var(--colors-amber-solid-fg)",
    "variable": "var(--colors-amber-solid-fg)"
  },
  "colors.amber.subtle.bg": {
    "value": "var(--colors-amber-subtle-bg)",
    "variable": "var(--colors-amber-subtle-bg)"
  },
  "colors.amber.subtle.bg.hover": {
    "value": "var(--colors-amber-subtle-bg-hover)",
    "variable": "var(--colors-amber-subtle-bg-hover)"
  },
  "colors.amber.subtle.bg.active": {
    "value": "var(--colors-amber-subtle-bg-active)",
    "variable": "var(--colors-amber-subtle-bg-active)"
  },
  "colors.amber.subtle.fg": {
    "value": "var(--colors-amber-subtle-fg)",
    "variable": "var(--colors-amber-subtle-fg)"
  },
  "colors.amber.surface.bg": {
    "value": "var(--colors-amber-surface-bg)",
    "variable": "var(--colors-amber-surface-bg)"
  },
  "colors.amber.surface.bg.active": {
    "value": "var(--colors-amber-surface-bg-active)",
    "variable": "var(--colors-amber-surface-bg-active)"
  },
  "colors.amber.surface.border": {
    "value": "var(--colors-amber-surface-border)",
    "variable": "var(--colors-amber-surface-border)"
  },
  "colors.amber.surface.border.hover": {
    "value": "var(--colors-amber-surface-border-hover)",
    "variable": "var(--colors-amber-surface-border-hover)"
  },
  "colors.amber.surface.fg": {
    "value": "var(--colors-amber-surface-fg)",
    "variable": "var(--colors-amber-surface-fg)"
  },
  "colors.amber.outline.bg.hover": {
    "value": "var(--colors-amber-outline-bg-hover)",
    "variable": "var(--colors-amber-outline-bg-hover)"
  },
  "colors.amber.outline.bg.active": {
    "value": "var(--colors-amber-outline-bg-active)",
    "variable": "var(--colors-amber-outline-bg-active)"
  },
  "colors.amber.outline.border": {
    "value": "var(--colors-amber-outline-border)",
    "variable": "var(--colors-amber-outline-border)"
  },
  "colors.amber.outline.fg": {
    "value": "var(--colors-amber-outline-fg)",
    "variable": "var(--colors-amber-outline-fg)"
  },
  "colors.amber.plain.bg.hover": {
    "value": "var(--colors-amber-plain-bg-hover)",
    "variable": "var(--colors-amber-plain-bg-hover)"
  },
  "colors.amber.plain.bg.active": {
    "value": "var(--colors-amber-plain-bg-active)",
    "variable": "var(--colors-amber-plain-bg-active)"
  },
  "colors.amber.plain.fg": {
    "value": "var(--colors-amber-plain-fg)",
    "variable": "var(--colors-amber-plain-fg)"
  },
  "colors.blue.1": {
    "value": "var(--colors-blue-1)",
    "variable": "var(--colors-blue-1)"
  },
  "colors.blue.2": {
    "value": "var(--colors-blue-2)",
    "variable": "var(--colors-blue-2)"
  },
  "colors.blue.3": {
    "value": "var(--colors-blue-3)",
    "variable": "var(--colors-blue-3)"
  },
  "colors.blue.4": {
    "value": "var(--colors-blue-4)",
    "variable": "var(--colors-blue-4)"
  },
  "colors.blue.5": {
    "value": "var(--colors-blue-5)",
    "variable": "var(--colors-blue-5)"
  },
  "colors.blue.6": {
    "value": "var(--colors-blue-6)",
    "variable": "var(--colors-blue-6)"
  },
  "colors.blue.7": {
    "value": "var(--colors-blue-7)",
    "variable": "var(--colors-blue-7)"
  },
  "colors.blue.8": {
    "value": "var(--colors-blue-8)",
    "variable": "var(--colors-blue-8)"
  },
  "colors.blue.9": {
    "value": "var(--colors-blue-9)",
    "variable": "var(--colors-blue-9)"
  },
  "colors.blue.10": {
    "value": "var(--colors-blue-10)",
    "variable": "var(--colors-blue-10)"
  },
  "colors.blue.11": {
    "value": "var(--colors-blue-11)",
    "variable": "var(--colors-blue-11)"
  },
  "colors.blue.12": {
    "value": "var(--colors-blue-12)",
    "variable": "var(--colors-blue-12)"
  },
  "colors.blue.a1": {
    "value": "var(--colors-blue-a1)",
    "variable": "var(--colors-blue-a1)"
  },
  "colors.blue.a2": {
    "value": "var(--colors-blue-a2)",
    "variable": "var(--colors-blue-a2)"
  },
  "colors.blue.a3": {
    "value": "var(--colors-blue-a3)",
    "variable": "var(--colors-blue-a3)"
  },
  "colors.blue.a4": {
    "value": "var(--colors-blue-a4)",
    "variable": "var(--colors-blue-a4)"
  },
  "colors.blue.a5": {
    "value": "var(--colors-blue-a5)",
    "variable": "var(--colors-blue-a5)"
  },
  "colors.blue.a6": {
    "value": "var(--colors-blue-a6)",
    "variable": "var(--colors-blue-a6)"
  },
  "colors.blue.a7": {
    "value": "var(--colors-blue-a7)",
    "variable": "var(--colors-blue-a7)"
  },
  "colors.blue.a8": {
    "value": "var(--colors-blue-a8)",
    "variable": "var(--colors-blue-a8)"
  },
  "colors.blue.a9": {
    "value": "var(--colors-blue-a9)",
    "variable": "var(--colors-blue-a9)"
  },
  "colors.blue.a10": {
    "value": "var(--colors-blue-a10)",
    "variable": "var(--colors-blue-a10)"
  },
  "colors.blue.a11": {
    "value": "var(--colors-blue-a11)",
    "variable": "var(--colors-blue-a11)"
  },
  "colors.blue.a12": {
    "value": "var(--colors-blue-a12)",
    "variable": "var(--colors-blue-a12)"
  },
  "colors.blue.solid.bg": {
    "value": "var(--colors-blue-solid-bg)",
    "variable": "var(--colors-blue-solid-bg)"
  },
  "colors.blue.solid.bg.hover": {
    "value": "var(--colors-blue-solid-bg-hover)",
    "variable": "var(--colors-blue-solid-bg-hover)"
  },
  "colors.blue.solid.fg": {
    "value": "var(--colors-blue-solid-fg)",
    "variable": "var(--colors-blue-solid-fg)"
  },
  "colors.blue.subtle.bg": {
    "value": "var(--colors-blue-subtle-bg)",
    "variable": "var(--colors-blue-subtle-bg)"
  },
  "colors.blue.subtle.bg.hover": {
    "value": "var(--colors-blue-subtle-bg-hover)",
    "variable": "var(--colors-blue-subtle-bg-hover)"
  },
  "colors.blue.subtle.bg.active": {
    "value": "var(--colors-blue-subtle-bg-active)",
    "variable": "var(--colors-blue-subtle-bg-active)"
  },
  "colors.blue.subtle.fg": {
    "value": "var(--colors-blue-subtle-fg)",
    "variable": "var(--colors-blue-subtle-fg)"
  },
  "colors.blue.surface.bg": {
    "value": "var(--colors-blue-surface-bg)",
    "variable": "var(--colors-blue-surface-bg)"
  },
  "colors.blue.surface.bg.active": {
    "value": "var(--colors-blue-surface-bg-active)",
    "variable": "var(--colors-blue-surface-bg-active)"
  },
  "colors.blue.surface.border": {
    "value": "var(--colors-blue-surface-border)",
    "variable": "var(--colors-blue-surface-border)"
  },
  "colors.blue.surface.border.hover": {
    "value": "var(--colors-blue-surface-border-hover)",
    "variable": "var(--colors-blue-surface-border-hover)"
  },
  "colors.blue.surface.fg": {
    "value": "var(--colors-blue-surface-fg)",
    "variable": "var(--colors-blue-surface-fg)"
  },
  "colors.blue.outline.bg.hover": {
    "value": "var(--colors-blue-outline-bg-hover)",
    "variable": "var(--colors-blue-outline-bg-hover)"
  },
  "colors.blue.outline.bg.active": {
    "value": "var(--colors-blue-outline-bg-active)",
    "variable": "var(--colors-blue-outline-bg-active)"
  },
  "colors.blue.outline.border": {
    "value": "var(--colors-blue-outline-border)",
    "variable": "var(--colors-blue-outline-border)"
  },
  "colors.blue.outline.fg": {
    "value": "var(--colors-blue-outline-fg)",
    "variable": "var(--colors-blue-outline-fg)"
  },
  "colors.blue.plain.bg.hover": {
    "value": "var(--colors-blue-plain-bg-hover)",
    "variable": "var(--colors-blue-plain-bg-hover)"
  },
  "colors.blue.plain.bg.active": {
    "value": "var(--colors-blue-plain-bg-active)",
    "variable": "var(--colors-blue-plain-bg-active)"
  },
  "colors.blue.plain.fg": {
    "value": "var(--colors-blue-plain-fg)",
    "variable": "var(--colors-blue-plain-fg)"
  },
  "colors.bronze.1": {
    "value": "var(--colors-bronze-1)",
    "variable": "var(--colors-bronze-1)"
  },
  "colors.bronze.2": {
    "value": "var(--colors-bronze-2)",
    "variable": "var(--colors-bronze-2)"
  },
  "colors.bronze.3": {
    "value": "var(--colors-bronze-3)",
    "variable": "var(--colors-bronze-3)"
  },
  "colors.bronze.4": {
    "value": "var(--colors-bronze-4)",
    "variable": "var(--colors-bronze-4)"
  },
  "colors.bronze.5": {
    "value": "var(--colors-bronze-5)",
    "variable": "var(--colors-bronze-5)"
  },
  "colors.bronze.6": {
    "value": "var(--colors-bronze-6)",
    "variable": "var(--colors-bronze-6)"
  },
  "colors.bronze.7": {
    "value": "var(--colors-bronze-7)",
    "variable": "var(--colors-bronze-7)"
  },
  "colors.bronze.8": {
    "value": "var(--colors-bronze-8)",
    "variable": "var(--colors-bronze-8)"
  },
  "colors.bronze.9": {
    "value": "var(--colors-bronze-9)",
    "variable": "var(--colors-bronze-9)"
  },
  "colors.bronze.10": {
    "value": "var(--colors-bronze-10)",
    "variable": "var(--colors-bronze-10)"
  },
  "colors.bronze.11": {
    "value": "var(--colors-bronze-11)",
    "variable": "var(--colors-bronze-11)"
  },
  "colors.bronze.12": {
    "value": "var(--colors-bronze-12)",
    "variable": "var(--colors-bronze-12)"
  },
  "colors.bronze.a1": {
    "value": "var(--colors-bronze-a1)",
    "variable": "var(--colors-bronze-a1)"
  },
  "colors.bronze.a2": {
    "value": "var(--colors-bronze-a2)",
    "variable": "var(--colors-bronze-a2)"
  },
  "colors.bronze.a3": {
    "value": "var(--colors-bronze-a3)",
    "variable": "var(--colors-bronze-a3)"
  },
  "colors.bronze.a4": {
    "value": "var(--colors-bronze-a4)",
    "variable": "var(--colors-bronze-a4)"
  },
  "colors.bronze.a5": {
    "value": "var(--colors-bronze-a5)",
    "variable": "var(--colors-bronze-a5)"
  },
  "colors.bronze.a6": {
    "value": "var(--colors-bronze-a6)",
    "variable": "var(--colors-bronze-a6)"
  },
  "colors.bronze.a7": {
    "value": "var(--colors-bronze-a7)",
    "variable": "var(--colors-bronze-a7)"
  },
  "colors.bronze.a8": {
    "value": "var(--colors-bronze-a8)",
    "variable": "var(--colors-bronze-a8)"
  },
  "colors.bronze.a9": {
    "value": "var(--colors-bronze-a9)",
    "variable": "var(--colors-bronze-a9)"
  },
  "colors.bronze.a10": {
    "value": "var(--colors-bronze-a10)",
    "variable": "var(--colors-bronze-a10)"
  },
  "colors.bronze.a11": {
    "value": "var(--colors-bronze-a11)",
    "variable": "var(--colors-bronze-a11)"
  },
  "colors.bronze.a12": {
    "value": "var(--colors-bronze-a12)",
    "variable": "var(--colors-bronze-a12)"
  },
  "colors.bronze.solid.bg": {
    "value": "var(--colors-bronze-solid-bg)",
    "variable": "var(--colors-bronze-solid-bg)"
  },
  "colors.bronze.solid.bg.hover": {
    "value": "var(--colors-bronze-solid-bg-hover)",
    "variable": "var(--colors-bronze-solid-bg-hover)"
  },
  "colors.bronze.solid.fg": {
    "value": "var(--colors-bronze-solid-fg)",
    "variable": "var(--colors-bronze-solid-fg)"
  },
  "colors.bronze.subtle.bg": {
    "value": "var(--colors-bronze-subtle-bg)",
    "variable": "var(--colors-bronze-subtle-bg)"
  },
  "colors.bronze.subtle.bg.hover": {
    "value": "var(--colors-bronze-subtle-bg-hover)",
    "variable": "var(--colors-bronze-subtle-bg-hover)"
  },
  "colors.bronze.subtle.bg.active": {
    "value": "var(--colors-bronze-subtle-bg-active)",
    "variable": "var(--colors-bronze-subtle-bg-active)"
  },
  "colors.bronze.subtle.fg": {
    "value": "var(--colors-bronze-subtle-fg)",
    "variable": "var(--colors-bronze-subtle-fg)"
  },
  "colors.bronze.surface.bg": {
    "value": "var(--colors-bronze-surface-bg)",
    "variable": "var(--colors-bronze-surface-bg)"
  },
  "colors.bronze.surface.bg.active": {
    "value": "var(--colors-bronze-surface-bg-active)",
    "variable": "var(--colors-bronze-surface-bg-active)"
  },
  "colors.bronze.surface.border": {
    "value": "var(--colors-bronze-surface-border)",
    "variable": "var(--colors-bronze-surface-border)"
  },
  "colors.bronze.surface.border.hover": {
    "value": "var(--colors-bronze-surface-border-hover)",
    "variable": "var(--colors-bronze-surface-border-hover)"
  },
  "colors.bronze.surface.fg": {
    "value": "var(--colors-bronze-surface-fg)",
    "variable": "var(--colors-bronze-surface-fg)"
  },
  "colors.bronze.outline.bg.hover": {
    "value": "var(--colors-bronze-outline-bg-hover)",
    "variable": "var(--colors-bronze-outline-bg-hover)"
  },
  "colors.bronze.outline.bg.active": {
    "value": "var(--colors-bronze-outline-bg-active)",
    "variable": "var(--colors-bronze-outline-bg-active)"
  },
  "colors.bronze.outline.border": {
    "value": "var(--colors-bronze-outline-border)",
    "variable": "var(--colors-bronze-outline-border)"
  },
  "colors.bronze.outline.fg": {
    "value": "var(--colors-bronze-outline-fg)",
    "variable": "var(--colors-bronze-outline-fg)"
  },
  "colors.bronze.plain.bg.hover": {
    "value": "var(--colors-bronze-plain-bg-hover)",
    "variable": "var(--colors-bronze-plain-bg-hover)"
  },
  "colors.bronze.plain.bg.active": {
    "value": "var(--colors-bronze-plain-bg-active)",
    "variable": "var(--colors-bronze-plain-bg-active)"
  },
  "colors.bronze.plain.fg": {
    "value": "var(--colors-bronze-plain-fg)",
    "variable": "var(--colors-bronze-plain-fg)"
  },
  "colors.brown.1": {
    "value": "var(--colors-brown-1)",
    "variable": "var(--colors-brown-1)"
  },
  "colors.brown.2": {
    "value": "var(--colors-brown-2)",
    "variable": "var(--colors-brown-2)"
  },
  "colors.brown.3": {
    "value": "var(--colors-brown-3)",
    "variable": "var(--colors-brown-3)"
  },
  "colors.brown.4": {
    "value": "var(--colors-brown-4)",
    "variable": "var(--colors-brown-4)"
  },
  "colors.brown.5": {
    "value": "var(--colors-brown-5)",
    "variable": "var(--colors-brown-5)"
  },
  "colors.brown.6": {
    "value": "var(--colors-brown-6)",
    "variable": "var(--colors-brown-6)"
  },
  "colors.brown.7": {
    "value": "var(--colors-brown-7)",
    "variable": "var(--colors-brown-7)"
  },
  "colors.brown.8": {
    "value": "var(--colors-brown-8)",
    "variable": "var(--colors-brown-8)"
  },
  "colors.brown.9": {
    "value": "var(--colors-brown-9)",
    "variable": "var(--colors-brown-9)"
  },
  "colors.brown.10": {
    "value": "var(--colors-brown-10)",
    "variable": "var(--colors-brown-10)"
  },
  "colors.brown.11": {
    "value": "var(--colors-brown-11)",
    "variable": "var(--colors-brown-11)"
  },
  "colors.brown.12": {
    "value": "var(--colors-brown-12)",
    "variable": "var(--colors-brown-12)"
  },
  "colors.brown.a1": {
    "value": "var(--colors-brown-a1)",
    "variable": "var(--colors-brown-a1)"
  },
  "colors.brown.a2": {
    "value": "var(--colors-brown-a2)",
    "variable": "var(--colors-brown-a2)"
  },
  "colors.brown.a3": {
    "value": "var(--colors-brown-a3)",
    "variable": "var(--colors-brown-a3)"
  },
  "colors.brown.a4": {
    "value": "var(--colors-brown-a4)",
    "variable": "var(--colors-brown-a4)"
  },
  "colors.brown.a5": {
    "value": "var(--colors-brown-a5)",
    "variable": "var(--colors-brown-a5)"
  },
  "colors.brown.a6": {
    "value": "var(--colors-brown-a6)",
    "variable": "var(--colors-brown-a6)"
  },
  "colors.brown.a7": {
    "value": "var(--colors-brown-a7)",
    "variable": "var(--colors-brown-a7)"
  },
  "colors.brown.a8": {
    "value": "var(--colors-brown-a8)",
    "variable": "var(--colors-brown-a8)"
  },
  "colors.brown.a9": {
    "value": "var(--colors-brown-a9)",
    "variable": "var(--colors-brown-a9)"
  },
  "colors.brown.a10": {
    "value": "var(--colors-brown-a10)",
    "variable": "var(--colors-brown-a10)"
  },
  "colors.brown.a11": {
    "value": "var(--colors-brown-a11)",
    "variable": "var(--colors-brown-a11)"
  },
  "colors.brown.a12": {
    "value": "var(--colors-brown-a12)",
    "variable": "var(--colors-brown-a12)"
  },
  "colors.brown.solid.bg": {
    "value": "var(--colors-brown-solid-bg)",
    "variable": "var(--colors-brown-solid-bg)"
  },
  "colors.brown.solid.bg.hover": {
    "value": "var(--colors-brown-solid-bg-hover)",
    "variable": "var(--colors-brown-solid-bg-hover)"
  },
  "colors.brown.solid.fg": {
    "value": "var(--colors-brown-solid-fg)",
    "variable": "var(--colors-brown-solid-fg)"
  },
  "colors.brown.subtle.bg": {
    "value": "var(--colors-brown-subtle-bg)",
    "variable": "var(--colors-brown-subtle-bg)"
  },
  "colors.brown.subtle.bg.hover": {
    "value": "var(--colors-brown-subtle-bg-hover)",
    "variable": "var(--colors-brown-subtle-bg-hover)"
  },
  "colors.brown.subtle.bg.active": {
    "value": "var(--colors-brown-subtle-bg-active)",
    "variable": "var(--colors-brown-subtle-bg-active)"
  },
  "colors.brown.subtle.fg": {
    "value": "var(--colors-brown-subtle-fg)",
    "variable": "var(--colors-brown-subtle-fg)"
  },
  "colors.brown.surface.bg": {
    "value": "var(--colors-brown-surface-bg)",
    "variable": "var(--colors-brown-surface-bg)"
  },
  "colors.brown.surface.bg.active": {
    "value": "var(--colors-brown-surface-bg-active)",
    "variable": "var(--colors-brown-surface-bg-active)"
  },
  "colors.brown.surface.border": {
    "value": "var(--colors-brown-surface-border)",
    "variable": "var(--colors-brown-surface-border)"
  },
  "colors.brown.surface.border.hover": {
    "value": "var(--colors-brown-surface-border-hover)",
    "variable": "var(--colors-brown-surface-border-hover)"
  },
  "colors.brown.surface.fg": {
    "value": "var(--colors-brown-surface-fg)",
    "variable": "var(--colors-brown-surface-fg)"
  },
  "colors.brown.outline.bg.hover": {
    "value": "var(--colors-brown-outline-bg-hover)",
    "variable": "var(--colors-brown-outline-bg-hover)"
  },
  "colors.brown.outline.bg.active": {
    "value": "var(--colors-brown-outline-bg-active)",
    "variable": "var(--colors-brown-outline-bg-active)"
  },
  "colors.brown.outline.border": {
    "value": "var(--colors-brown-outline-border)",
    "variable": "var(--colors-brown-outline-border)"
  },
  "colors.brown.outline.fg": {
    "value": "var(--colors-brown-outline-fg)",
    "variable": "var(--colors-brown-outline-fg)"
  },
  "colors.brown.plain.bg.hover": {
    "value": "var(--colors-brown-plain-bg-hover)",
    "variable": "var(--colors-brown-plain-bg-hover)"
  },
  "colors.brown.plain.bg.active": {
    "value": "var(--colors-brown-plain-bg-active)",
    "variable": "var(--colors-brown-plain-bg-active)"
  },
  "colors.brown.plain.fg": {
    "value": "var(--colors-brown-plain-fg)",
    "variable": "var(--colors-brown-plain-fg)"
  },
  "colors.crimson.1": {
    "value": "var(--colors-crimson-1)",
    "variable": "var(--colors-crimson-1)"
  },
  "colors.crimson.2": {
    "value": "var(--colors-crimson-2)",
    "variable": "var(--colors-crimson-2)"
  },
  "colors.crimson.3": {
    "value": "var(--colors-crimson-3)",
    "variable": "var(--colors-crimson-3)"
  },
  "colors.crimson.4": {
    "value": "var(--colors-crimson-4)",
    "variable": "var(--colors-crimson-4)"
  },
  "colors.crimson.5": {
    "value": "var(--colors-crimson-5)",
    "variable": "var(--colors-crimson-5)"
  },
  "colors.crimson.6": {
    "value": "var(--colors-crimson-6)",
    "variable": "var(--colors-crimson-6)"
  },
  "colors.crimson.7": {
    "value": "var(--colors-crimson-7)",
    "variable": "var(--colors-crimson-7)"
  },
  "colors.crimson.8": {
    "value": "var(--colors-crimson-8)",
    "variable": "var(--colors-crimson-8)"
  },
  "colors.crimson.9": {
    "value": "var(--colors-crimson-9)",
    "variable": "var(--colors-crimson-9)"
  },
  "colors.crimson.10": {
    "value": "var(--colors-crimson-10)",
    "variable": "var(--colors-crimson-10)"
  },
  "colors.crimson.11": {
    "value": "var(--colors-crimson-11)",
    "variable": "var(--colors-crimson-11)"
  },
  "colors.crimson.12": {
    "value": "var(--colors-crimson-12)",
    "variable": "var(--colors-crimson-12)"
  },
  "colors.crimson.a1": {
    "value": "var(--colors-crimson-a1)",
    "variable": "var(--colors-crimson-a1)"
  },
  "colors.crimson.a2": {
    "value": "var(--colors-crimson-a2)",
    "variable": "var(--colors-crimson-a2)"
  },
  "colors.crimson.a3": {
    "value": "var(--colors-crimson-a3)",
    "variable": "var(--colors-crimson-a3)"
  },
  "colors.crimson.a4": {
    "value": "var(--colors-crimson-a4)",
    "variable": "var(--colors-crimson-a4)"
  },
  "colors.crimson.a5": {
    "value": "var(--colors-crimson-a5)",
    "variable": "var(--colors-crimson-a5)"
  },
  "colors.crimson.a6": {
    "value": "var(--colors-crimson-a6)",
    "variable": "var(--colors-crimson-a6)"
  },
  "colors.crimson.a7": {
    "value": "var(--colors-crimson-a7)",
    "variable": "var(--colors-crimson-a7)"
  },
  "colors.crimson.a8": {
    "value": "var(--colors-crimson-a8)",
    "variable": "var(--colors-crimson-a8)"
  },
  "colors.crimson.a9": {
    "value": "var(--colors-crimson-a9)",
    "variable": "var(--colors-crimson-a9)"
  },
  "colors.crimson.a10": {
    "value": "var(--colors-crimson-a10)",
    "variable": "var(--colors-crimson-a10)"
  },
  "colors.crimson.a11": {
    "value": "var(--colors-crimson-a11)",
    "variable": "var(--colors-crimson-a11)"
  },
  "colors.crimson.a12": {
    "value": "var(--colors-crimson-a12)",
    "variable": "var(--colors-crimson-a12)"
  },
  "colors.crimson.solid.bg": {
    "value": "var(--colors-crimson-solid-bg)",
    "variable": "var(--colors-crimson-solid-bg)"
  },
  "colors.crimson.solid.bg.hover": {
    "value": "var(--colors-crimson-solid-bg-hover)",
    "variable": "var(--colors-crimson-solid-bg-hover)"
  },
  "colors.crimson.solid.fg": {
    "value": "var(--colors-crimson-solid-fg)",
    "variable": "var(--colors-crimson-solid-fg)"
  },
  "colors.crimson.subtle.bg": {
    "value": "var(--colors-crimson-subtle-bg)",
    "variable": "var(--colors-crimson-subtle-bg)"
  },
  "colors.crimson.subtle.bg.hover": {
    "value": "var(--colors-crimson-subtle-bg-hover)",
    "variable": "var(--colors-crimson-subtle-bg-hover)"
  },
  "colors.crimson.subtle.bg.active": {
    "value": "var(--colors-crimson-subtle-bg-active)",
    "variable": "var(--colors-crimson-subtle-bg-active)"
  },
  "colors.crimson.subtle.fg": {
    "value": "var(--colors-crimson-subtle-fg)",
    "variable": "var(--colors-crimson-subtle-fg)"
  },
  "colors.crimson.surface.bg": {
    "value": "var(--colors-crimson-surface-bg)",
    "variable": "var(--colors-crimson-surface-bg)"
  },
  "colors.crimson.surface.bg.active": {
    "value": "var(--colors-crimson-surface-bg-active)",
    "variable": "var(--colors-crimson-surface-bg-active)"
  },
  "colors.crimson.surface.border": {
    "value": "var(--colors-crimson-surface-border)",
    "variable": "var(--colors-crimson-surface-border)"
  },
  "colors.crimson.surface.border.hover": {
    "value": "var(--colors-crimson-surface-border-hover)",
    "variable": "var(--colors-crimson-surface-border-hover)"
  },
  "colors.crimson.surface.fg": {
    "value": "var(--colors-crimson-surface-fg)",
    "variable": "var(--colors-crimson-surface-fg)"
  },
  "colors.crimson.outline.bg.hover": {
    "value": "var(--colors-crimson-outline-bg-hover)",
    "variable": "var(--colors-crimson-outline-bg-hover)"
  },
  "colors.crimson.outline.bg.active": {
    "value": "var(--colors-crimson-outline-bg-active)",
    "variable": "var(--colors-crimson-outline-bg-active)"
  },
  "colors.crimson.outline.border": {
    "value": "var(--colors-crimson-outline-border)",
    "variable": "var(--colors-crimson-outline-border)"
  },
  "colors.crimson.outline.fg": {
    "value": "var(--colors-crimson-outline-fg)",
    "variable": "var(--colors-crimson-outline-fg)"
  },
  "colors.crimson.plain.bg.hover": {
    "value": "var(--colors-crimson-plain-bg-hover)",
    "variable": "var(--colors-crimson-plain-bg-hover)"
  },
  "colors.crimson.plain.bg.active": {
    "value": "var(--colors-crimson-plain-bg-active)",
    "variable": "var(--colors-crimson-plain-bg-active)"
  },
  "colors.crimson.plain.fg": {
    "value": "var(--colors-crimson-plain-fg)",
    "variable": "var(--colors-crimson-plain-fg)"
  },
  "colors.cyan.1": {
    "value": "var(--colors-cyan-1)",
    "variable": "var(--colors-cyan-1)"
  },
  "colors.cyan.2": {
    "value": "var(--colors-cyan-2)",
    "variable": "var(--colors-cyan-2)"
  },
  "colors.cyan.3": {
    "value": "var(--colors-cyan-3)",
    "variable": "var(--colors-cyan-3)"
  },
  "colors.cyan.4": {
    "value": "var(--colors-cyan-4)",
    "variable": "var(--colors-cyan-4)"
  },
  "colors.cyan.5": {
    "value": "var(--colors-cyan-5)",
    "variable": "var(--colors-cyan-5)"
  },
  "colors.cyan.6": {
    "value": "var(--colors-cyan-6)",
    "variable": "var(--colors-cyan-6)"
  },
  "colors.cyan.7": {
    "value": "var(--colors-cyan-7)",
    "variable": "var(--colors-cyan-7)"
  },
  "colors.cyan.8": {
    "value": "var(--colors-cyan-8)",
    "variable": "var(--colors-cyan-8)"
  },
  "colors.cyan.9": {
    "value": "var(--colors-cyan-9)",
    "variable": "var(--colors-cyan-9)"
  },
  "colors.cyan.10": {
    "value": "var(--colors-cyan-10)",
    "variable": "var(--colors-cyan-10)"
  },
  "colors.cyan.11": {
    "value": "var(--colors-cyan-11)",
    "variable": "var(--colors-cyan-11)"
  },
  "colors.cyan.12": {
    "value": "var(--colors-cyan-12)",
    "variable": "var(--colors-cyan-12)"
  },
  "colors.cyan.a1": {
    "value": "var(--colors-cyan-a1)",
    "variable": "var(--colors-cyan-a1)"
  },
  "colors.cyan.a2": {
    "value": "var(--colors-cyan-a2)",
    "variable": "var(--colors-cyan-a2)"
  },
  "colors.cyan.a3": {
    "value": "var(--colors-cyan-a3)",
    "variable": "var(--colors-cyan-a3)"
  },
  "colors.cyan.a4": {
    "value": "var(--colors-cyan-a4)",
    "variable": "var(--colors-cyan-a4)"
  },
  "colors.cyan.a5": {
    "value": "var(--colors-cyan-a5)",
    "variable": "var(--colors-cyan-a5)"
  },
  "colors.cyan.a6": {
    "value": "var(--colors-cyan-a6)",
    "variable": "var(--colors-cyan-a6)"
  },
  "colors.cyan.a7": {
    "value": "var(--colors-cyan-a7)",
    "variable": "var(--colors-cyan-a7)"
  },
  "colors.cyan.a8": {
    "value": "var(--colors-cyan-a8)",
    "variable": "var(--colors-cyan-a8)"
  },
  "colors.cyan.a9": {
    "value": "var(--colors-cyan-a9)",
    "variable": "var(--colors-cyan-a9)"
  },
  "colors.cyan.a10": {
    "value": "var(--colors-cyan-a10)",
    "variable": "var(--colors-cyan-a10)"
  },
  "colors.cyan.a11": {
    "value": "var(--colors-cyan-a11)",
    "variable": "var(--colors-cyan-a11)"
  },
  "colors.cyan.a12": {
    "value": "var(--colors-cyan-a12)",
    "variable": "var(--colors-cyan-a12)"
  },
  "colors.cyan.solid.bg": {
    "value": "var(--colors-cyan-solid-bg)",
    "variable": "var(--colors-cyan-solid-bg)"
  },
  "colors.cyan.solid.bg.hover": {
    "value": "var(--colors-cyan-solid-bg-hover)",
    "variable": "var(--colors-cyan-solid-bg-hover)"
  },
  "colors.cyan.solid.fg": {
    "value": "var(--colors-cyan-solid-fg)",
    "variable": "var(--colors-cyan-solid-fg)"
  },
  "colors.cyan.subtle.bg": {
    "value": "var(--colors-cyan-subtle-bg)",
    "variable": "var(--colors-cyan-subtle-bg)"
  },
  "colors.cyan.subtle.bg.hover": {
    "value": "var(--colors-cyan-subtle-bg-hover)",
    "variable": "var(--colors-cyan-subtle-bg-hover)"
  },
  "colors.cyan.subtle.bg.active": {
    "value": "var(--colors-cyan-subtle-bg-active)",
    "variable": "var(--colors-cyan-subtle-bg-active)"
  },
  "colors.cyan.subtle.fg": {
    "value": "var(--colors-cyan-subtle-fg)",
    "variable": "var(--colors-cyan-subtle-fg)"
  },
  "colors.cyan.surface.bg": {
    "value": "var(--colors-cyan-surface-bg)",
    "variable": "var(--colors-cyan-surface-bg)"
  },
  "colors.cyan.surface.bg.active": {
    "value": "var(--colors-cyan-surface-bg-active)",
    "variable": "var(--colors-cyan-surface-bg-active)"
  },
  "colors.cyan.surface.border": {
    "value": "var(--colors-cyan-surface-border)",
    "variable": "var(--colors-cyan-surface-border)"
  },
  "colors.cyan.surface.border.hover": {
    "value": "var(--colors-cyan-surface-border-hover)",
    "variable": "var(--colors-cyan-surface-border-hover)"
  },
  "colors.cyan.surface.fg": {
    "value": "var(--colors-cyan-surface-fg)",
    "variable": "var(--colors-cyan-surface-fg)"
  },
  "colors.cyan.outline.bg.hover": {
    "value": "var(--colors-cyan-outline-bg-hover)",
    "variable": "var(--colors-cyan-outline-bg-hover)"
  },
  "colors.cyan.outline.bg.active": {
    "value": "var(--colors-cyan-outline-bg-active)",
    "variable": "var(--colors-cyan-outline-bg-active)"
  },
  "colors.cyan.outline.border": {
    "value": "var(--colors-cyan-outline-border)",
    "variable": "var(--colors-cyan-outline-border)"
  },
  "colors.cyan.outline.fg": {
    "value": "var(--colors-cyan-outline-fg)",
    "variable": "var(--colors-cyan-outline-fg)"
  },
  "colors.cyan.plain.bg.hover": {
    "value": "var(--colors-cyan-plain-bg-hover)",
    "variable": "var(--colors-cyan-plain-bg-hover)"
  },
  "colors.cyan.plain.bg.active": {
    "value": "var(--colors-cyan-plain-bg-active)",
    "variable": "var(--colors-cyan-plain-bg-active)"
  },
  "colors.cyan.plain.fg": {
    "value": "var(--colors-cyan-plain-fg)",
    "variable": "var(--colors-cyan-plain-fg)"
  },
  "colors.gold.1": {
    "value": "var(--colors-gold-1)",
    "variable": "var(--colors-gold-1)"
  },
  "colors.gold.2": {
    "value": "var(--colors-gold-2)",
    "variable": "var(--colors-gold-2)"
  },
  "colors.gold.3": {
    "value": "var(--colors-gold-3)",
    "variable": "var(--colors-gold-3)"
  },
  "colors.gold.4": {
    "value": "var(--colors-gold-4)",
    "variable": "var(--colors-gold-4)"
  },
  "colors.gold.5": {
    "value": "var(--colors-gold-5)",
    "variable": "var(--colors-gold-5)"
  },
  "colors.gold.6": {
    "value": "var(--colors-gold-6)",
    "variable": "var(--colors-gold-6)"
  },
  "colors.gold.7": {
    "value": "var(--colors-gold-7)",
    "variable": "var(--colors-gold-7)"
  },
  "colors.gold.8": {
    "value": "var(--colors-gold-8)",
    "variable": "var(--colors-gold-8)"
  },
  "colors.gold.9": {
    "value": "var(--colors-gold-9)",
    "variable": "var(--colors-gold-9)"
  },
  "colors.gold.10": {
    "value": "var(--colors-gold-10)",
    "variable": "var(--colors-gold-10)"
  },
  "colors.gold.11": {
    "value": "var(--colors-gold-11)",
    "variable": "var(--colors-gold-11)"
  },
  "colors.gold.12": {
    "value": "var(--colors-gold-12)",
    "variable": "var(--colors-gold-12)"
  },
  "colors.gold.a1": {
    "value": "var(--colors-gold-a1)",
    "variable": "var(--colors-gold-a1)"
  },
  "colors.gold.a2": {
    "value": "var(--colors-gold-a2)",
    "variable": "var(--colors-gold-a2)"
  },
  "colors.gold.a3": {
    "value": "var(--colors-gold-a3)",
    "variable": "var(--colors-gold-a3)"
  },
  "colors.gold.a4": {
    "value": "var(--colors-gold-a4)",
    "variable": "var(--colors-gold-a4)"
  },
  "colors.gold.a5": {
    "value": "var(--colors-gold-a5)",
    "variable": "var(--colors-gold-a5)"
  },
  "colors.gold.a6": {
    "value": "var(--colors-gold-a6)",
    "variable": "var(--colors-gold-a6)"
  },
  "colors.gold.a7": {
    "value": "var(--colors-gold-a7)",
    "variable": "var(--colors-gold-a7)"
  },
  "colors.gold.a8": {
    "value": "var(--colors-gold-a8)",
    "variable": "var(--colors-gold-a8)"
  },
  "colors.gold.a9": {
    "value": "var(--colors-gold-a9)",
    "variable": "var(--colors-gold-a9)"
  },
  "colors.gold.a10": {
    "value": "var(--colors-gold-a10)",
    "variable": "var(--colors-gold-a10)"
  },
  "colors.gold.a11": {
    "value": "var(--colors-gold-a11)",
    "variable": "var(--colors-gold-a11)"
  },
  "colors.gold.a12": {
    "value": "var(--colors-gold-a12)",
    "variable": "var(--colors-gold-a12)"
  },
  "colors.gold.solid.bg": {
    "value": "var(--colors-gold-solid-bg)",
    "variable": "var(--colors-gold-solid-bg)"
  },
  "colors.gold.solid.bg.hover": {
    "value": "var(--colors-gold-solid-bg-hover)",
    "variable": "var(--colors-gold-solid-bg-hover)"
  },
  "colors.gold.solid.fg": {
    "value": "var(--colors-gold-solid-fg)",
    "variable": "var(--colors-gold-solid-fg)"
  },
  "colors.gold.subtle.bg": {
    "value": "var(--colors-gold-subtle-bg)",
    "variable": "var(--colors-gold-subtle-bg)"
  },
  "colors.gold.subtle.bg.hover": {
    "value": "var(--colors-gold-subtle-bg-hover)",
    "variable": "var(--colors-gold-subtle-bg-hover)"
  },
  "colors.gold.subtle.bg.active": {
    "value": "var(--colors-gold-subtle-bg-active)",
    "variable": "var(--colors-gold-subtle-bg-active)"
  },
  "colors.gold.subtle.fg": {
    "value": "var(--colors-gold-subtle-fg)",
    "variable": "var(--colors-gold-subtle-fg)"
  },
  "colors.gold.surface.bg": {
    "value": "var(--colors-gold-surface-bg)",
    "variable": "var(--colors-gold-surface-bg)"
  },
  "colors.gold.surface.bg.active": {
    "value": "var(--colors-gold-surface-bg-active)",
    "variable": "var(--colors-gold-surface-bg-active)"
  },
  "colors.gold.surface.border": {
    "value": "var(--colors-gold-surface-border)",
    "variable": "var(--colors-gold-surface-border)"
  },
  "colors.gold.surface.border.hover": {
    "value": "var(--colors-gold-surface-border-hover)",
    "variable": "var(--colors-gold-surface-border-hover)"
  },
  "colors.gold.surface.fg": {
    "value": "var(--colors-gold-surface-fg)",
    "variable": "var(--colors-gold-surface-fg)"
  },
  "colors.gold.outline.bg.hover": {
    "value": "var(--colors-gold-outline-bg-hover)",
    "variable": "var(--colors-gold-outline-bg-hover)"
  },
  "colors.gold.outline.bg.active": {
    "value": "var(--colors-gold-outline-bg-active)",
    "variable": "var(--colors-gold-outline-bg-active)"
  },
  "colors.gold.outline.border": {
    "value": "var(--colors-gold-outline-border)",
    "variable": "var(--colors-gold-outline-border)"
  },
  "colors.gold.outline.fg": {
    "value": "var(--colors-gold-outline-fg)",
    "variable": "var(--colors-gold-outline-fg)"
  },
  "colors.gold.plain.bg.hover": {
    "value": "var(--colors-gold-plain-bg-hover)",
    "variable": "var(--colors-gold-plain-bg-hover)"
  },
  "colors.gold.plain.bg.active": {
    "value": "var(--colors-gold-plain-bg-active)",
    "variable": "var(--colors-gold-plain-bg-active)"
  },
  "colors.gold.plain.fg": {
    "value": "var(--colors-gold-plain-fg)",
    "variable": "var(--colors-gold-plain-fg)"
  },
  "colors.grass.1": {
    "value": "var(--colors-grass-1)",
    "variable": "var(--colors-grass-1)"
  },
  "colors.grass.2": {
    "value": "var(--colors-grass-2)",
    "variable": "var(--colors-grass-2)"
  },
  "colors.grass.3": {
    "value": "var(--colors-grass-3)",
    "variable": "var(--colors-grass-3)"
  },
  "colors.grass.4": {
    "value": "var(--colors-grass-4)",
    "variable": "var(--colors-grass-4)"
  },
  "colors.grass.5": {
    "value": "var(--colors-grass-5)",
    "variable": "var(--colors-grass-5)"
  },
  "colors.grass.6": {
    "value": "var(--colors-grass-6)",
    "variable": "var(--colors-grass-6)"
  },
  "colors.grass.7": {
    "value": "var(--colors-grass-7)",
    "variable": "var(--colors-grass-7)"
  },
  "colors.grass.8": {
    "value": "var(--colors-grass-8)",
    "variable": "var(--colors-grass-8)"
  },
  "colors.grass.9": {
    "value": "var(--colors-grass-9)",
    "variable": "var(--colors-grass-9)"
  },
  "colors.grass.10": {
    "value": "var(--colors-grass-10)",
    "variable": "var(--colors-grass-10)"
  },
  "colors.grass.11": {
    "value": "var(--colors-grass-11)",
    "variable": "var(--colors-grass-11)"
  },
  "colors.grass.12": {
    "value": "var(--colors-grass-12)",
    "variable": "var(--colors-grass-12)"
  },
  "colors.grass.a1": {
    "value": "var(--colors-grass-a1)",
    "variable": "var(--colors-grass-a1)"
  },
  "colors.grass.a2": {
    "value": "var(--colors-grass-a2)",
    "variable": "var(--colors-grass-a2)"
  },
  "colors.grass.a3": {
    "value": "var(--colors-grass-a3)",
    "variable": "var(--colors-grass-a3)"
  },
  "colors.grass.a4": {
    "value": "var(--colors-grass-a4)",
    "variable": "var(--colors-grass-a4)"
  },
  "colors.grass.a5": {
    "value": "var(--colors-grass-a5)",
    "variable": "var(--colors-grass-a5)"
  },
  "colors.grass.a6": {
    "value": "var(--colors-grass-a6)",
    "variable": "var(--colors-grass-a6)"
  },
  "colors.grass.a7": {
    "value": "var(--colors-grass-a7)",
    "variable": "var(--colors-grass-a7)"
  },
  "colors.grass.a8": {
    "value": "var(--colors-grass-a8)",
    "variable": "var(--colors-grass-a8)"
  },
  "colors.grass.a9": {
    "value": "var(--colors-grass-a9)",
    "variable": "var(--colors-grass-a9)"
  },
  "colors.grass.a10": {
    "value": "var(--colors-grass-a10)",
    "variable": "var(--colors-grass-a10)"
  },
  "colors.grass.a11": {
    "value": "var(--colors-grass-a11)",
    "variable": "var(--colors-grass-a11)"
  },
  "colors.grass.a12": {
    "value": "var(--colors-grass-a12)",
    "variable": "var(--colors-grass-a12)"
  },
  "colors.grass.solid.bg": {
    "value": "var(--colors-grass-solid-bg)",
    "variable": "var(--colors-grass-solid-bg)"
  },
  "colors.grass.solid.bg.hover": {
    "value": "var(--colors-grass-solid-bg-hover)",
    "variable": "var(--colors-grass-solid-bg-hover)"
  },
  "colors.grass.solid.fg": {
    "value": "var(--colors-grass-solid-fg)",
    "variable": "var(--colors-grass-solid-fg)"
  },
  "colors.grass.subtle.bg": {
    "value": "var(--colors-grass-subtle-bg)",
    "variable": "var(--colors-grass-subtle-bg)"
  },
  "colors.grass.subtle.bg.hover": {
    "value": "var(--colors-grass-subtle-bg-hover)",
    "variable": "var(--colors-grass-subtle-bg-hover)"
  },
  "colors.grass.subtle.bg.active": {
    "value": "var(--colors-grass-subtle-bg-active)",
    "variable": "var(--colors-grass-subtle-bg-active)"
  },
  "colors.grass.subtle.fg": {
    "value": "var(--colors-grass-subtle-fg)",
    "variable": "var(--colors-grass-subtle-fg)"
  },
  "colors.grass.surface.bg": {
    "value": "var(--colors-grass-surface-bg)",
    "variable": "var(--colors-grass-surface-bg)"
  },
  "colors.grass.surface.bg.active": {
    "value": "var(--colors-grass-surface-bg-active)",
    "variable": "var(--colors-grass-surface-bg-active)"
  },
  "colors.grass.surface.border": {
    "value": "var(--colors-grass-surface-border)",
    "variable": "var(--colors-grass-surface-border)"
  },
  "colors.grass.surface.border.hover": {
    "value": "var(--colors-grass-surface-border-hover)",
    "variable": "var(--colors-grass-surface-border-hover)"
  },
  "colors.grass.surface.fg": {
    "value": "var(--colors-grass-surface-fg)",
    "variable": "var(--colors-grass-surface-fg)"
  },
  "colors.grass.outline.bg.hover": {
    "value": "var(--colors-grass-outline-bg-hover)",
    "variable": "var(--colors-grass-outline-bg-hover)"
  },
  "colors.grass.outline.bg.active": {
    "value": "var(--colors-grass-outline-bg-active)",
    "variable": "var(--colors-grass-outline-bg-active)"
  },
  "colors.grass.outline.border": {
    "value": "var(--colors-grass-outline-border)",
    "variable": "var(--colors-grass-outline-border)"
  },
  "colors.grass.outline.fg": {
    "value": "var(--colors-grass-outline-fg)",
    "variable": "var(--colors-grass-outline-fg)"
  },
  "colors.grass.plain.bg.hover": {
    "value": "var(--colors-grass-plain-bg-hover)",
    "variable": "var(--colors-grass-plain-bg-hover)"
  },
  "colors.grass.plain.bg.active": {
    "value": "var(--colors-grass-plain-bg-active)",
    "variable": "var(--colors-grass-plain-bg-active)"
  },
  "colors.grass.plain.fg": {
    "value": "var(--colors-grass-plain-fg)",
    "variable": "var(--colors-grass-plain-fg)"
  },
  "colors.gray.1": {
    "value": "var(--colors-gray-1)",
    "variable": "var(--colors-gray-1)"
  },
  "colors.gray.2": {
    "value": "var(--colors-gray-2)",
    "variable": "var(--colors-gray-2)"
  },
  "colors.gray.3": {
    "value": "var(--colors-gray-3)",
    "variable": "var(--colors-gray-3)"
  },
  "colors.gray.4": {
    "value": "var(--colors-gray-4)",
    "variable": "var(--colors-gray-4)"
  },
  "colors.gray.5": {
    "value": "var(--colors-gray-5)",
    "variable": "var(--colors-gray-5)"
  },
  "colors.gray.6": {
    "value": "var(--colors-gray-6)",
    "variable": "var(--colors-gray-6)"
  },
  "colors.gray.7": {
    "value": "var(--colors-gray-7)",
    "variable": "var(--colors-gray-7)"
  },
  "colors.gray.8": {
    "value": "var(--colors-gray-8)",
    "variable": "var(--colors-gray-8)"
  },
  "colors.gray.9": {
    "value": "var(--colors-gray-9)",
    "variable": "var(--colors-gray-9)"
  },
  "colors.gray.10": {
    "value": "var(--colors-gray-10)",
    "variable": "var(--colors-gray-10)"
  },
  "colors.gray.11": {
    "value": "var(--colors-gray-11)",
    "variable": "var(--colors-gray-11)"
  },
  "colors.gray.12": {
    "value": "var(--colors-gray-12)",
    "variable": "var(--colors-gray-12)"
  },
  "colors.gray.a1": {
    "value": "var(--colors-gray-a1)",
    "variable": "var(--colors-gray-a1)"
  },
  "colors.gray.a2": {
    "value": "var(--colors-gray-a2)",
    "variable": "var(--colors-gray-a2)"
  },
  "colors.gray.a3": {
    "value": "var(--colors-gray-a3)",
    "variable": "var(--colors-gray-a3)"
  },
  "colors.gray.a4": {
    "value": "var(--colors-gray-a4)",
    "variable": "var(--colors-gray-a4)"
  },
  "colors.gray.a5": {
    "value": "var(--colors-gray-a5)",
    "variable": "var(--colors-gray-a5)"
  },
  "colors.gray.a6": {
    "value": "var(--colors-gray-a6)",
    "variable": "var(--colors-gray-a6)"
  },
  "colors.gray.a7": {
    "value": "var(--colors-gray-a7)",
    "variable": "var(--colors-gray-a7)"
  },
  "colors.gray.a8": {
    "value": "var(--colors-gray-a8)",
    "variable": "var(--colors-gray-a8)"
  },
  "colors.gray.a9": {
    "value": "var(--colors-gray-a9)",
    "variable": "var(--colors-gray-a9)"
  },
  "colors.gray.a10": {
    "value": "var(--colors-gray-a10)",
    "variable": "var(--colors-gray-a10)"
  },
  "colors.gray.a11": {
    "value": "var(--colors-gray-a11)",
    "variable": "var(--colors-gray-a11)"
  },
  "colors.gray.a12": {
    "value": "var(--colors-gray-a12)",
    "variable": "var(--colors-gray-a12)"
  },
  "colors.gray.solid.bg": {
    "value": "var(--colors-gray-solid-bg)",
    "variable": "var(--colors-gray-solid-bg)"
  },
  "colors.gray.solid.bg.hover": {
    "value": "var(--colors-gray-solid-bg-hover)",
    "variable": "var(--colors-gray-solid-bg-hover)"
  },
  "colors.gray.solid.fg": {
    "value": "var(--colors-gray-solid-fg)",
    "variable": "var(--colors-gray-solid-fg)"
  },
  "colors.gray.subtle.bg": {
    "value": "var(--colors-gray-subtle-bg)",
    "variable": "var(--colors-gray-subtle-bg)"
  },
  "colors.gray.subtle.bg.hover": {
    "value": "var(--colors-gray-subtle-bg-hover)",
    "variable": "var(--colors-gray-subtle-bg-hover)"
  },
  "colors.gray.subtle.bg.active": {
    "value": "var(--colors-gray-subtle-bg-active)",
    "variable": "var(--colors-gray-subtle-bg-active)"
  },
  "colors.gray.subtle.fg": {
    "value": "var(--colors-gray-subtle-fg)",
    "variable": "var(--colors-gray-subtle-fg)"
  },
  "colors.gray.surface.bg": {
    "value": "var(--colors-gray-surface-bg)",
    "variable": "var(--colors-gray-surface-bg)"
  },
  "colors.gray.surface.bg.hover": {
    "value": "var(--colors-gray-surface-bg-hover)",
    "variable": "var(--colors-gray-surface-bg-hover)"
  },
  "colors.gray.surface.bg.active": {
    "value": "var(--colors-gray-surface-bg-active)",
    "variable": "var(--colors-gray-surface-bg-active)"
  },
  "colors.gray.surface.border": {
    "value": "var(--colors-gray-surface-border)",
    "variable": "var(--colors-gray-surface-border)"
  },
  "colors.gray.surface.border.hover": {
    "value": "var(--colors-gray-surface-border-hover)",
    "variable": "var(--colors-gray-surface-border-hover)"
  },
  "colors.gray.surface.fg": {
    "value": "var(--colors-gray-surface-fg)",
    "variable": "var(--colors-gray-surface-fg)"
  },
  "colors.gray.outline.bg.hover": {
    "value": "var(--colors-gray-outline-bg-hover)",
    "variable": "var(--colors-gray-outline-bg-hover)"
  },
  "colors.gray.outline.bg.active": {
    "value": "var(--colors-gray-outline-bg-active)",
    "variable": "var(--colors-gray-outline-bg-active)"
  },
  "colors.gray.outline.border": {
    "value": "var(--colors-gray-outline-border)",
    "variable": "var(--colors-gray-outline-border)"
  },
  "colors.gray.outline.fg": {
    "value": "var(--colors-gray-outline-fg)",
    "variable": "var(--colors-gray-outline-fg)"
  },
  "colors.gray.plain.bg.hover": {
    "value": "var(--colors-gray-plain-bg-hover)",
    "variable": "var(--colors-gray-plain-bg-hover)"
  },
  "colors.gray.plain.bg.active": {
    "value": "var(--colors-gray-plain-bg-active)",
    "variable": "var(--colors-gray-plain-bg-active)"
  },
  "colors.gray.plain.fg": {
    "value": "var(--colors-gray-plain-fg)",
    "variable": "var(--colors-gray-plain-fg)"
  },
  "colors.green.1": {
    "value": "var(--colors-green-1)",
    "variable": "var(--colors-green-1)"
  },
  "colors.green.2": {
    "value": "var(--colors-green-2)",
    "variable": "var(--colors-green-2)"
  },
  "colors.green.3": {
    "value": "var(--colors-green-3)",
    "variable": "var(--colors-green-3)"
  },
  "colors.green.4": {
    "value": "var(--colors-green-4)",
    "variable": "var(--colors-green-4)"
  },
  "colors.green.5": {
    "value": "var(--colors-green-5)",
    "variable": "var(--colors-green-5)"
  },
  "colors.green.6": {
    "value": "var(--colors-green-6)",
    "variable": "var(--colors-green-6)"
  },
  "colors.green.7": {
    "value": "var(--colors-green-7)",
    "variable": "var(--colors-green-7)"
  },
  "colors.green.8": {
    "value": "var(--colors-green-8)",
    "variable": "var(--colors-green-8)"
  },
  "colors.green.9": {
    "value": "var(--colors-green-9)",
    "variable": "var(--colors-green-9)"
  },
  "colors.green.10": {
    "value": "var(--colors-green-10)",
    "variable": "var(--colors-green-10)"
  },
  "colors.green.11": {
    "value": "var(--colors-green-11)",
    "variable": "var(--colors-green-11)"
  },
  "colors.green.12": {
    "value": "var(--colors-green-12)",
    "variable": "var(--colors-green-12)"
  },
  "colors.green.a1": {
    "value": "var(--colors-green-a1)",
    "variable": "var(--colors-green-a1)"
  },
  "colors.green.a2": {
    "value": "var(--colors-green-a2)",
    "variable": "var(--colors-green-a2)"
  },
  "colors.green.a3": {
    "value": "var(--colors-green-a3)",
    "variable": "var(--colors-green-a3)"
  },
  "colors.green.a4": {
    "value": "var(--colors-green-a4)",
    "variable": "var(--colors-green-a4)"
  },
  "colors.green.a5": {
    "value": "var(--colors-green-a5)",
    "variable": "var(--colors-green-a5)"
  },
  "colors.green.a6": {
    "value": "var(--colors-green-a6)",
    "variable": "var(--colors-green-a6)"
  },
  "colors.green.a7": {
    "value": "var(--colors-green-a7)",
    "variable": "var(--colors-green-a7)"
  },
  "colors.green.a8": {
    "value": "var(--colors-green-a8)",
    "variable": "var(--colors-green-a8)"
  },
  "colors.green.a9": {
    "value": "var(--colors-green-a9)",
    "variable": "var(--colors-green-a9)"
  },
  "colors.green.a10": {
    "value": "var(--colors-green-a10)",
    "variable": "var(--colors-green-a10)"
  },
  "colors.green.a11": {
    "value": "var(--colors-green-a11)",
    "variable": "var(--colors-green-a11)"
  },
  "colors.green.a12": {
    "value": "var(--colors-green-a12)",
    "variable": "var(--colors-green-a12)"
  },
  "colors.green.solid.bg": {
    "value": "var(--colors-green-solid-bg)",
    "variable": "var(--colors-green-solid-bg)"
  },
  "colors.green.solid.bg.hover": {
    "value": "var(--colors-green-solid-bg-hover)",
    "variable": "var(--colors-green-solid-bg-hover)"
  },
  "colors.green.solid.fg": {
    "value": "var(--colors-green-solid-fg)",
    "variable": "var(--colors-green-solid-fg)"
  },
  "colors.green.subtle.bg": {
    "value": "var(--colors-green-subtle-bg)",
    "variable": "var(--colors-green-subtle-bg)"
  },
  "colors.green.subtle.bg.hover": {
    "value": "var(--colors-green-subtle-bg-hover)",
    "variable": "var(--colors-green-subtle-bg-hover)"
  },
  "colors.green.subtle.bg.active": {
    "value": "var(--colors-green-subtle-bg-active)",
    "variable": "var(--colors-green-subtle-bg-active)"
  },
  "colors.green.subtle.fg": {
    "value": "var(--colors-green-subtle-fg)",
    "variable": "var(--colors-green-subtle-fg)"
  },
  "colors.green.surface.bg": {
    "value": "var(--colors-green-surface-bg)",
    "variable": "var(--colors-green-surface-bg)"
  },
  "colors.green.surface.bg.active": {
    "value": "var(--colors-green-surface-bg-active)",
    "variable": "var(--colors-green-surface-bg-active)"
  },
  "colors.green.surface.border": {
    "value": "var(--colors-green-surface-border)",
    "variable": "var(--colors-green-surface-border)"
  },
  "colors.green.surface.border.hover": {
    "value": "var(--colors-green-surface-border-hover)",
    "variable": "var(--colors-green-surface-border-hover)"
  },
  "colors.green.surface.fg": {
    "value": "var(--colors-green-surface-fg)",
    "variable": "var(--colors-green-surface-fg)"
  },
  "colors.green.outline.bg.hover": {
    "value": "var(--colors-green-outline-bg-hover)",
    "variable": "var(--colors-green-outline-bg-hover)"
  },
  "colors.green.outline.bg.active": {
    "value": "var(--colors-green-outline-bg-active)",
    "variable": "var(--colors-green-outline-bg-active)"
  },
  "colors.green.outline.border": {
    "value": "var(--colors-green-outline-border)",
    "variable": "var(--colors-green-outline-border)"
  },
  "colors.green.outline.fg": {
    "value": "var(--colors-green-outline-fg)",
    "variable": "var(--colors-green-outline-fg)"
  },
  "colors.green.plain.bg.hover": {
    "value": "var(--colors-green-plain-bg-hover)",
    "variable": "var(--colors-green-plain-bg-hover)"
  },
  "colors.green.plain.bg.active": {
    "value": "var(--colors-green-plain-bg-active)",
    "variable": "var(--colors-green-plain-bg-active)"
  },
  "colors.green.plain.fg": {
    "value": "var(--colors-green-plain-fg)",
    "variable": "var(--colors-green-plain-fg)"
  },
  "colors.indigo.1": {
    "value": "var(--colors-indigo-1)",
    "variable": "var(--colors-indigo-1)"
  },
  "colors.indigo.2": {
    "value": "var(--colors-indigo-2)",
    "variable": "var(--colors-indigo-2)"
  },
  "colors.indigo.3": {
    "value": "var(--colors-indigo-3)",
    "variable": "var(--colors-indigo-3)"
  },
  "colors.indigo.4": {
    "value": "var(--colors-indigo-4)",
    "variable": "var(--colors-indigo-4)"
  },
  "colors.indigo.5": {
    "value": "var(--colors-indigo-5)",
    "variable": "var(--colors-indigo-5)"
  },
  "colors.indigo.6": {
    "value": "var(--colors-indigo-6)",
    "variable": "var(--colors-indigo-6)"
  },
  "colors.indigo.7": {
    "value": "var(--colors-indigo-7)",
    "variable": "var(--colors-indigo-7)"
  },
  "colors.indigo.8": {
    "value": "var(--colors-indigo-8)",
    "variable": "var(--colors-indigo-8)"
  },
  "colors.indigo.9": {
    "value": "var(--colors-indigo-9)",
    "variable": "var(--colors-indigo-9)"
  },
  "colors.indigo.10": {
    "value": "var(--colors-indigo-10)",
    "variable": "var(--colors-indigo-10)"
  },
  "colors.indigo.11": {
    "value": "var(--colors-indigo-11)",
    "variable": "var(--colors-indigo-11)"
  },
  "colors.indigo.12": {
    "value": "var(--colors-indigo-12)",
    "variable": "var(--colors-indigo-12)"
  },
  "colors.indigo.a1": {
    "value": "var(--colors-indigo-a1)",
    "variable": "var(--colors-indigo-a1)"
  },
  "colors.indigo.a2": {
    "value": "var(--colors-indigo-a2)",
    "variable": "var(--colors-indigo-a2)"
  },
  "colors.indigo.a3": {
    "value": "var(--colors-indigo-a3)",
    "variable": "var(--colors-indigo-a3)"
  },
  "colors.indigo.a4": {
    "value": "var(--colors-indigo-a4)",
    "variable": "var(--colors-indigo-a4)"
  },
  "colors.indigo.a5": {
    "value": "var(--colors-indigo-a5)",
    "variable": "var(--colors-indigo-a5)"
  },
  "colors.indigo.a6": {
    "value": "var(--colors-indigo-a6)",
    "variable": "var(--colors-indigo-a6)"
  },
  "colors.indigo.a7": {
    "value": "var(--colors-indigo-a7)",
    "variable": "var(--colors-indigo-a7)"
  },
  "colors.indigo.a8": {
    "value": "var(--colors-indigo-a8)",
    "variable": "var(--colors-indigo-a8)"
  },
  "colors.indigo.a9": {
    "value": "var(--colors-indigo-a9)",
    "variable": "var(--colors-indigo-a9)"
  },
  "colors.indigo.a10": {
    "value": "var(--colors-indigo-a10)",
    "variable": "var(--colors-indigo-a10)"
  },
  "colors.indigo.a11": {
    "value": "var(--colors-indigo-a11)",
    "variable": "var(--colors-indigo-a11)"
  },
  "colors.indigo.a12": {
    "value": "var(--colors-indigo-a12)",
    "variable": "var(--colors-indigo-a12)"
  },
  "colors.indigo.solid.bg": {
    "value": "var(--colors-indigo-solid-bg)",
    "variable": "var(--colors-indigo-solid-bg)"
  },
  "colors.indigo.solid.bg.hover": {
    "value": "var(--colors-indigo-solid-bg-hover)",
    "variable": "var(--colors-indigo-solid-bg-hover)"
  },
  "colors.indigo.solid.fg": {
    "value": "var(--colors-indigo-solid-fg)",
    "variable": "var(--colors-indigo-solid-fg)"
  },
  "colors.indigo.subtle.bg": {
    "value": "var(--colors-indigo-subtle-bg)",
    "variable": "var(--colors-indigo-subtle-bg)"
  },
  "colors.indigo.subtle.bg.hover": {
    "value": "var(--colors-indigo-subtle-bg-hover)",
    "variable": "var(--colors-indigo-subtle-bg-hover)"
  },
  "colors.indigo.subtle.bg.active": {
    "value": "var(--colors-indigo-subtle-bg-active)",
    "variable": "var(--colors-indigo-subtle-bg-active)"
  },
  "colors.indigo.subtle.fg": {
    "value": "var(--colors-indigo-subtle-fg)",
    "variable": "var(--colors-indigo-subtle-fg)"
  },
  "colors.indigo.surface.bg": {
    "value": "var(--colors-indigo-surface-bg)",
    "variable": "var(--colors-indigo-surface-bg)"
  },
  "colors.indigo.surface.bg.active": {
    "value": "var(--colors-indigo-surface-bg-active)",
    "variable": "var(--colors-indigo-surface-bg-active)"
  },
  "colors.indigo.surface.border": {
    "value": "var(--colors-indigo-surface-border)",
    "variable": "var(--colors-indigo-surface-border)"
  },
  "colors.indigo.surface.border.hover": {
    "value": "var(--colors-indigo-surface-border-hover)",
    "variable": "var(--colors-indigo-surface-border-hover)"
  },
  "colors.indigo.surface.fg": {
    "value": "var(--colors-indigo-surface-fg)",
    "variable": "var(--colors-indigo-surface-fg)"
  },
  "colors.indigo.outline.bg.hover": {
    "value": "var(--colors-indigo-outline-bg-hover)",
    "variable": "var(--colors-indigo-outline-bg-hover)"
  },
  "colors.indigo.outline.bg.active": {
    "value": "var(--colors-indigo-outline-bg-active)",
    "variable": "var(--colors-indigo-outline-bg-active)"
  },
  "colors.indigo.outline.border": {
    "value": "var(--colors-indigo-outline-border)",
    "variable": "var(--colors-indigo-outline-border)"
  },
  "colors.indigo.outline.fg": {
    "value": "var(--colors-indigo-outline-fg)",
    "variable": "var(--colors-indigo-outline-fg)"
  },
  "colors.indigo.plain.bg.hover": {
    "value": "var(--colors-indigo-plain-bg-hover)",
    "variable": "var(--colors-indigo-plain-bg-hover)"
  },
  "colors.indigo.plain.bg.active": {
    "value": "var(--colors-indigo-plain-bg-active)",
    "variable": "var(--colors-indigo-plain-bg-active)"
  },
  "colors.indigo.plain.fg": {
    "value": "var(--colors-indigo-plain-fg)",
    "variable": "var(--colors-indigo-plain-fg)"
  },
  "colors.iris.1": {
    "value": "var(--colors-iris-1)",
    "variable": "var(--colors-iris-1)"
  },
  "colors.iris.2": {
    "value": "var(--colors-iris-2)",
    "variable": "var(--colors-iris-2)"
  },
  "colors.iris.3": {
    "value": "var(--colors-iris-3)",
    "variable": "var(--colors-iris-3)"
  },
  "colors.iris.4": {
    "value": "var(--colors-iris-4)",
    "variable": "var(--colors-iris-4)"
  },
  "colors.iris.5": {
    "value": "var(--colors-iris-5)",
    "variable": "var(--colors-iris-5)"
  },
  "colors.iris.6": {
    "value": "var(--colors-iris-6)",
    "variable": "var(--colors-iris-6)"
  },
  "colors.iris.7": {
    "value": "var(--colors-iris-7)",
    "variable": "var(--colors-iris-7)"
  },
  "colors.iris.8": {
    "value": "var(--colors-iris-8)",
    "variable": "var(--colors-iris-8)"
  },
  "colors.iris.9": {
    "value": "var(--colors-iris-9)",
    "variable": "var(--colors-iris-9)"
  },
  "colors.iris.10": {
    "value": "var(--colors-iris-10)",
    "variable": "var(--colors-iris-10)"
  },
  "colors.iris.11": {
    "value": "var(--colors-iris-11)",
    "variable": "var(--colors-iris-11)"
  },
  "colors.iris.12": {
    "value": "var(--colors-iris-12)",
    "variable": "var(--colors-iris-12)"
  },
  "colors.iris.a1": {
    "value": "var(--colors-iris-a1)",
    "variable": "var(--colors-iris-a1)"
  },
  "colors.iris.a2": {
    "value": "var(--colors-iris-a2)",
    "variable": "var(--colors-iris-a2)"
  },
  "colors.iris.a3": {
    "value": "var(--colors-iris-a3)",
    "variable": "var(--colors-iris-a3)"
  },
  "colors.iris.a4": {
    "value": "var(--colors-iris-a4)",
    "variable": "var(--colors-iris-a4)"
  },
  "colors.iris.a5": {
    "value": "var(--colors-iris-a5)",
    "variable": "var(--colors-iris-a5)"
  },
  "colors.iris.a6": {
    "value": "var(--colors-iris-a6)",
    "variable": "var(--colors-iris-a6)"
  },
  "colors.iris.a7": {
    "value": "var(--colors-iris-a7)",
    "variable": "var(--colors-iris-a7)"
  },
  "colors.iris.a8": {
    "value": "var(--colors-iris-a8)",
    "variable": "var(--colors-iris-a8)"
  },
  "colors.iris.a9": {
    "value": "var(--colors-iris-a9)",
    "variable": "var(--colors-iris-a9)"
  },
  "colors.iris.a10": {
    "value": "var(--colors-iris-a10)",
    "variable": "var(--colors-iris-a10)"
  },
  "colors.iris.a11": {
    "value": "var(--colors-iris-a11)",
    "variable": "var(--colors-iris-a11)"
  },
  "colors.iris.a12": {
    "value": "var(--colors-iris-a12)",
    "variable": "var(--colors-iris-a12)"
  },
  "colors.iris.solid.bg": {
    "value": "var(--colors-iris-solid-bg)",
    "variable": "var(--colors-iris-solid-bg)"
  },
  "colors.iris.solid.bg.hover": {
    "value": "var(--colors-iris-solid-bg-hover)",
    "variable": "var(--colors-iris-solid-bg-hover)"
  },
  "colors.iris.solid.fg": {
    "value": "var(--colors-iris-solid-fg)",
    "variable": "var(--colors-iris-solid-fg)"
  },
  "colors.iris.subtle.bg": {
    "value": "var(--colors-iris-subtle-bg)",
    "variable": "var(--colors-iris-subtle-bg)"
  },
  "colors.iris.subtle.bg.hover": {
    "value": "var(--colors-iris-subtle-bg-hover)",
    "variable": "var(--colors-iris-subtle-bg-hover)"
  },
  "colors.iris.subtle.bg.active": {
    "value": "var(--colors-iris-subtle-bg-active)",
    "variable": "var(--colors-iris-subtle-bg-active)"
  },
  "colors.iris.subtle.fg": {
    "value": "var(--colors-iris-subtle-fg)",
    "variable": "var(--colors-iris-subtle-fg)"
  },
  "colors.iris.surface.bg": {
    "value": "var(--colors-iris-surface-bg)",
    "variable": "var(--colors-iris-surface-bg)"
  },
  "colors.iris.surface.bg.active": {
    "value": "var(--colors-iris-surface-bg-active)",
    "variable": "var(--colors-iris-surface-bg-active)"
  },
  "colors.iris.surface.border": {
    "value": "var(--colors-iris-surface-border)",
    "variable": "var(--colors-iris-surface-border)"
  },
  "colors.iris.surface.border.hover": {
    "value": "var(--colors-iris-surface-border-hover)",
    "variable": "var(--colors-iris-surface-border-hover)"
  },
  "colors.iris.surface.fg": {
    "value": "var(--colors-iris-surface-fg)",
    "variable": "var(--colors-iris-surface-fg)"
  },
  "colors.iris.outline.bg.hover": {
    "value": "var(--colors-iris-outline-bg-hover)",
    "variable": "var(--colors-iris-outline-bg-hover)"
  },
  "colors.iris.outline.bg.active": {
    "value": "var(--colors-iris-outline-bg-active)",
    "variable": "var(--colors-iris-outline-bg-active)"
  },
  "colors.iris.outline.border": {
    "value": "var(--colors-iris-outline-border)",
    "variable": "var(--colors-iris-outline-border)"
  },
  "colors.iris.outline.fg": {
    "value": "var(--colors-iris-outline-fg)",
    "variable": "var(--colors-iris-outline-fg)"
  },
  "colors.iris.plain.bg.hover": {
    "value": "var(--colors-iris-plain-bg-hover)",
    "variable": "var(--colors-iris-plain-bg-hover)"
  },
  "colors.iris.plain.bg.active": {
    "value": "var(--colors-iris-plain-bg-active)",
    "variable": "var(--colors-iris-plain-bg-active)"
  },
  "colors.iris.plain.fg": {
    "value": "var(--colors-iris-plain-fg)",
    "variable": "var(--colors-iris-plain-fg)"
  },
  "colors.jade.1": {
    "value": "var(--colors-jade-1)",
    "variable": "var(--colors-jade-1)"
  },
  "colors.jade.2": {
    "value": "var(--colors-jade-2)",
    "variable": "var(--colors-jade-2)"
  },
  "colors.jade.3": {
    "value": "var(--colors-jade-3)",
    "variable": "var(--colors-jade-3)"
  },
  "colors.jade.4": {
    "value": "var(--colors-jade-4)",
    "variable": "var(--colors-jade-4)"
  },
  "colors.jade.5": {
    "value": "var(--colors-jade-5)",
    "variable": "var(--colors-jade-5)"
  },
  "colors.jade.6": {
    "value": "var(--colors-jade-6)",
    "variable": "var(--colors-jade-6)"
  },
  "colors.jade.7": {
    "value": "var(--colors-jade-7)",
    "variable": "var(--colors-jade-7)"
  },
  "colors.jade.8": {
    "value": "var(--colors-jade-8)",
    "variable": "var(--colors-jade-8)"
  },
  "colors.jade.9": {
    "value": "var(--colors-jade-9)",
    "variable": "var(--colors-jade-9)"
  },
  "colors.jade.10": {
    "value": "var(--colors-jade-10)",
    "variable": "var(--colors-jade-10)"
  },
  "colors.jade.11": {
    "value": "var(--colors-jade-11)",
    "variable": "var(--colors-jade-11)"
  },
  "colors.jade.12": {
    "value": "var(--colors-jade-12)",
    "variable": "var(--colors-jade-12)"
  },
  "colors.jade.a1": {
    "value": "var(--colors-jade-a1)",
    "variable": "var(--colors-jade-a1)"
  },
  "colors.jade.a2": {
    "value": "var(--colors-jade-a2)",
    "variable": "var(--colors-jade-a2)"
  },
  "colors.jade.a3": {
    "value": "var(--colors-jade-a3)",
    "variable": "var(--colors-jade-a3)"
  },
  "colors.jade.a4": {
    "value": "var(--colors-jade-a4)",
    "variable": "var(--colors-jade-a4)"
  },
  "colors.jade.a5": {
    "value": "var(--colors-jade-a5)",
    "variable": "var(--colors-jade-a5)"
  },
  "colors.jade.a6": {
    "value": "var(--colors-jade-a6)",
    "variable": "var(--colors-jade-a6)"
  },
  "colors.jade.a7": {
    "value": "var(--colors-jade-a7)",
    "variable": "var(--colors-jade-a7)"
  },
  "colors.jade.a8": {
    "value": "var(--colors-jade-a8)",
    "variable": "var(--colors-jade-a8)"
  },
  "colors.jade.a9": {
    "value": "var(--colors-jade-a9)",
    "variable": "var(--colors-jade-a9)"
  },
  "colors.jade.a10": {
    "value": "var(--colors-jade-a10)",
    "variable": "var(--colors-jade-a10)"
  },
  "colors.jade.a11": {
    "value": "var(--colors-jade-a11)",
    "variable": "var(--colors-jade-a11)"
  },
  "colors.jade.a12": {
    "value": "var(--colors-jade-a12)",
    "variable": "var(--colors-jade-a12)"
  },
  "colors.jade.solid.bg": {
    "value": "var(--colors-jade-solid-bg)",
    "variable": "var(--colors-jade-solid-bg)"
  },
  "colors.jade.solid.bg.hover": {
    "value": "var(--colors-jade-solid-bg-hover)",
    "variable": "var(--colors-jade-solid-bg-hover)"
  },
  "colors.jade.solid.fg": {
    "value": "var(--colors-jade-solid-fg)",
    "variable": "var(--colors-jade-solid-fg)"
  },
  "colors.jade.subtle.bg": {
    "value": "var(--colors-jade-subtle-bg)",
    "variable": "var(--colors-jade-subtle-bg)"
  },
  "colors.jade.subtle.bg.hover": {
    "value": "var(--colors-jade-subtle-bg-hover)",
    "variable": "var(--colors-jade-subtle-bg-hover)"
  },
  "colors.jade.subtle.bg.active": {
    "value": "var(--colors-jade-subtle-bg-active)",
    "variable": "var(--colors-jade-subtle-bg-active)"
  },
  "colors.jade.subtle.fg": {
    "value": "var(--colors-jade-subtle-fg)",
    "variable": "var(--colors-jade-subtle-fg)"
  },
  "colors.jade.surface.bg": {
    "value": "var(--colors-jade-surface-bg)",
    "variable": "var(--colors-jade-surface-bg)"
  },
  "colors.jade.surface.bg.active": {
    "value": "var(--colors-jade-surface-bg-active)",
    "variable": "var(--colors-jade-surface-bg-active)"
  },
  "colors.jade.surface.border": {
    "value": "var(--colors-jade-surface-border)",
    "variable": "var(--colors-jade-surface-border)"
  },
  "colors.jade.surface.border.hover": {
    "value": "var(--colors-jade-surface-border-hover)",
    "variable": "var(--colors-jade-surface-border-hover)"
  },
  "colors.jade.surface.fg": {
    "value": "var(--colors-jade-surface-fg)",
    "variable": "var(--colors-jade-surface-fg)"
  },
  "colors.jade.outline.bg.hover": {
    "value": "var(--colors-jade-outline-bg-hover)",
    "variable": "var(--colors-jade-outline-bg-hover)"
  },
  "colors.jade.outline.bg.active": {
    "value": "var(--colors-jade-outline-bg-active)",
    "variable": "var(--colors-jade-outline-bg-active)"
  },
  "colors.jade.outline.border": {
    "value": "var(--colors-jade-outline-border)",
    "variable": "var(--colors-jade-outline-border)"
  },
  "colors.jade.outline.fg": {
    "value": "var(--colors-jade-outline-fg)",
    "variable": "var(--colors-jade-outline-fg)"
  },
  "colors.jade.plain.bg.hover": {
    "value": "var(--colors-jade-plain-bg-hover)",
    "variable": "var(--colors-jade-plain-bg-hover)"
  },
  "colors.jade.plain.bg.active": {
    "value": "var(--colors-jade-plain-bg-active)",
    "variable": "var(--colors-jade-plain-bg-active)"
  },
  "colors.jade.plain.fg": {
    "value": "var(--colors-jade-plain-fg)",
    "variable": "var(--colors-jade-plain-fg)"
  },
  "colors.lime.1": {
    "value": "var(--colors-lime-1)",
    "variable": "var(--colors-lime-1)"
  },
  "colors.lime.2": {
    "value": "var(--colors-lime-2)",
    "variable": "var(--colors-lime-2)"
  },
  "colors.lime.3": {
    "value": "var(--colors-lime-3)",
    "variable": "var(--colors-lime-3)"
  },
  "colors.lime.4": {
    "value": "var(--colors-lime-4)",
    "variable": "var(--colors-lime-4)"
  },
  "colors.lime.5": {
    "value": "var(--colors-lime-5)",
    "variable": "var(--colors-lime-5)"
  },
  "colors.lime.6": {
    "value": "var(--colors-lime-6)",
    "variable": "var(--colors-lime-6)"
  },
  "colors.lime.7": {
    "value": "var(--colors-lime-7)",
    "variable": "var(--colors-lime-7)"
  },
  "colors.lime.8": {
    "value": "var(--colors-lime-8)",
    "variable": "var(--colors-lime-8)"
  },
  "colors.lime.9": {
    "value": "var(--colors-lime-9)",
    "variable": "var(--colors-lime-9)"
  },
  "colors.lime.10": {
    "value": "var(--colors-lime-10)",
    "variable": "var(--colors-lime-10)"
  },
  "colors.lime.11": {
    "value": "var(--colors-lime-11)",
    "variable": "var(--colors-lime-11)"
  },
  "colors.lime.12": {
    "value": "var(--colors-lime-12)",
    "variable": "var(--colors-lime-12)"
  },
  "colors.lime.a1": {
    "value": "var(--colors-lime-a1)",
    "variable": "var(--colors-lime-a1)"
  },
  "colors.lime.a2": {
    "value": "var(--colors-lime-a2)",
    "variable": "var(--colors-lime-a2)"
  },
  "colors.lime.a3": {
    "value": "var(--colors-lime-a3)",
    "variable": "var(--colors-lime-a3)"
  },
  "colors.lime.a4": {
    "value": "var(--colors-lime-a4)",
    "variable": "var(--colors-lime-a4)"
  },
  "colors.lime.a5": {
    "value": "var(--colors-lime-a5)",
    "variable": "var(--colors-lime-a5)"
  },
  "colors.lime.a6": {
    "value": "var(--colors-lime-a6)",
    "variable": "var(--colors-lime-a6)"
  },
  "colors.lime.a7": {
    "value": "var(--colors-lime-a7)",
    "variable": "var(--colors-lime-a7)"
  },
  "colors.lime.a8": {
    "value": "var(--colors-lime-a8)",
    "variable": "var(--colors-lime-a8)"
  },
  "colors.lime.a9": {
    "value": "var(--colors-lime-a9)",
    "variable": "var(--colors-lime-a9)"
  },
  "colors.lime.a10": {
    "value": "var(--colors-lime-a10)",
    "variable": "var(--colors-lime-a10)"
  },
  "colors.lime.a11": {
    "value": "var(--colors-lime-a11)",
    "variable": "var(--colors-lime-a11)"
  },
  "colors.lime.a12": {
    "value": "var(--colors-lime-a12)",
    "variable": "var(--colors-lime-a12)"
  },
  "colors.lime.solid.bg": {
    "value": "var(--colors-lime-solid-bg)",
    "variable": "var(--colors-lime-solid-bg)"
  },
  "colors.lime.solid.bg.hover": {
    "value": "var(--colors-lime-solid-bg-hover)",
    "variable": "var(--colors-lime-solid-bg-hover)"
  },
  "colors.lime.solid.fg": {
    "value": "var(--colors-lime-solid-fg)",
    "variable": "var(--colors-lime-solid-fg)"
  },
  "colors.lime.subtle.bg": {
    "value": "var(--colors-lime-subtle-bg)",
    "variable": "var(--colors-lime-subtle-bg)"
  },
  "colors.lime.subtle.bg.hover": {
    "value": "var(--colors-lime-subtle-bg-hover)",
    "variable": "var(--colors-lime-subtle-bg-hover)"
  },
  "colors.lime.subtle.bg.active": {
    "value": "var(--colors-lime-subtle-bg-active)",
    "variable": "var(--colors-lime-subtle-bg-active)"
  },
  "colors.lime.subtle.fg": {
    "value": "var(--colors-lime-subtle-fg)",
    "variable": "var(--colors-lime-subtle-fg)"
  },
  "colors.lime.surface.bg": {
    "value": "var(--colors-lime-surface-bg)",
    "variable": "var(--colors-lime-surface-bg)"
  },
  "colors.lime.surface.bg.active": {
    "value": "var(--colors-lime-surface-bg-active)",
    "variable": "var(--colors-lime-surface-bg-active)"
  },
  "colors.lime.surface.border": {
    "value": "var(--colors-lime-surface-border)",
    "variable": "var(--colors-lime-surface-border)"
  },
  "colors.lime.surface.border.hover": {
    "value": "var(--colors-lime-surface-border-hover)",
    "variable": "var(--colors-lime-surface-border-hover)"
  },
  "colors.lime.surface.fg": {
    "value": "var(--colors-lime-surface-fg)",
    "variable": "var(--colors-lime-surface-fg)"
  },
  "colors.lime.outline.bg.hover": {
    "value": "var(--colors-lime-outline-bg-hover)",
    "variable": "var(--colors-lime-outline-bg-hover)"
  },
  "colors.lime.outline.bg.active": {
    "value": "var(--colors-lime-outline-bg-active)",
    "variable": "var(--colors-lime-outline-bg-active)"
  },
  "colors.lime.outline.border": {
    "value": "var(--colors-lime-outline-border)",
    "variable": "var(--colors-lime-outline-border)"
  },
  "colors.lime.outline.fg": {
    "value": "var(--colors-lime-outline-fg)",
    "variable": "var(--colors-lime-outline-fg)"
  },
  "colors.lime.plain.bg.hover": {
    "value": "var(--colors-lime-plain-bg-hover)",
    "variable": "var(--colors-lime-plain-bg-hover)"
  },
  "colors.lime.plain.bg.active": {
    "value": "var(--colors-lime-plain-bg-active)",
    "variable": "var(--colors-lime-plain-bg-active)"
  },
  "colors.lime.plain.fg": {
    "value": "var(--colors-lime-plain-fg)",
    "variable": "var(--colors-lime-plain-fg)"
  },
  "colors.mauve.1": {
    "value": "var(--colors-mauve-1)",
    "variable": "var(--colors-mauve-1)"
  },
  "colors.mauve.2": {
    "value": "var(--colors-mauve-2)",
    "variable": "var(--colors-mauve-2)"
  },
  "colors.mauve.3": {
    "value": "var(--colors-mauve-3)",
    "variable": "var(--colors-mauve-3)"
  },
  "colors.mauve.4": {
    "value": "var(--colors-mauve-4)",
    "variable": "var(--colors-mauve-4)"
  },
  "colors.mauve.5": {
    "value": "var(--colors-mauve-5)",
    "variable": "var(--colors-mauve-5)"
  },
  "colors.mauve.6": {
    "value": "var(--colors-mauve-6)",
    "variable": "var(--colors-mauve-6)"
  },
  "colors.mauve.7": {
    "value": "var(--colors-mauve-7)",
    "variable": "var(--colors-mauve-7)"
  },
  "colors.mauve.8": {
    "value": "var(--colors-mauve-8)",
    "variable": "var(--colors-mauve-8)"
  },
  "colors.mauve.9": {
    "value": "var(--colors-mauve-9)",
    "variable": "var(--colors-mauve-9)"
  },
  "colors.mauve.10": {
    "value": "var(--colors-mauve-10)",
    "variable": "var(--colors-mauve-10)"
  },
  "colors.mauve.11": {
    "value": "var(--colors-mauve-11)",
    "variable": "var(--colors-mauve-11)"
  },
  "colors.mauve.12": {
    "value": "var(--colors-mauve-12)",
    "variable": "var(--colors-mauve-12)"
  },
  "colors.mauve.a1": {
    "value": "var(--colors-mauve-a1)",
    "variable": "var(--colors-mauve-a1)"
  },
  "colors.mauve.a2": {
    "value": "var(--colors-mauve-a2)",
    "variable": "var(--colors-mauve-a2)"
  },
  "colors.mauve.a3": {
    "value": "var(--colors-mauve-a3)",
    "variable": "var(--colors-mauve-a3)"
  },
  "colors.mauve.a4": {
    "value": "var(--colors-mauve-a4)",
    "variable": "var(--colors-mauve-a4)"
  },
  "colors.mauve.a5": {
    "value": "var(--colors-mauve-a5)",
    "variable": "var(--colors-mauve-a5)"
  },
  "colors.mauve.a6": {
    "value": "var(--colors-mauve-a6)",
    "variable": "var(--colors-mauve-a6)"
  },
  "colors.mauve.a7": {
    "value": "var(--colors-mauve-a7)",
    "variable": "var(--colors-mauve-a7)"
  },
  "colors.mauve.a8": {
    "value": "var(--colors-mauve-a8)",
    "variable": "var(--colors-mauve-a8)"
  },
  "colors.mauve.a9": {
    "value": "var(--colors-mauve-a9)",
    "variable": "var(--colors-mauve-a9)"
  },
  "colors.mauve.a10": {
    "value": "var(--colors-mauve-a10)",
    "variable": "var(--colors-mauve-a10)"
  },
  "colors.mauve.a11": {
    "value": "var(--colors-mauve-a11)",
    "variable": "var(--colors-mauve-a11)"
  },
  "colors.mauve.a12": {
    "value": "var(--colors-mauve-a12)",
    "variable": "var(--colors-mauve-a12)"
  },
  "colors.mauve.solid.bg": {
    "value": "var(--colors-mauve-solid-bg)",
    "variable": "var(--colors-mauve-solid-bg)"
  },
  "colors.mauve.solid.bg.hover": {
    "value": "var(--colors-mauve-solid-bg-hover)",
    "variable": "var(--colors-mauve-solid-bg-hover)"
  },
  "colors.mauve.solid.fg": {
    "value": "var(--colors-mauve-solid-fg)",
    "variable": "var(--colors-mauve-solid-fg)"
  },
  "colors.mauve.subtle.bg": {
    "value": "var(--colors-mauve-subtle-bg)",
    "variable": "var(--colors-mauve-subtle-bg)"
  },
  "colors.mauve.subtle.bg.hover": {
    "value": "var(--colors-mauve-subtle-bg-hover)",
    "variable": "var(--colors-mauve-subtle-bg-hover)"
  },
  "colors.mauve.subtle.bg.active": {
    "value": "var(--colors-mauve-subtle-bg-active)",
    "variable": "var(--colors-mauve-subtle-bg-active)"
  },
  "colors.mauve.subtle.fg": {
    "value": "var(--colors-mauve-subtle-fg)",
    "variable": "var(--colors-mauve-subtle-fg)"
  },
  "colors.mauve.surface.bg": {
    "value": "var(--colors-mauve-surface-bg)",
    "variable": "var(--colors-mauve-surface-bg)"
  },
  "colors.mauve.surface.bg.hover": {
    "value": "var(--colors-mauve-surface-bg-hover)",
    "variable": "var(--colors-mauve-surface-bg-hover)"
  },
  "colors.mauve.surface.bg.active": {
    "value": "var(--colors-mauve-surface-bg-active)",
    "variable": "var(--colors-mauve-surface-bg-active)"
  },
  "colors.mauve.surface.border": {
    "value": "var(--colors-mauve-surface-border)",
    "variable": "var(--colors-mauve-surface-border)"
  },
  "colors.mauve.surface.border.hover": {
    "value": "var(--colors-mauve-surface-border-hover)",
    "variable": "var(--colors-mauve-surface-border-hover)"
  },
  "colors.mauve.surface.fg": {
    "value": "var(--colors-mauve-surface-fg)",
    "variable": "var(--colors-mauve-surface-fg)"
  },
  "colors.mauve.outline.bg.hover": {
    "value": "var(--colors-mauve-outline-bg-hover)",
    "variable": "var(--colors-mauve-outline-bg-hover)"
  },
  "colors.mauve.outline.bg.active": {
    "value": "var(--colors-mauve-outline-bg-active)",
    "variable": "var(--colors-mauve-outline-bg-active)"
  },
  "colors.mauve.outline.border": {
    "value": "var(--colors-mauve-outline-border)",
    "variable": "var(--colors-mauve-outline-border)"
  },
  "colors.mauve.outline.fg": {
    "value": "var(--colors-mauve-outline-fg)",
    "variable": "var(--colors-mauve-outline-fg)"
  },
  "colors.mauve.plain.bg.hover": {
    "value": "var(--colors-mauve-plain-bg-hover)",
    "variable": "var(--colors-mauve-plain-bg-hover)"
  },
  "colors.mauve.plain.bg.active": {
    "value": "var(--colors-mauve-plain-bg-active)",
    "variable": "var(--colors-mauve-plain-bg-active)"
  },
  "colors.mauve.plain.fg": {
    "value": "var(--colors-mauve-plain-fg)",
    "variable": "var(--colors-mauve-plain-fg)"
  },
  "colors.mint.1": {
    "value": "var(--colors-mint-1)",
    "variable": "var(--colors-mint-1)"
  },
  "colors.mint.2": {
    "value": "var(--colors-mint-2)",
    "variable": "var(--colors-mint-2)"
  },
  "colors.mint.3": {
    "value": "var(--colors-mint-3)",
    "variable": "var(--colors-mint-3)"
  },
  "colors.mint.4": {
    "value": "var(--colors-mint-4)",
    "variable": "var(--colors-mint-4)"
  },
  "colors.mint.5": {
    "value": "var(--colors-mint-5)",
    "variable": "var(--colors-mint-5)"
  },
  "colors.mint.6": {
    "value": "var(--colors-mint-6)",
    "variable": "var(--colors-mint-6)"
  },
  "colors.mint.7": {
    "value": "var(--colors-mint-7)",
    "variable": "var(--colors-mint-7)"
  },
  "colors.mint.8": {
    "value": "var(--colors-mint-8)",
    "variable": "var(--colors-mint-8)"
  },
  "colors.mint.9": {
    "value": "var(--colors-mint-9)",
    "variable": "var(--colors-mint-9)"
  },
  "colors.mint.10": {
    "value": "var(--colors-mint-10)",
    "variable": "var(--colors-mint-10)"
  },
  "colors.mint.11": {
    "value": "var(--colors-mint-11)",
    "variable": "var(--colors-mint-11)"
  },
  "colors.mint.12": {
    "value": "var(--colors-mint-12)",
    "variable": "var(--colors-mint-12)"
  },
  "colors.mint.a1": {
    "value": "var(--colors-mint-a1)",
    "variable": "var(--colors-mint-a1)"
  },
  "colors.mint.a2": {
    "value": "var(--colors-mint-a2)",
    "variable": "var(--colors-mint-a2)"
  },
  "colors.mint.a3": {
    "value": "var(--colors-mint-a3)",
    "variable": "var(--colors-mint-a3)"
  },
  "colors.mint.a4": {
    "value": "var(--colors-mint-a4)",
    "variable": "var(--colors-mint-a4)"
  },
  "colors.mint.a5": {
    "value": "var(--colors-mint-a5)",
    "variable": "var(--colors-mint-a5)"
  },
  "colors.mint.a6": {
    "value": "var(--colors-mint-a6)",
    "variable": "var(--colors-mint-a6)"
  },
  "colors.mint.a7": {
    "value": "var(--colors-mint-a7)",
    "variable": "var(--colors-mint-a7)"
  },
  "colors.mint.a8": {
    "value": "var(--colors-mint-a8)",
    "variable": "var(--colors-mint-a8)"
  },
  "colors.mint.a9": {
    "value": "var(--colors-mint-a9)",
    "variable": "var(--colors-mint-a9)"
  },
  "colors.mint.a10": {
    "value": "var(--colors-mint-a10)",
    "variable": "var(--colors-mint-a10)"
  },
  "colors.mint.a11": {
    "value": "var(--colors-mint-a11)",
    "variable": "var(--colors-mint-a11)"
  },
  "colors.mint.a12": {
    "value": "var(--colors-mint-a12)",
    "variable": "var(--colors-mint-a12)"
  },
  "colors.mint.solid.bg": {
    "value": "var(--colors-mint-solid-bg)",
    "variable": "var(--colors-mint-solid-bg)"
  },
  "colors.mint.solid.bg.hover": {
    "value": "var(--colors-mint-solid-bg-hover)",
    "variable": "var(--colors-mint-solid-bg-hover)"
  },
  "colors.mint.solid.fg": {
    "value": "var(--colors-mint-solid-fg)",
    "variable": "var(--colors-mint-solid-fg)"
  },
  "colors.mint.subtle.bg": {
    "value": "var(--colors-mint-subtle-bg)",
    "variable": "var(--colors-mint-subtle-bg)"
  },
  "colors.mint.subtle.bg.hover": {
    "value": "var(--colors-mint-subtle-bg-hover)",
    "variable": "var(--colors-mint-subtle-bg-hover)"
  },
  "colors.mint.subtle.bg.active": {
    "value": "var(--colors-mint-subtle-bg-active)",
    "variable": "var(--colors-mint-subtle-bg-active)"
  },
  "colors.mint.subtle.fg": {
    "value": "var(--colors-mint-subtle-fg)",
    "variable": "var(--colors-mint-subtle-fg)"
  },
  "colors.mint.surface.bg": {
    "value": "var(--colors-mint-surface-bg)",
    "variable": "var(--colors-mint-surface-bg)"
  },
  "colors.mint.surface.bg.active": {
    "value": "var(--colors-mint-surface-bg-active)",
    "variable": "var(--colors-mint-surface-bg-active)"
  },
  "colors.mint.surface.border": {
    "value": "var(--colors-mint-surface-border)",
    "variable": "var(--colors-mint-surface-border)"
  },
  "colors.mint.surface.border.hover": {
    "value": "var(--colors-mint-surface-border-hover)",
    "variable": "var(--colors-mint-surface-border-hover)"
  },
  "colors.mint.surface.fg": {
    "value": "var(--colors-mint-surface-fg)",
    "variable": "var(--colors-mint-surface-fg)"
  },
  "colors.mint.outline.bg.hover": {
    "value": "var(--colors-mint-outline-bg-hover)",
    "variable": "var(--colors-mint-outline-bg-hover)"
  },
  "colors.mint.outline.bg.active": {
    "value": "var(--colors-mint-outline-bg-active)",
    "variable": "var(--colors-mint-outline-bg-active)"
  },
  "colors.mint.outline.border": {
    "value": "var(--colors-mint-outline-border)",
    "variable": "var(--colors-mint-outline-border)"
  },
  "colors.mint.outline.fg": {
    "value": "var(--colors-mint-outline-fg)",
    "variable": "var(--colors-mint-outline-fg)"
  },
  "colors.mint.plain.bg.hover": {
    "value": "var(--colors-mint-plain-bg-hover)",
    "variable": "var(--colors-mint-plain-bg-hover)"
  },
  "colors.mint.plain.bg.active": {
    "value": "var(--colors-mint-plain-bg-active)",
    "variable": "var(--colors-mint-plain-bg-active)"
  },
  "colors.mint.plain.fg": {
    "value": "var(--colors-mint-plain-fg)",
    "variable": "var(--colors-mint-plain-fg)"
  },
  "colors.olive.1": {
    "value": "var(--colors-olive-1)",
    "variable": "var(--colors-olive-1)"
  },
  "colors.olive.2": {
    "value": "var(--colors-olive-2)",
    "variable": "var(--colors-olive-2)"
  },
  "colors.olive.3": {
    "value": "var(--colors-olive-3)",
    "variable": "var(--colors-olive-3)"
  },
  "colors.olive.4": {
    "value": "var(--colors-olive-4)",
    "variable": "var(--colors-olive-4)"
  },
  "colors.olive.5": {
    "value": "var(--colors-olive-5)",
    "variable": "var(--colors-olive-5)"
  },
  "colors.olive.6": {
    "value": "var(--colors-olive-6)",
    "variable": "var(--colors-olive-6)"
  },
  "colors.olive.7": {
    "value": "var(--colors-olive-7)",
    "variable": "var(--colors-olive-7)"
  },
  "colors.olive.8": {
    "value": "var(--colors-olive-8)",
    "variable": "var(--colors-olive-8)"
  },
  "colors.olive.9": {
    "value": "var(--colors-olive-9)",
    "variable": "var(--colors-olive-9)"
  },
  "colors.olive.10": {
    "value": "var(--colors-olive-10)",
    "variable": "var(--colors-olive-10)"
  },
  "colors.olive.11": {
    "value": "var(--colors-olive-11)",
    "variable": "var(--colors-olive-11)"
  },
  "colors.olive.12": {
    "value": "var(--colors-olive-12)",
    "variable": "var(--colors-olive-12)"
  },
  "colors.olive.a1": {
    "value": "var(--colors-olive-a1)",
    "variable": "var(--colors-olive-a1)"
  },
  "colors.olive.a2": {
    "value": "var(--colors-olive-a2)",
    "variable": "var(--colors-olive-a2)"
  },
  "colors.olive.a3": {
    "value": "var(--colors-olive-a3)",
    "variable": "var(--colors-olive-a3)"
  },
  "colors.olive.a4": {
    "value": "var(--colors-olive-a4)",
    "variable": "var(--colors-olive-a4)"
  },
  "colors.olive.a5": {
    "value": "var(--colors-olive-a5)",
    "variable": "var(--colors-olive-a5)"
  },
  "colors.olive.a6": {
    "value": "var(--colors-olive-a6)",
    "variable": "var(--colors-olive-a6)"
  },
  "colors.olive.a7": {
    "value": "var(--colors-olive-a7)",
    "variable": "var(--colors-olive-a7)"
  },
  "colors.olive.a8": {
    "value": "var(--colors-olive-a8)",
    "variable": "var(--colors-olive-a8)"
  },
  "colors.olive.a9": {
    "value": "var(--colors-olive-a9)",
    "variable": "var(--colors-olive-a9)"
  },
  "colors.olive.a10": {
    "value": "var(--colors-olive-a10)",
    "variable": "var(--colors-olive-a10)"
  },
  "colors.olive.a11": {
    "value": "var(--colors-olive-a11)",
    "variable": "var(--colors-olive-a11)"
  },
  "colors.olive.a12": {
    "value": "var(--colors-olive-a12)",
    "variable": "var(--colors-olive-a12)"
  },
  "colors.olive.solid.bg": {
    "value": "var(--colors-olive-solid-bg)",
    "variable": "var(--colors-olive-solid-bg)"
  },
  "colors.olive.solid.bg.hover": {
    "value": "var(--colors-olive-solid-bg-hover)",
    "variable": "var(--colors-olive-solid-bg-hover)"
  },
  "colors.olive.solid.fg": {
    "value": "var(--colors-olive-solid-fg)",
    "variable": "var(--colors-olive-solid-fg)"
  },
  "colors.olive.subtle.bg": {
    "value": "var(--colors-olive-subtle-bg)",
    "variable": "var(--colors-olive-subtle-bg)"
  },
  "colors.olive.subtle.bg.hover": {
    "value": "var(--colors-olive-subtle-bg-hover)",
    "variable": "var(--colors-olive-subtle-bg-hover)"
  },
  "colors.olive.subtle.bg.active": {
    "value": "var(--colors-olive-subtle-bg-active)",
    "variable": "var(--colors-olive-subtle-bg-active)"
  },
  "colors.olive.subtle.fg": {
    "value": "var(--colors-olive-subtle-fg)",
    "variable": "var(--colors-olive-subtle-fg)"
  },
  "colors.olive.surface.bg": {
    "value": "var(--colors-olive-surface-bg)",
    "variable": "var(--colors-olive-surface-bg)"
  },
  "colors.olive.surface.bg.hover": {
    "value": "var(--colors-olive-surface-bg-hover)",
    "variable": "var(--colors-olive-surface-bg-hover)"
  },
  "colors.olive.surface.bg.active": {
    "value": "var(--colors-olive-surface-bg-active)",
    "variable": "var(--colors-olive-surface-bg-active)"
  },
  "colors.olive.surface.border": {
    "value": "var(--colors-olive-surface-border)",
    "variable": "var(--colors-olive-surface-border)"
  },
  "colors.olive.surface.border.hover": {
    "value": "var(--colors-olive-surface-border-hover)",
    "variable": "var(--colors-olive-surface-border-hover)"
  },
  "colors.olive.surface.fg": {
    "value": "var(--colors-olive-surface-fg)",
    "variable": "var(--colors-olive-surface-fg)"
  },
  "colors.olive.outline.bg.hover": {
    "value": "var(--colors-olive-outline-bg-hover)",
    "variable": "var(--colors-olive-outline-bg-hover)"
  },
  "colors.olive.outline.bg.active": {
    "value": "var(--colors-olive-outline-bg-active)",
    "variable": "var(--colors-olive-outline-bg-active)"
  },
  "colors.olive.outline.border": {
    "value": "var(--colors-olive-outline-border)",
    "variable": "var(--colors-olive-outline-border)"
  },
  "colors.olive.outline.fg": {
    "value": "var(--colors-olive-outline-fg)",
    "variable": "var(--colors-olive-outline-fg)"
  },
  "colors.olive.plain.bg.hover": {
    "value": "var(--colors-olive-plain-bg-hover)",
    "variable": "var(--colors-olive-plain-bg-hover)"
  },
  "colors.olive.plain.bg.active": {
    "value": "var(--colors-olive-plain-bg-active)",
    "variable": "var(--colors-olive-plain-bg-active)"
  },
  "colors.olive.plain.fg": {
    "value": "var(--colors-olive-plain-fg)",
    "variable": "var(--colors-olive-plain-fg)"
  },
  "colors.orange.1": {
    "value": "var(--colors-orange-1)",
    "variable": "var(--colors-orange-1)"
  },
  "colors.orange.2": {
    "value": "var(--colors-orange-2)",
    "variable": "var(--colors-orange-2)"
  },
  "colors.orange.3": {
    "value": "var(--colors-orange-3)",
    "variable": "var(--colors-orange-3)"
  },
  "colors.orange.4": {
    "value": "var(--colors-orange-4)",
    "variable": "var(--colors-orange-4)"
  },
  "colors.orange.5": {
    "value": "var(--colors-orange-5)",
    "variable": "var(--colors-orange-5)"
  },
  "colors.orange.6": {
    "value": "var(--colors-orange-6)",
    "variable": "var(--colors-orange-6)"
  },
  "colors.orange.7": {
    "value": "var(--colors-orange-7)",
    "variable": "var(--colors-orange-7)"
  },
  "colors.orange.8": {
    "value": "var(--colors-orange-8)",
    "variable": "var(--colors-orange-8)"
  },
  "colors.orange.9": {
    "value": "var(--colors-orange-9)",
    "variable": "var(--colors-orange-9)"
  },
  "colors.orange.10": {
    "value": "var(--colors-orange-10)",
    "variable": "var(--colors-orange-10)"
  },
  "colors.orange.11": {
    "value": "var(--colors-orange-11)",
    "variable": "var(--colors-orange-11)"
  },
  "colors.orange.12": {
    "value": "var(--colors-orange-12)",
    "variable": "var(--colors-orange-12)"
  },
  "colors.orange.a1": {
    "value": "var(--colors-orange-a1)",
    "variable": "var(--colors-orange-a1)"
  },
  "colors.orange.a2": {
    "value": "var(--colors-orange-a2)",
    "variable": "var(--colors-orange-a2)"
  },
  "colors.orange.a3": {
    "value": "var(--colors-orange-a3)",
    "variable": "var(--colors-orange-a3)"
  },
  "colors.orange.a4": {
    "value": "var(--colors-orange-a4)",
    "variable": "var(--colors-orange-a4)"
  },
  "colors.orange.a5": {
    "value": "var(--colors-orange-a5)",
    "variable": "var(--colors-orange-a5)"
  },
  "colors.orange.a6": {
    "value": "var(--colors-orange-a6)",
    "variable": "var(--colors-orange-a6)"
  },
  "colors.orange.a7": {
    "value": "var(--colors-orange-a7)",
    "variable": "var(--colors-orange-a7)"
  },
  "colors.orange.a8": {
    "value": "var(--colors-orange-a8)",
    "variable": "var(--colors-orange-a8)"
  },
  "colors.orange.a9": {
    "value": "var(--colors-orange-a9)",
    "variable": "var(--colors-orange-a9)"
  },
  "colors.orange.a10": {
    "value": "var(--colors-orange-a10)",
    "variable": "var(--colors-orange-a10)"
  },
  "colors.orange.a11": {
    "value": "var(--colors-orange-a11)",
    "variable": "var(--colors-orange-a11)"
  },
  "colors.orange.a12": {
    "value": "var(--colors-orange-a12)",
    "variable": "var(--colors-orange-a12)"
  },
  "colors.orange.solid.bg": {
    "value": "var(--colors-orange-solid-bg)",
    "variable": "var(--colors-orange-solid-bg)"
  },
  "colors.orange.solid.bg.hover": {
    "value": "var(--colors-orange-solid-bg-hover)",
    "variable": "var(--colors-orange-solid-bg-hover)"
  },
  "colors.orange.solid.fg": {
    "value": "var(--colors-orange-solid-fg)",
    "variable": "var(--colors-orange-solid-fg)"
  },
  "colors.orange.subtle.bg": {
    "value": "var(--colors-orange-subtle-bg)",
    "variable": "var(--colors-orange-subtle-bg)"
  },
  "colors.orange.subtle.bg.hover": {
    "value": "var(--colors-orange-subtle-bg-hover)",
    "variable": "var(--colors-orange-subtle-bg-hover)"
  },
  "colors.orange.subtle.bg.active": {
    "value": "var(--colors-orange-subtle-bg-active)",
    "variable": "var(--colors-orange-subtle-bg-active)"
  },
  "colors.orange.subtle.fg": {
    "value": "var(--colors-orange-subtle-fg)",
    "variable": "var(--colors-orange-subtle-fg)"
  },
  "colors.orange.surface.bg": {
    "value": "var(--colors-orange-surface-bg)",
    "variable": "var(--colors-orange-surface-bg)"
  },
  "colors.orange.surface.bg.active": {
    "value": "var(--colors-orange-surface-bg-active)",
    "variable": "var(--colors-orange-surface-bg-active)"
  },
  "colors.orange.surface.border": {
    "value": "var(--colors-orange-surface-border)",
    "variable": "var(--colors-orange-surface-border)"
  },
  "colors.orange.surface.border.hover": {
    "value": "var(--colors-orange-surface-border-hover)",
    "variable": "var(--colors-orange-surface-border-hover)"
  },
  "colors.orange.surface.fg": {
    "value": "var(--colors-orange-surface-fg)",
    "variable": "var(--colors-orange-surface-fg)"
  },
  "colors.orange.outline.bg.hover": {
    "value": "var(--colors-orange-outline-bg-hover)",
    "variable": "var(--colors-orange-outline-bg-hover)"
  },
  "colors.orange.outline.bg.active": {
    "value": "var(--colors-orange-outline-bg-active)",
    "variable": "var(--colors-orange-outline-bg-active)"
  },
  "colors.orange.outline.border": {
    "value": "var(--colors-orange-outline-border)",
    "variable": "var(--colors-orange-outline-border)"
  },
  "colors.orange.outline.fg": {
    "value": "var(--colors-orange-outline-fg)",
    "variable": "var(--colors-orange-outline-fg)"
  },
  "colors.orange.plain.bg.hover": {
    "value": "var(--colors-orange-plain-bg-hover)",
    "variable": "var(--colors-orange-plain-bg-hover)"
  },
  "colors.orange.plain.bg.active": {
    "value": "var(--colors-orange-plain-bg-active)",
    "variable": "var(--colors-orange-plain-bg-active)"
  },
  "colors.orange.plain.fg": {
    "value": "var(--colors-orange-plain-fg)",
    "variable": "var(--colors-orange-plain-fg)"
  },
  "colors.pink.1": {
    "value": "var(--colors-pink-1)",
    "variable": "var(--colors-pink-1)"
  },
  "colors.pink.2": {
    "value": "var(--colors-pink-2)",
    "variable": "var(--colors-pink-2)"
  },
  "colors.pink.3": {
    "value": "var(--colors-pink-3)",
    "variable": "var(--colors-pink-3)"
  },
  "colors.pink.4": {
    "value": "var(--colors-pink-4)",
    "variable": "var(--colors-pink-4)"
  },
  "colors.pink.5": {
    "value": "var(--colors-pink-5)",
    "variable": "var(--colors-pink-5)"
  },
  "colors.pink.6": {
    "value": "var(--colors-pink-6)",
    "variable": "var(--colors-pink-6)"
  },
  "colors.pink.7": {
    "value": "var(--colors-pink-7)",
    "variable": "var(--colors-pink-7)"
  },
  "colors.pink.8": {
    "value": "var(--colors-pink-8)",
    "variable": "var(--colors-pink-8)"
  },
  "colors.pink.9": {
    "value": "var(--colors-pink-9)",
    "variable": "var(--colors-pink-9)"
  },
  "colors.pink.10": {
    "value": "var(--colors-pink-10)",
    "variable": "var(--colors-pink-10)"
  },
  "colors.pink.11": {
    "value": "var(--colors-pink-11)",
    "variable": "var(--colors-pink-11)"
  },
  "colors.pink.12": {
    "value": "var(--colors-pink-12)",
    "variable": "var(--colors-pink-12)"
  },
  "colors.pink.a1": {
    "value": "var(--colors-pink-a1)",
    "variable": "var(--colors-pink-a1)"
  },
  "colors.pink.a2": {
    "value": "var(--colors-pink-a2)",
    "variable": "var(--colors-pink-a2)"
  },
  "colors.pink.a3": {
    "value": "var(--colors-pink-a3)",
    "variable": "var(--colors-pink-a3)"
  },
  "colors.pink.a4": {
    "value": "var(--colors-pink-a4)",
    "variable": "var(--colors-pink-a4)"
  },
  "colors.pink.a5": {
    "value": "var(--colors-pink-a5)",
    "variable": "var(--colors-pink-a5)"
  },
  "colors.pink.a6": {
    "value": "var(--colors-pink-a6)",
    "variable": "var(--colors-pink-a6)"
  },
  "colors.pink.a7": {
    "value": "var(--colors-pink-a7)",
    "variable": "var(--colors-pink-a7)"
  },
  "colors.pink.a8": {
    "value": "var(--colors-pink-a8)",
    "variable": "var(--colors-pink-a8)"
  },
  "colors.pink.a9": {
    "value": "var(--colors-pink-a9)",
    "variable": "var(--colors-pink-a9)"
  },
  "colors.pink.a10": {
    "value": "var(--colors-pink-a10)",
    "variable": "var(--colors-pink-a10)"
  },
  "colors.pink.a11": {
    "value": "var(--colors-pink-a11)",
    "variable": "var(--colors-pink-a11)"
  },
  "colors.pink.a12": {
    "value": "var(--colors-pink-a12)",
    "variable": "var(--colors-pink-a12)"
  },
  "colors.pink.solid.bg": {
    "value": "var(--colors-pink-solid-bg)",
    "variable": "var(--colors-pink-solid-bg)"
  },
  "colors.pink.solid.bg.hover": {
    "value": "var(--colors-pink-solid-bg-hover)",
    "variable": "var(--colors-pink-solid-bg-hover)"
  },
  "colors.pink.solid.fg": {
    "value": "var(--colors-pink-solid-fg)",
    "variable": "var(--colors-pink-solid-fg)"
  },
  "colors.pink.subtle.bg": {
    "value": "var(--colors-pink-subtle-bg)",
    "variable": "var(--colors-pink-subtle-bg)"
  },
  "colors.pink.subtle.bg.hover": {
    "value": "var(--colors-pink-subtle-bg-hover)",
    "variable": "var(--colors-pink-subtle-bg-hover)"
  },
  "colors.pink.subtle.bg.active": {
    "value": "var(--colors-pink-subtle-bg-active)",
    "variable": "var(--colors-pink-subtle-bg-active)"
  },
  "colors.pink.subtle.fg": {
    "value": "var(--colors-pink-subtle-fg)",
    "variable": "var(--colors-pink-subtle-fg)"
  },
  "colors.pink.surface.bg": {
    "value": "var(--colors-pink-surface-bg)",
    "variable": "var(--colors-pink-surface-bg)"
  },
  "colors.pink.surface.bg.active": {
    "value": "var(--colors-pink-surface-bg-active)",
    "variable": "var(--colors-pink-surface-bg-active)"
  },
  "colors.pink.surface.border": {
    "value": "var(--colors-pink-surface-border)",
    "variable": "var(--colors-pink-surface-border)"
  },
  "colors.pink.surface.border.hover": {
    "value": "var(--colors-pink-surface-border-hover)",
    "variable": "var(--colors-pink-surface-border-hover)"
  },
  "colors.pink.surface.fg": {
    "value": "var(--colors-pink-surface-fg)",
    "variable": "var(--colors-pink-surface-fg)"
  },
  "colors.pink.outline.bg.hover": {
    "value": "var(--colors-pink-outline-bg-hover)",
    "variable": "var(--colors-pink-outline-bg-hover)"
  },
  "colors.pink.outline.bg.active": {
    "value": "var(--colors-pink-outline-bg-active)",
    "variable": "var(--colors-pink-outline-bg-active)"
  },
  "colors.pink.outline.border": {
    "value": "var(--colors-pink-outline-border)",
    "variable": "var(--colors-pink-outline-border)"
  },
  "colors.pink.outline.fg": {
    "value": "var(--colors-pink-outline-fg)",
    "variable": "var(--colors-pink-outline-fg)"
  },
  "colors.pink.plain.bg.hover": {
    "value": "var(--colors-pink-plain-bg-hover)",
    "variable": "var(--colors-pink-plain-bg-hover)"
  },
  "colors.pink.plain.bg.active": {
    "value": "var(--colors-pink-plain-bg-active)",
    "variable": "var(--colors-pink-plain-bg-active)"
  },
  "colors.pink.plain.fg": {
    "value": "var(--colors-pink-plain-fg)",
    "variable": "var(--colors-pink-plain-fg)"
  },
  "colors.plum.1": {
    "value": "var(--colors-plum-1)",
    "variable": "var(--colors-plum-1)"
  },
  "colors.plum.2": {
    "value": "var(--colors-plum-2)",
    "variable": "var(--colors-plum-2)"
  },
  "colors.plum.3": {
    "value": "var(--colors-plum-3)",
    "variable": "var(--colors-plum-3)"
  },
  "colors.plum.4": {
    "value": "var(--colors-plum-4)",
    "variable": "var(--colors-plum-4)"
  },
  "colors.plum.5": {
    "value": "var(--colors-plum-5)",
    "variable": "var(--colors-plum-5)"
  },
  "colors.plum.6": {
    "value": "var(--colors-plum-6)",
    "variable": "var(--colors-plum-6)"
  },
  "colors.plum.7": {
    "value": "var(--colors-plum-7)",
    "variable": "var(--colors-plum-7)"
  },
  "colors.plum.8": {
    "value": "var(--colors-plum-8)",
    "variable": "var(--colors-plum-8)"
  },
  "colors.plum.9": {
    "value": "var(--colors-plum-9)",
    "variable": "var(--colors-plum-9)"
  },
  "colors.plum.10": {
    "value": "var(--colors-plum-10)",
    "variable": "var(--colors-plum-10)"
  },
  "colors.plum.11": {
    "value": "var(--colors-plum-11)",
    "variable": "var(--colors-plum-11)"
  },
  "colors.plum.12": {
    "value": "var(--colors-plum-12)",
    "variable": "var(--colors-plum-12)"
  },
  "colors.plum.a1": {
    "value": "var(--colors-plum-a1)",
    "variable": "var(--colors-plum-a1)"
  },
  "colors.plum.a2": {
    "value": "var(--colors-plum-a2)",
    "variable": "var(--colors-plum-a2)"
  },
  "colors.plum.a3": {
    "value": "var(--colors-plum-a3)",
    "variable": "var(--colors-plum-a3)"
  },
  "colors.plum.a4": {
    "value": "var(--colors-plum-a4)",
    "variable": "var(--colors-plum-a4)"
  },
  "colors.plum.a5": {
    "value": "var(--colors-plum-a5)",
    "variable": "var(--colors-plum-a5)"
  },
  "colors.plum.a6": {
    "value": "var(--colors-plum-a6)",
    "variable": "var(--colors-plum-a6)"
  },
  "colors.plum.a7": {
    "value": "var(--colors-plum-a7)",
    "variable": "var(--colors-plum-a7)"
  },
  "colors.plum.a8": {
    "value": "var(--colors-plum-a8)",
    "variable": "var(--colors-plum-a8)"
  },
  "colors.plum.a9": {
    "value": "var(--colors-plum-a9)",
    "variable": "var(--colors-plum-a9)"
  },
  "colors.plum.a10": {
    "value": "var(--colors-plum-a10)",
    "variable": "var(--colors-plum-a10)"
  },
  "colors.plum.a11": {
    "value": "var(--colors-plum-a11)",
    "variable": "var(--colors-plum-a11)"
  },
  "colors.plum.a12": {
    "value": "var(--colors-plum-a12)",
    "variable": "var(--colors-plum-a12)"
  },
  "colors.plum.solid.bg": {
    "value": "var(--colors-plum-solid-bg)",
    "variable": "var(--colors-plum-solid-bg)"
  },
  "colors.plum.solid.bg.hover": {
    "value": "var(--colors-plum-solid-bg-hover)",
    "variable": "var(--colors-plum-solid-bg-hover)"
  },
  "colors.plum.solid.fg": {
    "value": "var(--colors-plum-solid-fg)",
    "variable": "var(--colors-plum-solid-fg)"
  },
  "colors.plum.subtle.bg": {
    "value": "var(--colors-plum-subtle-bg)",
    "variable": "var(--colors-plum-subtle-bg)"
  },
  "colors.plum.subtle.bg.hover": {
    "value": "var(--colors-plum-subtle-bg-hover)",
    "variable": "var(--colors-plum-subtle-bg-hover)"
  },
  "colors.plum.subtle.bg.active": {
    "value": "var(--colors-plum-subtle-bg-active)",
    "variable": "var(--colors-plum-subtle-bg-active)"
  },
  "colors.plum.subtle.fg": {
    "value": "var(--colors-plum-subtle-fg)",
    "variable": "var(--colors-plum-subtle-fg)"
  },
  "colors.plum.surface.bg": {
    "value": "var(--colors-plum-surface-bg)",
    "variable": "var(--colors-plum-surface-bg)"
  },
  "colors.plum.surface.bg.active": {
    "value": "var(--colors-plum-surface-bg-active)",
    "variable": "var(--colors-plum-surface-bg-active)"
  },
  "colors.plum.surface.border": {
    "value": "var(--colors-plum-surface-border)",
    "variable": "var(--colors-plum-surface-border)"
  },
  "colors.plum.surface.border.hover": {
    "value": "var(--colors-plum-surface-border-hover)",
    "variable": "var(--colors-plum-surface-border-hover)"
  },
  "colors.plum.surface.fg": {
    "value": "var(--colors-plum-surface-fg)",
    "variable": "var(--colors-plum-surface-fg)"
  },
  "colors.plum.outline.bg.hover": {
    "value": "var(--colors-plum-outline-bg-hover)",
    "variable": "var(--colors-plum-outline-bg-hover)"
  },
  "colors.plum.outline.bg.active": {
    "value": "var(--colors-plum-outline-bg-active)",
    "variable": "var(--colors-plum-outline-bg-active)"
  },
  "colors.plum.outline.border": {
    "value": "var(--colors-plum-outline-border)",
    "variable": "var(--colors-plum-outline-border)"
  },
  "colors.plum.outline.fg": {
    "value": "var(--colors-plum-outline-fg)",
    "variable": "var(--colors-plum-outline-fg)"
  },
  "colors.plum.plain.bg.hover": {
    "value": "var(--colors-plum-plain-bg-hover)",
    "variable": "var(--colors-plum-plain-bg-hover)"
  },
  "colors.plum.plain.bg.active": {
    "value": "var(--colors-plum-plain-bg-active)",
    "variable": "var(--colors-plum-plain-bg-active)"
  },
  "colors.plum.plain.fg": {
    "value": "var(--colors-plum-plain-fg)",
    "variable": "var(--colors-plum-plain-fg)"
  },
  "colors.purple.1": {
    "value": "var(--colors-purple-1)",
    "variable": "var(--colors-purple-1)"
  },
  "colors.purple.2": {
    "value": "var(--colors-purple-2)",
    "variable": "var(--colors-purple-2)"
  },
  "colors.purple.3": {
    "value": "var(--colors-purple-3)",
    "variable": "var(--colors-purple-3)"
  },
  "colors.purple.4": {
    "value": "var(--colors-purple-4)",
    "variable": "var(--colors-purple-4)"
  },
  "colors.purple.5": {
    "value": "var(--colors-purple-5)",
    "variable": "var(--colors-purple-5)"
  },
  "colors.purple.6": {
    "value": "var(--colors-purple-6)",
    "variable": "var(--colors-purple-6)"
  },
  "colors.purple.7": {
    "value": "var(--colors-purple-7)",
    "variable": "var(--colors-purple-7)"
  },
  "colors.purple.8": {
    "value": "var(--colors-purple-8)",
    "variable": "var(--colors-purple-8)"
  },
  "colors.purple.9": {
    "value": "var(--colors-purple-9)",
    "variable": "var(--colors-purple-9)"
  },
  "colors.purple.10": {
    "value": "var(--colors-purple-10)",
    "variable": "var(--colors-purple-10)"
  },
  "colors.purple.11": {
    "value": "var(--colors-purple-11)",
    "variable": "var(--colors-purple-11)"
  },
  "colors.purple.12": {
    "value": "var(--colors-purple-12)",
    "variable": "var(--colors-purple-12)"
  },
  "colors.purple.a1": {
    "value": "var(--colors-purple-a1)",
    "variable": "var(--colors-purple-a1)"
  },
  "colors.purple.a2": {
    "value": "var(--colors-purple-a2)",
    "variable": "var(--colors-purple-a2)"
  },
  "colors.purple.a3": {
    "value": "var(--colors-purple-a3)",
    "variable": "var(--colors-purple-a3)"
  },
  "colors.purple.a4": {
    "value": "var(--colors-purple-a4)",
    "variable": "var(--colors-purple-a4)"
  },
  "colors.purple.a5": {
    "value": "var(--colors-purple-a5)",
    "variable": "var(--colors-purple-a5)"
  },
  "colors.purple.a6": {
    "value": "var(--colors-purple-a6)",
    "variable": "var(--colors-purple-a6)"
  },
  "colors.purple.a7": {
    "value": "var(--colors-purple-a7)",
    "variable": "var(--colors-purple-a7)"
  },
  "colors.purple.a8": {
    "value": "var(--colors-purple-a8)",
    "variable": "var(--colors-purple-a8)"
  },
  "colors.purple.a9": {
    "value": "var(--colors-purple-a9)",
    "variable": "var(--colors-purple-a9)"
  },
  "colors.purple.a10": {
    "value": "var(--colors-purple-a10)",
    "variable": "var(--colors-purple-a10)"
  },
  "colors.purple.a11": {
    "value": "var(--colors-purple-a11)",
    "variable": "var(--colors-purple-a11)"
  },
  "colors.purple.a12": {
    "value": "var(--colors-purple-a12)",
    "variable": "var(--colors-purple-a12)"
  },
  "colors.purple.solid.bg": {
    "value": "var(--colors-purple-solid-bg)",
    "variable": "var(--colors-purple-solid-bg)"
  },
  "colors.purple.solid.bg.hover": {
    "value": "var(--colors-purple-solid-bg-hover)",
    "variable": "var(--colors-purple-solid-bg-hover)"
  },
  "colors.purple.solid.fg": {
    "value": "var(--colors-purple-solid-fg)",
    "variable": "var(--colors-purple-solid-fg)"
  },
  "colors.purple.subtle.bg": {
    "value": "var(--colors-purple-subtle-bg)",
    "variable": "var(--colors-purple-subtle-bg)"
  },
  "colors.purple.subtle.bg.hover": {
    "value": "var(--colors-purple-subtle-bg-hover)",
    "variable": "var(--colors-purple-subtle-bg-hover)"
  },
  "colors.purple.subtle.bg.active": {
    "value": "var(--colors-purple-subtle-bg-active)",
    "variable": "var(--colors-purple-subtle-bg-active)"
  },
  "colors.purple.subtle.fg": {
    "value": "var(--colors-purple-subtle-fg)",
    "variable": "var(--colors-purple-subtle-fg)"
  },
  "colors.purple.surface.bg": {
    "value": "var(--colors-purple-surface-bg)",
    "variable": "var(--colors-purple-surface-bg)"
  },
  "colors.purple.surface.bg.active": {
    "value": "var(--colors-purple-surface-bg-active)",
    "variable": "var(--colors-purple-surface-bg-active)"
  },
  "colors.purple.surface.border": {
    "value": "var(--colors-purple-surface-border)",
    "variable": "var(--colors-purple-surface-border)"
  },
  "colors.purple.surface.border.hover": {
    "value": "var(--colors-purple-surface-border-hover)",
    "variable": "var(--colors-purple-surface-border-hover)"
  },
  "colors.purple.surface.fg": {
    "value": "var(--colors-purple-surface-fg)",
    "variable": "var(--colors-purple-surface-fg)"
  },
  "colors.purple.outline.bg.hover": {
    "value": "var(--colors-purple-outline-bg-hover)",
    "variable": "var(--colors-purple-outline-bg-hover)"
  },
  "colors.purple.outline.bg.active": {
    "value": "var(--colors-purple-outline-bg-active)",
    "variable": "var(--colors-purple-outline-bg-active)"
  },
  "colors.purple.outline.border": {
    "value": "var(--colors-purple-outline-border)",
    "variable": "var(--colors-purple-outline-border)"
  },
  "colors.purple.outline.fg": {
    "value": "var(--colors-purple-outline-fg)",
    "variable": "var(--colors-purple-outline-fg)"
  },
  "colors.purple.plain.bg.hover": {
    "value": "var(--colors-purple-plain-bg-hover)",
    "variable": "var(--colors-purple-plain-bg-hover)"
  },
  "colors.purple.plain.bg.active": {
    "value": "var(--colors-purple-plain-bg-active)",
    "variable": "var(--colors-purple-plain-bg-active)"
  },
  "colors.purple.plain.fg": {
    "value": "var(--colors-purple-plain-fg)",
    "variable": "var(--colors-purple-plain-fg)"
  },
  "colors.red.1": {
    "value": "var(--colors-red-1)",
    "variable": "var(--colors-red-1)"
  },
  "colors.red.2": {
    "value": "var(--colors-red-2)",
    "variable": "var(--colors-red-2)"
  },
  "colors.red.3": {
    "value": "var(--colors-red-3)",
    "variable": "var(--colors-red-3)"
  },
  "colors.red.4": {
    "value": "var(--colors-red-4)",
    "variable": "var(--colors-red-4)"
  },
  "colors.red.5": {
    "value": "var(--colors-red-5)",
    "variable": "var(--colors-red-5)"
  },
  "colors.red.6": {
    "value": "var(--colors-red-6)",
    "variable": "var(--colors-red-6)"
  },
  "colors.red.7": {
    "value": "var(--colors-red-7)",
    "variable": "var(--colors-red-7)"
  },
  "colors.red.8": {
    "value": "var(--colors-red-8)",
    "variable": "var(--colors-red-8)"
  },
  "colors.red.9": {
    "value": "var(--colors-red-9)",
    "variable": "var(--colors-red-9)"
  },
  "colors.red.10": {
    "value": "var(--colors-red-10)",
    "variable": "var(--colors-red-10)"
  },
  "colors.red.11": {
    "value": "var(--colors-red-11)",
    "variable": "var(--colors-red-11)"
  },
  "colors.red.12": {
    "value": "var(--colors-red-12)",
    "variable": "var(--colors-red-12)"
  },
  "colors.red.a1": {
    "value": "var(--colors-red-a1)",
    "variable": "var(--colors-red-a1)"
  },
  "colors.red.a2": {
    "value": "var(--colors-red-a2)",
    "variable": "var(--colors-red-a2)"
  },
  "colors.red.a3": {
    "value": "var(--colors-red-a3)",
    "variable": "var(--colors-red-a3)"
  },
  "colors.red.a4": {
    "value": "var(--colors-red-a4)",
    "variable": "var(--colors-red-a4)"
  },
  "colors.red.a5": {
    "value": "var(--colors-red-a5)",
    "variable": "var(--colors-red-a5)"
  },
  "colors.red.a6": {
    "value": "var(--colors-red-a6)",
    "variable": "var(--colors-red-a6)"
  },
  "colors.red.a7": {
    "value": "var(--colors-red-a7)",
    "variable": "var(--colors-red-a7)"
  },
  "colors.red.a8": {
    "value": "var(--colors-red-a8)",
    "variable": "var(--colors-red-a8)"
  },
  "colors.red.a9": {
    "value": "var(--colors-red-a9)",
    "variable": "var(--colors-red-a9)"
  },
  "colors.red.a10": {
    "value": "var(--colors-red-a10)",
    "variable": "var(--colors-red-a10)"
  },
  "colors.red.a11": {
    "value": "var(--colors-red-a11)",
    "variable": "var(--colors-red-a11)"
  },
  "colors.red.a12": {
    "value": "var(--colors-red-a12)",
    "variable": "var(--colors-red-a12)"
  },
  "colors.red.solid.bg": {
    "value": "var(--colors-red-solid-bg)",
    "variable": "var(--colors-red-solid-bg)"
  },
  "colors.red.solid.bg.hover": {
    "value": "var(--colors-red-solid-bg-hover)",
    "variable": "var(--colors-red-solid-bg-hover)"
  },
  "colors.red.solid.fg": {
    "value": "var(--colors-red-solid-fg)",
    "variable": "var(--colors-red-solid-fg)"
  },
  "colors.red.subtle.bg": {
    "value": "var(--colors-red-subtle-bg)",
    "variable": "var(--colors-red-subtle-bg)"
  },
  "colors.red.subtle.bg.hover": {
    "value": "var(--colors-red-subtle-bg-hover)",
    "variable": "var(--colors-red-subtle-bg-hover)"
  },
  "colors.red.subtle.bg.active": {
    "value": "var(--colors-red-subtle-bg-active)",
    "variable": "var(--colors-red-subtle-bg-active)"
  },
  "colors.red.subtle.fg": {
    "value": "var(--colors-red-subtle-fg)",
    "variable": "var(--colors-red-subtle-fg)"
  },
  "colors.red.surface.bg": {
    "value": "var(--colors-red-surface-bg)",
    "variable": "var(--colors-red-surface-bg)"
  },
  "colors.red.surface.bg.active": {
    "value": "var(--colors-red-surface-bg-active)",
    "variable": "var(--colors-red-surface-bg-active)"
  },
  "colors.red.surface.border": {
    "value": "var(--colors-red-surface-border)",
    "variable": "var(--colors-red-surface-border)"
  },
  "colors.red.surface.border.hover": {
    "value": "var(--colors-red-surface-border-hover)",
    "variable": "var(--colors-red-surface-border-hover)"
  },
  "colors.red.surface.fg": {
    "value": "var(--colors-red-surface-fg)",
    "variable": "var(--colors-red-surface-fg)"
  },
  "colors.red.outline.bg.hover": {
    "value": "var(--colors-red-outline-bg-hover)",
    "variable": "var(--colors-red-outline-bg-hover)"
  },
  "colors.red.outline.bg.active": {
    "value": "var(--colors-red-outline-bg-active)",
    "variable": "var(--colors-red-outline-bg-active)"
  },
  "colors.red.outline.border": {
    "value": "var(--colors-red-outline-border)",
    "variable": "var(--colors-red-outline-border)"
  },
  "colors.red.outline.fg": {
    "value": "var(--colors-red-outline-fg)",
    "variable": "var(--colors-red-outline-fg)"
  },
  "colors.red.plain.bg.hover": {
    "value": "var(--colors-red-plain-bg-hover)",
    "variable": "var(--colors-red-plain-bg-hover)"
  },
  "colors.red.plain.bg.active": {
    "value": "var(--colors-red-plain-bg-active)",
    "variable": "var(--colors-red-plain-bg-active)"
  },
  "colors.red.plain.fg": {
    "value": "var(--colors-red-plain-fg)",
    "variable": "var(--colors-red-plain-fg)"
  },
  "colors.ruby.1": {
    "value": "var(--colors-ruby-1)",
    "variable": "var(--colors-ruby-1)"
  },
  "colors.ruby.2": {
    "value": "var(--colors-ruby-2)",
    "variable": "var(--colors-ruby-2)"
  },
  "colors.ruby.3": {
    "value": "var(--colors-ruby-3)",
    "variable": "var(--colors-ruby-3)"
  },
  "colors.ruby.4": {
    "value": "var(--colors-ruby-4)",
    "variable": "var(--colors-ruby-4)"
  },
  "colors.ruby.5": {
    "value": "var(--colors-ruby-5)",
    "variable": "var(--colors-ruby-5)"
  },
  "colors.ruby.6": {
    "value": "var(--colors-ruby-6)",
    "variable": "var(--colors-ruby-6)"
  },
  "colors.ruby.7": {
    "value": "var(--colors-ruby-7)",
    "variable": "var(--colors-ruby-7)"
  },
  "colors.ruby.8": {
    "value": "var(--colors-ruby-8)",
    "variable": "var(--colors-ruby-8)"
  },
  "colors.ruby.9": {
    "value": "var(--colors-ruby-9)",
    "variable": "var(--colors-ruby-9)"
  },
  "colors.ruby.10": {
    "value": "var(--colors-ruby-10)",
    "variable": "var(--colors-ruby-10)"
  },
  "colors.ruby.11": {
    "value": "var(--colors-ruby-11)",
    "variable": "var(--colors-ruby-11)"
  },
  "colors.ruby.12": {
    "value": "var(--colors-ruby-12)",
    "variable": "var(--colors-ruby-12)"
  },
  "colors.ruby.a1": {
    "value": "var(--colors-ruby-a1)",
    "variable": "var(--colors-ruby-a1)"
  },
  "colors.ruby.a2": {
    "value": "var(--colors-ruby-a2)",
    "variable": "var(--colors-ruby-a2)"
  },
  "colors.ruby.a3": {
    "value": "var(--colors-ruby-a3)",
    "variable": "var(--colors-ruby-a3)"
  },
  "colors.ruby.a4": {
    "value": "var(--colors-ruby-a4)",
    "variable": "var(--colors-ruby-a4)"
  },
  "colors.ruby.a5": {
    "value": "var(--colors-ruby-a5)",
    "variable": "var(--colors-ruby-a5)"
  },
  "colors.ruby.a6": {
    "value": "var(--colors-ruby-a6)",
    "variable": "var(--colors-ruby-a6)"
  },
  "colors.ruby.a7": {
    "value": "var(--colors-ruby-a7)",
    "variable": "var(--colors-ruby-a7)"
  },
  "colors.ruby.a8": {
    "value": "var(--colors-ruby-a8)",
    "variable": "var(--colors-ruby-a8)"
  },
  "colors.ruby.a9": {
    "value": "var(--colors-ruby-a9)",
    "variable": "var(--colors-ruby-a9)"
  },
  "colors.ruby.a10": {
    "value": "var(--colors-ruby-a10)",
    "variable": "var(--colors-ruby-a10)"
  },
  "colors.ruby.a11": {
    "value": "var(--colors-ruby-a11)",
    "variable": "var(--colors-ruby-a11)"
  },
  "colors.ruby.a12": {
    "value": "var(--colors-ruby-a12)",
    "variable": "var(--colors-ruby-a12)"
  },
  "colors.ruby.solid.bg": {
    "value": "var(--colors-ruby-solid-bg)",
    "variable": "var(--colors-ruby-solid-bg)"
  },
  "colors.ruby.solid.bg.hover": {
    "value": "var(--colors-ruby-solid-bg-hover)",
    "variable": "var(--colors-ruby-solid-bg-hover)"
  },
  "colors.ruby.solid.fg": {
    "value": "var(--colors-ruby-solid-fg)",
    "variable": "var(--colors-ruby-solid-fg)"
  },
  "colors.ruby.subtle.bg": {
    "value": "var(--colors-ruby-subtle-bg)",
    "variable": "var(--colors-ruby-subtle-bg)"
  },
  "colors.ruby.subtle.bg.hover": {
    "value": "var(--colors-ruby-subtle-bg-hover)",
    "variable": "var(--colors-ruby-subtle-bg-hover)"
  },
  "colors.ruby.subtle.bg.active": {
    "value": "var(--colors-ruby-subtle-bg-active)",
    "variable": "var(--colors-ruby-subtle-bg-active)"
  },
  "colors.ruby.subtle.fg": {
    "value": "var(--colors-ruby-subtle-fg)",
    "variable": "var(--colors-ruby-subtle-fg)"
  },
  "colors.ruby.surface.bg": {
    "value": "var(--colors-ruby-surface-bg)",
    "variable": "var(--colors-ruby-surface-bg)"
  },
  "colors.ruby.surface.bg.active": {
    "value": "var(--colors-ruby-surface-bg-active)",
    "variable": "var(--colors-ruby-surface-bg-active)"
  },
  "colors.ruby.surface.border": {
    "value": "var(--colors-ruby-surface-border)",
    "variable": "var(--colors-ruby-surface-border)"
  },
  "colors.ruby.surface.border.hover": {
    "value": "var(--colors-ruby-surface-border-hover)",
    "variable": "var(--colors-ruby-surface-border-hover)"
  },
  "colors.ruby.surface.fg": {
    "value": "var(--colors-ruby-surface-fg)",
    "variable": "var(--colors-ruby-surface-fg)"
  },
  "colors.ruby.outline.bg.hover": {
    "value": "var(--colors-ruby-outline-bg-hover)",
    "variable": "var(--colors-ruby-outline-bg-hover)"
  },
  "colors.ruby.outline.bg.active": {
    "value": "var(--colors-ruby-outline-bg-active)",
    "variable": "var(--colors-ruby-outline-bg-active)"
  },
  "colors.ruby.outline.border": {
    "value": "var(--colors-ruby-outline-border)",
    "variable": "var(--colors-ruby-outline-border)"
  },
  "colors.ruby.outline.fg": {
    "value": "var(--colors-ruby-outline-fg)",
    "variable": "var(--colors-ruby-outline-fg)"
  },
  "colors.ruby.plain.bg.hover": {
    "value": "var(--colors-ruby-plain-bg-hover)",
    "variable": "var(--colors-ruby-plain-bg-hover)"
  },
  "colors.ruby.plain.bg.active": {
    "value": "var(--colors-ruby-plain-bg-active)",
    "variable": "var(--colors-ruby-plain-bg-active)"
  },
  "colors.ruby.plain.fg": {
    "value": "var(--colors-ruby-plain-fg)",
    "variable": "var(--colors-ruby-plain-fg)"
  },
  "colors.sage.1": {
    "value": "var(--colors-sage-1)",
    "variable": "var(--colors-sage-1)"
  },
  "colors.sage.2": {
    "value": "var(--colors-sage-2)",
    "variable": "var(--colors-sage-2)"
  },
  "colors.sage.3": {
    "value": "var(--colors-sage-3)",
    "variable": "var(--colors-sage-3)"
  },
  "colors.sage.4": {
    "value": "var(--colors-sage-4)",
    "variable": "var(--colors-sage-4)"
  },
  "colors.sage.5": {
    "value": "var(--colors-sage-5)",
    "variable": "var(--colors-sage-5)"
  },
  "colors.sage.6": {
    "value": "var(--colors-sage-6)",
    "variable": "var(--colors-sage-6)"
  },
  "colors.sage.7": {
    "value": "var(--colors-sage-7)",
    "variable": "var(--colors-sage-7)"
  },
  "colors.sage.8": {
    "value": "var(--colors-sage-8)",
    "variable": "var(--colors-sage-8)"
  },
  "colors.sage.9": {
    "value": "var(--colors-sage-9)",
    "variable": "var(--colors-sage-9)"
  },
  "colors.sage.10": {
    "value": "var(--colors-sage-10)",
    "variable": "var(--colors-sage-10)"
  },
  "colors.sage.11": {
    "value": "var(--colors-sage-11)",
    "variable": "var(--colors-sage-11)"
  },
  "colors.sage.12": {
    "value": "var(--colors-sage-12)",
    "variable": "var(--colors-sage-12)"
  },
  "colors.sage.a1": {
    "value": "var(--colors-sage-a1)",
    "variable": "var(--colors-sage-a1)"
  },
  "colors.sage.a2": {
    "value": "var(--colors-sage-a2)",
    "variable": "var(--colors-sage-a2)"
  },
  "colors.sage.a3": {
    "value": "var(--colors-sage-a3)",
    "variable": "var(--colors-sage-a3)"
  },
  "colors.sage.a4": {
    "value": "var(--colors-sage-a4)",
    "variable": "var(--colors-sage-a4)"
  },
  "colors.sage.a5": {
    "value": "var(--colors-sage-a5)",
    "variable": "var(--colors-sage-a5)"
  },
  "colors.sage.a6": {
    "value": "var(--colors-sage-a6)",
    "variable": "var(--colors-sage-a6)"
  },
  "colors.sage.a7": {
    "value": "var(--colors-sage-a7)",
    "variable": "var(--colors-sage-a7)"
  },
  "colors.sage.a8": {
    "value": "var(--colors-sage-a8)",
    "variable": "var(--colors-sage-a8)"
  },
  "colors.sage.a9": {
    "value": "var(--colors-sage-a9)",
    "variable": "var(--colors-sage-a9)"
  },
  "colors.sage.a10": {
    "value": "var(--colors-sage-a10)",
    "variable": "var(--colors-sage-a10)"
  },
  "colors.sage.a11": {
    "value": "var(--colors-sage-a11)",
    "variable": "var(--colors-sage-a11)"
  },
  "colors.sage.a12": {
    "value": "var(--colors-sage-a12)",
    "variable": "var(--colors-sage-a12)"
  },
  "colors.sage.solid.bg": {
    "value": "var(--colors-sage-solid-bg)",
    "variable": "var(--colors-sage-solid-bg)"
  },
  "colors.sage.solid.bg.hover": {
    "value": "var(--colors-sage-solid-bg-hover)",
    "variable": "var(--colors-sage-solid-bg-hover)"
  },
  "colors.sage.solid.fg": {
    "value": "var(--colors-sage-solid-fg)",
    "variable": "var(--colors-sage-solid-fg)"
  },
  "colors.sage.subtle.bg": {
    "value": "var(--colors-sage-subtle-bg)",
    "variable": "var(--colors-sage-subtle-bg)"
  },
  "colors.sage.subtle.bg.hover": {
    "value": "var(--colors-sage-subtle-bg-hover)",
    "variable": "var(--colors-sage-subtle-bg-hover)"
  },
  "colors.sage.subtle.bg.active": {
    "value": "var(--colors-sage-subtle-bg-active)",
    "variable": "var(--colors-sage-subtle-bg-active)"
  },
  "colors.sage.subtle.fg": {
    "value": "var(--colors-sage-subtle-fg)",
    "variable": "var(--colors-sage-subtle-fg)"
  },
  "colors.sage.surface.bg": {
    "value": "var(--colors-sage-surface-bg)",
    "variable": "var(--colors-sage-surface-bg)"
  },
  "colors.sage.surface.bg.hover": {
    "value": "var(--colors-sage-surface-bg-hover)",
    "variable": "var(--colors-sage-surface-bg-hover)"
  },
  "colors.sage.surface.bg.active": {
    "value": "var(--colors-sage-surface-bg-active)",
    "variable": "var(--colors-sage-surface-bg-active)"
  },
  "colors.sage.surface.border": {
    "value": "var(--colors-sage-surface-border)",
    "variable": "var(--colors-sage-surface-border)"
  },
  "colors.sage.surface.border.hover": {
    "value": "var(--colors-sage-surface-border-hover)",
    "variable": "var(--colors-sage-surface-border-hover)"
  },
  "colors.sage.surface.fg": {
    "value": "var(--colors-sage-surface-fg)",
    "variable": "var(--colors-sage-surface-fg)"
  },
  "colors.sage.outline.bg.hover": {
    "value": "var(--colors-sage-outline-bg-hover)",
    "variable": "var(--colors-sage-outline-bg-hover)"
  },
  "colors.sage.outline.bg.active": {
    "value": "var(--colors-sage-outline-bg-active)",
    "variable": "var(--colors-sage-outline-bg-active)"
  },
  "colors.sage.outline.border": {
    "value": "var(--colors-sage-outline-border)",
    "variable": "var(--colors-sage-outline-border)"
  },
  "colors.sage.outline.fg": {
    "value": "var(--colors-sage-outline-fg)",
    "variable": "var(--colors-sage-outline-fg)"
  },
  "colors.sage.plain.bg.hover": {
    "value": "var(--colors-sage-plain-bg-hover)",
    "variable": "var(--colors-sage-plain-bg-hover)"
  },
  "colors.sage.plain.bg.active": {
    "value": "var(--colors-sage-plain-bg-active)",
    "variable": "var(--colors-sage-plain-bg-active)"
  },
  "colors.sage.plain.fg": {
    "value": "var(--colors-sage-plain-fg)",
    "variable": "var(--colors-sage-plain-fg)"
  },
  "colors.sand.1": {
    "value": "var(--colors-sand-1)",
    "variable": "var(--colors-sand-1)"
  },
  "colors.sand.2": {
    "value": "var(--colors-sand-2)",
    "variable": "var(--colors-sand-2)"
  },
  "colors.sand.3": {
    "value": "var(--colors-sand-3)",
    "variable": "var(--colors-sand-3)"
  },
  "colors.sand.4": {
    "value": "var(--colors-sand-4)",
    "variable": "var(--colors-sand-4)"
  },
  "colors.sand.5": {
    "value": "var(--colors-sand-5)",
    "variable": "var(--colors-sand-5)"
  },
  "colors.sand.6": {
    "value": "var(--colors-sand-6)",
    "variable": "var(--colors-sand-6)"
  },
  "colors.sand.7": {
    "value": "var(--colors-sand-7)",
    "variable": "var(--colors-sand-7)"
  },
  "colors.sand.8": {
    "value": "var(--colors-sand-8)",
    "variable": "var(--colors-sand-8)"
  },
  "colors.sand.9": {
    "value": "var(--colors-sand-9)",
    "variable": "var(--colors-sand-9)"
  },
  "colors.sand.10": {
    "value": "var(--colors-sand-10)",
    "variable": "var(--colors-sand-10)"
  },
  "colors.sand.11": {
    "value": "var(--colors-sand-11)",
    "variable": "var(--colors-sand-11)"
  },
  "colors.sand.12": {
    "value": "var(--colors-sand-12)",
    "variable": "var(--colors-sand-12)"
  },
  "colors.sand.a1": {
    "value": "var(--colors-sand-a1)",
    "variable": "var(--colors-sand-a1)"
  },
  "colors.sand.a2": {
    "value": "var(--colors-sand-a2)",
    "variable": "var(--colors-sand-a2)"
  },
  "colors.sand.a3": {
    "value": "var(--colors-sand-a3)",
    "variable": "var(--colors-sand-a3)"
  },
  "colors.sand.a4": {
    "value": "var(--colors-sand-a4)",
    "variable": "var(--colors-sand-a4)"
  },
  "colors.sand.a5": {
    "value": "var(--colors-sand-a5)",
    "variable": "var(--colors-sand-a5)"
  },
  "colors.sand.a6": {
    "value": "var(--colors-sand-a6)",
    "variable": "var(--colors-sand-a6)"
  },
  "colors.sand.a7": {
    "value": "var(--colors-sand-a7)",
    "variable": "var(--colors-sand-a7)"
  },
  "colors.sand.a8": {
    "value": "var(--colors-sand-a8)",
    "variable": "var(--colors-sand-a8)"
  },
  "colors.sand.a9": {
    "value": "var(--colors-sand-a9)",
    "variable": "var(--colors-sand-a9)"
  },
  "colors.sand.a10": {
    "value": "var(--colors-sand-a10)",
    "variable": "var(--colors-sand-a10)"
  },
  "colors.sand.a11": {
    "value": "var(--colors-sand-a11)",
    "variable": "var(--colors-sand-a11)"
  },
  "colors.sand.a12": {
    "value": "var(--colors-sand-a12)",
    "variable": "var(--colors-sand-a12)"
  },
  "colors.sand.solid.bg": {
    "value": "var(--colors-sand-solid-bg)",
    "variable": "var(--colors-sand-solid-bg)"
  },
  "colors.sand.solid.bg.hover": {
    "value": "var(--colors-sand-solid-bg-hover)",
    "variable": "var(--colors-sand-solid-bg-hover)"
  },
  "colors.sand.solid.fg": {
    "value": "var(--colors-sand-solid-fg)",
    "variable": "var(--colors-sand-solid-fg)"
  },
  "colors.sand.subtle.bg": {
    "value": "var(--colors-sand-subtle-bg)",
    "variable": "var(--colors-sand-subtle-bg)"
  },
  "colors.sand.subtle.bg.hover": {
    "value": "var(--colors-sand-subtle-bg-hover)",
    "variable": "var(--colors-sand-subtle-bg-hover)"
  },
  "colors.sand.subtle.bg.active": {
    "value": "var(--colors-sand-subtle-bg-active)",
    "variable": "var(--colors-sand-subtle-bg-active)"
  },
  "colors.sand.subtle.fg": {
    "value": "var(--colors-sand-subtle-fg)",
    "variable": "var(--colors-sand-subtle-fg)"
  },
  "colors.sand.surface.bg": {
    "value": "var(--colors-sand-surface-bg)",
    "variable": "var(--colors-sand-surface-bg)"
  },
  "colors.sand.surface.bg.hover": {
    "value": "var(--colors-sand-surface-bg-hover)",
    "variable": "var(--colors-sand-surface-bg-hover)"
  },
  "colors.sand.surface.bg.active": {
    "value": "var(--colors-sand-surface-bg-active)",
    "variable": "var(--colors-sand-surface-bg-active)"
  },
  "colors.sand.surface.border": {
    "value": "var(--colors-sand-surface-border)",
    "variable": "var(--colors-sand-surface-border)"
  },
  "colors.sand.surface.border.hover": {
    "value": "var(--colors-sand-surface-border-hover)",
    "variable": "var(--colors-sand-surface-border-hover)"
  },
  "colors.sand.surface.fg": {
    "value": "var(--colors-sand-surface-fg)",
    "variable": "var(--colors-sand-surface-fg)"
  },
  "colors.sand.outline.bg.hover": {
    "value": "var(--colors-sand-outline-bg-hover)",
    "variable": "var(--colors-sand-outline-bg-hover)"
  },
  "colors.sand.outline.bg.active": {
    "value": "var(--colors-sand-outline-bg-active)",
    "variable": "var(--colors-sand-outline-bg-active)"
  },
  "colors.sand.outline.border": {
    "value": "var(--colors-sand-outline-border)",
    "variable": "var(--colors-sand-outline-border)"
  },
  "colors.sand.outline.fg": {
    "value": "var(--colors-sand-outline-fg)",
    "variable": "var(--colors-sand-outline-fg)"
  },
  "colors.sand.plain.bg.hover": {
    "value": "var(--colors-sand-plain-bg-hover)",
    "variable": "var(--colors-sand-plain-bg-hover)"
  },
  "colors.sand.plain.bg.active": {
    "value": "var(--colors-sand-plain-bg-active)",
    "variable": "var(--colors-sand-plain-bg-active)"
  },
  "colors.sand.plain.fg": {
    "value": "var(--colors-sand-plain-fg)",
    "variable": "var(--colors-sand-plain-fg)"
  },
  "colors.sky.1": {
    "value": "var(--colors-sky-1)",
    "variable": "var(--colors-sky-1)"
  },
  "colors.sky.2": {
    "value": "var(--colors-sky-2)",
    "variable": "var(--colors-sky-2)"
  },
  "colors.sky.3": {
    "value": "var(--colors-sky-3)",
    "variable": "var(--colors-sky-3)"
  },
  "colors.sky.4": {
    "value": "var(--colors-sky-4)",
    "variable": "var(--colors-sky-4)"
  },
  "colors.sky.5": {
    "value": "var(--colors-sky-5)",
    "variable": "var(--colors-sky-5)"
  },
  "colors.sky.6": {
    "value": "var(--colors-sky-6)",
    "variable": "var(--colors-sky-6)"
  },
  "colors.sky.7": {
    "value": "var(--colors-sky-7)",
    "variable": "var(--colors-sky-7)"
  },
  "colors.sky.8": {
    "value": "var(--colors-sky-8)",
    "variable": "var(--colors-sky-8)"
  },
  "colors.sky.9": {
    "value": "var(--colors-sky-9)",
    "variable": "var(--colors-sky-9)"
  },
  "colors.sky.10": {
    "value": "var(--colors-sky-10)",
    "variable": "var(--colors-sky-10)"
  },
  "colors.sky.11": {
    "value": "var(--colors-sky-11)",
    "variable": "var(--colors-sky-11)"
  },
  "colors.sky.12": {
    "value": "var(--colors-sky-12)",
    "variable": "var(--colors-sky-12)"
  },
  "colors.sky.a1": {
    "value": "var(--colors-sky-a1)",
    "variable": "var(--colors-sky-a1)"
  },
  "colors.sky.a2": {
    "value": "var(--colors-sky-a2)",
    "variable": "var(--colors-sky-a2)"
  },
  "colors.sky.a3": {
    "value": "var(--colors-sky-a3)",
    "variable": "var(--colors-sky-a3)"
  },
  "colors.sky.a4": {
    "value": "var(--colors-sky-a4)",
    "variable": "var(--colors-sky-a4)"
  },
  "colors.sky.a5": {
    "value": "var(--colors-sky-a5)",
    "variable": "var(--colors-sky-a5)"
  },
  "colors.sky.a6": {
    "value": "var(--colors-sky-a6)",
    "variable": "var(--colors-sky-a6)"
  },
  "colors.sky.a7": {
    "value": "var(--colors-sky-a7)",
    "variable": "var(--colors-sky-a7)"
  },
  "colors.sky.a8": {
    "value": "var(--colors-sky-a8)",
    "variable": "var(--colors-sky-a8)"
  },
  "colors.sky.a9": {
    "value": "var(--colors-sky-a9)",
    "variable": "var(--colors-sky-a9)"
  },
  "colors.sky.a10": {
    "value": "var(--colors-sky-a10)",
    "variable": "var(--colors-sky-a10)"
  },
  "colors.sky.a11": {
    "value": "var(--colors-sky-a11)",
    "variable": "var(--colors-sky-a11)"
  },
  "colors.sky.a12": {
    "value": "var(--colors-sky-a12)",
    "variable": "var(--colors-sky-a12)"
  },
  "colors.sky.solid.bg": {
    "value": "var(--colors-sky-solid-bg)",
    "variable": "var(--colors-sky-solid-bg)"
  },
  "colors.sky.solid.bg.hover": {
    "value": "var(--colors-sky-solid-bg-hover)",
    "variable": "var(--colors-sky-solid-bg-hover)"
  },
  "colors.sky.solid.fg": {
    "value": "var(--colors-sky-solid-fg)",
    "variable": "var(--colors-sky-solid-fg)"
  },
  "colors.sky.subtle.bg": {
    "value": "var(--colors-sky-subtle-bg)",
    "variable": "var(--colors-sky-subtle-bg)"
  },
  "colors.sky.subtle.bg.hover": {
    "value": "var(--colors-sky-subtle-bg-hover)",
    "variable": "var(--colors-sky-subtle-bg-hover)"
  },
  "colors.sky.subtle.bg.active": {
    "value": "var(--colors-sky-subtle-bg-active)",
    "variable": "var(--colors-sky-subtle-bg-active)"
  },
  "colors.sky.subtle.fg": {
    "value": "var(--colors-sky-subtle-fg)",
    "variable": "var(--colors-sky-subtle-fg)"
  },
  "colors.sky.surface.bg": {
    "value": "var(--colors-sky-surface-bg)",
    "variable": "var(--colors-sky-surface-bg)"
  },
  "colors.sky.surface.bg.active": {
    "value": "var(--colors-sky-surface-bg-active)",
    "variable": "var(--colors-sky-surface-bg-active)"
  },
  "colors.sky.surface.border": {
    "value": "var(--colors-sky-surface-border)",
    "variable": "var(--colors-sky-surface-border)"
  },
  "colors.sky.surface.border.hover": {
    "value": "var(--colors-sky-surface-border-hover)",
    "variable": "var(--colors-sky-surface-border-hover)"
  },
  "colors.sky.surface.fg": {
    "value": "var(--colors-sky-surface-fg)",
    "variable": "var(--colors-sky-surface-fg)"
  },
  "colors.sky.outline.bg.hover": {
    "value": "var(--colors-sky-outline-bg-hover)",
    "variable": "var(--colors-sky-outline-bg-hover)"
  },
  "colors.sky.outline.bg.active": {
    "value": "var(--colors-sky-outline-bg-active)",
    "variable": "var(--colors-sky-outline-bg-active)"
  },
  "colors.sky.outline.border": {
    "value": "var(--colors-sky-outline-border)",
    "variable": "var(--colors-sky-outline-border)"
  },
  "colors.sky.outline.fg": {
    "value": "var(--colors-sky-outline-fg)",
    "variable": "var(--colors-sky-outline-fg)"
  },
  "colors.sky.plain.bg.hover": {
    "value": "var(--colors-sky-plain-bg-hover)",
    "variable": "var(--colors-sky-plain-bg-hover)"
  },
  "colors.sky.plain.bg.active": {
    "value": "var(--colors-sky-plain-bg-active)",
    "variable": "var(--colors-sky-plain-bg-active)"
  },
  "colors.sky.plain.fg": {
    "value": "var(--colors-sky-plain-fg)",
    "variable": "var(--colors-sky-plain-fg)"
  },
  "colors.slate.1": {
    "value": "var(--colors-slate-1)",
    "variable": "var(--colors-slate-1)"
  },
  "colors.slate.2": {
    "value": "var(--colors-slate-2)",
    "variable": "var(--colors-slate-2)"
  },
  "colors.slate.3": {
    "value": "var(--colors-slate-3)",
    "variable": "var(--colors-slate-3)"
  },
  "colors.slate.4": {
    "value": "var(--colors-slate-4)",
    "variable": "var(--colors-slate-4)"
  },
  "colors.slate.5": {
    "value": "var(--colors-slate-5)",
    "variable": "var(--colors-slate-5)"
  },
  "colors.slate.6": {
    "value": "var(--colors-slate-6)",
    "variable": "var(--colors-slate-6)"
  },
  "colors.slate.7": {
    "value": "var(--colors-slate-7)",
    "variable": "var(--colors-slate-7)"
  },
  "colors.slate.8": {
    "value": "var(--colors-slate-8)",
    "variable": "var(--colors-slate-8)"
  },
  "colors.slate.9": {
    "value": "var(--colors-slate-9)",
    "variable": "var(--colors-slate-9)"
  },
  "colors.slate.10": {
    "value": "var(--colors-slate-10)",
    "variable": "var(--colors-slate-10)"
  },
  "colors.slate.11": {
    "value": "var(--colors-slate-11)",
    "variable": "var(--colors-slate-11)"
  },
  "colors.slate.12": {
    "value": "var(--colors-slate-12)",
    "variable": "var(--colors-slate-12)"
  },
  "colors.slate.a1": {
    "value": "var(--colors-slate-a1)",
    "variable": "var(--colors-slate-a1)"
  },
  "colors.slate.a2": {
    "value": "var(--colors-slate-a2)",
    "variable": "var(--colors-slate-a2)"
  },
  "colors.slate.a3": {
    "value": "var(--colors-slate-a3)",
    "variable": "var(--colors-slate-a3)"
  },
  "colors.slate.a4": {
    "value": "var(--colors-slate-a4)",
    "variable": "var(--colors-slate-a4)"
  },
  "colors.slate.a5": {
    "value": "var(--colors-slate-a5)",
    "variable": "var(--colors-slate-a5)"
  },
  "colors.slate.a6": {
    "value": "var(--colors-slate-a6)",
    "variable": "var(--colors-slate-a6)"
  },
  "colors.slate.a7": {
    "value": "var(--colors-slate-a7)",
    "variable": "var(--colors-slate-a7)"
  },
  "colors.slate.a8": {
    "value": "var(--colors-slate-a8)",
    "variable": "var(--colors-slate-a8)"
  },
  "colors.slate.a9": {
    "value": "var(--colors-slate-a9)",
    "variable": "var(--colors-slate-a9)"
  },
  "colors.slate.a10": {
    "value": "var(--colors-slate-a10)",
    "variable": "var(--colors-slate-a10)"
  },
  "colors.slate.a11": {
    "value": "var(--colors-slate-a11)",
    "variable": "var(--colors-slate-a11)"
  },
  "colors.slate.a12": {
    "value": "var(--colors-slate-a12)",
    "variable": "var(--colors-slate-a12)"
  },
  "colors.slate.solid.bg": {
    "value": "var(--colors-slate-solid-bg)",
    "variable": "var(--colors-slate-solid-bg)"
  },
  "colors.slate.solid.bg.hover": {
    "value": "var(--colors-slate-solid-bg-hover)",
    "variable": "var(--colors-slate-solid-bg-hover)"
  },
  "colors.slate.solid.fg": {
    "value": "var(--colors-slate-solid-fg)",
    "variable": "var(--colors-slate-solid-fg)"
  },
  "colors.slate.subtle.bg": {
    "value": "var(--colors-slate-subtle-bg)",
    "variable": "var(--colors-slate-subtle-bg)"
  },
  "colors.slate.subtle.bg.hover": {
    "value": "var(--colors-slate-subtle-bg-hover)",
    "variable": "var(--colors-slate-subtle-bg-hover)"
  },
  "colors.slate.subtle.bg.active": {
    "value": "var(--colors-slate-subtle-bg-active)",
    "variable": "var(--colors-slate-subtle-bg-active)"
  },
  "colors.slate.subtle.fg": {
    "value": "var(--colors-slate-subtle-fg)",
    "variable": "var(--colors-slate-subtle-fg)"
  },
  "colors.slate.surface.bg": {
    "value": "var(--colors-slate-surface-bg)",
    "variable": "var(--colors-slate-surface-bg)"
  },
  "colors.slate.surface.bg.hover": {
    "value": "var(--colors-slate-surface-bg-hover)",
    "variable": "var(--colors-slate-surface-bg-hover)"
  },
  "colors.slate.surface.bg.active": {
    "value": "var(--colors-slate-surface-bg-active)",
    "variable": "var(--colors-slate-surface-bg-active)"
  },
  "colors.slate.surface.border": {
    "value": "var(--colors-slate-surface-border)",
    "variable": "var(--colors-slate-surface-border)"
  },
  "colors.slate.surface.border.hover": {
    "value": "var(--colors-slate-surface-border-hover)",
    "variable": "var(--colors-slate-surface-border-hover)"
  },
  "colors.slate.surface.fg": {
    "value": "var(--colors-slate-surface-fg)",
    "variable": "var(--colors-slate-surface-fg)"
  },
  "colors.slate.outline.bg.hover": {
    "value": "var(--colors-slate-outline-bg-hover)",
    "variable": "var(--colors-slate-outline-bg-hover)"
  },
  "colors.slate.outline.bg.active": {
    "value": "var(--colors-slate-outline-bg-active)",
    "variable": "var(--colors-slate-outline-bg-active)"
  },
  "colors.slate.outline.border": {
    "value": "var(--colors-slate-outline-border)",
    "variable": "var(--colors-slate-outline-border)"
  },
  "colors.slate.outline.fg": {
    "value": "var(--colors-slate-outline-fg)",
    "variable": "var(--colors-slate-outline-fg)"
  },
  "colors.slate.plain.bg.hover": {
    "value": "var(--colors-slate-plain-bg-hover)",
    "variable": "var(--colors-slate-plain-bg-hover)"
  },
  "colors.slate.plain.bg.active": {
    "value": "var(--colors-slate-plain-bg-active)",
    "variable": "var(--colors-slate-plain-bg-active)"
  },
  "colors.slate.plain.fg": {
    "value": "var(--colors-slate-plain-fg)",
    "variable": "var(--colors-slate-plain-fg)"
  },
  "colors.teal.1": {
    "value": "var(--colors-teal-1)",
    "variable": "var(--colors-teal-1)"
  },
  "colors.teal.2": {
    "value": "var(--colors-teal-2)",
    "variable": "var(--colors-teal-2)"
  },
  "colors.teal.3": {
    "value": "var(--colors-teal-3)",
    "variable": "var(--colors-teal-3)"
  },
  "colors.teal.4": {
    "value": "var(--colors-teal-4)",
    "variable": "var(--colors-teal-4)"
  },
  "colors.teal.5": {
    "value": "var(--colors-teal-5)",
    "variable": "var(--colors-teal-5)"
  },
  "colors.teal.6": {
    "value": "var(--colors-teal-6)",
    "variable": "var(--colors-teal-6)"
  },
  "colors.teal.7": {
    "value": "var(--colors-teal-7)",
    "variable": "var(--colors-teal-7)"
  },
  "colors.teal.8": {
    "value": "var(--colors-teal-8)",
    "variable": "var(--colors-teal-8)"
  },
  "colors.teal.9": {
    "value": "var(--colors-teal-9)",
    "variable": "var(--colors-teal-9)"
  },
  "colors.teal.10": {
    "value": "var(--colors-teal-10)",
    "variable": "var(--colors-teal-10)"
  },
  "colors.teal.11": {
    "value": "var(--colors-teal-11)",
    "variable": "var(--colors-teal-11)"
  },
  "colors.teal.12": {
    "value": "var(--colors-teal-12)",
    "variable": "var(--colors-teal-12)"
  },
  "colors.teal.a1": {
    "value": "var(--colors-teal-a1)",
    "variable": "var(--colors-teal-a1)"
  },
  "colors.teal.a2": {
    "value": "var(--colors-teal-a2)",
    "variable": "var(--colors-teal-a2)"
  },
  "colors.teal.a3": {
    "value": "var(--colors-teal-a3)",
    "variable": "var(--colors-teal-a3)"
  },
  "colors.teal.a4": {
    "value": "var(--colors-teal-a4)",
    "variable": "var(--colors-teal-a4)"
  },
  "colors.teal.a5": {
    "value": "var(--colors-teal-a5)",
    "variable": "var(--colors-teal-a5)"
  },
  "colors.teal.a6": {
    "value": "var(--colors-teal-a6)",
    "variable": "var(--colors-teal-a6)"
  },
  "colors.teal.a7": {
    "value": "var(--colors-teal-a7)",
    "variable": "var(--colors-teal-a7)"
  },
  "colors.teal.a8": {
    "value": "var(--colors-teal-a8)",
    "variable": "var(--colors-teal-a8)"
  },
  "colors.teal.a9": {
    "value": "var(--colors-teal-a9)",
    "variable": "var(--colors-teal-a9)"
  },
  "colors.teal.a10": {
    "value": "var(--colors-teal-a10)",
    "variable": "var(--colors-teal-a10)"
  },
  "colors.teal.a11": {
    "value": "var(--colors-teal-a11)",
    "variable": "var(--colors-teal-a11)"
  },
  "colors.teal.a12": {
    "value": "var(--colors-teal-a12)",
    "variable": "var(--colors-teal-a12)"
  },
  "colors.teal.solid.bg": {
    "value": "var(--colors-teal-solid-bg)",
    "variable": "var(--colors-teal-solid-bg)"
  },
  "colors.teal.solid.bg.hover": {
    "value": "var(--colors-teal-solid-bg-hover)",
    "variable": "var(--colors-teal-solid-bg-hover)"
  },
  "colors.teal.solid.fg": {
    "value": "var(--colors-teal-solid-fg)",
    "variable": "var(--colors-teal-solid-fg)"
  },
  "colors.teal.subtle.bg": {
    "value": "var(--colors-teal-subtle-bg)",
    "variable": "var(--colors-teal-subtle-bg)"
  },
  "colors.teal.subtle.bg.hover": {
    "value": "var(--colors-teal-subtle-bg-hover)",
    "variable": "var(--colors-teal-subtle-bg-hover)"
  },
  "colors.teal.subtle.bg.active": {
    "value": "var(--colors-teal-subtle-bg-active)",
    "variable": "var(--colors-teal-subtle-bg-active)"
  },
  "colors.teal.subtle.fg": {
    "value": "var(--colors-teal-subtle-fg)",
    "variable": "var(--colors-teal-subtle-fg)"
  },
  "colors.teal.surface.bg": {
    "value": "var(--colors-teal-surface-bg)",
    "variable": "var(--colors-teal-surface-bg)"
  },
  "colors.teal.surface.bg.active": {
    "value": "var(--colors-teal-surface-bg-active)",
    "variable": "var(--colors-teal-surface-bg-active)"
  },
  "colors.teal.surface.border": {
    "value": "var(--colors-teal-surface-border)",
    "variable": "var(--colors-teal-surface-border)"
  },
  "colors.teal.surface.border.hover": {
    "value": "var(--colors-teal-surface-border-hover)",
    "variable": "var(--colors-teal-surface-border-hover)"
  },
  "colors.teal.surface.fg": {
    "value": "var(--colors-teal-surface-fg)",
    "variable": "var(--colors-teal-surface-fg)"
  },
  "colors.teal.outline.bg.hover": {
    "value": "var(--colors-teal-outline-bg-hover)",
    "variable": "var(--colors-teal-outline-bg-hover)"
  },
  "colors.teal.outline.bg.active": {
    "value": "var(--colors-teal-outline-bg-active)",
    "variable": "var(--colors-teal-outline-bg-active)"
  },
  "colors.teal.outline.border": {
    "value": "var(--colors-teal-outline-border)",
    "variable": "var(--colors-teal-outline-border)"
  },
  "colors.teal.outline.fg": {
    "value": "var(--colors-teal-outline-fg)",
    "variable": "var(--colors-teal-outline-fg)"
  },
  "colors.teal.plain.bg.hover": {
    "value": "var(--colors-teal-plain-bg-hover)",
    "variable": "var(--colors-teal-plain-bg-hover)"
  },
  "colors.teal.plain.bg.active": {
    "value": "var(--colors-teal-plain-bg-active)",
    "variable": "var(--colors-teal-plain-bg-active)"
  },
  "colors.teal.plain.fg": {
    "value": "var(--colors-teal-plain-fg)",
    "variable": "var(--colors-teal-plain-fg)"
  },
  "colors.tomato.1": {
    "value": "var(--colors-tomato-1)",
    "variable": "var(--colors-tomato-1)"
  },
  "colors.tomato.2": {
    "value": "var(--colors-tomato-2)",
    "variable": "var(--colors-tomato-2)"
  },
  "colors.tomato.3": {
    "value": "var(--colors-tomato-3)",
    "variable": "var(--colors-tomato-3)"
  },
  "colors.tomato.4": {
    "value": "var(--colors-tomato-4)",
    "variable": "var(--colors-tomato-4)"
  },
  "colors.tomato.5": {
    "value": "var(--colors-tomato-5)",
    "variable": "var(--colors-tomato-5)"
  },
  "colors.tomato.6": {
    "value": "var(--colors-tomato-6)",
    "variable": "var(--colors-tomato-6)"
  },
  "colors.tomato.7": {
    "value": "var(--colors-tomato-7)",
    "variable": "var(--colors-tomato-7)"
  },
  "colors.tomato.8": {
    "value": "var(--colors-tomato-8)",
    "variable": "var(--colors-tomato-8)"
  },
  "colors.tomato.9": {
    "value": "var(--colors-tomato-9)",
    "variable": "var(--colors-tomato-9)"
  },
  "colors.tomato.10": {
    "value": "var(--colors-tomato-10)",
    "variable": "var(--colors-tomato-10)"
  },
  "colors.tomato.11": {
    "value": "var(--colors-tomato-11)",
    "variable": "var(--colors-tomato-11)"
  },
  "colors.tomato.12": {
    "value": "var(--colors-tomato-12)",
    "variable": "var(--colors-tomato-12)"
  },
  "colors.tomato.a1": {
    "value": "var(--colors-tomato-a1)",
    "variable": "var(--colors-tomato-a1)"
  },
  "colors.tomato.a2": {
    "value": "var(--colors-tomato-a2)",
    "variable": "var(--colors-tomato-a2)"
  },
  "colors.tomato.a3": {
    "value": "var(--colors-tomato-a3)",
    "variable": "var(--colors-tomato-a3)"
  },
  "colors.tomato.a4": {
    "value": "var(--colors-tomato-a4)",
    "variable": "var(--colors-tomato-a4)"
  },
  "colors.tomato.a5": {
    "value": "var(--colors-tomato-a5)",
    "variable": "var(--colors-tomato-a5)"
  },
  "colors.tomato.a6": {
    "value": "var(--colors-tomato-a6)",
    "variable": "var(--colors-tomato-a6)"
  },
  "colors.tomato.a7": {
    "value": "var(--colors-tomato-a7)",
    "variable": "var(--colors-tomato-a7)"
  },
  "colors.tomato.a8": {
    "value": "var(--colors-tomato-a8)",
    "variable": "var(--colors-tomato-a8)"
  },
  "colors.tomato.a9": {
    "value": "var(--colors-tomato-a9)",
    "variable": "var(--colors-tomato-a9)"
  },
  "colors.tomato.a10": {
    "value": "var(--colors-tomato-a10)",
    "variable": "var(--colors-tomato-a10)"
  },
  "colors.tomato.a11": {
    "value": "var(--colors-tomato-a11)",
    "variable": "var(--colors-tomato-a11)"
  },
  "colors.tomato.a12": {
    "value": "var(--colors-tomato-a12)",
    "variable": "var(--colors-tomato-a12)"
  },
  "colors.tomato.solid.bg": {
    "value": "var(--colors-tomato-solid-bg)",
    "variable": "var(--colors-tomato-solid-bg)"
  },
  "colors.tomato.solid.bg.hover": {
    "value": "var(--colors-tomato-solid-bg-hover)",
    "variable": "var(--colors-tomato-solid-bg-hover)"
  },
  "colors.tomato.solid.fg": {
    "value": "var(--colors-tomato-solid-fg)",
    "variable": "var(--colors-tomato-solid-fg)"
  },
  "colors.tomato.subtle.bg": {
    "value": "var(--colors-tomato-subtle-bg)",
    "variable": "var(--colors-tomato-subtle-bg)"
  },
  "colors.tomato.subtle.bg.hover": {
    "value": "var(--colors-tomato-subtle-bg-hover)",
    "variable": "var(--colors-tomato-subtle-bg-hover)"
  },
  "colors.tomato.subtle.bg.active": {
    "value": "var(--colors-tomato-subtle-bg-active)",
    "variable": "var(--colors-tomato-subtle-bg-active)"
  },
  "colors.tomato.subtle.fg": {
    "value": "var(--colors-tomato-subtle-fg)",
    "variable": "var(--colors-tomato-subtle-fg)"
  },
  "colors.tomato.surface.bg": {
    "value": "var(--colors-tomato-surface-bg)",
    "variable": "var(--colors-tomato-surface-bg)"
  },
  "colors.tomato.surface.bg.active": {
    "value": "var(--colors-tomato-surface-bg-active)",
    "variable": "var(--colors-tomato-surface-bg-active)"
  },
  "colors.tomato.surface.border": {
    "value": "var(--colors-tomato-surface-border)",
    "variable": "var(--colors-tomato-surface-border)"
  },
  "colors.tomato.surface.border.hover": {
    "value": "var(--colors-tomato-surface-border-hover)",
    "variable": "var(--colors-tomato-surface-border-hover)"
  },
  "colors.tomato.surface.fg": {
    "value": "var(--colors-tomato-surface-fg)",
    "variable": "var(--colors-tomato-surface-fg)"
  },
  "colors.tomato.outline.bg.hover": {
    "value": "var(--colors-tomato-outline-bg-hover)",
    "variable": "var(--colors-tomato-outline-bg-hover)"
  },
  "colors.tomato.outline.bg.active": {
    "value": "var(--colors-tomato-outline-bg-active)",
    "variable": "var(--colors-tomato-outline-bg-active)"
  },
  "colors.tomato.outline.border": {
    "value": "var(--colors-tomato-outline-border)",
    "variable": "var(--colors-tomato-outline-border)"
  },
  "colors.tomato.outline.fg": {
    "value": "var(--colors-tomato-outline-fg)",
    "variable": "var(--colors-tomato-outline-fg)"
  },
  "colors.tomato.plain.bg.hover": {
    "value": "var(--colors-tomato-plain-bg-hover)",
    "variable": "var(--colors-tomato-plain-bg-hover)"
  },
  "colors.tomato.plain.bg.active": {
    "value": "var(--colors-tomato-plain-bg-active)",
    "variable": "var(--colors-tomato-plain-bg-active)"
  },
  "colors.tomato.plain.fg": {
    "value": "var(--colors-tomato-plain-fg)",
    "variable": "var(--colors-tomato-plain-fg)"
  },
  "colors.violet.1": {
    "value": "var(--colors-violet-1)",
    "variable": "var(--colors-violet-1)"
  },
  "colors.violet.2": {
    "value": "var(--colors-violet-2)",
    "variable": "var(--colors-violet-2)"
  },
  "colors.violet.3": {
    "value": "var(--colors-violet-3)",
    "variable": "var(--colors-violet-3)"
  },
  "colors.violet.4": {
    "value": "var(--colors-violet-4)",
    "variable": "var(--colors-violet-4)"
  },
  "colors.violet.5": {
    "value": "var(--colors-violet-5)",
    "variable": "var(--colors-violet-5)"
  },
  "colors.violet.6": {
    "value": "var(--colors-violet-6)",
    "variable": "var(--colors-violet-6)"
  },
  "colors.violet.7": {
    "value": "var(--colors-violet-7)",
    "variable": "var(--colors-violet-7)"
  },
  "colors.violet.8": {
    "value": "var(--colors-violet-8)",
    "variable": "var(--colors-violet-8)"
  },
  "colors.violet.9": {
    "value": "var(--colors-violet-9)",
    "variable": "var(--colors-violet-9)"
  },
  "colors.violet.10": {
    "value": "var(--colors-violet-10)",
    "variable": "var(--colors-violet-10)"
  },
  "colors.violet.11": {
    "value": "var(--colors-violet-11)",
    "variable": "var(--colors-violet-11)"
  },
  "colors.violet.12": {
    "value": "var(--colors-violet-12)",
    "variable": "var(--colors-violet-12)"
  },
  "colors.violet.a1": {
    "value": "var(--colors-violet-a1)",
    "variable": "var(--colors-violet-a1)"
  },
  "colors.violet.a2": {
    "value": "var(--colors-violet-a2)",
    "variable": "var(--colors-violet-a2)"
  },
  "colors.violet.a3": {
    "value": "var(--colors-violet-a3)",
    "variable": "var(--colors-violet-a3)"
  },
  "colors.violet.a4": {
    "value": "var(--colors-violet-a4)",
    "variable": "var(--colors-violet-a4)"
  },
  "colors.violet.a5": {
    "value": "var(--colors-violet-a5)",
    "variable": "var(--colors-violet-a5)"
  },
  "colors.violet.a6": {
    "value": "var(--colors-violet-a6)",
    "variable": "var(--colors-violet-a6)"
  },
  "colors.violet.a7": {
    "value": "var(--colors-violet-a7)",
    "variable": "var(--colors-violet-a7)"
  },
  "colors.violet.a8": {
    "value": "var(--colors-violet-a8)",
    "variable": "var(--colors-violet-a8)"
  },
  "colors.violet.a9": {
    "value": "var(--colors-violet-a9)",
    "variable": "var(--colors-violet-a9)"
  },
  "colors.violet.a10": {
    "value": "var(--colors-violet-a10)",
    "variable": "var(--colors-violet-a10)"
  },
  "colors.violet.a11": {
    "value": "var(--colors-violet-a11)",
    "variable": "var(--colors-violet-a11)"
  },
  "colors.violet.a12": {
    "value": "var(--colors-violet-a12)",
    "variable": "var(--colors-violet-a12)"
  },
  "colors.violet.solid.bg": {
    "value": "var(--colors-violet-solid-bg)",
    "variable": "var(--colors-violet-solid-bg)"
  },
  "colors.violet.solid.bg.hover": {
    "value": "var(--colors-violet-solid-bg-hover)",
    "variable": "var(--colors-violet-solid-bg-hover)"
  },
  "colors.violet.solid.fg": {
    "value": "var(--colors-violet-solid-fg)",
    "variable": "var(--colors-violet-solid-fg)"
  },
  "colors.violet.subtle.bg": {
    "value": "var(--colors-violet-subtle-bg)",
    "variable": "var(--colors-violet-subtle-bg)"
  },
  "colors.violet.subtle.bg.hover": {
    "value": "var(--colors-violet-subtle-bg-hover)",
    "variable": "var(--colors-violet-subtle-bg-hover)"
  },
  "colors.violet.subtle.bg.active": {
    "value": "var(--colors-violet-subtle-bg-active)",
    "variable": "var(--colors-violet-subtle-bg-active)"
  },
  "colors.violet.subtle.fg": {
    "value": "var(--colors-violet-subtle-fg)",
    "variable": "var(--colors-violet-subtle-fg)"
  },
  "colors.violet.surface.bg": {
    "value": "var(--colors-violet-surface-bg)",
    "variable": "var(--colors-violet-surface-bg)"
  },
  "colors.violet.surface.bg.active": {
    "value": "var(--colors-violet-surface-bg-active)",
    "variable": "var(--colors-violet-surface-bg-active)"
  },
  "colors.violet.surface.border": {
    "value": "var(--colors-violet-surface-border)",
    "variable": "var(--colors-violet-surface-border)"
  },
  "colors.violet.surface.border.hover": {
    "value": "var(--colors-violet-surface-border-hover)",
    "variable": "var(--colors-violet-surface-border-hover)"
  },
  "colors.violet.surface.fg": {
    "value": "var(--colors-violet-surface-fg)",
    "variable": "var(--colors-violet-surface-fg)"
  },
  "colors.violet.outline.bg.hover": {
    "value": "var(--colors-violet-outline-bg-hover)",
    "variable": "var(--colors-violet-outline-bg-hover)"
  },
  "colors.violet.outline.bg.active": {
    "value": "var(--colors-violet-outline-bg-active)",
    "variable": "var(--colors-violet-outline-bg-active)"
  },
  "colors.violet.outline.border": {
    "value": "var(--colors-violet-outline-border)",
    "variable": "var(--colors-violet-outline-border)"
  },
  "colors.violet.outline.fg": {
    "value": "var(--colors-violet-outline-fg)",
    "variable": "var(--colors-violet-outline-fg)"
  },
  "colors.violet.plain.bg.hover": {
    "value": "var(--colors-violet-plain-bg-hover)",
    "variable": "var(--colors-violet-plain-bg-hover)"
  },
  "colors.violet.plain.bg.active": {
    "value": "var(--colors-violet-plain-bg-active)",
    "variable": "var(--colors-violet-plain-bg-active)"
  },
  "colors.violet.plain.fg": {
    "value": "var(--colors-violet-plain-fg)",
    "variable": "var(--colors-violet-plain-fg)"
  },
  "colors.yellow.1": {
    "value": "var(--colors-yellow-1)",
    "variable": "var(--colors-yellow-1)"
  },
  "colors.yellow.2": {
    "value": "var(--colors-yellow-2)",
    "variable": "var(--colors-yellow-2)"
  },
  "colors.yellow.3": {
    "value": "var(--colors-yellow-3)",
    "variable": "var(--colors-yellow-3)"
  },
  "colors.yellow.4": {
    "value": "var(--colors-yellow-4)",
    "variable": "var(--colors-yellow-4)"
  },
  "colors.yellow.5": {
    "value": "var(--colors-yellow-5)",
    "variable": "var(--colors-yellow-5)"
  },
  "colors.yellow.6": {
    "value": "var(--colors-yellow-6)",
    "variable": "var(--colors-yellow-6)"
  },
  "colors.yellow.7": {
    "value": "var(--colors-yellow-7)",
    "variable": "var(--colors-yellow-7)"
  },
  "colors.yellow.8": {
    "value": "var(--colors-yellow-8)",
    "variable": "var(--colors-yellow-8)"
  },
  "colors.yellow.9": {
    "value": "var(--colors-yellow-9)",
    "variable": "var(--colors-yellow-9)"
  },
  "colors.yellow.10": {
    "value": "var(--colors-yellow-10)",
    "variable": "var(--colors-yellow-10)"
  },
  "colors.yellow.11": {
    "value": "var(--colors-yellow-11)",
    "variable": "var(--colors-yellow-11)"
  },
  "colors.yellow.12": {
    "value": "var(--colors-yellow-12)",
    "variable": "var(--colors-yellow-12)"
  },
  "colors.yellow.a1": {
    "value": "var(--colors-yellow-a1)",
    "variable": "var(--colors-yellow-a1)"
  },
  "colors.yellow.a2": {
    "value": "var(--colors-yellow-a2)",
    "variable": "var(--colors-yellow-a2)"
  },
  "colors.yellow.a3": {
    "value": "var(--colors-yellow-a3)",
    "variable": "var(--colors-yellow-a3)"
  },
  "colors.yellow.a4": {
    "value": "var(--colors-yellow-a4)",
    "variable": "var(--colors-yellow-a4)"
  },
  "colors.yellow.a5": {
    "value": "var(--colors-yellow-a5)",
    "variable": "var(--colors-yellow-a5)"
  },
  "colors.yellow.a6": {
    "value": "var(--colors-yellow-a6)",
    "variable": "var(--colors-yellow-a6)"
  },
  "colors.yellow.a7": {
    "value": "var(--colors-yellow-a7)",
    "variable": "var(--colors-yellow-a7)"
  },
  "colors.yellow.a8": {
    "value": "var(--colors-yellow-a8)",
    "variable": "var(--colors-yellow-a8)"
  },
  "colors.yellow.a9": {
    "value": "var(--colors-yellow-a9)",
    "variable": "var(--colors-yellow-a9)"
  },
  "colors.yellow.a10": {
    "value": "var(--colors-yellow-a10)",
    "variable": "var(--colors-yellow-a10)"
  },
  "colors.yellow.a11": {
    "value": "var(--colors-yellow-a11)",
    "variable": "var(--colors-yellow-a11)"
  },
  "colors.yellow.a12": {
    "value": "var(--colors-yellow-a12)",
    "variable": "var(--colors-yellow-a12)"
  },
  "colors.yellow.solid.bg": {
    "value": "var(--colors-yellow-solid-bg)",
    "variable": "var(--colors-yellow-solid-bg)"
  },
  "colors.yellow.solid.bg.hover": {
    "value": "var(--colors-yellow-solid-bg-hover)",
    "variable": "var(--colors-yellow-solid-bg-hover)"
  },
  "colors.yellow.solid.fg": {
    "value": "var(--colors-yellow-solid-fg)",
    "variable": "var(--colors-yellow-solid-fg)"
  },
  "colors.yellow.subtle.bg": {
    "value": "var(--colors-yellow-subtle-bg)",
    "variable": "var(--colors-yellow-subtle-bg)"
  },
  "colors.yellow.subtle.bg.hover": {
    "value": "var(--colors-yellow-subtle-bg-hover)",
    "variable": "var(--colors-yellow-subtle-bg-hover)"
  },
  "colors.yellow.subtle.bg.active": {
    "value": "var(--colors-yellow-subtle-bg-active)",
    "variable": "var(--colors-yellow-subtle-bg-active)"
  },
  "colors.yellow.subtle.fg": {
    "value": "var(--colors-yellow-subtle-fg)",
    "variable": "var(--colors-yellow-subtle-fg)"
  },
  "colors.yellow.surface.bg": {
    "value": "var(--colors-yellow-surface-bg)",
    "variable": "var(--colors-yellow-surface-bg)"
  },
  "colors.yellow.surface.bg.active": {
    "value": "var(--colors-yellow-surface-bg-active)",
    "variable": "var(--colors-yellow-surface-bg-active)"
  },
  "colors.yellow.surface.border": {
    "value": "var(--colors-yellow-surface-border)",
    "variable": "var(--colors-yellow-surface-border)"
  },
  "colors.yellow.surface.border.hover": {
    "value": "var(--colors-yellow-surface-border-hover)",
    "variable": "var(--colors-yellow-surface-border-hover)"
  },
  "colors.yellow.surface.fg": {
    "value": "var(--colors-yellow-surface-fg)",
    "variable": "var(--colors-yellow-surface-fg)"
  },
  "colors.yellow.outline.bg.hover": {
    "value": "var(--colors-yellow-outline-bg-hover)",
    "variable": "var(--colors-yellow-outline-bg-hover)"
  },
  "colors.yellow.outline.bg.active": {
    "value": "var(--colors-yellow-outline-bg-active)",
    "variable": "var(--colors-yellow-outline-bg-active)"
  },
  "colors.yellow.outline.border": {
    "value": "var(--colors-yellow-outline-border)",
    "variable": "var(--colors-yellow-outline-border)"
  },
  "colors.yellow.outline.fg": {
    "value": "var(--colors-yellow-outline-fg)",
    "variable": "var(--colors-yellow-outline-fg)"
  },
  "colors.yellow.plain.bg.hover": {
    "value": "var(--colors-yellow-plain-bg-hover)",
    "variable": "var(--colors-yellow-plain-bg-hover)"
  },
  "colors.yellow.plain.bg.active": {
    "value": "var(--colors-yellow-plain-bg-active)",
    "variable": "var(--colors-yellow-plain-bg-active)"
  },
  "colors.yellow.plain.fg": {
    "value": "var(--colors-yellow-plain-fg)",
    "variable": "var(--colors-yellow-plain-fg)"
  },
  "shadows.inset": {
    "value": "var(--shadows-inset)",
    "variable": "var(--shadows-inset)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  },
  "colors.colorPalette.950": {
    "value": "var(--colors-color-palette-950)",
    "variable": "var(--colors-color-palette-950)"
  },
  "colors.colorPalette.a1": {
    "value": "var(--colors-color-palette-a1)",
    "variable": "var(--colors-color-palette-a1)"
  },
  "colors.colorPalette.a2": {
    "value": "var(--colors-color-palette-a2)",
    "variable": "var(--colors-color-palette-a2)"
  },
  "colors.colorPalette.a3": {
    "value": "var(--colors-color-palette-a3)",
    "variable": "var(--colors-color-palette-a3)"
  },
  "colors.colorPalette.a4": {
    "value": "var(--colors-color-palette-a4)",
    "variable": "var(--colors-color-palette-a4)"
  },
  "colors.colorPalette.a5": {
    "value": "var(--colors-color-palette-a5)",
    "variable": "var(--colors-color-palette-a5)"
  },
  "colors.colorPalette.a6": {
    "value": "var(--colors-color-palette-a6)",
    "variable": "var(--colors-color-palette-a6)"
  },
  "colors.colorPalette.a7": {
    "value": "var(--colors-color-palette-a7)",
    "variable": "var(--colors-color-palette-a7)"
  },
  "colors.colorPalette.a8": {
    "value": "var(--colors-color-palette-a8)",
    "variable": "var(--colors-color-palette-a8)"
  },
  "colors.colorPalette.a9": {
    "value": "var(--colors-color-palette-a9)",
    "variable": "var(--colors-color-palette-a9)"
  },
  "colors.colorPalette.a10": {
    "value": "var(--colors-color-palette-a10)",
    "variable": "var(--colors-color-palette-a10)"
  },
  "colors.colorPalette.a11": {
    "value": "var(--colors-color-palette-a11)",
    "variable": "var(--colors-color-palette-a11)"
  },
  "colors.colorPalette.a12": {
    "value": "var(--colors-color-palette-a12)",
    "variable": "var(--colors-color-palette-a12)"
  },
  "colors.colorPalette.default": {
    "value": "var(--colors-color-palette-default)",
    "variable": "var(--colors-color-palette-default)"
  },
  "colors.colorPalette.muted": {
    "value": "var(--colors-color-palette-muted)",
    "variable": "var(--colors-color-palette-muted)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--colors-color-palette-subtle)",
    "variable": "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.disabled": {
    "value": "var(--colors-color-palette-disabled)",
    "variable": "var(--colors-color-palette-disabled)"
  },
  "colors.colorPalette.inverted": {
    "value": "var(--colors-color-palette-inverted)",
    "variable": "var(--colors-color-palette-inverted)"
  },
  "colors.colorPalette.canvas": {
    "value": "var(--colors-color-palette-canvas)",
    "variable": "var(--colors-color-palette-canvas)"
  },
  "colors.colorPalette.emphasized": {
    "value": "var(--colors-color-palette-emphasized)",
    "variable": "var(--colors-color-palette-emphasized)"
  },
  "colors.colorPalette.outline": {
    "value": "var(--colors-color-palette-outline)",
    "variable": "var(--colors-color-palette-outline)"
  },
  "colors.colorPalette.fg": {
    "value": "var(--colors-color-palette-fg)",
    "variable": "var(--colors-color-palette-fg)"
  },
  "colors.colorPalette.text": {
    "value": "var(--colors-color-palette-text)",
    "variable": "var(--colors-color-palette-text)"
  },
  "colors.colorPalette.bg": {
    "value": "var(--colors-color-palette-bg)",
    "variable": "var(--colors-color-palette-bg)"
  },
  "colors.colorPalette.1": {
    "value": "var(--colors-color-palette-1)",
    "variable": "var(--colors-color-palette-1)"
  },
  "colors.colorPalette.2": {
    "value": "var(--colors-color-palette-2)",
    "variable": "var(--colors-color-palette-2)"
  },
  "colors.colorPalette.3": {
    "value": "var(--colors-color-palette-3)",
    "variable": "var(--colors-color-palette-3)"
  },
  "colors.colorPalette.4": {
    "value": "var(--colors-color-palette-4)",
    "variable": "var(--colors-color-palette-4)"
  },
  "colors.colorPalette.5": {
    "value": "var(--colors-color-palette-5)",
    "variable": "var(--colors-color-palette-5)"
  },
  "colors.colorPalette.6": {
    "value": "var(--colors-color-palette-6)",
    "variable": "var(--colors-color-palette-6)"
  },
  "colors.colorPalette.7": {
    "value": "var(--colors-color-palette-7)",
    "variable": "var(--colors-color-palette-7)"
  },
  "colors.colorPalette.8": {
    "value": "var(--colors-color-palette-8)",
    "variable": "var(--colors-color-palette-8)"
  },
  "colors.colorPalette.9": {
    "value": "var(--colors-color-palette-9)",
    "variable": "var(--colors-color-palette-9)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.11": {
    "value": "var(--colors-color-palette-11)",
    "variable": "var(--colors-color-palette-11)"
  },
  "colors.colorPalette.12": {
    "value": "var(--colors-color-palette-12)",
    "variable": "var(--colors-color-palette-12)"
  },
  "colors.colorPalette.solid.bg": {
    "value": "var(--colors-color-palette-solid-bg)",
    "variable": "var(--colors-color-palette-solid-bg)"
  },
  "colors.colorPalette.solid.bg.hover": {
    "value": "var(--colors-color-palette-solid-bg-hover)",
    "variable": "var(--colors-color-palette-solid-bg-hover)"
  },
  "colors.colorPalette.bg.hover": {
    "value": "var(--colors-color-palette-bg-hover)",
    "variable": "var(--colors-color-palette-bg-hover)"
  },
  "colors.colorPalette.hover": {
    "value": "var(--colors-color-palette-hover)",
    "variable": "var(--colors-color-palette-hover)"
  },
  "colors.colorPalette.solid.fg": {
    "value": "var(--colors-color-palette-solid-fg)",
    "variable": "var(--colors-color-palette-solid-fg)"
  },
  "colors.colorPalette.subtle.bg": {
    "value": "var(--colors-color-palette-subtle-bg)",
    "variable": "var(--colors-color-palette-subtle-bg)"
  },
  "colors.colorPalette.subtle.bg.hover": {
    "value": "var(--colors-color-palette-subtle-bg-hover)",
    "variable": "var(--colors-color-palette-subtle-bg-hover)"
  },
  "colors.colorPalette.subtle.bg.active": {
    "value": "var(--colors-color-palette-subtle-bg-active)",
    "variable": "var(--colors-color-palette-subtle-bg-active)"
  },
  "colors.colorPalette.bg.active": {
    "value": "var(--colors-color-palette-bg-active)",
    "variable": "var(--colors-color-palette-bg-active)"
  },
  "colors.colorPalette.active": {
    "value": "var(--colors-color-palette-active)",
    "variable": "var(--colors-color-palette-active)"
  },
  "colors.colorPalette.subtle.fg": {
    "value": "var(--colors-color-palette-subtle-fg)",
    "variable": "var(--colors-color-palette-subtle-fg)"
  },
  "colors.colorPalette.surface.bg": {
    "value": "var(--colors-color-palette-surface-bg)",
    "variable": "var(--colors-color-palette-surface-bg)"
  },
  "colors.colorPalette.surface.bg.active": {
    "value": "var(--colors-color-palette-surface-bg-active)",
    "variable": "var(--colors-color-palette-surface-bg-active)"
  },
  "colors.colorPalette.surface.border": {
    "value": "var(--colors-color-palette-surface-border)",
    "variable": "var(--colors-color-palette-surface-border)"
  },
  "colors.colorPalette.border": {
    "value": "var(--colors-color-palette-border)",
    "variable": "var(--colors-color-palette-border)"
  },
  "colors.colorPalette.surface.border.hover": {
    "value": "var(--colors-color-palette-surface-border-hover)",
    "variable": "var(--colors-color-palette-surface-border-hover)"
  },
  "colors.colorPalette.border.hover": {
    "value": "var(--colors-color-palette-border-hover)",
    "variable": "var(--colors-color-palette-border-hover)"
  },
  "colors.colorPalette.surface.fg": {
    "value": "var(--colors-color-palette-surface-fg)",
    "variable": "var(--colors-color-palette-surface-fg)"
  },
  "colors.colorPalette.outline.bg.hover": {
    "value": "var(--colors-color-palette-outline-bg-hover)",
    "variable": "var(--colors-color-palette-outline-bg-hover)"
  },
  "colors.colorPalette.outline.bg.active": {
    "value": "var(--colors-color-palette-outline-bg-active)",
    "variable": "var(--colors-color-palette-outline-bg-active)"
  },
  "colors.colorPalette.outline.border": {
    "value": "var(--colors-color-palette-outline-border)",
    "variable": "var(--colors-color-palette-outline-border)"
  },
  "colors.colorPalette.outline.fg": {
    "value": "var(--colors-color-palette-outline-fg)",
    "variable": "var(--colors-color-palette-outline-fg)"
  },
  "colors.colorPalette.plain.bg.hover": {
    "value": "var(--colors-color-palette-plain-bg-hover)",
    "variable": "var(--colors-color-palette-plain-bg-hover)"
  },
  "colors.colorPalette.plain.bg.active": {
    "value": "var(--colors-color-palette-plain-bg-active)",
    "variable": "var(--colors-color-palette-plain-bg-active)"
  },
  "colors.colorPalette.plain.fg": {
    "value": "var(--colors-color-palette-plain-fg)",
    "variable": "var(--colors-color-palette-plain-fg)"
  },
  "colors.colorPalette.surface.bg.hover": {
    "value": "var(--colors-color-palette-surface-bg-hover)",
    "variable": "var(--colors-color-palette-surface-bg-hover)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar