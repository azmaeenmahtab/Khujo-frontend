const reportDevicePage = () => {

  return <div>
    {/* main report box */}
    <div className="px-22 py-10 max-w-[1000px] mx-auto bg-[#096455]/17 rounded-2xl mt-5">

      <p className="hidden">YOUR PROFILE MUST BE COMPLETED TO REPORT A STOLEN DEVICE</p>

        {/* imei box */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col flex-1 ">
            <label className="text-[20px] text-[#096455] font-medium">IMEI Number 1</label>
            <input type="text" placeholder="Enter IMEI Number 1" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[20px] text-[#096455] font-medium">IMEI Number 2</label>
            <input type="text" placeholder="Enter IMEI Number 2" className="bg-white rounded-2xl py-2 px-4 placeholder:text-[14px]"/>
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
          <textarea placeholder="Help us with more accurate location to find the phone" className="bg-white h-[150px] w-full my-5 rounded-2xl p-5 placeholder:text-[14px] resize-none"></textarea>

        </div>

        {/* image div */}
        <div></div>

        {/* name and id div */}
        <div></div>

        <button className="bg-[#096455] text-white rounded-xl h-12 px-6 mx-auto block mt-5 hover:bg-[#064d3f] ease-in-out duration-300 ">SUBMIT REPORT</button>
    </div>
  </div>;
}

export default reportDevicePage; 