import { css } from "styled-system/css";
import { AbsoluteCenter } from "./absolute-center";

export default {
	default: (
		<div className={css({ position: "relative", h: "200px", bg: "gray.100" })}>
			<AbsoluteCenter>Centered content</AbsoluteCenter>
		</div>
	),
};
