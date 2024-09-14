import React from "react";

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const WhyUnique: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  return (
    <div className=" h-screen w-full">
      <div className=" w-full h-full flex flex-row">
        <div className="w-[50%] h-full bg-yellow-300"></div>
        <div className="w-[50%] h-full bg-green-500"></div>
      </div>
    </div>
  );
};

export default WhyUnique;
