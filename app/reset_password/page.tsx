import { Input } from "@mantine/core";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function ForgotPassword() {
  return (
    <div className="p-20 space-y-4 w-2/5 m-auto">
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
      </form>

      <PrimaryButton>Reset password</PrimaryButton>
    </div>
  );
}
