import { Input } from "@mantine/core";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function page() {
  return (
    <section className="grid md:grid-cols-[600px_1fr]">
      <div className="p-20 space-y-4">
        <div className="my-10">
          <h1 className="text-2xl font-bold">Welcome to BluuPay</h1>
          <p className="text-sm text-gray-500">
            Everything You Need To Sell More.
          </p>
        </div>

        <div>
          <Input placeholder="Full Name" />
        </div>
        <div>
          <Input placeholder="Email address" />
        </div>
        <div>
          <Input type="password" placeholder="Password" />
        </div>
        <PrimaryButton>Get Started</PrimaryButton>

        <p className="text-sm">
          Already have an accout?{" "}
          <Link className="text-sky-500 font-bold" href="/login">
            Log in
          </Link>
        </p>
      </div>

      <div className="h-dvh bg-sky-100 hidden md:block"></div>
    </section>
  );
}
