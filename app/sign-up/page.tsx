"use client";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const { signUp, setActive, isLoaded } = useSignUp();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

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
    return "Something went wrong. Please try again.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setError("");

    if (!acceptedTerms) {
      setError("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const nameParts = name.trim().split(/\s+/);
      const firstName = nameParts[0] || undefined;
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined;

      await signUp.create({
        emailAddress: email,
        password,
        firstName,
        lastName,
        unsafeMetadata: {
          phoneNumber: phone,
        },
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setError("");
    setIsSubmitting(true);

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        console.log(result);
        router.push("/dashboard");
      } else {
        setError("Verification is not complete yet. Please try the code again.");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" flex items-center justify-center pb-[100px] bg-transparent">
      <div className="w-full max-w-[600px] p-8 rounded-lg ">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {!pendingVerification ? (
        <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
            <div>
            <label className="block font-medium text-[#096455]  mb-1">Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#096455] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096455] text-sm "
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
              Email*
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#096455] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096455] text-sm"
              placeholder="Confirm password"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="accent-[#096455] w-4 h-4"
            />
            <label className="ml-2 text-sm text-[#096455] ">I agree to the Terms of Service and Privacy Policy*</label>
          </div>

          <button
            type="submit"
            disabled={!isLoaded || isSubmitting}
            className="w-full bg-[#096455] text-white py-2 px-4 rounded-lg hover:bg-[#075544] transition disabled:opacity-50 "
          >
            {isSubmitting ? "Sending code..." : "Sign Up"}
          </button>
        </form>
        ) : (
        <form onSubmit={handleVerifyCode} className="space-y-6 bg-transparent">
          <div>
            <label className="block font-medium text-[#096455]  mb-1">Email Verification Code*</label>
            <input
              type="text"
              placeholder="Enter the code sent to your email"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="w-full px-3 py-2 border-2 border-[#096455] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096455] text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={!isLoaded || isSubmitting}
            className="w-full bg-[#096455] text-white py-2 px-4 rounded-lg hover:bg-[#075544] transition disabled:opacity-50 "
          >
            {isSubmitting ? "Verifying..." : "Verify and Continue"}
          </button>
        </form>
        )}

      </div>
    </div>
  );
}