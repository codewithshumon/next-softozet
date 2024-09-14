import React from "react";

const CompanyDetails = () => {
  return (
    <div className="container flex flex-col py-20">
      <div className=" w-full h-full flex items-center justify-center ">
        <div className="w-[90%] flex flex-col items-center justify-center text-white my-20">
          <h2 className="w-full text-center text-[25px] xs:text-[35px] md:text-[55px] xl:text-[100px] font-extrabold">
            SOFTOZET LIMITED
          </h2>
          <span className="text-[#7D7D82] w-full text-center text-[25px] xs:text-[35px] md:text-[55px] xl:text-[70px] font-bold leading-[30px] xs:leading-[50px] md:leading-[80px]">
            Empowering Growth Through Dedication & Innovation
          </span>
        </div>
      </div>

      <div className=" w-full h-full flex flex-col items-center">
        <div className="w-[80%] flex flex-col items-center gap-20 text-[#8F8F92] text-[25px]">
          <p className="">
            At SOFTOZET Limited, {new Date().getFullYear() - 2020} years back
            our journey is fired by passion. The secret to our innovation and
            success? It&apos;s the fusion of relentless dedication, a heart that
            beats for design, development, and Marketing. We are an innovative
            360° digital marketing and software design & development company
            based in Bangladesh.
          </p>
          <p>
            With a dedicated team of experts in web development, Softozet
            Limited is committed to delivering quick and high-quality solutions
            tailored to the specific needs of our clients. Our team stays
            up-to-date with the latest industry trends and technologies,
            ensuring that our services are always in line with current best
            practices.
          </p>
          <p>
            At Softozet Limited, we pride ourselves on our dedication to
            excellence and our innovative approach to web development. Our
            commitment to ethical practices, clear communication, and reliable
            results has been the foundation of our success, fostering lasting
            relationships with our clients and driving continuous growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
