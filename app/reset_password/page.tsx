import { Input } from "@mantine/core";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function ForgotPassword() {
  return (
    <div className="p-20 space-y-4 w-2/5 m-auto">
      <div className="my-10">
        <h1 className="text-2xl font-bold">Reset Password</h1>
      </div>

      <div>
        <Input placeholder="New password" name="new_password" />
      </div>

      <div>
        <Input placeholder="Confirm Password" name="confirm_password" />
      </div>

      <PrimaryButton>Reset password</PrimaryButton>
    </div>
  );
}
