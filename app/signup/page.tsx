import { Button, Input } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="p-20 space-y-4">
      <h1 className="text-2xl font-bold font-serif">Sign Up</h1>
      <div>
        <Input placeholder="Full Name" />
      </div>
      <div>
        <Input placeholder="Email address" />
      </div>
      <div>
        <Input type="password" placeholder="Password" />
      </div>
      <Button>Sign Up</Button>

      <p>
        Already sign up{" "}
        <Link className="text-sky-500 underline" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
