import React from "react";

type CustomButtonProps = {
    text: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
    return (
        <button className="bg-white px-5 py-2.5   rounded-2xl">{text}</button>
    );
};

export default CustomButton;