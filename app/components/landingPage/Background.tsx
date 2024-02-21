import Blob from '../global/Blob';
import SvgLogo from '../global/SvgLogo';

const Background = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-[900px] flex items-center justify-center overflow-hidden">
        <SvgLogo height={1000} width={1000} spinLogo />
      </div>

      <div className="w-full h-[900px] flex items-center justify-center overflow-hidden">
        <div className="bg-[#E200F5] mt-20 w-screen h-screen rounded-[100%] "></div>
      </div>
      <div className="w-full h-[900px] flex items-center justify-center overflow-hidden">
        <div className="bg-[#d5c303] mt-20 w-screen h-screen rounded-[100%] "></div>
        d
      </div>
      <div className="flex items-center justify-center overflow-hidden">
        <div className=" mt-20 w-[600px] h-[600px] rounded-[100%] ">
          <Blob />
        </div>
      </div>
      <div className="flex items-center justify-center overflow-hidden">
        <div className="bg-[#03eb64] mt-20 w-[600px] h-[600px] rounded-[100%] "></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-blur w-full h-full"></div>
    </div>
  );
};

export default Background;
