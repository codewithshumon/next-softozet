import React from "react";

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const HowWeWork: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  return (
    <div className=" h-screen w-full">
      <div className=" w-full h-full flex flex-col">
        <div className=" w-full h-[50%] bg-white">
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
        <div className=" w-full h-[50%] flex flex-row">
          <div className="w-[50%] h-full bg-blue-400">
            <div>img</div>
            <div>
              <p>Project kickoff</p>
            </div>
          </div>
          <div className="w-[50%] h-full bg-red-400">
            <div>img</div>
            <div>
              <p>Project kickoff</p>
            </div>
          </div>
          <div className="w-[50%] h-full bg-red-400">
            <div>img</div>
            <div>
              <p>Project kickoff</p>
            </div>
          </div>
          <div className="w-[50%] h-full bg-red-400">
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
