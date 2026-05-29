"use client";

import Image from "next/image";
import GreenButton from "@/components/GreenButton";
import heroImage from "@/public/KHUJO.png"
import Link from "next/link";
import logo from "@/public/logo.png"
import FoundSection from "@/components/FoundSection";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import  {dataType}  from "@/lib/types"

const SearchPage = () => {
    const { search } = useParams() ;
    const [searchResultFound, setSearchResultFound] = useState(false);    
    const [fetcheddata, setfetchedData] = useState<dataType | null>(null);
    const hasFetchedRef = useRef(false);



    console.log( search);

    useEffect(() => {
        if (!search || hasFetchedRef.current) {
            return;
        }

        hasFetchedRef.current = true;

        const checkImei = async () => {
            try {
                const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/check-imei/${search}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (!result.ok) {
                    setSearchResultFound(false);
                    return;
                }

            const data = await result.json();
            setfetchedData(data.data);

                 setSearchResultFound(true);
            } catch (err) {
                console.log(err);
            }
        };

        void checkImei();
    }, [search]);



    return (
        <>
            {/* navbar */}
            <nav className="flex justify-between items-center px-10   text-[#096455] text-[15px] font-semibold pt-5 ">
                <Image
                    src={logo}
                    alt="Logo"
                    width={100}
                    height={40}
                />

                <div className="flex gap-4">
                    <Link href="/sign-in">
                        <button className="bg-white  text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300  ">
                            Login
                        </button>
                    </Link>
                    <Link href="/report_device">
                        <button className="bg-white  text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300  ">
                            Report Stolen Device
                        </button>
                    </Link>
                </div>
            </nav>


            {/* middle logo */}
            <div className="mx-auto items-center flex flex-col mt-[30px]">
                <Image
                    src={heroImage}
                    alt="Hero Image"></Image>

            </div>

            {/* search bar */}
            <div className="w-full flex items-center justify-center bg-transparent pb-[60px] px-4">
                <div className="w-full max-w-[760px] flex items-center justify-center gap-3">
                    <input
                        type="text"
                        placeholder="Search with IMEI"
                        defaultValue={search || ""}
                        style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "16px",
                            border: "1px",
                            width: "100%",
                            boxSizing: "border-box"
                        }}
                        className="text-black flex-1 bg-white shadow-2xl"
                    />
                    <GreenButton text="Search" height={10} width={20}></GreenButton>
                </div>
            </div>


            {/* if not found component */}
            {!searchResultFound && (
            <div className="w-full px-4 pb-16 flex justify-center ">
                <div className="w-full max-w-[760px] rounded-3xl overflow-hidden border border-[#cfe5df] shadow-[0_16px_40px_rgba(9,100,85,0.14)] bg-[#D3E7E4]">
                    <div className="bg-[#096455] px-6 py-7 text-center text-white border-b rounded-b-3xl">
                        <div className="mx-auto mb-3 h-12 w-12 rounded-full border border-white/40 bg-white/10 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-6 w-6"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="13"></line>
                                <circle cx="12" cy="16" r="1"></circle>
                            </svg>
                        </div>
                        <h4 className="text-2xl font-semibold">No IMEI Match Found</h4>
                        <p className="mt-2 text-sm sm:text-base text-white/90">
                            We could not find any stolen report record for the IMEI you entered.
                        </p>
                    </div>

                    <div className="bg-[#D3E7E4] px-6 py-6 text-center">
                        <p className="text-[#0b4f44] text-sm sm:text-base">
                            Please verify the IMEI number and search again, or report the device if needed.
                        </p>
                        <div className="mt-4 flex justify-center">
                            <Link href="/report_device">
                                <button className="bg-[#096455] text-white rounded-xl h-10 px-5 cursor-pointer hover:bg-[#0c7a67] transition-colors duration-300">
                                    Report Stolen Device
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )}


            {/* if found component */}

            {searchResultFound && <FoundSection resultdata={fetcheddata} />}
             
        </>
    )
}

export default SearchPage;    