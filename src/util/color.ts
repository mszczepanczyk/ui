export function determineTextColor(backgroundColor: string): string {
	const r = Number.parseInt(backgroundColor.slice(1, 3), 16);
	const g = Number.parseInt(backgroundColor.slice(3, 5), 16);
	const b = Number.parseInt(backgroundColor.slice(5, 7), 16);
	const lum = (c: number) => {
		const s = c / 255;
		return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
	};
	const luminance = 0.2126 * lum(r) + 0.7152 * lum(g) + 0.0722 * lum(b);
	return luminance > 0.179 ? "#000000" : "#ffffff";
}

// export function generateRandomColor(config: DefaultColor): string | undefined {
// 	if (config === "none") {
// 		return undefined;
// 	}
// 	if (config === "randomcolor-random") {
// 		return randomColor({ format: "hex" });
// 	}
// 	if (config === "randomcolor-bright") {
// 		return randomColor({ luminosity: "bright", format: "hex" });
// 	}
// 	if (config === "randomcolor-light") {
// 		return randomColor({ luminosity: "light", format: "hex" });
// 	}
// 	if (config === "randomcolor-dark") {
// 		return randomColor({ luminosity: "dark", format: "hex" });
// 	}
// 	throw new UnreachableCaseError(config);
// }

export function hexToHue(hex: string | null | undefined): number {
	if (!hex) return -1;
	const r = Number.parseInt(hex.slice(1, 3), 16) / 255;
	const g = Number.parseInt(hex.slice(3, 5), 16) / 255;
	const b = Number.parseInt(hex.slice(5, 7), 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const d = max - min;
	if (d === 0) return 0;
	let h = 0;
	if (max === r) h = ((g - b) / d) % 6;
	else if (max === g) h = (b - r) / d + 2;
	else h = (r - g) / d + 4;
	return h * 60;
}

export function hexToSaturation(hex: string | null | undefined): number {
	if (!hex) return 0;
	const r = Number.parseInt(hex.slice(1, 3), 16) / 255;
	const g = Number.parseInt(hex.slice(3, 5), 16) / 255;
	const b = Number.parseInt(hex.slice(5, 7), 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const d = max - min;
	if (d === 0) return 0;
	const l = (max + min) / 2;
	return d / (1 - Math.abs(2 * l - 1));
}
