import React from "react";

const page = () => {
  return (
    <div>
      <div className="container bg-[#302f2f] ">
        <div className=" w-full h-[100vh] flex flex-col px-10 pt-[20vh] gap-5">
          <div>
            <h1 className="text-[80px] font-extrabold text-white">
              Brand Design & Consulting Services
            </h1>
          </div>
          <div>
            <p className="text-[15px] font-extrabold text-[#9c9898]">
              Is your brand failing to make an impact? Don&apos;t let poor
              design hold you back. Without professional brand design,
              you&apos;re leaving money on the table. We craft unique brand
              designs that capture attention, build trust, and turn browsers
              into buyers.
            </p>
          </div>
          <div className="text-[40px] w-fit px-5 py-3 bg-yellow-400 rounded-full font-bold">
            <div>Let’s Craft Your Brand!</div>
          </div>
        </div>
      </div>

      <div className="container bg-[#d3cece] ">
        <div className=" w-full h-[100vh] flex flex-row px-10 py-10 gap-5">
          <div className="w-[60%] flex items-center justify-center">
            <div className="w-[400px] h-[300px] bg-blue-400"></div>
          </div>
          <div className="w-[40%] flex flex-col items-center justify-center">
            <div className=" flex flex-col">
              <div>
                <h2>Design Speaks Louder Than Words</h2>
              </div>
              <div>
                <p>
                  Your brand&apos;s design speaks before you do. 80% of
                  consumers recognize a brand just by its design & color! We use
                  color psychology to design your brand to be memorable.
                </p>
              </div>
              <div>
                <span>Create Your Brand Identity!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-[#d3cece] ">
        <div className=" w-full h-[100vh] flex flex-row px-10 py-10 gap-5">
          <div className="w-[60%] flex items-center justify-center">
            <div className="w-[400px] h-[300px] bg-blue-400"></div>
          </div>
          <div className="w-[40%] flex flex-col items-center justify-center">
            <div className=" flex flex-col">
              <div>
                <h2>Design Speaks Louder Than Words</h2>
              </div>
              <div>
                <p>
                  Your brand&apos;s design speaks before you do. 80% of
                  consumers recognize a brand just by its design & color! We use
                  color psychology to design your brand to be memorable.
                </p>
              </div>
              <div>
                <span>Create Your Brand Identity!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
