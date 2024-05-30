"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const Testimonial = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(".dragItem", {
      type: "y",
      bounds: "#dragContainer",
    });
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(Draggable);

  //   Draggable.create(".dragItem", {
  //     type: "y",
  //     bounds: "dragContainer",
  //     // inertia: true,
  //     // onClick: function () {
  //     //   console.log("clicked");
  //     // },
  //     // onDragEnd: function () {
  //     //   console.log("drag ended");
  //     // },
  //   });
  // }, []);

  return (
    <div id="dragContainer" className="container w-full h-full">
      <div className=" w-full h-[30vh] flex flex-row gap-[20px]">
        <div id="dragItem" className="dragItem w-full h-full">
          <div className=" w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className=" w-[300px] h-full bg-red-600"></div>
          <div className=" w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className=" w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
        <div id="dragItem" className="dragItem w-full h-full">
          <div className="w-[300px] h-full bg-red-600"></div>
          <div className="w-[300px] h-full bg-green-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
