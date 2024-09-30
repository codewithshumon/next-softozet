import React from "react";

interface OurProcessListProps {
  items: string[];
}

const OurProcessList: React.FC<OurProcessListProps> = ({ items }) => {
  return (
    <div className="w-[50%] h-[100%]">
      <div className="w-[120%] h-full bg-white">
        <ul className="w-full h-full py-20 px-16 flex flex-col gap-3">
          {items.map((item, index) => (
            <li key={index} className="py-2 border-b-[1px] border-gray-200">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurProcessList;
