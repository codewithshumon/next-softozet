'use client';

import Link from 'next/link';
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
    }, 4000);

    return () => clearTimeout(animationTimeout);
  }, [count]);

  return (
    <div className="">
      <div className="w-full h-[900px] overflow-hidden">
        <div className="w-full h-full container flex flex-row gap-5">
          <section
            className={`animationOut ${
              animationIn ? styles.animateLeft : 'opacity-0'
            } flex items-center justify-center`}
          >
            {count === 1 && (
              <div className="text-[100px] translate-x-[-200%] font-bold text-white">
                <LandingText title="WEB APPLICATION DEVELOPMENT" />
              </div>
            )}
            {count === 2 && (
              <div className="text-[100px] translate-x-[-200%] font-bold text-white">
                <LandingText title="MOBILE APPLICATION DEVELOPMENT" />
              </div>
            )}
            {count === 3 && (
              <div className="text-[100px] translate-x-[-200%] font-bold text-white">
                <LandingText title="SOCIAL MEDIA MARKETING" />
              </div>
            )}
            {count === 4 && (
              <div className="text-[100px] translate-x-[-200%] font-bold text-white">
                <LandingText title="SEARCH ENGINE OPTIMIZATION" />
              </div>
            )}
            {count === 5 && (
              <div className="text-[100px] translate-x-[-200%] font-bold text-white">
                <LandingText title="CREATIVE CONTENT DESIGN" />
              </div>
            )}
          </section>

          <section className=" w-full h-full flex items-center justify-center">
            <div className="w-[700px] h-[700px]">
              <div
                className={`${
                  animationIn ? styles.animateRight : 'opacity-0'
                } `}
              >
                {count === 1 && (
                  <div
                    className={`${styles.rightInOut} ${styles.lottieContainer} `}
                  >
                    <Lottie animationData={web} loop={true} />
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
                    className={`${styles.rightInOut} ${styles.lottieContainer}`}
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
                    className={`${styles.rightInOut} ${styles.lottieContainer} mt-[10%]`}
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
                    className={`${styles.rightInOut} ${styles.lottieContainer} mt-[20%]`}
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
                    className={`${styles.rightInOut} ${styles.lottieContainer} `}
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
