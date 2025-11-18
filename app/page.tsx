import Image from "next/image";
import GreenButton from "@/components/GreenButton";

export default function Home() {
  return (
    <div>

      <div className=" flex flex-col gap-5 items-center bg-gray-100 pb-10">
          <input
            type="text"
            placeholder="Search with IMEI"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "16px",
              border: "1px",
              width: "100%",
              boxSizing: "border-box"
            }}
            className="text-black max-w-[600px] mx-auto bg-white shadow-2xl " 
          />

          <div className="flex flex-col items-center">
            <p className="text-[#096455]">Total Reported Device: <span>1930</span></p>
            <p className="text-[#096455]">Recovered Device: <span>1020</span></p>
          </div>

          <GreenButton text="Search" height={20} width={20}></GreenButton>

      </div>
    </div>
  );
}
