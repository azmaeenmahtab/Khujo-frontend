import Script from "next/script";

type GreenButtonProps = {
  text: string;
  height?: number;
  width?: number;
  bgColor?: string;
  textColor?: string;
};

const GreenButton = ({ text, height, width, bgColor, textColor }: GreenButtonProps) => {
  return (
    <>
       <Script
        src="https://kit.fontawesome.com/78f2740b36.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        />


      <button
        className="text-white rounded-xl transition duration-300 flex gap-5 items-center"
        style={{
          backgroundColor: bgColor || "#096455",
          paddingLeft: width ? `${width}px` : "20px",
          paddingRight: width ? `${width}px` : "20px",
          paddingTop: height ? `${height}px` : "10px",
          paddingBottom: height ? `${height}px` : "10px",
        }}
      >
        <p style={{ color: textColor || "white" }}>{text}</p>
        <i className="fa-solid fa-arrow-right" style={{ color: textColor || "white" }}></i>
      </button>
    </>
  );
};

export default GreenButton;