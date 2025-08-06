import { Input } from "@mantine/core";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function ForgotPassword() {
  return (
    <div className="p-20 space-y-4 w-2/5 m-auto">
      <div className="my-10">
        <h1 className="text-2xl font-bold">Forgot Password?</h1>
      </div>

      <form action={""}>
        <Input placeholder="Email address" name="email" />
      </form>

      <PrimaryButton>Send</PrimaryButton>

      <p className="text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-sky-500 font-bold">
          Sign up
        </Link>
      </p>
    </div>
  );
}
