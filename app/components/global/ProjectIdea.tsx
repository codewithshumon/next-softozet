import { useState } from "react";
import Button from "./Button";

const ProjectIdea = () => {
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
    <form className="w-full h-full flex flex-col items-center text-white font-semibold md:font-bold ">
      <div className=" w-[90%] xs:w-full h-full flex flex-col space-y-2 ">
        <div className="w-full h-full flex flex-col gap-2">
          <label htmlFor="email" className="">
            Full Name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInpurChange}
            placeholder="Ex. John Doe"
            className=" text-gray-700 py-2 px-4 rounded-full outline-emerald-500"
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
            className=" text-gray-700 py-2 px-4 rounded-full outline-emerald-500"
            required
          />
        </div>
        <div className=" w-full flex flex-col md:flex-row gap-2 xs:gap-5 ">
          <div className="w-full md:w-[150%] h-full flex flex-col gap-2">
            <label htmlFor="email" className="">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInpurChange}
              placeholder="name@example.com"
              className=" text-gray-700 py-2 px-4 rounded-full outline-emerald-500"
            />
          </div>

          <div className="w-full h-full flex flex-col gap-2">
            <label htmlFor="email" className="">
              Phone Number*
            </label>
            <input
              type="number"
              name="number"
              value={formData.number === 0 ? "" : formData.number}
              onChange={handleInpurChange}
              placeholder="+1 XXXXXXXXXX"
              className=" text-gray-700 py-2 px-4 rounded-full outline-emerald-500"
              required
            />
          </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row gap-2 xs:gap-5 ">
          <div className="w-full md:w-[150%] h-full flex flex-col gap-2 ">
            <label htmlFor="email" className="">
              Service required*
            </label>
            <select
              name="name"
              value={formData.name}
              onChange={handleInpurChange}
              className=" text-gray-700 py-2 px-4 rounded-full outline-emerald-500"
              required
            >
              <option value="">Select Your Service</option>
              <option value="male">UI/UX Design </option>
              <option value="female">Web App Design & Development</option>
              <option value="female">Mobile App Design & Development</option>
              <option value="female">Custom Software Development</option>
              <option value="female">Search Engine Optimization</option>
              <option value="female">Social Media Marketing</option>
              <option value="female">Creative Content Design</option>
              <option value="female">Video Editing</option>
              <option value="other">Telemarketing/Appointment Setting</option>
            </select>
          </div>

          <div className="w-full h-full flex flex-col gap-2">
            <label htmlFor="email" className="">
              Project budget*
            </label>
            <input
              type="text"
              name="number"
              value={formData.number === 0 ? "" : formData.number}
              onChange={handleInpurChange}
              placeholder="Ex. $10K - $20K"
              className=" text-gray-700 py-2 px-4 rounded-full outline-emerald-500"
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
            className="text-gray-700  py-2 px-4 rounded-2xl outline-emerald-500"
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
  );
};

export default ProjectIdea;
