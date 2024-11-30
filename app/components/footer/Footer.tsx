import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full z-[-2] relative  mt-[70vh]">
      <div className=" w-full h-[70vh] fixed  bg-green-400 bottom-0 left-0">
        <div className="container bg-red-500">
          <div className=" relative w-full h-full ">
            <a
              href="https://lottiefiles.com/page/license"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lottie Simple License
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
