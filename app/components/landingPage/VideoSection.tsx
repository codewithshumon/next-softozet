"use client";

import dynamic from "next/dynamic";
// Dynamically import Lottie to ensure it's only loaded on the client side
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import {
  webSingleMan,
  webSmall,
  mobileFirst,
  mobileSecond,
  girlMobile,
  socialFirst,
  socialSecond,
  socialThird,
  groupSeo,
  seoMan,
  seoRanking,
  graphiDesk,
  manDesk,
  twoCreative,
} from "./../../../public/svg-animations";

const VideoSection = () => {
  return (
    <div className="w-full h-screen container bg-black">
      <Lottie animationData={manDesk} loop={true} className="w-full h-full" />
    </div>
  );
};

export default VideoSection;
