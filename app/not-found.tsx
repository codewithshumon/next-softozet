'use client';

import React from 'react';
import Lottie from 'lottie-react';
import pageNotFound from '@/public/page-not-found.json';

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-primaryDarkcolor !overflow-hidden">
      <div className="container flex items-center justify-center ">
        <Lottie
          animationData={pageNotFound}
          loop={true}
          className="!w-[600px]  md:!w-[1050px] "
        />
      </div>
    </div>
  );
};

export default NotFound;
