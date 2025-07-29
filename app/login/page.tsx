import { Button, Input } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="p-20 space-y-4">
      <h1 className="text-2xl font-bold font-serif">Login</h1>
      <div>
        <Input placeholder="Email address" />
      </div>
      <div>
        <Input type="password" placeholder="Password" />
      </div>
      <Button>Login</Button>
      <p>
        Don&apos;t have an account{" "}
        <Link href="/signup" className="text-sky-500 underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
