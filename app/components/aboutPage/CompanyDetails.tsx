import { useEffect, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const CompanyDetails = () => {
  const [counter, setCounter] = useState(false);
  const companyAge = new Date().getFullYear() - 2018;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".details-counter", {
      scrollTrigger: {
        trigger: ".details-counter",
        scrub: 0.25,
        start: "top bottom",
        onEnter: () => {
          setCounter(true);
        },
        onEnterBack: () => {
          setCounter(true);
        },
        onLeaveBack: () => {
          setCounter(false);
        },
        onLeave: () => {
          setCounter(false);
        },
        onRefresh: () => {
          setCounter(true);
        },
      },
    });
  }, [counter]);

  return (
    <div className=" w-full h-[130vh] py-16 ">
      <div className="container flex flex-row">
        <div className=" w-[60%] h-full flex flex-col gap-10">
          <div className=" w-full h-full flex  justify-center">
            <div className="w-[90%] flex flex-col items-center justify-center text-white">
              <h2 className="w-full text-center text-[25px] xs:text-[35px] md:text-[2rempx] xl:text-[40px] font-extrabold">
                SOFTOZET LIMITED
              </h2>
              <span className="text-[#7D7D82] w-[85%] text-center text-[25px] xs:text-[35px] md:text-[55px] xl:text-[36px] font-bold leading-[30px] xs:leading-[30px] md:leading-[40px]">
                Empowering Business Growth Through Dedication & Innovation
              </span>
            </div>
          </div>

          <div className=" w-full h-full flex justify-center">
            <div className="w-[80%] flex flex-col gap-5 text-[#8F8F92] text-[18px]">
              <p className="">
                At SOFTOZET Limited, {new Date().getFullYear() - 2018} years
                back our journey is fired by passion. The secret to our
                innovation and success? It&apos;s the fusion of relentless
                dedication, a heart that beats for design, development, and
                Marketing. We are an innovative 360° digital marketing and
                software design & development company based in Bangladesh.
              </p>
              <p>
                With a dedicated team of experts in web development, Softozet
                Limited is committed to delivering quick and high-quality
                solutions tailored to the specific needs of our clients. Our
                team stays up-to-date with the latest industry trends and
                technologies, ensuring that our services are always in line with
                current best practices.
              </p>
              <p>
                At Softozet Limited, we pride ourselves on our dedication to
                excellence and our innovative approach to web development. Our
                commitment to ethical practices, clear communication, and
                reliable results has been the foundation of our success,
                fostering lasting relationships with our clients and driving
                continuous growth.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[40%] h-full">
          <div className="w-full h-full flex items-center justify-center   ">
            <div className=" w-[80%] h-[70%]  bg-blue-500 px-[10%] py-[12%] ">
              <div className=" w-full h-full flex flex-col justify-between uppercase text-white gap-5 ">
                <div>
                  <h4 className="text-[14px] font-extrabold">Why us</h4>
                </div>
                <div className=" space-y-[-5px]">
                  <p className=" text-[18px]  font-extralight ">We Carry</p>
                  <p className=" text-[26px] font-extrabold ">
                    A Dedicated Team
                  </p>
                  <p className=" text-[18px]  font-extralight ">Worth of</p>
                  <p className=" text-[26px] font-extrabold ">Experience</p>
                </div>

                <div className=" flex flex-row items-center gap-3">
                  <div className=" relative w-[30px] h-[30px] rounded-full  border border-[#ffffff] flex items-center justify-center">
                    {/* <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#000000] mt-4"></div> */}

                    <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#ffffff]"></div>
                  </div>
                  <p>watch video</p>
                </div>

                <div className="details-counter flex flex-row ">
                  <div className=" w-full h-full flex flex-col items-center justify-center">
                    {counter && (
                      <div className=" text-[24px] flex items-center justify-center font-bold">
                        <CountUp
                          className=""
                          start={0}
                          end={companyAge}
                          duration={4}
                          delay={0}
                        />
                        <span>+</span>
                      </div>
                    )}

                    <div className=" w-full flex flex-col text-center">
                      <span className="text-[14px] font-bold">Years of</span>
                      <span className="text-[14px] font-bold">Experience</span>
                    </div>
                  </div>
                  <div className=" w-full h-full flex flex-col items-center justify-center">
                    {counter && (
                      <div className=" text-[24px]  flex items-center justify-center font-bold">
                        <CountUp
                          className=""
                          start={0}
                          end={350}
                          duration={4}
                          delay={0}
                        />
                        <span>+</span>
                      </div>
                    )}

                    <div className=" w-full flex flex-col text-center">
                      <span className="text-[14px] font-bold">Total</span>
                      <span className="text-[14px] font-bold">Clients</span>
                    </div>
                  </div>
                  <div className=" w-full h-full flex flex-col items-center justify-center">
                    {counter && (
                      <div className=" text-[24px]  flex items-center justify-center font-bold">
                        <CountUp
                          className=""
                          start={0}
                          end={450}
                          duration={4}
                          delay={0}
                        />
                        <span>+</span>
                      </div>
                    )}

                    <div className=" w-full flex flex-col text-center">
                      <span className="text-[14px] font-bold">Projects</span>
                      <span className="text-[14px] font-bold">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
