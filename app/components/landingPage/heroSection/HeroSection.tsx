"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import {
  webFirst,
  mobileFirst,
  socialFirst,
  groupSeo,
  graphiDesk,
  callCenter,
} from "@/public/svg-animations";

import LandingText from "./HeroText";
import styles from "./HeroSection.module.css";

// Dynamically import Lottie to ensure it's only loaded on the client side
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const LandingSections = () => {
  const [animationIn, setAnimationIn] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setAnimationIn(true);

    const animationTimeout = setTimeout(() => {
      setAnimationIn(false);
      if (count < 6) {
        setCount(count + 1);
      } else {
        setCount(1);
      }
    }, 6000);

    return () => clearTimeout(animationTimeout);
  }, [count]);

  return (
    <div className="w-full mt-[2%]">
      {/* landing screen section */}
      <div className="w-full h-screen overflow-hidden select-none">
        <div className="w-full h-full container flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-around md:justify-between ">
          <section className={`w-full h-full flex items-center justify-center`}>
            {count === 1 && (
              <div className="">
                <LandingText
                  title="WEB APPLICATION"
                  titleFocus="DEVELOPMENT"
                  boldTextStart="Unlock "
                  firstLine="the potential of your business online"
                  secondLine="with our expert Web Application Development"
                  thirdLine="Services. tailored to elevate your digital"
                  fouthLine="presence and drive growth."
                />
              </div>
            )}
            {count === 2 && (
              <div className="">
                <LandingText
                  title="MOBILE APPLICATION"
                  titleFocus="DEVELOPMENT"
                  boldTextStart="Transform "
                  firstLine="your vision into reality with our"
                  secondLine="expert Mobile App Development services,"
                  thirdLine="delivering seamless user experiences"
                  fouthLine="and unmatched functionality."
                />
              </div>
            )}
            {count === 3 && (
              <div className="">
                <LandingText
                  title="SOCIAL MEDIA"
                  titleFocus="MARKETING"
                  boldTextStart="Maximize "
                  firstLine="your online reach & engagement with"
                  secondLine="our strategic Social Media Marketing services,"
                  thirdLine="tailored to elevate your brand's visibility and"
                  fouthLine="drive meaningful interactions with your audience."
                />
              </div>
            )}
            {count === 4 && (
              <div className="">
                <LandingText
                  title="SEARCH ENGINE"
                  titleFocus="OPTIMIZATION"
                  boldTextStart="Dominate "
                  firstLine="search engine results and drive organic"
                  secondLine="traffic with our expert Search Engine Optimization"
                  thirdLine="services, tailored to elevate your website's ranking"
                  fouthLine="and maximize your digital presence."
                />
              </div>
            )}
            {count === 5 && (
              <div className="">
                <LandingText
                  title="CREATIVE CONTENT"
                  titleFocus="DESIGN"
                  boldTextStart="Elevate "
                  firstLine="your brand presence with our innovative"
                  secondLine="Content Design Solutions, blending creativity"
                  thirdLine="and strategy to deliver engaging experiences"
                  fouthLine="that leave a lasting impression."
                />
              </div>
            )}
            {count === 6 && (
              <div className="">
                <LandingText
                  title="24/7 CALL CENTER"
                  titleFocus="SERVICE"
                  boldTextStart="Enhance"
                  firstLine="your brand's customer Support and Sales."
                  secondLine="Our experienced Call Center Professionals."
                  thirdLine="Provide 24/7 exceptional customer experiences that"
                  fouthLine="leave a lasting impression and generate more sales."
                />
              </div>
            )}
          </section>

          <section className=" w-full h-full ">
            <div className="w-full h-full flex items-center justify-center">
              <div
                className={`${
                  animationIn ? styles.animateRight : "opacity-0"
                } `}
              >
                {count === 1 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieContainer} `}
                  >
                    <Lottie
                      animationData={webFirst}
                      loop={true}
                      className="!w-[300px] xs:!w-[400px] md:!w-[600px]"
                    />
                  </div>
                )}
              </div>
              <div
                className={`${
                  animationIn ? styles.animateRight : "opacity-0"
                } `}
              >
                {count === 2 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieContainer} `}
                  >
                    <Lottie
                      animationData={mobileFirst}
                      loop={true}
                      className="!w-[250px] xs:!w-[350px] md:!w-[500px]"
                    />
                  </div>
                )}
              </div>
              <div
                className={`${
                  animationIn ? styles.animateRight : "opacity-0"
                } `}
              >
                {count === 3 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieBigContainer} `}
                  >
                    <Lottie
                      animationData={socialFirst}
                      loop={true}
                      className="!w-[250px] xs:!w-[350px] md:!w-[550px]"
                    />
                  </div>
                )}
              </div>
              <div
                className={`${
                  animationIn ? styles.animateRight : "opacity-0"
                } `}
              >
                {count === 4 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieContainer}`}
                  >
                    <Lottie
                      animationData={groupSeo}
                      loop={true}
                      className="!w-[250px] xs:!w-[350px] md:!w-[550px]"
                    />
                  </div>
                )}
              </div>
              <div
                className={`${
                  animationIn ? styles.animateRight : "opacity-0"
                } `}
              >
                {count === 5 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieBigContainer} `}
                  >
                    <Lottie
                      animationData={graphiDesk}
                      loop={true}
                      className="!w-[250px] xs:!w-[350px] md:!w-[450px]"
                    />
                  </div>
                )}
              </div>

              <div
                className={`${
                  animationIn ? styles.animateRight : "opacity-0"
                } `}
              >
                {count === 6 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieBigContainer} `}
                  >
                    <Lottie
                      animationData={callCenter}
                      loop={true}
                      className="!w-[250px] xs:!w-[350px] md:!w-[550px]"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* landing screen section */}
    </div>
  );
};

export default LandingSections;
