import { Button } from "@mantine/core";
import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <Button fullWidth onClick={onClick}>
      {children}
    </Button>
  );
}
