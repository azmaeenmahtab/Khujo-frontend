"use client";
import { useSignIn } from "@clerk/nextjs/legacy";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CustomSignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [copiedField, setCopiedField] = useState<"email" | "password" | null>(null);
  const router = useRouter();

  const demoEmail = "mahtabazmaeen7@gmail.com";
  const demoPassword = "khujodemo123";

  const getErrorMessage = (err: unknown) => {
    if (typeof err === "object" && err !== null && "errors" in err) {
      const clerkErrors = (err as { errors?: Array<{ longMessage?: string; message?: string }> }).errors;
      if (Array.isArray(clerkErrors) && clerkErrors.length > 0) {
        return clerkErrors[0].longMessage || clerkErrors[0].message || "Something went wrong.";
      }
    }
    if (err instanceof Error) {
      return err.message;
    }
    return "Failed to sign in. Please try again.";
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setError("");
    setIsSubmitting(true);

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        console.log(result);
        router.push("/dashboard");
      } else {
        setError("Additional verification is required to complete sign in.");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async (value: string, field: "email" | "password") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1200);
    } catch {
      setError("Copy failed. Please copy manually.");
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
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            disabled={!isLoaded || isSubmitting}
            className="w-full bg-[#096455] text-white py-2 px-4 rounded-lg hover:bg-[#075544] transition disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 rounded-2xl border border-[#096455]/25 bg-[#096455]/8 p-4">
          <p className="text-sm font-semibold text-[#096455]">Development Demo Credentials</p>
          <p className="mt-1 text-xs text-[#0E6F60]">Click copy and paste into the sign-in form.</p>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 ring-1 ring-[#096455]/15">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#6B7280]">Email</p>
                <p className="text-sm font-medium text-[#1F2A37]">{demoEmail}</p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(demoEmail, "email")}
                className="rounded-lg bg-[#096455] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#075544]"
              >
                {copiedField === "email" ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 ring-1 ring-[#096455]/15">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#6B7280]">Password</p>
                <p className="text-sm font-medium text-[#1F2A37]">{demoPassword}</p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(demoPassword, "password")}
                className="rounded-lg bg-[#096455] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#075544]"
              >
                {copiedField === "password" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

         
      </div>
    </div>
  );
}