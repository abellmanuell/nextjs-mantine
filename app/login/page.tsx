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
        <div className="my-10">
          <h1 className="text-2xl font-bold">Login to BluuPay</h1>
          <p className="text-sm text-gray-500">
            Everything You Need To Sell More.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <Input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>

          <div>
            <Link
              href="/forgot_password"
              className="text-sm text-sky-500 text-right block"
            >
              Forgot Password?
            </Link>
          </div>

          <PrimaryButton onClick={handleSubmit}>Log in</PrimaryButton>

          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-sky-500 font-bold">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <div className="min-h-dvh bg-sky-100 hidden md:block"></div>
    </section>
  );
}
