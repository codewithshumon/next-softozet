import CustomButton from "../botton/CustomButton";
import ServiceKeyPoint from "./ServiceKeyPoint";

interface SingleServiceProps {
  items: string[];
  title: string;
  text: string;
  flexClass: string;
}

const SingleService: React.FC<SingleServiceProps> = ({
  items,
  title,
  text,
  flexClass,
}) => {
  return (
    <div className=" relative w-full h-full py-5 z-0">
      <div className={`relative w-full h-[100vh] ${flexClass} `}>
        <div className="w-[50%] h-full p-10 flex items-center justify-center ">
          <div className=" w-[300px] h-[200px] bg-blue-500"></div>
        </div>
        <div className="w-[50%] h-full flex flex-col py-20 px-5 gap-10 ">
          <div>
            <div className=" w-full pb-5">
              <h2 className=" text-[50px] font-extrabold leading-none">
                {title}
              </h2>
            </div>
            <div className=" w-full">
              <p className="text-[18px] text-[#363434]">{text}</p>
            </div>
          </div>
          <div className=" w-full">
            <ServiceKeyPoint items={items} />
          </div>
          <div className=" w-full h-full">
            <CustomButton
              borderColor="#03EB64"
              buttonArrowColor="white"
              buttonBgColor="#03EB64"
              textColor="#000000"
              bottonText="Discover More"
              isArrow={true}
              arrow={{
                rightArrow: true,
                color: "#000000",
                strokeWidth: "1px",
                className: "",
                size: 15,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
