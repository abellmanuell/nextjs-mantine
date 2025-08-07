import { Input } from "@mantine/core";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function ForgotPassword() {
  return (
    <section className="grid md:grid-cols-[600px_1fr]">
      <div className="p-20 min-h-dvh">
        <div className="mt-10 mb-5">
          <h1 className="text-2xl font-bold">Forgot Password?</h1>
        </div>

        <form className="space-y-4">
          <div>
            <Input placeholder="Email address" name="email" />
          </div>

          <PrimaryButton>Send</PrimaryButton>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-bold">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <div className="min-h-dvh bg-sky-100 hidden md:block"></div>
    </section>
  );
}
