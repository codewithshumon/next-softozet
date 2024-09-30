import Image from "next/image";
import React from "react";

import development from "../../asset/other-svg/howWeWork/development.svg";

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const HowWeWork: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  return (
    <div className=" h-full w-full">
      <div className=" w-full h-full flex flex-col">
        <div className=" w-full h-[50%] bg-[#f0f0f3] py-10">
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
        <div className="w-full h-full flex flex-col py-[4%] px-3 gap-5 bg-[#f0f0f3]">
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
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <div className="w-[50%] h-[100%] ">
                  <div className=" w-[120%] h-full bg-white">
                    <ul className=" w-full h-full py-20 px-16 flex flex-col gap-3">
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Workshops</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Consulting</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Project Planning</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Concept</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Research</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Expectations Setting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" w-full h-full">
                <div className="w-[50%] h-[100%] bg-red-500">
                  <div>
                    <div>
                      <Image src={development} alt="development" />
                    </div>
                    <h2>Research & Planning</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <div className="w-[50%] h-[100%] bg-red-500">
                  <div>
                    <div>
                      <Image src={development} alt="development" />
                    </div>
                    <h2>Research & Planning</h2>
                  </div>
                </div>
              </div>
              <div className=" w-full h-full">
                <div className="w-[50%] h-[100%] ">
                  <div className=" w-[120%] h-full bg-white">
                    <ul className=" w-full h-full py-20 px-16 flex flex-col gap-3">
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Workshops</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Consulting</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Project Planning</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Concept</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Research</span>
                      </li>
                      <li className="py-2 border-b-[1px] border-gray-200">
                        <span>Expectations Setting</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
