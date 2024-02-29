'use client';

import Lottie from 'lottie-react';

interface LandingServiceLottieProps {
  animation: any;
  className: string;
}

const LandingServiceLottie: React.FC<LandingServiceLottieProps> = ({
  animation,
  className,
}) => {
  return (
    <div>
      <Lottie animationData={animation} loop={true} className={className} />
    </div>
  );
};

export default LandingServiceLottie;
