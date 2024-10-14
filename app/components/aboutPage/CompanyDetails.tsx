import React from "react";

const CompanyDetails = () => {
  return (
    <div className=" w-full h-[120vh] py-20 ">
      <div className="container flex flex-row">
        <div className=" w-[60%] h-full flex flex-col gap-10">
          <div className=" w-full h-full flex  justify-center  ">
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
          <div className="w-full h-full flex items-center justify-center bg0">
            <div className=" w-[70%] h-[500px]  bg-blue-500">
              <div>
                <h4 className=" uppercase">Why us</h4>
              </div>

              <div className=" w-[150px] h-[150px] rounded-full  border border-[#000000] flex items-center justify-center">
                {/* <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#000000] mt-4"></div> */}

                <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[20px] border-t-transparent border-b-transparent border-l-[#000000]"></div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
