/* eslint-disable react/no-unescaped-entities */
"use client";
import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CustomSignIn() {
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
      setError( (err as Error).message || "Failed to sign in. Please try again." );
    }
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="w-full max-w-[600px] p-8 rounded-lg ">
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-[#096455]  mb-1">
              Phone Number
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
            <label className="block  font-medium text-[#096455]  mb-1">
              Password
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

          <button
            type="submit"
            disabled={!isLoaded}
            className="w-full bg-[#096455] text-white py-2 px-4 rounded-lg hover:bg-[#075544] transition disabled:opacity-50"
          >
            Sign In
          </button>
        </form>

         
      </div>
    </div>
  );
}