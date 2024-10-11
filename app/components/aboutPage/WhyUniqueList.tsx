interface WhyUniqueListProps {
  title: string;
  keyPoints: string[];
}

const WhyUniqueList: React.FC<WhyUniqueListProps> = ({ title, keyPoints }) => {
  return (
    <div className="w-[50%] h-full flex flex-col gap-2 justify-around ">
      <h2 className="text-[3rem] font-extrabold pr-[20%]">{title}</h2>
      <div className="">
        <div className="flex flex-col gap-6 pr-[10%]">
          {keyPoints.map((value, index) => (
            <div key={index} className="py-2 border-b-[1px] border-gray-200">
              <h3 className="text-[1.5rem] font-medium">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUniqueList;
