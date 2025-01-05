import ProjectIdea from "@/app/components/global/ProjectIdea";
import ServiceFaq from "@/app/components/servicesPage/ServiceFaq";
import ServiceList from "@/app/components/servicesPage/ServiceList";
import ServiceProcess from "@/app/components/servicesPage/ServiceProcess";
import ServiceValue from "@/app/components/servicesPage/ServiceValue";

const page = () => {
  return (
    <>
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
        <div className=" w-full h-[100vh] flex flex-row-reverse px-10 py-10 gap-5">
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

      <div className="container bg-[#d3cece]  ">
        <ServiceList />
      </div>

      <div className="container bg-[#d3cece] ">
        <div className=" w-full h-[100vh]">
          <ServiceProcess />
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

      <div className="container bg-[#000000] ">
        <div className=" w-full h-[140vh]">
          <ServiceValue />
        </div>
      </div>

      <div className="container bg-[#d3cece] ">
        <div className=" w-full h-[100vh] flex flex-row-reverse px-10 py-10 gap-5">
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
        <div className=" w-full h-full">
          <ServiceFaq />
        </div>
      </div>

      <div className=" w-full h-full bg-purpleColor">
        <div className="container flex flex-col xl:flex-row py-10 md:py-20">
          <div className=" w-full xl:w-[50%] h-full">
            <h1 className=" py-10 w-[90%] text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] xl:text-[5rem] text-white font-extrabold">
              Have a Project Idea?
            </h1>
          </div>
          <div className=" w-full xl:w-[50%] h-full">
            <ProjectIdea />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
