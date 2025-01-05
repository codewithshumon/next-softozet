"use client";
import { useState, useRef, useEffect } from "react";

interface ServiceFaqListProps {
  title: string;
  text: string;
  index: number;
  isUp: boolean;
  toggleTriangle: (index: number) => void;
}

const ServiceFaqList: React.FC<ServiceFaqListProps> = ({
  title,
  text,
  index,
  isUp,
  toggleTriangle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isUp && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isUp]);

  return (
    <div className="w-full bg-[#ffffff] p-4 rounded-md">
      <div
        className="flex justify-between items-center cursor-pointer triangle-hover"
        onClick={() => toggleTriangle(index)}
      >
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className={`triangle ${isUp ? "up" : "down"}`}></div>
      </div>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef}>
          {isUp ? <p className="pt-5">{text}</p> : <></>}
        </div>
      </div>
    </div>
  );
};

export default ServiceFaqList;
