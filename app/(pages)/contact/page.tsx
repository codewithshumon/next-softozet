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
    <div className="w-full h-full md:h-screen relative bg-primaryDarkcolor md:!overflow-hidden py-10 md:py-0">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-around ">
        <div className="">
          <LottieComponent
            animationData={conatactLottie}
            className="!w-[250px] xs:!w-[350px] xl:!w-[400px]"
          />
        </div>
        {!loading && !showEmailSend && !showRightMard && (
          <div className="">
            <form className="w-full h-full flex flex-col items-center text-white font-semibold md:font-bold ">
              <div className=" w-full h-full flex flex-col space-y-2 ">
                <div className=" w-full flex flex-col xs:flex-row gap-2 xs:gap-5 ">
                  <div className="w-full h-full flex flex-col gap-2 ">
                    <label htmlFor="email" className="">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInpurChange}
                      placeholder="Full Name"
                      className="py-1 px-2 text-gray-700 md:py-2 md:px-4 rounded-full outline-emerald-500"
                      required
                    />
                  </div>

                  <div className="w-full h-full flex flex-col gap-2">
                    <label htmlFor="email" className="">
                      Your Phone Number
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
                <div className="w-full h-full flex flex-col gap-2">
                  <label htmlFor="email" className="">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInpurChange}
                    placeholder="example@gmail.com"
                    className="py-1 px-2 text-gray-700 md:py-2 md:px-4 rounded-full outline-emerald-500"
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label htmlFor="message" className="">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInpurChange}
                    rows={5}
                    id="message"
                    placeholder="Write your message here...."
                    className="text-gray-700 py-1 px-2 md:py-2 md:px-4 rounded-2xl outline-emerald-500"
                    required
                  />
                </div>
              </div>

              <div
                onClick={handleSubmit}
                className="mt-5  text-[16px] xs:text-[20px] md:text-[26px] leading-7 font-[600] border-[3px] border-solid botton-gradient text-white text-center cursor-pointer"
              >
                <Button
                  disabled={loading}
                  type="submit"
                  title="SUBMIT"
                  className="px-2 py-[1px] select-none"
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
  );
};

export default ContactPage;
