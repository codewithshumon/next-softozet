interface WhyUniqueListProps {
  title: string;
  keyPoints: string[];
}

const WhyUniqueList: React.FC<WhyUniqueListProps> = ({ title, keyPoints }) => {
  return (
    <div className="w-[50%] h-full flex flex-col gap-5 justify-around ">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className=" p-8">
        <div className="flex flex-col gap-6">
          {keyPoints.map((value, index) => (
            <div key={index} className="py-2 border-b-[1px] border-gray-200">
              <h3 className="text-lg font-medium">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUniqueList;
