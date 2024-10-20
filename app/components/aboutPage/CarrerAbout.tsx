"use client";
import dynamic from "next/dynamic";
// Dynamically import Lottie to ensure it's only loaded on the client side
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import career from "@/public/career.json";

import ServiceButton from "../botton/ServiceButton";

const CarrerAbout = () => {
  return (
    <div className=" h-[120vh] w-full bg-[#FFFFFF] flex flex-row  text-black px-20 py-10">
      <div className=" w-[50%] h-full">
        <div className=" relative text-[5rem] font-extrabold w-full h-full flex items-center justify-center ">
          <Lottie
            animationData={career}
            loop={true}
            className="!w-[500px]  md:!w-[500px] z-[2]"
          />
          <span className="absolute top-[10%] left-0">Career</span>
          <span className="absolute bottom-[11%] right-0 z-[5]">
            Opportunities
          </span>
        </div>
      </div>

      <div className="w-[50%] h-full flex flex-col gap-5 justify-around ml-5 px-10 py-24 z-0">
        <h2 className=" w-full text-[3rem] font-bold ">Work with Softozet</h2>
        <p className="text-[#5F5F5D] text-[1rem]">
          Choose Musemind to embrace your skills and passion. We are your growth
          partner, encouraging creativity and individual development while
          creating excellent user experiences in a fast-paced, collaborative
          atmosphere.
        </p>
        <div className=" w-full flex items-center justify-center ">
          <ServiceButton
            borderColor="#03EB64"
            buttonBgColor="#03EB64"
            buttonArrowColor="black"
            textColor="black"
            bottonText="Start Your Career"
          />
        </div>
      </div>
    </div>
  );
};

export default CarrerAbout;
