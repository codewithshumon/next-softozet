'use client';

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

import web from '@/public/svg-animations/web/web-animation.json';
import mobile from '@/public/svg-animations/mobile/mobile-first.json';
import social from '@/public/svg-animations/social/social-first.json';
import seo from '@/public/svg-animations/seo/group-seo.json';
import creative from '@/public/svg-animations/creative/gaphic-desk.json';

import LandingText from './LandingText';
import styles from './LandingSections.module.css';

const LandingSections = () => {
  const [animationIn, setAnimationIn] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setAnimationIn(true);

    const animationTimeout = setTimeout(() => {
      setAnimationIn(false);
      if (count < 5) {
        setCount(count + 1);
      } else {
        setCount(1);
      }
    }, 6000);

    return () => clearTimeout(animationTimeout);
  }, [count]);

  return (
    <div className=" w-full">
      <div className="w-full h-screen overflow-hidden select-none">
        <div className="w-full h-full container flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-around md:justify-between ">
          <section className={`w-full sm:h-[4/2]`}>
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
          </section>

          <section className=" w-full h-[4/3] flex items-center justify-center">
            <div className="w-full h-[2/1]">
              <div
                className={`${
                  animationIn ? styles.animateRight : 'opacity-0'
                } pt-[5%] `}
              >
                {count === 1 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieContainer} `}
                  >
                    <Lottie
                      animationData={web}
                      loop={true}
                      height={500}
                      width={500}
                    />
                  </div>
                )}
              </div>
              <div
                className={`${
                  animationIn ? styles.animateRight : 'opacity-0'
                } `}
              >
                {count === 2 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieContainer} mt-[10%]`}
                  >
                    <Lottie animationData={mobile} loop={true} />
                  </div>
                )}
              </div>
              <div
                className={`${
                  animationIn ? styles.animateRight : 'opacity-0'
                } `}
              >
                {count === 3 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieBigContainer}`}
                  >
                    <Lottie animationData={social} loop={true} />
                  </div>
                )}
              </div>
              <div
                className={`${
                  animationIn ? styles.animateRight : 'opacity-0'
                } `}
              >
                {count === 4 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieContainer} mt-[10%]`}
                  >
                    <Lottie animationData={seo} loop={true} />
                  </div>
                )}
              </div>
              <div
                className={`${
                  animationIn ? styles.animateRight : 'opacity-0'
                } `}
              >
                {count === 5 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieBigContainer} mt-[10%]`}
                  >
                    <Lottie animationData={creative} loop={true} />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingSections;
