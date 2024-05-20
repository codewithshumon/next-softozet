"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import SvgLogo from "../../global/SvgLogo";

import useScrollY from "@/app/hooks/useScroll";
const CompanyDetails = () => {
  const scrollY = useScrollY();
  const scrollRef = useRef(scrollY);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1; //scrollRef.current < scrollY ? -1 : 1;

  useEffect(() => {
    scrollRef.current = scrollY;
  }, [scrollY]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: ".scrollIdentyfire",
        scrub: 0.25,
        start: 0,
        // end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    };
    requestAnimationFrame(animate);
  }, [direction]);

  return (
    <>
      <div
        ref={slider}
        className="w-[100%] h-fit text-[140px] mt-[5%] select-none scrollIdentyfire"
      >
        <div className="relative whitespace-nowrap w-fit flex flex-row items-center ">
          {/* two same div with must be same as px */}
          <div
            ref={firstText}
            className="w-[1500px] pr-[10px] flex flex-row items-center gap-[3%] m-0"
            // className={`${
            //   scrollRef.current < scrollY
            //     ? "companyNameRightToLeft"
            //     : "companyNameLeftToRight"
            // } w-[1500px] pr-[10px] flex flex-row items-center gap-[3%] m-0`}
          >
            <div
              className={`${
                scrollRef.current < scrollY ? "logoSapinLeft" : "logoSapinRigh"
              }`}
            >
              <SvgLogo width={60} height={60} />
            </div>
            <h1 className="text-[#e2e1dd] font-extrabold">SOFTOZET LIMITED</h1>
          </div>
          <div
            ref={secondText}
            className="absolute w-[1500px] left-[100%] flex flex-row items-center gap-[3%] m-0"
            // className={`${
            //   scrollRef.current < scrollY
            //     ? "companyNameRightToLeft"
            //     : "companyNameLeftToRight"
            // } absolute w-[1500px] left-[100%] flex flex-row items-center gap-[3%] m-0`}
          >
            <div
              className={`${
                scrollRef.current < scrollY ? "logoSapinLeft" : "logoSapinRigh"
              }`}
            >
              <SvgLogo width={60} height={60} />
            </div>
            <h1 className="text-[#e2e1dd] font-extrabold">SOFTOZET LIMITED</h1>
          </div>
        </div>
      </div>
      <div className="container w-full h-full mt-[5%]">
        <div className="w-full h-screen flex flex-row gap-5 pl-[5%]">
          <div className="w-1/2 h-full text-white flex flex-col gap-[15%]">
            <h1 className="text-[20px] font-bold">
              SOFTOZET LIMITED has been consistent in introducing end-to-end
              business marketing solution & technologies
            </h1>
            <div className=" w-full h-full flex flex-row gap-3 text-[16px]">
              <div className=" w-full h-full flex flex-col gap-5">
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>Worldwide marketing compnay from Bangladesh</div>
                </div>
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>Worldwide marketing compnay from Bangladesh</div>
                </div>
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>Worldwide marketing compnay from Bangladesh</div>
                </div>
              </div>
              <div className=" w-full h-full flex flex-col gap-5">
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>Worldwide marketing compnay from Bangladesh</div>
                </div>
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>Worldwide marketing compnay from Bangladesh</div>
                </div>
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>Worldwide marketing compnay from Bangladesh</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-start justify-center">
            <div className="grid grid-cols-2 gap-5 mt-[15%]">
              <div className="w-[150px] h-[150px] border border-[#03EB64] rounded-tl-3xl"></div>
              <div className="w-[150px] h-[150px] border border-[#03EB64] rounded-tr-3xl"></div>
              <div className="w-[150px] h-[150px] border border-[#03EB64] rounded-bl-3xl"></div>
              <div className="w-[150px] h-[150px] border border-[#03EB64] rounded-br-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
