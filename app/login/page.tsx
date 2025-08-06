import { Input } from "@mantine/core";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function page() {
  return (
    <section className="grid md:grid-cols-[600px_1fr]">
      <div className="p-20 space-y-4">
        <div className="my-10">
          <h1 className="text-2xl font-bold">Login to BluuPay</h1>
          <p className="text-sm text-gray-500">
            Everything You Need To Sell More.
          </p>
        </div>

        <div>
          <Input placeholder="Email address" />
        </div>
        <div>
          <Input type="password" placeholder="Password" />
        </div>

        <div>
          <Link
            href="/forgot_password"
            className="text-sm text-sky-500 text-right block"
          >
            Forgot Password?
          </Link>
        </div>

        <PrimaryButton>Log in</PrimaryButton>

        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-sky-500 font-bold">
            Sign up
          </Link>
        </p>
      </div>

      <div className="h-dvh bg-sky-100 hidden md:block"></div>
    </section>
  );
}
