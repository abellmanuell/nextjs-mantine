import { Input } from "@mantine/core";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function ForgotPassword() {
  return (
    <section className="grid md:grid-cols-[600px_1fr]">
      <div className="p-20 min-h-dvh">
        <div className="my-4">
          <h1 className="text-2xl font-bold">Reset Password</h1>
        </div>

        <form action={""} className="space-y-4">
          <div>
            <Input placeholder="New password" name="new_password" />
          </div>

          <div>
            <Input placeholder="Confirm Password" name="confirm_password" />
          </div>

          <PrimaryButton>Reset password</PrimaryButton>
        </form>
      </div>

      <div className="min-h-dvh bg-sky-100 hidden md:block"></div>
    </section>
  );
}
