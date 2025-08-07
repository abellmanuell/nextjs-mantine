import { Button, Input } from "@mantine/core";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function OTP() {
  return (
    <div className="p-20 space-y-4 w-2/5 m-auto">
      <div className="my-10">
        <h1 className="text-2xl font-bold">OTP Verification</h1>
      </div>

      <div>
        <Input placeholder="Enter your OTP" name="otp" />
      </div>

      <p className="text-sm text-gray-500">
        Code expires in <span className="font-bold text-blue-600">5:23</span>
      </p>

      <p className="text-sm">
        Don&apos;t get code?
        <Button variant="transparent" className="text-blue-600 font-bold">
          Resend code
        </Button>
      </p>

      <PrimaryButton>Verify</PrimaryButton>
    </div>
  );
}
