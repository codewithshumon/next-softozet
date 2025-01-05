import React from "react";
import ServiceProcessCard from "./ServiceProcessCard";

const ServiceProcessList = () => {
  return (
    <>
      <div
        className="  h-full  flex flex-row gap-7"
        style={{ width: `${(1 / 4) * 6 * 100}%` }}
      >
        <div className="">
          <ServiceProcessCard
            title="Identifying your target audience"
            text="We Identify the target customers for your brand through research on demographics, behaviors, and preferences."
          />
        </div>
        <div className="">
          <ServiceProcessCard
            title="Identifying your target audience"
            text="We Identify the target customers for your brand through research on demographics, behaviors, and preferences."
          />
        </div>
        <div className="">
          <ServiceProcessCard
            title="Identifying your target audience"
            text="We Identify the target customers for your brand through research on demographics, behaviors, and preferences."
          />
        </div>
        <div className="">
          <ServiceProcessCard
            title="Identifying your target audience"
            text="We Identify the target customers for your brand through research on demographics, behaviors, and preferences."
          />
        </div>
        <div className="">
          <ServiceProcessCard
            title="Identifying your target audience"
            text="We Identify the target customers for your brand through research on demographics, behaviors, and preferences."
          />
        </div>
        <div className="">
          <ServiceProcessCard
            title="Identifying your target audience"
            text="We Identify the target customers for your brand through research on demographics, behaviors, and preferences."
          />
        </div>
      </div>
    </>
  );
};

export default ServiceProcessList;
