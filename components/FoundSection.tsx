import Link from "next/link";

const FoundSection = () => {
  return (
    <div className="max-w-[1000px] mx-auto my-5 mb-20 px-4 md:px-0">

        {/* found info div */}
        <div className="rounded-3xl overflow-hidden bg-[#d8e5e3] mb-10">
          <div className="bg-[#f35a5d] text-white py-8 px-6 text-center rounded-b-3xl">
            <div className="text-6xl leading-none mb-5">&#9888;</div>
            <p className="text-3xl font-bold mb-3">WARNING</p>
            <p className="text-2xl font-semibold">THIS PHONE IS ENLISTED AS A STOLEN DEVICE</p>
          </div>

          <div className="px-14 py-10 text-[#075f52] grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3 text-xl leading-tight text-center md:text-left">
              <p><span className="font-bold">Device Name:</span> Samsung Galaxy S24</p>
              <p><span className="font-bold">Original Owner:</span> Shakibul Alam</p>
              <p><span className="font-bold">Status:</span> Verified</p>
              <p><span className="font-bold">Stolen Date:</span> November 03, 2025</p>
              <p><span className="font-bold">Reported Date:</span> November 04, 2025</p>
            </div>

            <div className="space-y-4 text-center text-xl leading-tight">
              <div>
                <p className="font-bold">IMEI Number</p>
                <p>526697614147252</p>
              </div>

              <div>
                <p className="font-bold">Stolen From</p>
                <p>Rokeya Ahsan College</p>
                <p>Konapara, Demra</p>
                <p>Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#096455]/17 rounded-2xl p-6 md:p-10">
        <p className="text-4xl font-bold text-[#096455] text-center mb-10">HELP THE OWNER FIND THEIR PHONE!</p>

        {/* info inpout div */}
        <label htmlFor="" className="text-[#096455] text-xl font-medium">Phone Number*</label>
        <input type="text" placeholder="Enter Phone Number" className="bg-white rounded-2xl py-2 mt-2 px-4 placeholder:text-[14px] w-full mb-5"/>

        <h3 className="text-start text-[#096455] text-xl font-medium pb-2">Where did you find the phone?</h3>
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
          <textarea placeholder="Help us with more accurate location to find the phone" className="bg-white h-[100px] w-full my-5 rounded-2xl p-5 placeholder:text-[14px] resize-none"></textarea>

        </div>

        <Link href="/report_device/report_completion">
        <button className="bg-[#096455] text-white rounded-xl h-12 px-6 mx-auto block mt-5 hover:bg-[#064d3f] ease-in-out duration-300 cursor-pointer">SUBMIT REPORT</button>
        </Link>
        </div>
    </div>
  );
}

export default FoundSection;