'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

import web from '@/public/svg-animations/web/web-animation.json';
import mobile from '@/public/svg-animations/mobile/mobile-first.json';
import social from '@/public/svg-animations/social/social-first.json';
import seo from '@/public/svg-animations/seo/group-seo.json';
import creative from '@/public/svg-animations/creative/gaphic-desk.json';

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
        <div className="w-full h-full container flex items-center justify-between">
          <section
            className={`animationOut ${
              animationIn ? styles.animateLeft : 'opacity-0'
            }`}
          >
            <div className="text-[100px] translate-x-[-200%] font-bold text-white">
              <Link href={'/'}>Shumon Khan</Link>
            </div>
          </section>
          <section>
            <div
              className={`${animationIn ? styles.animateRight : 'opacity-0'}`}
            >
              {count === 1 && (
                <div className={`${styles.rightInOut}`}>
                  <Lottie animationData={web} loop={true} />
                </div>
              )}
            </div>
            <div
              className={`${animationIn ? styles.animateRight : 'opacity-0'}`}
            >
              {count === 2 && (
                <div className={`${styles.rightInOut}`}>
                  <Lottie animationData={mobile} loop={true} />
                </div>
              )}
            </div>
            <div
              className={`${animationIn ? styles.animateRight : 'opacity-0'}`}
            >
              {count === 3 && (
                <div className={`${styles.rightInOut}`}>
                  <Lottie animationData={social} loop={true} />
                </div>
              )}
            </div>
            <div
              className={`${animationIn ? styles.animateRight : 'opacity-0'}`}
            >
              {count === 4 && (
                <div className={`${styles.rightInOut}`}>
                  <Lottie animationData={seo} loop={true} />
                </div>
              )}
            </div>
            <div
              className={`${animationIn ? styles.animateRight : 'opacity-0'}`}
            >
              {count === 5 && (
                <div className={`${styles.rightInOut}`}>
                  <Lottie animationData={creative} loop={true} />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingSections;
