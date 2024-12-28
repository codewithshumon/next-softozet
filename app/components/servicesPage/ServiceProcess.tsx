"use client";

import CustomButton from "../botton/CustomButton";

const ServiceProcess = () => {
  return (
    <div className=" relative z-0">
      <div>
        <h2>Let&apos;s Walk You Through Our Brand Design Process</h2>
        <p>
          The process of branding and design follows a certain chronological
          order.
        </p>
        <div className=" ">
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
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
