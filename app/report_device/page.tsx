"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import heroImage from "@/public/KHUJO.png";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

const ReportDevicePage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const { getToken, userId } = useAuth();

  const getInputValue = (name: string): string => {
    const el = formRef.current?.querySelector(`[name="${name}"]`) as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | null;
    return el?.value?.trim() ?? "";
  };

  const getFileInput = (name: string): File | null => {
    const el = formRef.current?.querySelector(
      `input[name="${name}"]`
    ) as HTMLInputElement | null;
    return el?.files?.[0] ?? null;
  };

  const resetForm = () => {
    if (!formRef.current) return;
    formRef.current
      .querySelectorAll("input, select, textarea")
      .forEach((el) => {
        if (el instanceof HTMLInputElement) {
          if (el.type === "file") el.value = "";
          else el.value = "";
        } else if (
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement
        ) {
          el.value = "";
        }
      });
  };

  const handleSubmit = async () => {
    setSubmitError("");

    const token = await getToken();
    if (!token) {
      setSubmitError("You are not signed in. Please sign in and try again.");
      return;
    }

    if (!userId) {
      setSubmitError("Unable to identify signed-in user.");
      return;
    }

    const imei1 = getInputValue("imei1");
    if (!imei1) {
      setSubmitError("IMEI Number 1 is required.");
      return;
    }

    const gdImage = getFileInput("gdImage");
    if (!gdImage || gdImage.size === 0) {
      setSubmitError("Please upload the GD document image.");
      return;
    }

    const apiBase = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL;
    if (!apiBase) {
      setSubmitError("Missing NEXT_PUBLIC_BACKEND_API_BASE_URL.");
      return;
    }

    const payload = new FormData();
    const submittedDate = new Date().toISOString().split("T")[0];

    payload.append("user_id", userId)
    payload.append("imei1", imei1);
    payload.append("imei2", getInputValue("imei2"));
    payload.append("theft_date", submittedDate);
    payload.append("phone_brand", getInputValue("phoneBrand"));
    payload.append("phone_model", getInputValue("deviceName"));
    // payload.append("transactionId", getInputValue("transactionId"));
    payload.append("division", getInputValue("division"));
    payload.append("district", getInputValue("district"));
    payload.append("upazila", getInputValue("upazila"));
    payload.append("street", getInputValue("locationNote"));
    payload.append("gd_copy_image_url", "dev_mode_test_string");

    const boxImage = getFileInput("boxImage");
    if (boxImage && boxImage.size > 0) {
      payload.append("phone_box_image_url", "dev_mode_test_string");
    }

    setIsSubmitting(true);
    try {
      console.log("token ", token);
      const response = await fetch(
        `${apiBase.replace(/\/$/, "")}/report/submit`,
        {
          method: "POST",
          headers: 
          { 
            
            Authorization: `Bearer ${token}` 
          },
          body: payload,
        }
      );

      const responseData = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message =
          typeof responseData?.error === "string"
            ? responseData.error
            : "Failed to submit report.";
        throw new Error(message);
      }

      sessionStorage.setItem(
        "lastReportSubmission",
        JSON.stringify(responseData)
      );
      resetForm();
      router.push("/report_device/report_completion");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit report."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-10 text-[#096455] text-[15px] font-semibold pt-5">
        <Image src={logo} alt="Logo" width={100} height={40} />
        <div className="flex gap-4">
          <Link href="/dashboard">
            <button className="bg-white text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300">
              Dashboard
            </button>
          </Link>
        </div>
      </nav>

      <div className="mx-auto items-center flex flex-col pt-5">
        <Image src={heroImage} alt="Hero Image" className="h-[110px]" />
        <h3 className="text-[30px] font-bold text-[#096455] leading-tight">
          REPORT STOLEN DEVICE
        </h3>
      </div>

      {/* Use a div instead of form */}
      <div
        ref={formRef}
        className="px-22 py-10 max-w-[1000px] mx-auto bg-[#096455]/17 rounded-2xl my-5 mb-20"
      >
        <p className="text-center pb-10 text-red-700 text-[18px]">
          ! YOUR PROFILE MUST BE COMPLETED TO REPORT A STOLEN DEVICE !
        </p>
        {submitError && (
          <p className="mb-6 rounded-xl bg-red-100 px-4 py-3 text-center text-red-700">
            {submitError}
          </p>
        )}

        {/* IMEI inputs */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col flex-1">
            <label className="text-[20px] text-[#096455] font-medium">
              IMEI Number 1
            </label>
            <input
              name="imei1"
              type="text"
              placeholder="Enter IMEI Number 1"
              className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-[20px] text-[#096455] font-medium">
              IMEI Number 2
            </label>
            <input
              name="imei2"
              type="text"
              placeholder="Enter IMEI Number 2"
              className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"
            />
          </div>
        </div>

        <p className="text-2xl font-medium text-[#096455] text-center my-5">
          WHERE WAS THE PHONE STOLEN
        </p>

        {/* Location selects */}
        <div className="flex gap-4">
          <select name="division" className="bg-white rounded-2xl py-2 pl-4 pr-10 text-[14px] flex-1 text-gray-500">
            <option value="">Select Division</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="khulna">Khulna</option>
            <option value="barisal">Barisal</option>
            <option value="sylhet">Sylhet</option>
            <option value="rangpur">Rangpur</option>
            <option value="mymensingh">Mymensingh</option>
          </select>
          <select name="district" className="bg-white rounded-2xl py-2 pl-4 pr-10 text-[14px] flex-1 text-gray-500">
            <option value="">Select District</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="khulna">Khulna</option>
            <option value="barisal">Barisal</option>
            <option value="sylhet">Sylhet</option>
            <option value="rangpur">Rangpur</option>
            <option value="mymensingh">Mymensingh</option>
          </select>
          <select name="upazila" className="bg-white rounded-2xl py-2 pl-4 pr-10 text-[14px] flex-1 text-gray-500">
            <option value="">Select Upazila</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="khulna">Khulna</option>
            <option value="barisal">Barisal</option>
            <option value="sylhet">Sylhet</option>
            <option value="rangpur">Rangpur</option>
            <option value="mymensingh">Mymensingh</option>
          </select>
        </div>
        <textarea
          name="locationNote"
          placeholder="Help us with more accurate location to find the phone"
          className="bg-white h-[100px] w-full my-5 rounded-2xl p-5 placeholder:text-[14px] resize-none"
        />

        {/* File uploads */}
        <div className="flex items-center justify-between gap-20">
          <div className="w-full">
            <label className="text-[16px] text-[#096455] font-medium">
              Upload Image of backside of your phone box (optional)
            </label>
            <input name="boxImage" type="file" accept="image/*" className="block mt-2 file:border-2 file:border-[#096455] file:rounded-2xl file:bg-white file:px-5 file:py-2 file:mr-4 file:cursor-pointer bg-white py-1 px-1 rounded-2xl max-w-[400px] w-full file:text-[14px] text-[14px] file:text-gray-500 text-gray-500" />
          </div>
          <div className="w-full">
            <label className="text-[16px] text-[#096455] font-medium">
              Upload Image of the General Diary (GD)
            </label>
            <input name="gdImage" type="file" accept="image/*" className="block mt-2 file:border-2 file:border-[#096455] file:rounded-2xl file:bg-white file:px-5 file:py-2 file:mr-4 file:cursor-pointer bg-white py-1 px-1 rounded-2xl max-w-[400px] w-full file:text-[14px] text-[14px] file:text-gray-500 text-gray-500" />
          </div>
        </div>

        {/* Brand, device, transaction */}
        <div className="flex items-center justify-between mt-5 mb-10 gap-20">
          <div className="flex flex-col flex-1">
            <label className="text-[18px] text-[#096455] font-medium">Phone Brand Name</label>
            <input name="phoneBrand" type="text" placeholder="Enter Phone Brand Name" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-[18px] text-[#096455] font-medium">Device Name</label>
            <input name="deviceName" type="text" placeholder="Enter Device Name" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-[18px] text-[#096455] font-medium">Transaction ID</label>
            <input name="transactionId" type="text" placeholder="Enter Transaction ID" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]" />
          </div>
        </div>

        {/* Button triggers handleSubmit directly — no form submission */}
        <button
          type="button"
          disabled={isSubmitting}
          onClick={handleSubmit}
          className="bg-[#096455] text-white rounded-xl h-12 px-6 mx-auto block mt-5 hover:bg-[#064d3f] ease-in-out duration-300 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? "SUBMITTING..." : "SUBMIT REPORT"}
        </button>
      </div>
    </div>
  );
};

export default ReportDevicePage;