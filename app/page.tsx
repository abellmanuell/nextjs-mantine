import Link from "next/link";
import { Button } from "@mantine/core";

export default function Demo() {
  return (
    <>
      <p className="text-red-500">hello</p>
      <Button component={Link} className="!bg-red-600" href="/hello">
        Next link button
      </Button>
    </>
  );
}
