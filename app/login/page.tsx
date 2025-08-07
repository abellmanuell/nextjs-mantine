"use client";
import React, { useState } from "react";
import { Input } from "@mantine/core";
import Link from "next/link";
import PrimaryButton from "../ui/PrimaryButton";
import { authClient } from "../lib/auth-client";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/",
        rememberMe: false,
      },
      {
        //callbacks
      }
    );

    console.log(data, error);
  };

  return (
    <section className="grid md:grid-cols-[600px_1fr]">
      <div className="p-20 min-h-dvh">
        <div className="my-10 space-y-2">
          <h1 className="text-4xl font-bold mb-4">Login to BluuPay</h1>
          <p className="text-sm text-gray-500 font-poppins">
            BluuPay helps you sell, manage inventory, and track performance—all
            from one simple, cloud-based platform that works on any device.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <Input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              size="lg"
              radius="md"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              size="lg"
              radius="md"
            />
          </div>
          <div className="text-right">
            <Link href="" className="text-blue-600 text-sm text-right">
              Forget Password
            </Link>
          </div>

          <PrimaryButton onClick={handleSubmit}>Get Started</PrimaryButton>

          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link className="text-blue-600 font-bold" href="/register">
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="min-h-dvh bg-sky-100 hidden md:block"></div>
    </section>
  );
}
