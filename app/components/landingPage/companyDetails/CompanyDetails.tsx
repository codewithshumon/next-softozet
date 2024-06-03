"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CountUp from "react-countup";

import SvgLogo from "../../global/SvgLogo";

import useScrollY from "@/app/hooks/useScroll";
const CompanyDetails = () => {
  const [counter, setCounter] = useState(false);
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
        onEnter: () => {},
        onLeave: () => {},
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".companyDetailsCounter", {
      scrollTrigger: {
        trigger: ".companyDetailsCounter",
        scrub: 0.25,
        start: "top bottom",
        onEnter: () => {
          setCounter(true);
        },
        onEnterBack: () => {
          setCounter(true);
        },
        onLeaveBack: () => {
          setCounter(false);
        },
        onLeave: () => {
          setCounter(false);
        },
        onRefresh: () => {
          setCounter(true);
        },
      },
    });
  }, [counter]);

  return (
    <>
      <div
        ref={slider}
        className=" container w-[100%] h-fit text-[140px] mt-[5%] select-none scrollIdentyfire"
      >
        <div className="relative whitespace-nowrap w-fit flex flex-row items-center ">
          {/* two same div with must be same as px */}
          <div
            ref={firstText}
            className="w-[1500px] pr-[10px] flex flex-row items-center gap-[3%] m-0"
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
                  <div>
                    Worldwide business marketing company from Bangladesh
                  </div>
                </div>
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>
                    Reaching out your brand to ever edge of the target market
                  </div>
                </div>
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>
                    Reaching New Markets with your business product and service
                  </div>
                </div>
              </div>
              <div className=" w-full h-full flex flex-col gap-5">
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>
                    Revolutionizing with State-of-the-Art Solutions and
                    Technologies
                  </div>
                </div>
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>
                    Strategies to drive innovation and reach business goal
                  </div>
                </div>
                <div className=" w-full flex flex-row items-center gap-3 ">
                  <div className=" w-5 h-5 border-2 p-2 border-[#03EB64] rounded-full"></div>
                  <div>Driving Growth with Data-Driven Marketing Solutions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-start justify-center">
            <div className="companyDetailsCounter grid grid-cols-2 gap-5 mt-[15%] text-white">
              <div className="w-[180px] h-[180px] border border-[#03EB64] rounded-tl-3xl">
                <div className=" w-full h-full flex flex-col items-center justify-center">
                  {counter && (
                    <div className="flex items-center justify-center text-[28px] font-bold">
                      <CountUp
                        className=""
                        start={0}
                        end={6}
                        duration={4}
                        delay={0}
                      />
                      <span>+</span>
                    </div>
                  )}
                  <div>
                    <span className="text-[16px] font-bold">
                      Years of Experience
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[180px] h-[180px] border border-[#03EB64] rounded-tr-3xl">
                <div className=" w-full h-full flex flex-col items-center justify-center">
                  {counter && (
                    <div className="flex items-center justify-center text-[28px] font-bold">
                      <CountUp
                        className=""
                        start={0}
                        end={274}
                        duration={4}
                        delay={0}
                      />
                      <span>+</span>
                    </div>
                  )}

                  <div>
                    <span className="text-[16px] font-bold">
                      Successful Projects
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[180px] h-[180px] border border-[#03EB64] rounded-bl-3xl">
                <div className=" w-full h-full flex flex-col items-center justify-center">
                  {counter && (
                    <div className="flex items-center justify-center text-[28px] font-bold">
                      <CountUp
                        className=""
                        start={0}
                        end={185}
                        duration={4}
                        delay={0}
                      />
                      <span>+</span>
                    </div>
                  )}

                  <div>
                    <span className="text-[16px] font-bold">
                      Business partners
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[180px] h-[180px] border border-[#03EB64] rounded-br-3xl">
                <div className=" w-full h-full flex flex-col items-center justify-center">
                  {counter && (
                    <div className="flex items-center justify-center text-[28px] font-bold">
                      <CountUp
                        className=""
                        start={0}
                        end={65}
                        duration={4}
                        delay={0}
                      />
                      <span>+</span>
                    </div>
                  )}

                  <div>
                    <span className="text-[16px] font-bold">Employees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
