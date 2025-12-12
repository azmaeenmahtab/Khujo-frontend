/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import logo from "@/public/logo.png"
import heroImage from "@/public/KHUJO.png"
import CustomButton from "@/components/Button";
import khujo_white_logo from "@/public/KHUJO-logo-white.png";
import Link from "next/dist/client/link";
import { Poppins } from "next/font/google";
import { Geist, Geist_Mono } from 'next/font/google'
import { SignUpButton, SignInButton, ClerkProvider } from "@clerk/nextjs";
import ConicPage from "../conic/page";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights you need
  variable: "--font-poppins", // Optional: for CSS variable usage
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const colorPairs = [
    { from: "#e7eca0", to: "#62f7de" },
    { from: "#62f7de", to: "#e7eca0" },
    { from: "#e7eca0", to: "#62f7de" },
    { from: "#62f7de", to: "#e7eca0" },
  ];
  
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>)
{
  

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colorPairs.length)
    }, 2000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [2000])

  const { from: color1, to: color2 } = colorPairs[index];

  return (
    
      <div className={`${poppins.className} ${geistSans.variable} ${geistMono.variable}`}>

        
        <div className=" relative overflow-x-hidden ">
          {/* div for gradient */}
          <div className="absolute  -top-[120px] w-full -z-1 bg-gray-100">
          <ConicPage />
          </div>

          
          {/* ------- navbar ----- */}
          <nav className="flex justify-between items-center px-10   text-[#096455] text-[15px] font-semibold pt-5 ">
              <Image 
                src={logo} 
                alt="Logo" 
                width={100} 
                height={40} 
              />

              <div className="flex gap-4">
                <a href="">About</a>
                <a href="">Our Story</a>
                <a href="">Contact</a>
                <a href="">Support</a>
              </div>

              <div className="flex gap-4">
                {/* <CustomButton text="Login" /> */}
                {/* <CustomButton text="Report Lost Device" /> */}
                   <Link href="/sign-in">
                  <button className="bg-white  text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300  ">
                    Login
                  </button>
                  </Link>
                <Link href="/sign-up">
                  <button className="bg-white  text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300  ">
                    Report Lost Device
                  </button>
                </Link>
 

              </div>



          </nav>


          {/* ------- hero text ----- */}

          <div className="mx-auto items-center flex flex-col mt-[120px]">
            <Image 
            src={heroImage} 
            alt="Hero Image"></Image>
            <h4 className="text-[70px] font-medium text-[#096455] pb-5">Find Stolen Phone in Seconds</h4>
          </div>
          

        {children}
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
  );
}
