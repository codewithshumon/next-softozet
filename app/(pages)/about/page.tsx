"use client";

import Lottie from "lottie-react";
import aboutUs from "@/public/about-us.json";
import ProjectIdea from "@/app/components/global/ProjectIdea";

const AboutePage = () => {
  // const currentYear = new Date().getFullYear();
  // const startYear = 2020;
  // const duration = `${startYear} - ${currentYear}`;

  return (
    <div className="w-full h-full bg-primaryDarkcolor ">
      <div className=" w-full h-full bg-[#188f65]">
        <div className="container flex flex-col gap-10 ">
          <div className="mt-[40%] xs:mt-[25%] md:mt-[15%]">
            <h1 className="text-[40px] md:text-[100px] font-extrabold leading-none">
              Accelerating
            </h1>
            <p className="text-white text-[30px] md:text-[100px] font-bold mt-[-10px] md:mt-[-20px]">
              <span className="text-[#000000] leading-none px-5">—</span>
              Business Growth..
            </p>
          </div>
          <div className=" flex items-center justify-center">
            <Lottie
              animationData={aboutUs}
              loop={true}
              className="!w-[600px]  md:!w-[1050px] "
            />
          </div>
        </div>
      </div>

      <div className=" w-full h-full">
        <div className="container flex flex-col py-20">
          <div className=" w-full h-full flex items-center justify-center ">
            <div className="w-[90%] flex flex-col items-center justify-center text-white my-20">
              <h2 className="w-full text-center text-[25px] xs:text-[35px] md:text-[55px] xl:text-[100px] font-extrabold">
                SOFTOZET LIMITED
              </h2>
              <span className="text-[#7D7D82] w-full text-center text-[25px] xs:text-[35px] md:text-[55px] xl:text-[70px] font-bold leading-[30px] xs:leading-[50px] md:leading-[80px]">
                Empowering Growth Through Dedication & Innovation
              </span>
            </div>
          </div>

          <div className=" w-full h-full flex flex-col items-center">
            <div className="w-[80%] flex flex-col items-center gap-20 text-[#8F8F92] text-[25px]">
              <p className="">
                At SOFTOZET Limited, {new Date().getFullYear() - 2020} years
                back our journey is fired by passion. The secret to our
                innovation and success? It&apos;s the fusion of relentless
                dedication, a heart that beats for design, development, and
                Marketing. We are an innovative 360° digital marketing and
                software design & development company based in Bangladesh.
              </p>
              <p>
                With a dedicated team of experts in web development, Softozet
                Limited is committed to delivering quick and high-quality
                solutions tailored to the specific needs of our clients. Our
                team stays up-to-date with the latest industry trends and
                technologies, ensuring that our services are always in line with
                current best practices.
              </p>
              <p>
                At Softozet Limited, we pride ourselves on our dedication to
                excellence and our innovative approach to web development. Our
                commitment to ethical practices, clear communication, and
                reliable results has been the foundation of our success,
                fostering lasting relationships with our clients and driving
                continuous growth.
              </p>
            </div>
          </div>
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
