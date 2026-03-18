"use client";

import Image from "next/image";
import logo from "@/public/logo.png"
import heroImage from "@/public/KHUJO.png"
import Link from "next/dist/client/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const ReportDevicePage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const imei1 = formData.get("imei1")?.toString().trim() ?? "";
    const gdImage = formData.get("gdImage");

    if (!imei1) {
      setSubmitError("IMEI Number 1 is required.");
      return;
    }

    if (!(gdImage instanceof File) || gdImage.size === 0) {
      setSubmitError("Please upload the GD document image.");
      return;
    }

    const apiBase = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL;
    if (!apiBase) {
      setSubmitError("Missing NEXT_PUBLIC_BACKEND_API_BASE_URL. Add it to your frontend environment variables.");
      return;
    }

    const payload = new FormData();
    payload.append("imei", imei1);
    payload.append("imei1", imei1);
    payload.append("imei2", formData.get("imei2")?.toString() ?? "");
    payload.append("deviceName", formData.get("deviceName")?.toString() ?? "");
    payload.append("transactionId", formData.get("transactionId")?.toString() ?? "");
    payload.append("division", formData.get("division")?.toString() ?? "");
    payload.append("district", formData.get("district")?.toString() ?? "");
    payload.append("upazila", formData.get("upazila")?.toString() ?? "");
    payload.append("locationNote", formData.get("locationNote")?.toString() ?? "");
    payload.append("gdImage", gdImage);

    const boxImage = formData.get("boxImage");
    if (boxImage instanceof File && boxImage.size > 0) {
      payload.append("boxImage", boxImage);
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${apiBase.replace(/\/$/, "")}/api/upload-gd-doc`, {
        method: "POST",
        body: payload,
      });

      const responseData = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message =
          typeof responseData?.error === "string"
            ? responseData.error
            : "Failed to submit report.";
        throw new Error(message);
      }

      sessionStorage.setItem("lastReportSubmission", JSON.stringify(responseData));
      form.reset();
      router.push("/report_device/report_completion");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to submit report.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div>
          <nav className="flex justify-between items-center px-10   text-[#096455] text-[15px] font-semibold pt-5 ">
              <Image 
                src={logo} 
                alt="Logo" 
                width={100} 
                height={40} 
              />

              <div className="flex gap-4">
                <Link href="/dashboard">
                  <button className="bg-white  text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300  ">
                    Dashboard
                  </button>
                </Link>
                 
 

              </div>



          </nav>

          {/* middle logo */}
          <div className="mx-auto items-center flex flex-col pt-5">
              <Image 
              src={heroImage} 
              alt="Hero Image" className="h-[110px]"></Image>

              <h3 className="text-[30px] font-bold text-[#096455] leading-tight">REPORT STOLEN DEVICE</h3>

          </div>
    {/* main report box */}
    <form onSubmit={handleSubmit} className="px-22 py-10 max-w-[1000px] mx-auto bg-[#096455]/17 rounded-2xl my-5 mb-20">

      <p className="text-center pb-10 text-red-700 text-[18px] ">! YOUR PROFILE MUST BE COMPLETED TO REPORT A STOLEN DEVICE !</p>
      {submitError && (
        <p className="mb-6 rounded-xl bg-red-100 px-4 py-3 text-center text-red-700">{submitError}</p>
      )}

        {/* imei box */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col flex-1 ">
            <label className="text-[20px] text-[#096455] font-medium">IMEI Number 1</label>
            <input name="imei1" type="text" placeholder="Enter IMEI Number 1" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]" required />
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[20px] text-[#096455] font-medium">IMEI Number 2</label>
            <input name="imei2" type="text" placeholder="Enter IMEI Number 2" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>
        </div>

        <p className="text-2xl font-medium text-[#096455] text-center my-5">WHERE WAS THE PHONE STOLEN</p>
        {/* info div */}
        <div>
          {/* locaiton div */}
          <div className="flex gap-4">
            <select name="division" id="division" className="bg-white rounded-2xl py-2 pl-4 pr-10  text-[14px] flex-1 text-gray-500">
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

            <select name="district" id="district" className="bg-white rounded-2xl py-2 pl-4 pr-10  text-[14px] flex-1 text-gray-500">
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

            <select name="upazila" id="upazila" className="bg-white rounded-2xl py-2 pl-4 pr-10 text-[14px] flex-1 text-gray-500">
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
          <textarea name="locationNote" placeholder="Help us with more accurate location to find the phone" className="bg-white h-[100px] w-full my-5 rounded-2xl p-5 placeholder:text-[14px] resize-none"></textarea>

        </div>

        {/* image div */}
        <div className="flex items-center justify-between gap-20">
          <div className="w-full">
            <label  className="text-[16px] text-[#096455] font-medium">Upload Image of backside of your phone box
(optional but recommended)</label>
            <input name="boxImage" type="file" accept="image/*" className=" block mt-2 file:border-2 file:border-[#096455] file:rounded-2xl file:bg-white file:px-5 file:py-2 file:mr-4 file:cursor-pointer bg-white py-1 px-1  rounded-2xl max-w-[400px] w-full file:text-[14px] text-[14px] file:text-gray-500 text-gray-500"/>
          </div>
          <div className="w-full">
            <label  className="text-[16px] text-[#096455] font-medium">Upload Image of the General Diary(GD) from the reported police station</label>
            <input name="gdImage" type="file" accept="image/*" required className="block mt-2 file:border-2 file:border-[#096455] file:rounded-2xl file:bg-white file:px-5 file:py-2 file:mr-4 file:cursor-pointer bg-white py-1 px-1  rounded-2xl max-w-[400px] w-full file:text-[14px] text-[14px] file:text-gray-500 text-gray-500"/>
          </div>
        </div>

        {/* name and id div */}
        <div className="flex items-center justify-between mt-5 mb-10 gap-20">
          <div className="flex flex-col flex-1 ">
            <label className="text-[18px] text-[#096455] font-medium">Device Name</label>
            <input name="deviceName" type="text" placeholder="Enter Device Name" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[18px] text-[#096455] font-medium">Transaction ID</label>
            <input name="transactionId" type="text" placeholder="Enter Transaction ID" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#096455] text-white rounded-xl h-12 px-6 mx-auto block mt-5 hover:bg-[#064d3f] ease-in-out duration-300 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? "SUBMITTING..." : "SUBMIT REPORT"}
        </button>
    </form>
  </div>;
}

export default ReportDevicePage;