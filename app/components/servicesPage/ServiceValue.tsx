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
              <div className=" w-full h-full flex items-center px-10">
                <div className="flex flex-col">
                  <div className=" text-[50px] font-extrabold">60%</div>
                  <div className=" text-[20px] font-bold text-[#585858]">
                    Boosted 60% engagement for clients like you
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[45%] h-full bg-[#5692fa]">
              <div className=" w-full h-full flex items-center px-10">
                <div className="flex flex-col">
                  <div className=" text-[50px] font-extrabold">40%</div>
                  <div className=" text-[20px] font-bold text-[#585858]">
                    Whopping 40% increase in customer retention
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[250px] gap-10 flex flex-row ">
            <div className=" w-[45%] h-full bg-[#FFFFFF]">
              <div className=" w-full h-full flex items-center px-10">
                <div className="flex flex-col">
                  <div className=" text-[50px] font-extrabold">2M</div>
                  <div className=" text-[20px] font-bold text-[#585858]">
                    Achieved 2M funding during seed investment
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[55%] h-full bg-[#00DD3B]">
              <div className=" w-full h-full flex items-center px-10">
                <div className="flex flex-col">
                  <div className=" text-[50px] font-extrabold">Kiddie</div>
                  <div className=" text-[20px] font-bold text-[#585858]">
                    Whopping 40% increase in customer retention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceValue;
