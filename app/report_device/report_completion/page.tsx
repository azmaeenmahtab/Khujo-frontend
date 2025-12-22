import Image from "next/image";
import heroImage from "@/public/KHUJO.png"
import Link from "next/dist/client/link";
import doneMark from "@/public/Frame.png"
const ReportCompletionPage = () => {
    return <div>
        
        <div className="mx-auto  flex flex-col items-center pt-20 pb-10">
              <Image 
              src={heroImage} 
              alt="Hero Image" className="h-[120px]"></Image>

          </div>

          <div className="max-w-[1000px] mx-auto rounded-2xl">
            <div className="bg-[#096455] px-10 text-white rounded-t-2xl text-center flex flex-col justify-center items-center text-2xl py-10">
                <Image src={doneMark} alt="Done Mark" className="mb-7"></Image>
                <h5 className="font-bold">THANK YOU</h5>
                <h5>YOUR PROVIDED INFORMATION WAS SUBMITTED</h5>
            </div>
            <div className="bg-[#D3E7E4] rounded-b-2xl flex justify-center items-center py-10 ">
                <Link href="/dashboard">
                <button className="bg-white rounded-lg px-5 py-2 font-semibold text-[#096455] cursor-pointer">GO TO DASHBOARD</button>
                </Link>
            </div>
          </div>
    </div>
}

export default ReportCompletionPage;