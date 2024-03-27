"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServiceLottie from "@/app/components/services/ServiceLottie";
import ServiceText from "@/app/components/services/ServiceText";
import { ServiceData } from "@/app/constant/serviceData";

import {
  webSmall,
  mobileSecond,
  socialThird,
  seoMan,
  twoCreative,
} from "@/public/svg-animations";

const ServicesPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateSections = () => {
      const section =
        (document.querySelector(".sevice-image-wrapper") as HTMLElement) ||
        null;
      let items = gsap.utils.toArray(".image-item");

      if (!section) return;

      gsap.to(items, {
        xPercent: -100 * (items.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          snap: 1 / (items.length - 1),
          end: () => "+=" + section.offsetWidth,
        },
      });
    };

    animateSections();

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section className="w-full h-full full-container ">
      {/* <div className="w-screen h-screen bg-[#c54f3b]"></div> */}
      <div className="sevice-image-wrapper w-full h-full flex flex-row items-center ">
        <div className="image-item w-[100vw] h-full relative ">
          <div className="container absolute inset-0 flex flex-col md:flex-row justify-between gap-2 md:gap-5 xl:gap-8 py-2 xs:py-4 md:py-6">
            <div className="w-full h-full  ">
              <ServiceText
                title={ServiceData.webServiceData.title}
                subTitle={ServiceData.webServiceData.subTitle}
                text={ServiceData.webServiceData.text}
              />
            </div>
            <div className="w-full h-full">
              <ServiceLottie
                animation={webSmall}
                className="!p-2 xs:!p-5 xl:!p-6 !w-[300px] xs:!w-[400px] md:!w-[450px] xl:!w-[600px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#114231]"></div>
        </div>

        <div className="image-item w-[100vw] h-full relative ">
          <div className="container absolute inset-0 flex flex-col md:flex-row justify-between py-2 xs:py-4 md:py-6">
            <div className="w-full h-full">
              <ServiceText
                title={ServiceData.mobileServiceData.title}
                subTitle={ServiceData.mobileServiceData.subTitle}
                text={ServiceData.mobileServiceData.text}
              />
            </div>
            <div className="w-full h-full">
              <ServiceLottie
                animation={mobileSecond}
                className="!p-2 xs:!p-5 xl:!p-6 !w-[310px] xs:!w-[430px] md:!w-[500px] xl:!w-[650px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#c54f3b]"></div>
        </div>

        <div className="image-item w-[100vw] h-full relative ">
          <div className="container absolute inset-0 flex flex-col md:flex-row justify-between py-2 xs:py-4 md:py-6">
            <div className="w-full h-full">
              <ServiceText
                title={ServiceData.socialServiceData.title}
                subTitle={ServiceData.socialServiceData.subTitle}
                text={ServiceData.socialServiceData.text}
              />
            </div>
            <div className=" w-full h-full">
              <ServiceLottie
                animation={socialThird}
                className="!p-2 xs:!p-5 xl:!p-6 !w-[300px] xs:!w-[400px] md:!w-[450px] xl:!w-[600px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#2d5fca]"></div>
        </div>

        <div className="image-item w-[100vw] h-full relative ">
          <div className="container absolute inset-0 flex flex-col md:flex-row justify-between py-2 xs:py-4 md:py-6">
            <div className="w-full h-full ">
              <ServiceText
                title={ServiceData.seoServiceData.title}
                subTitle={ServiceData.seoServiceData.subTitle}
                text={ServiceData.seoServiceData.text}
              />
            </div>
            <div className="w-full h-full">
              <ServiceLottie
                animation={seoMan}
                className="!p-2 xs:!p-5 xl:!p-5 !w-[250px] xs:!w-[350px] md:!w-[400px] xl:!w-[550px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#4d35d8]"></div>
        </div>

        <div className="image-item w-[100vw] h-full relative ">
          <div className="container absolute inset-0 flex flex-col md:flex-row justify-between py-2 xs:py-4 md:py-6 ">
            <div className="w-full h-full">
              <ServiceText
                title={ServiceData.creativeServiceData.title}
                subTitle={ServiceData.creativeServiceData.subTitle}
                text={ServiceData.creativeServiceData.text}
              />
            </div>
            <div className="w-full h-full">
              <ServiceLottie
                animation={twoCreative}
                className="!p-2 xs:!p-5 xl:!p-6 !w-[300px] xs:!w-[400px] md:!w-[450px] xl:!w-[600px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#d331c5]"></div>
        </div>
      </div>
      {/* <div className="w-screen h-screen bg-[#c54f3b]"></div> */}
    </section>
  );
};

export default ServicesPage;
