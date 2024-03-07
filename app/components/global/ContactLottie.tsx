'use client';

import React from 'react';
import Lottie from 'lottie-react';

interface ContactLottieProps {
  animationData: any;
  className: string;
}

const LottieComponent: React.FC<ContactLottieProps> = ({
  animationData,
  className,
}) => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        className={`${className}`}
        loop={true}
      />
    </div>
  );
};

export default LottieComponent;
