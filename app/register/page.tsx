"use client";

import { Button, Group, Input, Stepper } from "@mantine/core";
import React, { useState } from "react";
import { authClient } from "../lib/auth-client";
import Link from "next/link";

interface UserProps {
  businessName: string;
  businessPhoneNumber: string;
  businessLocation: string;
  currency: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhoneNumber: string;
  ownerBVN: string;
}

export default function SignupPage() {
  /* State that manage stepper */
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  /* User and business information state */
  const [user, setUser] = useState<UserProps>({
    businessName: "",
    businessPhoneNumber: "",
    businessLocation: "",
    currency: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhoneNumber: "",
    ownerBVN: "",
  });

  // Destructuring user state
  const {
    businessName,
    businessPhoneNumber,
    businessLocation,
    currency,
    ownerName,
    ownerEmail,
    ownerPhoneNumber,
    ownerBVN,
  } = user;

  const handleSubmit = async () => {
    /*   const { data, error } = await authClient.signUp.email(
      {
        email,
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

    console.log(data, error); */
  };

  return (
    <section className="grid md:grid-cols-[600px_1fr]">
      <form className="flex flex-col p-10">
        <div className="grow">
          <div className="mb-5 space-y-2">
            <h1 className="text-2xl font-bold mb-2">Welcome to BluuPay</h1>
            <p className="text-sm text-gray-500 font-poppins">
              BluuPay helps you sell, manage inventory, and track
              performance—all that works on any device.
            </p>
          </div>

          <Stepper
            active={active}
            onStepClick={setActive}
            allowNextStepsSelect={false}
            iconSize={32}
          >
            <Stepper.Step label="First step" description="Business details">
              <div className="space-y-4">
                <Input.Wrapper label="Business Name" size="sm">
                  <Input
                    placeholder="Business Name"
                    value={businessName}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        businessName: e.currentTarget.value,
                      }))
                    }
                    size="md"
                    radius="md"
                  />
                </Input.Wrapper>

                <Input.Wrapper label="Business Phone Number" size="sm">
                  <Input
                    placeholder="Business Phone Number"
                    value={businessPhoneNumber}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        businessPhoneNumber: e.currentTarget.value,
                      }))
                    }
                    size="md"
                    radius="md"
                  />
                </Input.Wrapper>

                <Input.Wrapper label="Business Location" size="sm">
                  <Input
                    placeholder="Location"
                    value={businessLocation}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        businessLocation: e.currentTarget.value,
                      }))
                    }
                    size="md"
                    radius="md"
                  />
                </Input.Wrapper>

                <Input.Wrapper label="Currency" size="sm">
                  <Input
                    placeholder="Currency"
                    value={currency}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        currency: e.currentTarget.value,
                      }))
                    }
                    size="md"
                    radius="md"
                  />
                </Input.Wrapper>
              </div>
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Create an account">
              <div className="space-y-4">
                <Input.Wrapper label="Owner Name" size="sm">
                  <Input
                    placeholder="Full Name"
                    value={ownerName}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        ownerName: e.currentTarget.value,
                      }))
                    }
                    size="md"
                    radius="md"
                  />
                </Input.Wrapper>

                <Input.Wrapper label="Phone Number" size="sm">
                  <Input
                    placeholder="Phone Number"
                    value={ownerPhoneNumber}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        ownerPhoneNumber: e.currentTarget.value,
                      }))
                    }
                    size="md"
                    radius="md"
                  />
                </Input.Wrapper>

                <Input.Wrapper label="Email address" size="sm">
                  <Input
                    placeholder="Email address"
                    value={ownerEmail}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        ownerEmail: e.currentTarget.value,
                      }))
                    }
                    size="md"
                    radius="md"
                  />
                </Input.Wrapper>

                <Input.Wrapper label="Bank Verification Number (BVN)" size="sm">
                  <Input
                    placeholder="Bank Verification Number (BVN)"
                    value={ownerBVN}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        ownerBVN: e.currentTarget.value,
                      }))
                    }
                    size="md"
                    radius="md"
                  />
                </Input.Wrapper>
              </div>
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>

          <Group justify="center" mt="xl">
            <Button variant="default" onClick={prevStep} radius="xl">
              Back
            </Button>
            <Button onClick={active == 2 ? handleSubmit : nextStep} radius="xl">
              {active == 2 ? "Submit" : "Next step"}
            </Button>
          </Group>
        </div>

        <p className="text-sm text-center p-6">
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold" href="/login">
            Log in
          </Link>
        </p>
      </form>

      <div className="min-h-dvh bg-blue-100 hidden md:block"></div>
    </section>
  );
}
