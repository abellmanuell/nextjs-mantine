import clsx from "clsx";
import type { ReactNode } from "react";

export default function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        " pattern-grid px-2 sm:px-4 md:px-20 py-10 m-auto min-h-dvh",
        className
      )}
    >
      {children}
    </div>
  );
}
