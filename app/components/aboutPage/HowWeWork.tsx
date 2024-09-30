import React from "react";

import development from "../../asset/other-svg/howWeWork/development.svg";
import planning from "../../asset/other-svg/howWeWork/planning.svg";
import maintanance from "../../asset/other-svg/howWeWork/maintanance.svg";
import service from "../../asset/other-svg/howWeWork/service.svg";
import strategy from "../../asset/other-svg/howWeWork/strategy.svg";
import userExperrionce from "../../asset/other-svg/howWeWork/userExperrionce.svg";

import OurProcessCard from "./OurProcessCard";
import OurProcessList from "./OurProcessList";

interface ServiceTextProps {
  title: string;
  subTitle: string;
  text: string;
}

const HowWeWork: React.FC<ServiceTextProps> = ({ title, subTitle, text }) => {
  const planningItems = [
    "Workshops",
    "Consulting",
    "Project Planning",
    "Concept",
    "Research",
    "Expectations Setting",
  ];

  const strategyItems = [
    "Persona Development",
    "Brand Personalization",
    "Prototyping",
    "Stakeholder Alignment",
    "Information Architecture",
    "Information Flow",
  ];

  const userExperienceItems = [
    "Art Direction",
    "Visual Moodboards",
    "Content Flow Design",
    "Digital Identity",
    "UI Design",
    "Interaction Design",
  ];

  const developmentItems = [
    "Website Development",
    "Front-End Development",
    "Mobile Development",
    "Optimization",
    "Physical Installations",
    "Back-End Development",
    "Platform Integration",
    "Deployment",
  ];

  const qualityItems = [
    "Usability Testing",
    "System Testing",
    "Security Testing",
    "Functionality Testing",
    "Performance Testing",
    "Integration Testing",
  ];

  const maintananceItems = [
    "Post Deployment Support",
    "Security",
    "On Demand Development",
    "Monthly Maintenance",
    "Performance Optimization",
    "Technical Consultancy",
  ];

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
            </div>
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <OurProcessList items={planningItems} />
              </div>
              <div className=" w-full h-full">
                <OurProcessCard
                  title="Research & Planning"
                  image={planning}
                  text="After partnering with us, you will meet our UX and
                    technology experts who will dig into your business, discuss
                    the scope of the challenge, and offer the most suitable
                    technological solutions as per your requirement."
                />
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className=" w-full h-[90vh] flex flex-col gap-5 items-center justify-center ">
              <div className=" w-full h-[70%] bg-yellow-300 rounded-md border-[1px] border-[#171718]hover: border-[#22C55E]"></div>
            </div>
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <OurProcessCard
                  title="Research & Planning"
                  image={strategy}
                  text="After partnering with us, you will meet our UX and
                    technology experts who will dig into your business, discuss
                    the scope of the challenge, and offer the most suitable
                    technological solutions as per your requirement."
                />
              </div>
              <div className=" w-full h-full">
                <OurProcessList items={strategyItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
