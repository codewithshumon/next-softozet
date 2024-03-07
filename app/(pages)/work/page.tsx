'use client';

import Lottie from 'lottie-react';
import pageConstruction from '@/public/page-construction.json';

const WorkPage = () => {
  return (
    <div className="w-full h-screen relative bg-primaryDarkcolor !overflow-hidden">
      <div className="container flex flex-col items-center justify-center ">
        <Lottie
          animationData={pageConstruction}
          loop={true}
          className="!w-[300px] xs:!w-[400px]   md:!w-[600px] !pb-5 md:!pb-10 "
        />
        <p className=" absolute bottom-20 xs:bottom-10 md:bottom-5 text-[15px] xs:text-[20px] md:text-[25px] xl:text-[30px] text-white font-bold">
          THIS PAGE IS UNDER CONSTRUCTION
        </p>
      </div>
    </div>
  );
};

export default WorkPage;
