import ServiceLottie from "@/app/components/servicesPage/ServiceLottie";

import {
  webSingleMan,
  girlMobile,
  socialSecond,
  seoRanking,
  manDesk,
} from "@/public/svg-animations";

const OurServices = () => {
  return (
    <div className=" w-full h-full mt-[20%]">
      <div className="w-full h-full px-[5%]">
        <div className=" w-full h-full flex flex-col gap-[10%]">
          <div className="w-full flex flex-row justify-between gap-[50px]">
            <div className="w-full h-[500px] sevice-border ">
              <div>
                <ServiceLottie
                  animation={webSingleMan}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[450px]"
                />
              </div>
            </div>
            <div className="w-full h-[500px] sevice-border ">
              <div>
                <ServiceLottie
                  animation={girlMobile}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[450px]"
                />
              </div>
            </div>
            <div className="w-full h-[500px] sevice-border ">
              <div>
                <ServiceLottie
                  animation={manDesk}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[450px]"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between gap-[50px]">
            <div className="w-full h-[500px] sevice-border">
              {" "}
              <div className="w-full h-[500px] sevice-border ">
                <div>
                  <ServiceLottie
                    animation={seoRanking}
                    className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[450px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-[500px] mt-[10%] sevice-border"></div>
            <div className="w-full h-[500px] mt-[20%] sevice-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
