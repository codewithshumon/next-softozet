import React from "react";

import development from "../../asset/other-svg/howWeWork/development.svg";
import planning from "../../asset/other-svg/howWeWork/planning.svg";
import maintanance from "../../asset/other-svg/howWeWork/maintanance.svg";
import security from "../../asset/other-svg/howWeWork/security2.svg";
import strategy from "../../asset/other-svg/howWeWork/strategy.svg";
import userExperience from "../../asset/other-svg/howWeWork/userExperience.svg";

import OurProcessCard from "./OurProcessCard";
import OurProcessList from "./OurProcessList";

const HowWeWork = () => {
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

  const securityItems = [
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
              <div className=" w-full h-[70%] bg-[#000000]"></div>
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
              <div className=" w-full h-[70%] bg-[#445FB5]"></div>
            </div>
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <OurProcessCard
                  title="Strategy"
                  image={strategy}
                  text="Once we get aligned with your idea, we start validating your future users and defining the project backbone. It consists of a working plan in which your business goals are met with unparalleled solutions."
                />
              </div>
              <div className=" w-full h-full">
                <OurProcessList items={strategyItems} />
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className=" w-full h-[90vh] flex flex-col gap-5 items-center justify-center ">
              <div className=" w-full h-[70%] bg-[#F7C7E6]"></div>
            </div>
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <OurProcessList items={userExperienceItems} />
              </div>
              <div className=" w-full h-full">
                <OurProcessCard
                  title="User Experience"
                  image={userExperience}
                  text="The users are the foundation on which we build all of the visual communication. We make every platform intuitive, attractive, and easy to operate. We also ensure an impressive experience in the interaction between you and your users."
                />
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className=" w-full h-[90vh] flex flex-col gap-5 items-center justify-center ">
              <div className=" w-full h-[70%] bg-[#8BBAE8]"></div>
            </div>
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <OurProcessCard
                  title="Development"
                  image={development}
                  text="Our code crafters plan for progressive solutions placed on the right platforms to enhance your business's user experience. They focus on building top-quality and high-performing custom solutions that are easily scalable."
                />
              </div>
              <div className=" w-full h-full">
                <OurProcessList items={developmentItems} />
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className=" w-full h-[90vh] flex flex-col gap-5 items-center justify-center ">
              <div className=" w-full h-[70%] bg-[#3A4BA7]"></div>
            </div>
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <OurProcessList items={securityItems} />
              </div>
              <div className=" w-full h-full">
                <OurProcessCard
                  title="Quality Assurance"
                  image={security}
                  text="The big moment our testers shine in is when we produce a specific part of the project that needs a true user experience. We conduct a variety of tests throughout each phase to ensure your users' true satisfaction."
                />
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className=" w-full h-[90vh] flex flex-col gap-5 items-center justify-center ">
              <div className=" w-full h-[70%] bg-[#F0A04A]"></div>
            </div>
            <div className="w-full h-[90vh] flex flex-row gap-10 mt-[-50vh] ml-[5vw] ">
              <div className=" w-full h-full">
                <OurProcessCard
                  title="Maintenance Support"
                  image={maintanance}
                  text="Our devoted technical support team is responsible for providing globally acclaimed website maintenance support so that you continuously get appealing experiences from your online presence throughout its whole existence."
                />
              </div>
              <div className=" w-full h-full">
                <OurProcessList items={maintananceItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
