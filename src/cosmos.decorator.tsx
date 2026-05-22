import { MDXProvider } from "@mdx-js/react";
import type { ReactNode } from "react";

// import "./index.css";

// const _components = {
// 	a: styled("a"),
// 	blockquote: styled("blockquote"),
// 	code: styled("code"),
// 	h1: styled("h1"),
// 	h2: styled("h2"),
// 	h3: styled("h3"),
// 	h4: styled("h4"),
// 	h5: styled("h5"),
// 	h6: styled("h6"),
// 	li: styled("li"),
// 	ol: styled("ol"),
// 	p: styled("p"),
// 	pre: styled("pre"),
// 	ul: styled("ul"),
// };

export default function Decorator({ children }: { children: ReactNode }) {
	return <MDXProvider>{children}</MDXProvider>;
}
