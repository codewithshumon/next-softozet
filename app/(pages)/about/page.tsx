"use client";

import Lottie from "lottie-react";
import businessGrowth from "@/public/business-growth.json";
import ProjectIdea from "@/app/components/global/ProjectIdea";
import WhyUnique from "@/app/components/aboutPage/WhyUnique";
import HowWeWork from "@/app/components/aboutPage/HowWeWork";
import CompanyDetails from "@/app/components/aboutPage/CompanyDetails";

const AboutePage = () => {
  // const currentYear = new Date().getFullYear();
  // const startYear = 2020;
  // const duration = `${startYear} - ${currentYear}`;

  return (
    <div className="w-full h-full bg-primaryDarkcolor ">
      <div className=" w-full h-full ">
        <div className="container flex flex-col bg-[#171718]">
          <div className="mt-[30%] xs:mt-[20%] md:mt-[10%] flex flex-col gap-5">
            <h1 className="text-[30px] text-[#ffffff] md:text-[80px] font-extrabold leading-none">
              Accelerating
            </h1>
            <p className="text-[#6ee935] text-[25px] md:text-[70px] font-bold mt-[-10px] md:mt-[-20px]">
              <span className="text-[#ffffff] leading-none px-5">—</span>
              Business Growth..
            </p>
          </div>
          <div className=" flex items-center justify-center">
            <Lottie
              animationData={businessGrowth}
              loop={true}
              className="!w-[400px]  md:!w-[600px] "
            />
          </div>
        </div>
      </div>

      <div className=" w-full h-full">
        <CompanyDetails />
      </div>

      <div className=" w-full h-full">
        <HowWeWork />
      </div>

      <div className=" w-full h-full">
        <WhyUnique />
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
