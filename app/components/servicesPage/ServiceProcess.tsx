"use client";

import CustomButton from "../botton/CustomButton";
import ServiceProcessList from "./ServiceProcessList";

const ServiceProcess = () => {
  return (
    <div className=" relative z-0">
      <div className=" w-full h-full flex flex-col gap-10 relative z-0">
        <div className=" w-[60%]">
          <h2 className=" text-[40px] font-extrabold">
            Let&apos;s Walk You Through Our Brand Design Process
          </h2>
          <p className=" text-[20px] ">
            The process of branding and design follows a certain chronological
            order.
          </p>
        </div>
        <div className=" w-full flex flex-row justify-between ">
          <CustomButton
            borderColor="#03EB64"
            buttonArrowColor="white"
            buttonBgColor="#03EB64"
            textColor="white"
            bottonText="Discover"
            isArrow={true}
            arrow={{
              rightArrow: true,
              color: "white",
              strokeWidth: "1px",
              className: "",
              size: 15,
            }}
          />
          <div>arrow</div>
        </div>
        <div>
          <ServiceProcessList />
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
