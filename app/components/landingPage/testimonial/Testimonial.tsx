"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

import { Testimonials } from "@/app/constant/testimonials";
import { barbaraTojo } from "@/app/asset/testimonials";

const Testimonial = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(".dragItem", {
      type: "x",
      // bounds: "#dragContainer",
    });
  }, []);

  return (
    <div id="dragContainer" className="container w-full h-full">
      <div className="dragItem w-full h-[30vh] flex flex-row gap-[20px]">
        <div id="" className=" w-full h-full">
          <div className=" w-[300px] h-[100px] bg-red-600">
            <div className=" ">
              <Image
                src={barbaraTojo}
                alt="barbara Tojo"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div>
              <h1>Full Name</h1>
              <span></span>
            </div>
          </div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className=" w-[300px] h-full bg-red-600"></div>
          <div className=" w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className=" w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
