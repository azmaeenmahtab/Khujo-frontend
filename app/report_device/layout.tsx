/* eslint-disable @typescript-eslint/no-unused-vars */
 import "@/app/globals.css";
import Image from "next/image";
import logo from "@/public/logo.png"
import heroImage from "@/public/KHUJO.png"
 import khujo_white_logo from "@/public/KHUJO-logo-white.png";
import Link from "next/dist/client/link";
 
import ConicPage from "../conic/page";


 

const colorPairs = [
    { from: "#e7eca0", to: "#62f7de" },
    { from: "#62f7de", to: "#e7eca0" },
    { from: "#e7eca0", to: "#62f7de" },
    { from: "#62f7de", to: "#e7eca0" },
  ];
  


const ReportDeviceLayout = ({ children }: { children: React.ReactNode}) => {

    return (
        <div  className=" relative overflow-x-hidden bg-gray-100 ">

        <div className="absolute left-0 -top-[120px] w-full z-10  bg-gray-100">
          <ConicPage />
        </div>

        <div className="min-h-screen relative z-20 ">

          {/* nav */}
          <nav className="flex justify-between items-center px-10   text-[#096455] text-[15px] font-semibold pt-5 ">
              <Image 
                src={logo} 
                alt="Logo" 
                width={100} 
                height={40} 
              />

              <div className="flex gap-4">
                <Link href="/profile">
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
         

          <div className="bg-transparent ">
          {children}
          </div>
        </div>

        {/* footer */}
        <div className="bg-[#002B24] text-white">
        <div className="flex justify-between max-w-[1300px] mx-auto items-center  pt-20 pb-[100px] pr-[60px]  ">
          <div className="flex flex-col text-left max-w-[680px]">
            <Image src={khujo_white_logo} alt="Khujo White Logo"></Image>
            <p className="font-light leading-relaxed tracking-wider ">The idea for <span className="font-bold">Khujo</span> emerged from a common frustration: friends and family losing smartphones and never recovering them despite knowing their IMEI numbers. We envisioned a system that bridges the gap between users, buyers and authorities ,ensuring transparency, accountability, and safety in the smartphone ecosystem.  Our platform not only supports individual users but also contributes to building a national digital security infrastructure aligned with Bangladesh’s Smart Nation vision.</p>
          </div>

          {/* links */}
          <div>
            <h4 className="font-semibold text-2xl pt-2.5 pb-3.5">Quick Links</h4>
            <ul className="space-y-5">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/report-device">Report Device</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </div>
        </div>

        </div>
    </div>
    )
}

export default ReportDeviceLayout;