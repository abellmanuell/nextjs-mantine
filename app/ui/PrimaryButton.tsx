import { Button } from "@mantine/core";
import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <Button className="!font-bold" fullWidth={true}>
      {children}
    </Button>
  );
}
