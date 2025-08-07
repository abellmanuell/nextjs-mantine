import { Button } from "@mantine/core";
import clsx from "clsx";
import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  onClick,
  className,
}: PrimaryButtonProps) {
  return (
    <Button
      fullWidth
      onClick={onClick}
      radius="xl"
      className={clsx(
        "bg-blue-600 hover:bg-blue-700 text-white h-14",
        className
      )}
    >
      {children}
    </Button>
  );
}
