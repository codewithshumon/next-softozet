import Link from "next/link";
import ServiceLottie from "@/app/components/servicesPage/ServiceLottie";

import {
  webSingleMan,
  girlMobile,
  socialSecond,
  seoRanking,
  manDesk,
  singleBoyCall,
} from "@/public/svg-animations";

const OurServices = () => {
  return (
    <div className=" w-full h-full mt-[20%]">
      <div className="w-full h-full px-[5%]">
        <div className=" w-full h-full flex flex-col gap-[10%]">
          <div className="w-full flex flex-col md:flex-row justify-between gap-[50px]">
            <div className="w-full h-[500px] sevice-border mt-[10%] ">
              <div>
                <ServiceLottie
                  animation={webSingleMan}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div>
                <div>
                  <h1>WEB APPLICATION DEVELOPMENT</h1>
                  <p>
                    Design and Develop custom website for your Brand/Business
                  </p>
                </div>
                <div>
                  <Link href="/services/web">
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-[500px] sevice-border mt-[20%]  ">
              <div>
                <ServiceLottie
                  animation={girlMobile}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div>
                <div>
                  <h1>WEB APPLICATION DEVELOPMENT</h1>
                  <p>
                    Design and Develop custom website for your Brand/Business
                  </p>
                </div>
                <div>
                  <Link href="/services/web">
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-[500px] sevice-border mt-[30%] ">
              <div>
                <ServiceLottie
                  animation={socialSecond}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div>
                <div>
                  <h1>WEB APPLICATION DEVELOPMENT</h1>
                  <p>
                    Design and Develop custom website for your Brand/Business
                  </p>
                </div>
                <div>
                  <Link href="/services/web">
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between gap-[50px]">
            <div className="w-full h-[500px] mt-[10%] sevice-border">
              <div>
                <ServiceLottie
                  animation={seoRanking}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div>
                <div>
                  <h1>WEB APPLICATION DEVELOPMENT</h1>
                  <p>
                    Design and Develop custom website for your Brand/Business
                  </p>
                </div>
                <div>
                  <Link href="/services/web">
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-[500px] mt-[20%] sevice-border">
              <div>
                <ServiceLottie
                  animation={manDesk}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div>
                <div>
                  <h1>WEB APPLICATION DEVELOPMENT</h1>
                  <p>
                    Design and Develop custom website for your Brand/Business
                  </p>
                </div>
                <div>
                  <Link href="/services/web">
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-[500px] mt-[30%] sevice-border">
              <div>
                <ServiceLottie
                  animation={singleBoyCall}
                  className="!p-2 xs:!p-5 xl:!p-6 !w-[50px] xs:!w-[100px] md:!w-[150px] xl:!w-[350px]"
                />
              </div>
              <div>
                <div>
                  <h1>WEB APPLICATION DEVELOPMENT</h1>
                  <p>
                    Design and Develop custom website for your Brand/Business
                  </p>
                </div>
                <div>
                  <Link href="/services/web">
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
