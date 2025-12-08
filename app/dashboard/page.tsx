import Image from "next/image";
import GreenButton from "@/components/GreenButton";
import mobile from "@/public/khujo mockup 1-Picsart.png";
import Card from "@/components/Card";


export default function Home() {
  return (
    <div>
         
      <div className=" flex flex-col gap-5 items-center bg-gray-100 pb-[120px]">
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

          <div className="flex flex-col items-center gap-4 font-medium">
            <p className="text-[#096455]">Total Reported Device: <span>1930</span></p>
            <p className="text-[#096455]">Recovered Device: <span>1020</span></p>
          </div>

          <GreenButton text="Search" height={20} width={20}></GreenButton>
      </div>
            {/* hero section */}
          <div className="flex flex-col justify-center pl-[110px] pt-[50px] pb-[60px] bg-gray-100" >
            <h4 className="text-6xl text-[#096455] font-semibold text-center ">What is Khujo</h4>
            
            <div className="flex gap-[150px] justify-center items-center">
              <p className="text-[#096455] text-[21px] leading-[37px] max-w-[660px]">The idea for Khujo emerged from a common frustration: friends and family losing smartphones and never recovering them despite knowing their IMEI numbers. We envisioned a system that bridges the gap between users, buyers and authorities ,ensuring transparency, accountability, and safety in the smartphone ecosystem.  Our platform not only supports individual users but also contributes to building a national digital security infrastructure aligned with Bangladesh’s Smart Nation vision.</p>

              <Image src={mobile} alt="Mobile Image" width={1180}></Image>
            </div>
          </div>


          {/* card section */}
          <div className="flex flex-col justify-center pt-[120px] pb-[120px] bg-white " >
            <h4 className="text-6xl text-[#096455] font-semibold text-center ">How Does It Work</h4>
            
            <div className="flex gap-[30px] justify-center items-center max-w-[1300px] mx-auto pt-14">
              {/* card 1 */}
              <Card title="Report from the Owner" description="We collect information for the Owner regarding the stolen phone. The information includes IMEI number, a verified police report and the original box of the device. Afterwards we authenticate the report using our Artificial Intelligence."></Card>
              {/* card 2 */}
              <Card title="Report from the Founder" description="Buying a phone, we urge all buyers to check the IMEI number of the phone in our website before to ensure if the phone is a stolen entity or not. If so, we ask the user to help us with more precise location about the stolen phone."></Card>
              {/* card 3 */}
              <Card title="Contact with Police" description="Upon successful and authentic collection of the location of stolen phone, we contact the law enforcement to take actions. After successful rederivation of the device,  the original owner gets back their phone and the thief's get caught."></Card>
               
            </div>
          </div>


          {/* search card  */}
          <div className="pt-[90px] pb-[180px] bg-gray-100">
          <div className="flex justify-between items-center px-[100px] py-[60px] bg-[#096455] rounded-[20px] max-w-[1300px] mx-auto gap-[190px] ">
            <div>
              <h3 className="text-4xl font-bold text-white pb-2.5">Unsure if the phone you are buying is stolen or not?</h3>
              <p className="text-white text-[25px]">Search the phone at Khujo and be rest assured</p>
            </div>
            <div className="pr-10">
            <GreenButton text="Search" height={20} width={20} bgColor="white" textColor="#096455"></GreenButton>
            </div>
          </div>
          </div>


         
      
    </div>
  );
}
