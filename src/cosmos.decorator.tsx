import { MDXProvider } from "@mdx-js/react";
import type { ReactNode } from "react";

import "./index.css";

// TODO

// const _H1 = styl_H1("h1");
// const _H2 = styled("h2");
// const _H3 = styled("h3");
// const _H4 = styled("h4");
// const _H5 = styled("h5");
// const _H6 = styled("h6");
// const _P = styled("p");
// const _Ul = styled("ul");
// const _Ol = styled("ol");
// const _Li = styled("li");
// const _A = styled("a");
// const _Blockquote = styled("blockquote");
// const _Code = styled("code");
// const _Pre = styled("pre");

// const _components = {
// 	h1: (props: ComponentProps<typeof H1>) => (
// 		<H1 fontSize="3xl" fontWeight="bold" mb="4" mt="6" {...props} />
// 	),
// 	h2: (props: ComponentProps<typeof H2>) => (
// 		<H2 fontSize="2xl" fontWeight="bold" mb="3" mt="5" {...props} />
// 	),
// 	h3: (props: ComponentProps<typeof H3>) => (
// 		<H3 fontSize="xl" fontWeight="semibold" mb="2" mt="4" {...props} />
// 	),
// 	h4: (props: ComponentProps<typeof H4>) => (
// 		<H4 fontSize="lg" fontWeight="semibold" mb="2" mt="3" {...props} />
// 	),
// 	h5: (props: ComponentProps<typeof H5>) => (
// 		<H5 fontSize="md" fontWeight="semibold" mb="1" mt="2" {...props} />
// 	),
// 	h6: (props: ComponentProps<typeof H6>) => (
// 		<H6 fontSize="sm" fontWeight="semibold" mb="1" mt="2" {...props} />
// 	),
// 	p: (props: ComponentProps<typeof P>) => (
// 		<P mb="4" lineHeight="relaxed" {...props} />
// 	),
// 	ul: (props: ComponentProps<typeof Ul>) => (
// 		<Ul listStyleType="disc" pl="6" mb="4" {...props} />
// 	),
// 	ol: (props: ComponentProps<typeof Ol>) => (
// 		<Ol listStyleType="decimal" pl="6" mb="4" {...props} />
// 	),
// 	li: (props: ComponentProps<typeof Li>) => <Li mb="1" {...props} />,
// 	a: (props: ComponentProps<typeof A>) => (
// 		<A color="indigo.500" textDecoration="underline" {...props} />
// 	),
// 	blockquote: (props: ComponentProps<typeof Blockquote>) => (
// 		<Blockquote
// 			borderLeftWidth="4px"
// 			borderColor="gray.300"
// 			pl="4"
// 			fontStyle="italic"
// 			my="4"
// 			{...props}
// 		/>
// 	),
// 	code: (props: ComponentProps<typeof Code>) => (
// 		<Code
// 			fontFamily="mono"
// 			bg="gray.100"
// 			px="1"
// 			py="0.5"
// 			borderRadius="sm"
// 			fontSize="sm"
// 			{...props}
// 		/>
// 	),
// 	pre: (props: ComponentProps<typeof Pre>) => (
// 		<Pre
// 			fontFamily="mono"
// 			bg="gray.100"
// 			p="4"
// 			borderRadius="md"
// 			overflowX="auto"
// 			mb="4"
// 			{...props}
// 		/>
// 	),
// };

export default function Decorator({ children }: { children: ReactNode }) {
	return <MDXProvider>{children}</MDXProvider>;
}
