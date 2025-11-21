import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png"
import CustomButton from "@/components/Button";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between items-center px-10   text-[#096455] text-[15px] font-semibold pt-5 ">
              <Image 
                src={logo} 
                alt="Logo" 
                width={100} 
                height={40} 
              />

              {/* <div className="flex gap-4">
                <a href="">About</a>
                <a href="">Our Story</a>
                <a href="">Contact</a>
                <a href="">Support</a>
              </div> */}

              <div className="flex gap-4">
                <CustomButton text="Login" />
                {/* <CustomButton text="Report Lost Device" /> */}
              </div>
          </nav>


        {children}
      </body>
    </html>
  );
}   