interface ServiceKeyPointProps {
  items: string[];
}

const ServiceKeyPoint: React.FC<ServiceKeyPointProps> = ({ items }) => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex ">
        <ul className="w-[50%] h-full py-20 px-8 box-border flex flex-col gap-3">
          {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
            <li
              key={`first-${index}`}
              className="py-2 border-b-[1px] border-gray-200"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul className="w-[50%] h-full py-20 px-8 box-border flex flex-col gap-3">
          {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
            <li
              key={`second-${index}`}
              className="py-2 border-b-[1px] border-gray-200"
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
