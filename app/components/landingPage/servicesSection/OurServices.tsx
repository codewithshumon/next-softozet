"use client";

import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServiceLottie from "@/app/components/servicesPage/ServiceLottie";
import CustomButton from "@/app/components/botton/CustomButton";

import {
  uiuxService,
  webSingleMan,
  girlMobile,
  socialSecond,
  seoRanking,
  manDesk,
  singleBoyCall,
  customService,
  videoSof,
} from "@/public/svg-animations";

const OurServices = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const animateSections = () => {
  //     gsap.to(".logo-group-1", {
  //       xPercent: -62,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".animate-logos",
  //         start: "bottom bottom",
  //         scrub: 1,
  //         //snap: { duration: { min: 0.2, max: 3 } }, // the snap animation should be
  //         //delay: 0.2, // wait 0.2 seconds from the last scroll event
  //         //ease: "power1.inOut",
  //       },
  //     });
  //     gsap.to(".logo-group-2", {
  //       xPercent: 60,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".animate-logos",
  //         start: "bottom bottom",
  //         scrub: 1,
  //         //snap: { duration: { min: 0.2, max: 3 } }, // the snap animation should be
  //         //delay: 0.2, // wait 0.2 seconds from the last scroll event
  //         //ease: "power1.inOut",
  //       },
  //     });
  //     gsap.to(".logo-group-3", {
  //       xPercent: -62,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".animate-logos",
  //         start: "bottom bottom",
  //         scrub: 1,
  //         //snap: { duration: { min: 0.2, max: 3 } }, // the snap animation should be
  //         //delay: 0.2, // wait 0.2 seconds from the last scroll event
  //         //ease: "power1.inOut",
  //       },
  //     });
  //   };

  //   animateSections();

  //   return () => {
  //     // Clean up ScrollTrigger instances
  //     ScrollTrigger.getAll().forEach((instance) => instance.kill());
  //   };
  // }, []);

  return (
    <div className=" relative container w-full h-full mt-[20%] px-[5%] ">
      <div className="relative w-full h-full flex flex-col gap-[100px] ">
        <div className=" w-full">
          <div className=" w-full flex flex-col md:flex-row justify-between gap-[50px]">
            <div className=" w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[10%]">
              <div>
                <ServiceLottie
                  animation={uiuxService}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[250px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold uppercase ">
                    ui/ux design
                  </h1>
                  <p className="text-[#e0dddd]">
                    Craft intuitive and engaging interfaces for both mobile and
                    web applications
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/web"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[20%] ">
              <div>
                <ServiceLottie
                  animation={webSingleMan}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[300px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold uppercase">
                    web application development
                  </h1>
                  <p className="text-[#e0dddd]">
                    Design and Develop custom website for your Brand/Business
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/web"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[30%] ">
              <div>
                <ServiceLottie
                  animation={girlMobile}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold uppercase">
                    mobile application development
                  </h1>
                  <p className="text-[#e0dddd]">
                    Elevate Your Brand with Customized App Mobile Development
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/mobile"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className=" w-full  flex flex-row justify-between gap-[50px]">
            <div className="w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[10%] overflow-hidden">
              <div>
                <ServiceLottie
                  animation={customService}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[400px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold uppercase">
                    custom software development
                  </h1>
                  <p className="text-[#e0dddd]">
                    Tailor-made solutions to meet your unique business needs and
                    challenges
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/seo"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[20%] overflow-hidden">
              <div>
                <ServiceLottie
                  animation={seoRanking}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[500px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold uppercase">
                    search engine optimization
                  </h1>
                  <p className="text-[#e0dddd]">
                    Unlocking Visibility: Tailored SEO Strategies for Your
                    Online Success.
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/seo"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[30%] overflow-hidden">
              <div>
                <ServiceLottie
                  animation={socialSecond}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[450px] mt-[-15%]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5 mt-[-15%]">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold uppercase">
                    social media marketing
                  </h1>
                  <p className="text-[#e0dddd]">
                    Boost Your Online Presence: Maximize Engagement with Your
                    Targeted Audience
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/social"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className=" w-full  flex flex-row justify-between gap-[50px]">
            <div className="w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[10%] ">
              <div>
                <ServiceLottie
                  animation={manDesk}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold uppercase">
                    creative content design
                  </h1>
                  <p className="text-[#e0dddd]">
                    Crafting Creativity, Engaging Audiences: Bespoke Content
                    Designs for Your Brand.
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/creative"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[20%] overflow-hidden">
              <div>
                <ServiceLottie
                  animation={videoSof}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[300px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold  uppercase">
                    video editing
                  </h1>
                  <p className="text-[#e0dddd]">
                    Transforming raw footage into polished, professional videos
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/seo"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-1/3 h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[30%] ">
              <div>
                <ServiceLottie
                  animation={singleBoyCall}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold uppercase ">
                    back office support
                  </h1>
                  <p className="text-[#e0dddd]">
                    Your Dedicated 24/7 Call Center Partner for Customer
                    Experience and Sales
                  </p>
                </div>
                <div className="w-full ">
                  <Link
                    href="/services/web"
                    // target="_blank"
                    className="w-full flex items-center justify-center"
                  >
                    <CustomButton
                      borderColor="#03EB64"
                      buttonArrowColor="white"
                      buttonBgColor="#03EB64"
                      textColor="white"
                      bottonText="Discover"
                      isArrow={true}
                      arrow={{
                        rightArrow: true,
                        color: "white",
                        strokeWidth: "1px",
                        className: "",
                        size: 15,
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
