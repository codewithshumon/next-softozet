"use client";

import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HiOutlineArrowRight } from "react-icons/hi";

import ServiceLottie from "@/app/components/servicesPage/ServiceLottie";
import ServiceButton from "@/app/components/botton/ServiceButton";

import {
  webSingleMan,
  girlMobile,
  socialSecond,
  seoRanking,
  manDesk,
  singleBoyCall,
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
    <div className=" relative w-full h-full mt-[20%] px-[5%] ">
      <div className="relative w-full h-full flex flex-col gap-[100px] ">
        <div>
          <div className=" w-full flex flex-col md:flex-row justify-between gap-[50px]">
            <div className="w-full h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[10%] ">
              <div>
                <ServiceLottie
                  animation={webSingleMan}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold ">
                    WEB APPLICATION DEVELOPMENT
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
                    <ServiceButton />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[20%] ">
              <div>
                <ServiceLottie
                  animation={girlMobile}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold ">
                    MOBILE APPLICATION DEVELOPMENT
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
                    <ServiceButton />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[30%] overflow-hidden">
              <div>
                <ServiceLottie
                  animation={socialSecond}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[450px] mt-[-15%]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5 mt-[-15%]">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold">
                    SOCIAL MEDIA MARKETING
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
                    <ServiceButton />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" w-full  flex flex-row justify-between gap-[50px]">
            <div className="w-full h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[10%] overflow-hidden">
              <div>
                <ServiceLottie
                  animation={seoRanking}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[500px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold ">
                    SEARCH ENGINE OPTIMIZATION
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
                    <ServiceButton />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[20%] ">
              <div>
                <ServiceLottie
                  animation={manDesk}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold ">
                    CREATIVE CONTENT DESIGN
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
                    <ServiceButton />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] flex flex-col items-center justify-between pb-5 sevice-border mt-[30%] ">
              <div>
                <ServiceLottie
                  animation={singleBoyCall}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div className=" w-[90%] flex flex-col gap-5">
                <div className="w-full text-center">
                  <h1 className=" text-[#ffffff] font-extrabold ">
                    24/7 CALL CENTER SERVICE
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
                    <ServiceButton />
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
