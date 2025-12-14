const reports = [
    {
        deviceName: "iPhone 12",
        imeiNumber: "356789123456789",
        stolenDate: "2023-10-01",
        reportedDate: "2023-10-02",
        reportStatus: "Under Review",
    },

    {
        deviceName: "Samsung Galaxy S21",
        imeiNumber: "356789987654321",
        stolenDate: "2023-09-15",
        reportedDate: "2023-09-16",
    },
    {
        deviceName: "Google Pixel 5",
        imeiNumber: "356789112233445",  
        stolenDate: "2023-08-20",
        reportedDate: "2023-08-21",
    },
]

const DashboardPage = () => {
    return (
        <div className="">
             <h3 className="text-[#096455] text-4xl font-bold  text-center">Hello <span>Shakibul Islam</span></h3>


             <div className="max-w-[1300px] mx-auto pt-10 ">
                <h4 className="text-[#096455] text-2xl font-medium mb-5 pl-5">Reported Lost Phones</h4>

                <div className="bg-white rounded-lg p-6">

                    <div className="flex justify-between  ">


                        <div>
                            <h2 className="border-b-2 border-gray-200 pb-4 font-semibold  text-[#353A43] ">Device Name</h2>

                            {reports.map((report, index) => (
                            <div key={index} className="py-2  gap-10">
                                <div className="overflow-x-auto w-[140px] flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"><h3 className="whitespace-nowrap">{report.deviceName}</h3>
                                </div>
                            </div>
                        ))}
                        </div>

                        <div>
                            <h2  className="border-b-2 border-gray-200 pb-4 font-semibold  text-[#353A43] ">IMEI Number</h2>

                            {reports.map((report, index) => (
                            <div key={index} className="    py-2   gap-10">
                                <div  className="overflow-x-auto max-w-[200px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <h3 className="whitespace-nowrap">{report.imeiNumber}</h3>
                                </div>
                            </div>
                        ))}
                        </div>

                        <div>
                            <h2 className="border-b-2 border-gray-200 pb-4 font-semibold  text-[#353A43] ">Stolen Date</h2>

                            {reports.map((report, index) => (
                            <div key={index} className="    py-2   gap-10">
                                <div  className="overflow-x-auto max-w-[200px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <h3 className="whitespace-nowrap">{report.stolenDate}</h3>
                                </div>
                            </div>
                        ))}
                        </div>

                        <div>
                            <h2 className="border-b-2 border-gray-200 pb-4 font-semibold  text-[#353A43] ">Reported Date</h2>

                            {reports.map((report, index) => (
                            <div key={index} className="    py-2   gap-10">
                                <div  className="overflow-x-auto max-w-[200px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <h3 className="whitespace-nowrap">{report.reportedDate}</h3>
                                </div>
                            </div>
                        ))}
                        </div>

                        <div>
                            <h2 className="border-b-2 border-gray-200 pb-4 font-semibold  text-[#353A43] ">Reported Status</h2>

                            {reports.map((report, index) => (
                            <div key={index} className="    py-2   gap-10">
                                <div  className="overflow-x-auto max-w-[200px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <h3 className="whitespace-nowrap">{report.reportStatus || "N/A"}</h3>
                                </div>
                            </div>
                        ))}
                        </div>

                    </div>
                    
                    

                    

                </div>
             </div>

         </div>
    )
}

export default DashboardPage;