/* eslint-disable react/no-unescaped-entities */
"use client";
import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: phone,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err) {
      setError((err as Error).message || "Failed to sign in. Please try again.");
    }
  };

  return (
        <div className=" flex items-center justify-center pb-[100px]">
      <div className="w-full max-w-[600px] p-8 rounded-lg ">
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
            <label className="block font-medium text-[#096455]  mb-1">Name*            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#096455] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096455] text-sm"
            />
          </div>

          <div>
            <label className="block font-medium text-[#096455]  mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#096455] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096455] text-sm"
            />
          </div>

          <div>
            <label className="block font-medium text-[#096455]  mb-1">
              Email(optional)
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#096455] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096455] text-sm"
            />
          </div>

          <div>
            <label className="block  font-medium text-[#096455]  mb-1">
              Password*
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#096455] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096455] text-sm"
              placeholder="Your password"
            />
          </div>

          <div>
            <label className="block  font-medium text-[#096455]  mb-1">
              Confirm Password*
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#096455] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096455] text-sm"
              placeholder="Confirm password"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="" id="" className="accent-[#096455] w-4 h-4"/>
            <label className="ml-2 text-sm text-[#096455] ">I agree to the Terms of Service and Privacy Policy*</label>
          </div>

          <button
            type="submit"
            disabled={!isLoaded}
            className="w-full bg-[#096455] text-white py-2 px-4 rounded-lg hover:bg-[#075544] transition disabled:opacity-50 "
          >
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
}