import React from 'react';

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const ServiceText: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center mt-12 md:mt-5 px-4 md:px-5">
      <div className="">
        <h1 className="text-[14px] xs:text-[16px] md:text-[20px] xl:text-[26px] font-bold  text-[#FFFFFF]">
          {title}
        </h1>
        <h2 className="text-[11px] xs:text-[14px] md:text-[16px] xl:text-[20px] font-semibold text-[#eeeded]">
          {subTitle}
        </h2>
      </div>
      <div className="">
        <p className="text-[9px] xs:text-[12px] md:text-[14px] xl:text-[18px] font-normal text-[#d4d4d4]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServiceText;
