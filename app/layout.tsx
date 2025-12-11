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


  
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>)
{
  

  

  return (
    <html lang="en">
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable}`}>
        <ClerkProvider>
          {children}
        </ClerkProvider>

        {/* footer */}
      </body>
    </html>
  );
}
