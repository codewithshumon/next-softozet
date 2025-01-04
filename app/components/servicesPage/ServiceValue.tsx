const ServiceValue = () => {
  return (
    <>
      <div className=" w-full h-full py-20 px-10 flex flex-col justify-between">
        <div className=" text-white text-center text-[30px]">
          <h2 className="graphikBold">Our Brand Design Success Stories</h2>
        </div>
        <div className="w-full flex flex-col gap-10 ">
          <div className="w-full h-[250px] gap-10 flex flex-row ">
            <div className=" w-[55%] h-full bg-[#FFFF00]">
              <div>60%</div>
              <div>Boosted 60% engagement for clients like you</div>
            </div>
            <div className=" w-[45%] h-full bg-[#5692fa]">
              <div>40%</div>
              <div>Whopping 40% increase in customer retention</div>
            </div>
          </div>
          <div className="w-full h-[250px] gap-10 flex flex-row ">
            <div className=" w-[45%] h-full bg-[#FFFFFF]">
              <div>2M</div>
              <div>Achieved 2M funding during seed investment</div>
            </div>
            <div className=" w-[55%] h-full bg-[#00DD3B]">
              <div>Kiddie</div>
              <div>Whopping 40% increase in customer retention</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceValue;
