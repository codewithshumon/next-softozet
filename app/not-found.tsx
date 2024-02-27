'use client';

import React from 'react';
import Lottie from 'lottie-react';
import pageNotFound from '@/public/page-not-found.json';

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-primaryDarkcolor overflow-hidden ">
      <div className="container relative not-found ">
        <Lottie animationData={pageNotFound} loop={true} />
      </div>
    </div>
  );
};

export default NotFound;
