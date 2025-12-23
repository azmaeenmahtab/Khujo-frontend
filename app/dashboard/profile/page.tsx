import Image from "next/image";
import heroImage from "@/public/KHUJO.png"
import Link from "next/dist/client/link"
import logo from "@/public/logo.png"
const ProfilePage = () => {

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
            <div className="mx-auto items-center flex flex-col  ">
              <Image 
              src={heroImage} 
              alt="Hero Image"></Image>
            </div>


            <div className="px-22 py-10 max-w-[1000px] mx-auto bg-[#096455]/17 rounded-2xl my-5 mb-20">

       

        {/* name box */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col flex-1 ">
            <label className="text-[20px] text-[#096455] font-semibold">First Name</label>
            <input type="text" placeholder="Enter First Name" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[20px] text-[#096455] font-semibold">Last Name</label>
            <input type="text" placeholder="Enter Last Name" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>
        </div>

        {/* phone and email div */}
        <div className="flex items-center justify-between gap-5 mt-4 mb-6" >
          <div className="flex flex-col flex-1 ">
            <label className="text-[20px] text-[#096455] font-semibold">Phone Number</label>
            <input type="text" placeholder="Enter Phone Number" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[20px] text-[#096455] font-semibold">Email</label>
            <input type="text" placeholder="Enter Email" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>
        </div>

        <p className="text-2xl font-semibold text-[#096455] text-center my-5">HOME ADDRESS</p>
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

            <select name="district" id="district" className="bg-white rounded-2xl py-2 pl-4 pr-10 text-[14px] flex-1 text-gray-500">
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


          </div>
          <textarea placeholder="House number, building name, street number, area etc" className="bg-white h-[100px] w-full my-5 rounded-2xl p-5 placeholder:text-[14px] resize-none"></textarea>

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