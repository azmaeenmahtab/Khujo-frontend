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


// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "700"], // Add weights you need
//   variable: "--font-poppins", // Optional: for CSS variable usage
// });

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

const colorPairs = [
    { from: "#e7eca0", to: "#62f7de" },
    { from: "#62f7de", to: "#e7eca0" },
    { from: "#e7eca0", to: "#62f7de" },
    { from: "#62f7de", to: "#e7eca0" },
  ];
  

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div  className=" relative overflow-x-hidden ">
        <div className="absolute left-0 -top-[120px] w-full -z-1 bg-gray-100">
          <ConicPage />
          </div>
        <div className="bg-transparent">
        {children}
        </div>
    </div>
    );
};

export default SignInLayout;