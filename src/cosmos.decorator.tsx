import type { ReactNode } from "react";
import "./index.css";

export default function Decorator({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
