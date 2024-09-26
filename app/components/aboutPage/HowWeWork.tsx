import Image from "next/image";
import React from "react";

import projectKickoff from "../../asset/other-images/howWeWork/project-kickoff.png";

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const HowWeWork: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  return (
    <div className=" h-full w-full">
      <div className=" w-full h-full flex flex-col">
        <div className=" w-full h-[50%] bg-white py-10">
          <div className=" w-full h-full flex flex-row">
            <div className="w-[50%] h-full ">
              <div className="text-[#000000] text-[5em] flex flex-col font-extrabold">
                <span>How</span>
                <span className="text-[#97979B]">We Work</span>
              </div>
            </div>
            <div className="w-[50%] h-full">
              <p>
                Our process is simple. We start with your needs, create engaging
                experiences, research, experiment with ideas, and use your
                feedback to guide us.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col py-[4%] px-3 gap-5 bg-white">
          <div className="w-full h-full flex flex-col">
            <div className=" w-full h-[90vh] flex flex-col gap-5 items-center justify-center ">
              <div className=" w-full h-[70%] bg-yellow-300 rounded-md border-[1px] border-[#171718]hover: border-[#22C55E]"></div>
              <div className=" w-[30%]  ">
                {/* <Image
                  src={}
                  alt="Project kickoff image"
                  className="h-[100%]"
                /> */}
              </div>
            </div>
            <div className="w-full h-[60vh] flex flex-row gap-10">
              <div className=" w-full h-full">
                <div className="w-[50%] h-[80%] bg-green-500"></div>
              </div>
              <div className=" w-full h-full">
                <div className="w-[50%] h-[80%] bg-red-500"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-red-400">
            <div>img</div>
            <div>
              <p>Project kickoff</p>
            </div>
          </div>
          <div className="w-full h-full bg-red-400">
            <div>img</div>
            <div>
              <p>Project kickoff</p>
            </div>
          </div>
          <div className="w-full h-full bg-red-400">
            <div>img</div>
            <div>
              <p>Project kickoff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
