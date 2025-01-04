"use client";

import ServiceFaqList from "./ServiceFaqList";
import { useState } from "react";

const ServiceFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Keeps track of the open FAQ index

  const toggleTriangle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close for the clicked FAQ
  };

  return (
    <div className="w-full h-full px-10 py-20">
      <div className="w-full text-center text-[50px] font-extrabold">
        <h2>FREAKQ</h2>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-[70%] h-full flex flex-col gap-5">
          <ServiceFaqList
            title="Is it necessary for me to test my app?"
            text="We have an in-house testing team that will work with the developers to validate the device. Your feedback is very important to ensure the best quality for the app."
            index={0}
            isUp={openIndex === 0}
            toggleTriangle={toggleTriangle}
          />
          <ServiceFaqList
            title="Do you offer support after release?"
            text="Yes, we provide support after release to ensure the app runs smoothly and address any issues."
            index={1}
            isUp={openIndex === 1}
            toggleTriangle={toggleTriangle}
          />
          <ServiceFaqList
            title="How long will the development take?"
            text="The development time depends on the project scope, but we will provide you with a timeline based on your requirements."
            index={2}
            isUp={openIndex === 2}
            toggleTriangle={toggleTriangle}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;
