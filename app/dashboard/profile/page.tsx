import Image from "next/image";
import Link from "next/dist/client/link"
import logo from "@/public/logo.png"
import { currentUser } from "@clerk/nextjs/server";

const ProfilePage = async () => {
  const user = await currentUser();
  const readOnlyFieldClass = "bg-white rounded-2xl py-2 px-4 placeholder:text-[14px] text-[#1F2A37]";

  const firstName = user?.firstName ?? "";
  const lastName = user?.lastName ?? "";
  const profileImageUrl = user?.imageUrl ?? "";
  const profileInitials = `${firstName.trim().charAt(0)}${lastName.trim().charAt(0)}`.trim().toUpperCase() || "U";
  const emailAddress = user?.primaryEmailAddress?.emailAddress ?? "";
  const unsafeMetadata = (user?.unsafeMetadata ?? {}) as Record<string, unknown>;
  const phoneNumberFromMetadata =
    (typeof unsafeMetadata.phoneNumber === "string" && unsafeMetadata.phoneNumber) || "";
  const phoneNumber = phoneNumberFromMetadata || user?.primaryPhoneNumber?.phoneNumber || "";
  const division = typeof unsafeMetadata.division === "string" ? unsafeMetadata.division : "";
  const district = typeof unsafeMetadata.district === "string" ? unsafeMetadata.district : "";
  const upazila = typeof unsafeMetadata.upazila === "string" ? unsafeMetadata.upazila : "";
  const addressLine = typeof unsafeMetadata.addressLine === "string" ? unsafeMetadata.addressLine : "";

  return <div>
    <div>
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


      <div className="mx-auto mt-3 flex w-fit items-center justify-center rounded-2xl border border-white/40 bg-white/20 px-10 py-4 shadow-[0_12px_32px_rgba(9,100,85,0.18)] backdrop-blur-xl">
        <h4 className="text-4xl font-semibold tracking-[0.12em] text-[#096455]">PROFILE</h4>
      </div>


      <div className="px-22 py-10 max-w-[1000px] mx-auto bg-[#096455]/17 rounded-2xl my-5 mb-20">


        <div className="mb-8 flex flex-col items-center">
          <div className="rounded-full bg-gradient-to-br from-white/95 via-[#D9F3EE] to-[#A6DCCD] p-[3px] shadow-[0_16px_40px_rgba(9,100,85,0.28)]">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/70 bg-white/75 backdrop-blur-sm">
              {profileImageUrl ? (
                <div
                  className="h-full w-full bg-cover bg-center "
                  style={{ backgroundImage: `url(${profileImageUrl})` }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-[#096455]">
                  {profileInitials}
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>



        {/* name box */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col flex-1 ">
            <label className="text-[20px] text-[#096455] font-semibold">First Name</label>
            <input type="text" placeholder="Enter First Name" defaultValue={firstName} readOnly className={readOnlyFieldClass} />
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[20px] text-[#096455] font-semibold">Last Name</label>
            <input type="text" placeholder="Enter Last Name" defaultValue={lastName} readOnly className={readOnlyFieldClass} />
          </div>
        </div>

        {/* phone and email div */}
        <div className="flex items-center justify-between gap-5 mt-4 mb-6" >
          <div className="flex flex-col flex-1 ">
            <label className="text-[20px] text-[#096455] font-semibold">Phone Number</label>
            <input type="text" placeholder="Enter Phone Number" defaultValue={phoneNumber} readOnly className={readOnlyFieldClass} />
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[20px] text-[#096455] font-semibold">Email</label>
            <input type="text" placeholder="Enter Email" defaultValue={emailAddress} readOnly className={readOnlyFieldClass} />
          </div>
        </div>

        <p className="text-2xl font-semibold text-[#096455] text-center my-5">HOME ADDRESS</p>
        {/* info div */}
        <div>
          {/* locaiton div */}
          <div className="flex gap-4">
            <select name="division" id="division" defaultValue={division} disabled className="bg-white rounded-2xl py-2 pl-4 pr-10  text-[14px] flex-1 text-gray-500 disabled:cursor-not-allowed disabled:opacity-100">
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

            <select name="district" id="district" defaultValue={district} disabled className="bg-white rounded-2xl py-2 pl-4 pr-10  text-[14px] flex-1 text-gray-500 disabled:cursor-not-allowed disabled:opacity-100">
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

            <select name="upazila" id="upazila" defaultValue={upazila} disabled className="bg-white rounded-2xl py-2 pl-4 pr-10 text-[14px] flex-1 text-gray-500 disabled:cursor-not-allowed disabled:opacity-100">
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
          <textarea placeholder="House number, building name, street number, area etc" defaultValue={addressLine} readOnly className="bg-white h-[100px] w-full my-5 rounded-2xl p-5 placeholder:text-[14px] resize-none text-[#1F2A37]"></textarea>

        </div>

        {/* image div */}
        {/* <div className="flex items-center justify-between gap-20">
          <div className="w-full">
            <label  className="text-[16px] text-[#096455] font-medium">Upload Image of backside of your phone box
(optional but recommended)</label>
            <input type="file" className=" block mt-2 file:border-2 file:border-[#096455] file:rounded-2xl file:bg-white file:px-5 file:py-2 file:mr-4 file:cursor-pointer bg-white py-1 px-1  rounded-2xl max-w-[400px] w-full file:text-[14px] text-[14px] file:text-gray-500 text-gray-500"/>
          </div>
          <div className="w-full">
            <label  className="text-[16px] text-[#096455] font-medium">Upload Image of the General Diary(GD) from the reported police station</label>
            <input type="file" className="block mt-2 file:border-2 file:border-[#096455] file:rounded-2xl file:bg-white file:px-5 file:py-2 file:mr-4 file:cursor-pointer bg-white py-1 px-1  rounded-2xl max-w-[400px] w-full file:text-[14px] text-[14px] file:text-gray-500 text-gray-500"/>
          </div>
        </div> */}

        {/* name and id div */}
        {/* <div className="flex items-center justify-between mt-5 mb-10 gap-20">
          <div className="flex flex-col flex-1 ">
            <label className="text-[18px] text-[#096455] font-medium">Device Name</label>
            <input type="text" placeholder="Enter Device Name" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[18px] text-[#096455] font-medium">Transaction ID</label>
            <input type="text" placeholder="Enter Transaction ID" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>
        </div> */}
        <Link href="/report_device/report_completion">
          <button className="bg-[#096455] text-white rounded-xl h-12 px-6 mx-auto block mt-5 hover:bg-[#064d3f] ease-in-out duration-300 cursor-pointer">Update Profile</button>
        </Link>
      </div>
    </div>
  </div>;
}

export default ProfilePage;