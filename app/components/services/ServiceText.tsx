import React from 'react';

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const ServiceText: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  return (
    <div className="w-[90%] mx-auto h-full flex flex-col items-center text-white">
      <div className="">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceText;
