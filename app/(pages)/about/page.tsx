"use client";

import Lottie from "lottie-react";
import aboutUs from "@/public/about-us.json";

const AboutePage = () => {
  return (
    <div className="w-full h-screen bg-primaryDarkcolor !overflow-hidden">
      <div className="container flex items-center justify-center ">
        <Lottie
          animationData={aboutUs}
          loop={true}
          className="!w-[600px]  md:!w-[1050px] "
        />
      </div>
    </div>
  );
};

export default AboutePage;
