import React from 'react';

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const ServiceText: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  return (
    <div className="w-[90%] mx-auto h-full flex flex-col items-center justify-center ">
      <div className="">
        <h1 className="text-[12] xs:text-[16px] md:text-[22px] xl:text-[28px] font-bold  text-[#FFFFFF]">
          {title}
        </h1>
        <h2 className="text-[10] xs:text-[12px] md:text-[18px] xl:text-[22px] font-semibold text-[#eeeded]">
          {subTitle}
        </h2>
      </div>
      <div className="">
        <p className="text-[8] xs:text-[10px] md:text-[16px] xl:text-[18px] font-normal text-[#d4d4d4]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServiceText;
