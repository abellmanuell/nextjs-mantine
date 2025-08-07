import React from "react";
import Wrapper from "../ui/Wrapper";
import Heading from "../ui/Heading";
import Passport from "../ui/Passport";

export default function Profile() {
  return (
    <Wrapper>
      <section className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Heading>Business Profile</Heading>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row justify-center bg-white p-10 my-10 rounded-xl shadow-xl/5 transition-shadow duration-300 w-full border border-gray-100">
        <div>
          <div className="mb-10 flex flex-col sm:space-x-20 space-y-10">
            <div className="space-y-2 flex flex-col items-center">
              <div className="w-[120px] h-[120px]">
                <Passport
                  surname="Bluu"
                  firstname="Pay"
                  passport_url="https://bluupay.co/wp-content/uploads/2025/06/Bluupay-station-kit-1536x1419.jpg"
                  className="w-30 h-30"
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl">BluuPay Venture</h1>
                <p className="text-xs text-gray-500">Business Name</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-[150px_150px_150px] gap-6">
              <div>
                <h1 className="text-sm">7324234432</h1>
                <p className="text-xs text-gray-500">Business Number</p>
              </div>

              <div>
                <h1 className="text-sm">Garki Abuja.</h1>
                <p className="text-xs text-gray-500">Business Location</p>
              </div>

              <div>
                <h1 className="text-sm">Nigeria Naira</h1>
                <p className="text-xs text-gray-500">Currecny</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2>Owner&apos;s Information</h2>
      <section className="flex flex-col sm:flex-row justify-center bg-white p-10 mb-10 mt-5 rounded-xl shadow-xl/5 transition-shadow duration-300 w-full border border-gray-100">
        <div>
          <div className="flex flex-col sm:space-x-20 space-y-10">
            <div className="grid sm:grid-cols-[150px_150px_150px] gap-6">
              <div>
                <h1 className="text-sm">james@bluupay.co</h1>
                <p className="text-xs text-gray-500">Email address</p>
              </div>

              <div>
                <h1 className="text-sm">08123456789</h1>
                <p className="text-xs text-gray-500">Phone Number</p>
              </div>

              <div>
                <h1 className="text-sm">222343456567</h1>
                <p className="text-xs text-gray-500">
                  Bank Verification Identity (BVN)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
