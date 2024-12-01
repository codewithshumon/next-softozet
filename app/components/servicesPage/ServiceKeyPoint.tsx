interface ServiceKeyPointProps {
  items: string[];
}

const ServiceKeyPoint: React.FC<ServiceKeyPointProps> = ({ items }) => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex text-[16px] font-semibold flex-fow ">
        <ul className="w-[50%] h-full box-border pr-10 flex flex-col gap-3">
          {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
            <li
              key={`first-${index}`}
              className="py-2 border-b-[1px] border-[#a8a2a2]"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul className="w-[50%] h-full box-border pr-10 flex flex-col gap-3">
          {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
            <li
              key={`second-${index}`}
              className="py-2 border-b-[1px] border-[#a8a2a2]"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceKeyPoint;
