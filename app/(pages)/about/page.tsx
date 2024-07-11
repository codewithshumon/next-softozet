"use client";

import Lottie from "lottie-react";
import aboutUs from "@/public/about-us.json";
import ProjectIdea from "@/app/components/global/ProjectIdea";

const AboutePage = () => {
  return (
    <div className="w-full h-full bg-primaryDarkcolor ">
      <div className=" w-full h-full bg-primaryColor">
        <div className="container flex items-center justify-center">
          <Lottie
            animationData={aboutUs}
            loop={true}
            className="!w-[600px]  md:!w-[1050px] "
          />
        </div>
      </div>

      <div className=" w-full h-full bg-purpleColor">
        <div className="container flex flex-col xl:flex-row py-10 md:py-20">
          <div className=" w-full xl:w-[50%] h-full">
            <h1 className=" py-10 w-[90%] text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] xl:text-[5rem] text-white font-extrabold">
              Have a Project Idea?
            </h1>
          </div>
          <div className=" w-full xl:w-[50%] h-full">
            <ProjectIdea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutePage;
