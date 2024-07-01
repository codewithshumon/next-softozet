"use client";

import { useState } from "react";

import conatactLottie from "@/public/contact-lottie.json";
import emailSendLottie from "@/public/email-sending.json";
import rightMarkLottie from "@/public/right-mark.json";

import LottieComponent from "@/app/components/global/ContactLottie";
import Button from "@/app/components/global/Button";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [showEmailSend, setShowEmailSend] = useState(false);
  const [showRightMard, setShowRightMard] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: 0,
    message: "",
  });

  const handleInpurChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setShowEmailSend(true);
    try {
      await Promise.all([
        new Promise<void>((resolve) => {
          setTimeout(() => {
            console.log("2000 timeout");
            setShowEmailSend(false);
            setShowRightMard(true);
            console.log("2000 timeout after emailSend");
            resolve();
          }, 2000);

          setTimeout(() => {
            console.log("5000 timeout");
            setLoading(false);
            setShowEmailSend(false);
            setShowRightMard(false);
            resolve();
          }, 5000);
        }),
      ]);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className=" w-full h-full bg-yellowColor">
      <div className="container flex flex-col ">
        <div className="mt-[25%] md:mt-[10%]">
          <h1 className="text-[40px] md:text-[100px] font-extrabold leading-none">
            Let’s work
          </h1>
          <p className="text-white text-[30px] md:text-[100px] font-bold mt-[-10px] md:mt-[-20px]">
            <span className="text-[#97979B] leading-none px-5">—</span>
            together.
          </p>
        </div>
        <div className="w-full h-full md:h-screen relative  md:!overflow-hidden py-10 md:py-0">
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-around ">
            <div className=" hidden md:block">
              <LottieComponent
                animationData={conatactLottie}
                className="!w-[250px] xs:!w-[350px] xl:!w-[400px]"
              />
            </div>
            {!loading && !showEmailSend && !showRightMard && (
              <div className="">
                <form className="w-full h-full flex flex-col items-center text-white font-semibold md:font-bold ">
                  <div className=" w-full h-full flex flex-col space-y-2 ">
                    <div className="w-full h-full flex flex-col gap-2">
                      <label htmlFor="email" className="">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInpurChange}
                        placeholder="Ex. John Doe"
                        className="py-1 px-2 text-gray-700 md:py-2 md:px-4 rounded-full outline-emerald-500"
                        required
                      />
                    </div>
                    <div className="w-full h-full flex flex-col gap-2 ">
                      <label htmlFor="email" className="">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInpurChange}
                        placeholder="Ex. Tesla Inc."
                        className="py-1 px-2 text-gray-700 md:py-2 md:px-4 rounded-full outline-emerald-500"
                        required
                      />
                    </div>
                    <div className=" w-full flex flex-col xs:flex-row gap-2 xs:gap-5 ">
                      <div className="w-full h-full flex flex-col gap-2">
                        <label htmlFor="email" className="">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInpurChange}
                          placeholder="name@example.com"
                          className="py-1 px-2 text-gray-700 md:py-2 md:px-4 rounded-full outline-emerald-500"
                        />
                      </div>

                      <div className="w-full h-full flex flex-col gap-2">
                        <label htmlFor="email" className="">
                          Phone Number *
                        </label>
                        <input
                          type="number"
                          name="number"
                          value={formData.number === 0 ? "" : formData.number}
                          onChange={handleInpurChange}
                          placeholder="+1 XXXXXXXXXX"
                          className="py-1 px-2 text-gray-700 md:py-2 md:px-4 rounded-full outline-emerald-500"
                          required
                        />
                      </div>
                    </div>
                    <div className=" w-full flex flex-col xs:flex-row gap-2 xs:gap-5 ">
                      <div className="w-full h-full flex flex-col gap-2 ">
                        <label htmlFor="email" className="">
                          Service required*
                        </label>
                        <select
                          name="name"
                          value={formData.name}
                          onChange={handleInpurChange}
                          className="py-1 px-2 text-gray-700 md:py-2 md:px-4 rounded-full outline-emerald-500"
                          required
                        >
                          <option value="">select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="w-full h-full flex flex-col gap-2">
                        <label htmlFor="email" className="">
                          Project budget*
                        </label>
                        <input
                          type="number"
                          name="number"
                          value={formData.number === 0 ? "" : formData.number}
                          onChange={handleInpurChange}
                          placeholder="Ex. $10K - $20K"
                          className="py-1 px-2 text-gray-700 md:py-2 md:px-4 rounded-full outline-emerald-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-2">
                      <label htmlFor="message" className="">
                        Project Details*
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInpurChange}
                        rows={5}
                        id="message"
                        placeholder="Tell us more about your idea...."
                        className="text-gray-700 py-1 px-2 md:py-2 md:px-4 rounded-2xl outline-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div
                    onClick={handleSubmit}
                    className="mt-5  text-[16px] xs:text-[20px] md:text-[26px] font-[600] rounded-full bg-black  text-white text-center cursor-pointer"
                  >
                    <Button
                      disabled={loading}
                      type="submit"
                      title="Send inquiry"
                      className="px-10 py-3 select-none"
                    />
                  </div>
                </form>
              </div>
            )}

            {loading && showEmailSend && (
              <div>
                <LottieComponent
                  animationData={emailSendLottie}
                  className="!w-[500px]"
                />
              </div>
            )}

            {loading && showRightMard && (
              <div>
                <LottieComponent
                  animationData={rightMarkLottie}
                  className="!w-[500px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
