'use client';

import Lottie from 'lottie-react';

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
