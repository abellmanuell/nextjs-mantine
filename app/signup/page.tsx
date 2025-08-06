"use client";

import { Input } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import { authClient } from "../lib/auth-client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: "/",
      },
      {
        onRequest: () => {},
        onSuccess: () => {},
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );

    console.log(data, error);
  };

  return (
    <section className="grid md:grid-cols-[600px_1fr]">
      <div className="p-20 min-h-dvh">
        <div className="my-10">
          <h1 className="text-2xl font-bold">Welcome to BluuPay</h1>
          <p className="text-sm text-gray-500">
            Everything You Need To Sell More.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
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
          <PrimaryButton onClick={handleSubmit}>Get Started</PrimaryButton>

          <p className="text-sm">
            Already have an account?{" "}
            <Link className="text-sky-500 font-bold" href="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>

      <div className="min-h-dvh bg-sky-100 hidden md:block"></div>
    </section>
  );
}
