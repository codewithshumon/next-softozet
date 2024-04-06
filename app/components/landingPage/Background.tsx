import Blob from "../global/Blob";
import SvgLogo from "../global/SvgLogo";

const Background = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <SvgLogo height={900} width={900} spinLogo />
      </div>

      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-[#E200F5] mt-20 w-full h-[4/3] rounded-[100%] "></div>
      </div>
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-[#cf41fa] mt-20 w-[200vw] h-screen rounded-[100%] "></div>
      </div>
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        {/* <Blob /> */}
        <div className="bg-[#3de9a7] mt-20 w-[200vw] h-screen rounded-[100%]"></div>
      </div>
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <div className=" mt-20 w-[100vw] h-[600px] ">
          {/* <Blob /> */}
          <div className="bg-[#cf41fa] h-screen"></div>
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-[#03eb64] mt-20 w-[600px] h-[600px] rounded-[100%] "></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-blur w-full h-full"></div>
    </div>
  );
};

export default Background;
