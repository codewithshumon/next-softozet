"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

import { Testimonials } from "@/app/constant/testimonials";
import {
  barbaraTojo,
  mikeBradley,
  cassionCasPaton,
  michaelNajar,
  joanneCrevoiserat,
  juddSampson,
} from "@/app/asset/testimonials";

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
          <div className=" w-[450px] h-[100px] bg-red-600">
            <div className=" ">
              <Image
                src={barbaraTojo}
                alt="barbara Tojo"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div className=" flex flex-col">
              <h1>{Testimonials.barbaraTojo.name}</h1>
              <div className=" flex flex-row gap-1">
                <span>{Testimonials.barbaraTojo.title}</span>
                <span>@</span>
                <span>{Testimonials.barbaraTojo.company}</span>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[200px] bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className=" w-[450px] h-[100px] bg-red-600">
            <div className=" ">
              <Image
                src={mikeBradley}
                alt="barbara Tojo"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div className=" flex flex-col">
              <h1>{Testimonials.mikeBradley.name}</h1>
              <div className=" flex flex-row gap-1">
                <span>{Testimonials.mikeBradley.title}</span>
                <span>@</span>
                <span>{Testimonials.mikeBradley.company}</span>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[200px] bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className=" w-[450px] h-[100px] bg-red-600">
            <div className=" ">
              <Image
                src={michaelNajar}
                alt="barbara Tojo"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div className=" flex flex-col">
              <h1>{Testimonials.michaelNajar.name}</h1>
              <div className=" flex flex-row gap-1">
                <span>{Testimonials.michaelNajar.title}</span>
                <span>@</span>
                <span>{Testimonials.michaelNajar.company}</span>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[200px] bg-green-400"></div>
        </div>
        <div id="" className=" w-full h-full">
          <div className=" w-[450px] h-[100px] bg-red-600">
            <div className=" ">
              <Image
                src={cassionCasPaton}
                alt="barbara Tojo"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div className=" flex flex-col">
              <h1>{Testimonials.cassionCasPaton.name}</h1>
              <div className=" flex flex-row gap-1">
                <span>{Testimonials.cassionCasPaton.title}</span>
                <span>@</span>
                <span>{Testimonials.cassionCasPaton.company}</span>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[200px] bg-green-400"></div>
        </div>

        <div id="" className=" w-full h-full">
          <div className=" w-[450px] h-[100px] bg-red-600">
            <div className=" ">
              <Image
                src={joanneCrevoiserat}
                alt="barbara Tojo"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div className=" flex flex-col">
              <h1>{Testimonials.joanneCrevoiserat.name}</h1>
              <div className=" flex flex-row gap-1">
                <span>{Testimonials.joanneCrevoiserat.title}</span>
                <span>@</span>
                <span>{Testimonials.joanneCrevoiserat.company}</span>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[200px] bg-green-400"></div>
        </div>

        <div id="" className=" w-full h-full">
          <div className=" w-[450px] h-[100px] bg-red-600">
            <div className=" ">
              <Image
                src={juddSampson}
                alt="barbara Tojo"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div className=" flex flex-col">
              <h1>{Testimonials.juddSampson.name}</h1>
              <div className=" flex flex-row gap-1">
                <span>{Testimonials.juddSampson.title}</span>
                <span>@</span>
                <span>{Testimonials.juddSampson.company}</span>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[200px] bg-green-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
