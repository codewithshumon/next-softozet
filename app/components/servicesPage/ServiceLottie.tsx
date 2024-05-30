"use client";

import dynamic from "next/dynamic";
// Dynamically import Lottie to ensure it's only loaded on the client side
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

interface ServiceLottieProps {
  animation: any;
  className: string;
}

const ServiceLottie: React.FC<ServiceLottieProps> = ({
  animation,
  className,
}) => {
  return (
    <div className=" w-full h-full flex items-center justify-center ">
      <Lottie animationData={animation} loop={true} className={className} />
    </div>
  );
};

export default ServiceLottie;
