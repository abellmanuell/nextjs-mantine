import clsx from "clsx";
import { type ReactNode } from "react";

export default function Heading({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h1 className={clsx("font-bold text-xl", className)}>{children}</h1>;
}
