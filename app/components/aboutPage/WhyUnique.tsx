import Image from "next/image";
import React from "react";

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const WhyUnique: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  return (
    <div className=" h-screen w-full bg-[#222121] flex flex-row  text-white px-20">
      <div className="w-[50%] h-full flex flex-col gap-5 justify-around ">
        <h2>Key Values That Make Us Stand Out</h2>
        <div>
          <div>
            <h3>Transparent Communication</h3>
            <p></p>
          </div>
          <div>
            <h3>Precision Management</h3>
            <p></p>
          </div>
          <div>
            <h3>Meticulous Detail</h3>
            <p></p>
          </div>
          <div>
            <h3>Innovative Excellence</h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-full flex flex-col gap-5 justify-around">
        <div>
          <span>Transparent</span>
          {/* <Image /> */}
          <span>Communication</span>
        </div>
        <p>
          We prioritize open dialogue, ensuring clients are informed at every
          turn. Our clear communication fosters trust and alignment, enriching
          collaboration.
        </p>
      </div>
    </div>
  );
};

export default WhyUnique;
