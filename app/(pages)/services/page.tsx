import ServiceLottie from '@/app/components/services/ServiceLottie';
import ServiceText from '@/app/components/services/ServiceText';

import {
  webSingleMan,
  webSmall,
  mobileSecond,
  girlMobile,
  socialSecond,
  socialThird,
  seoMan,
  seoRanking,
  manDesk,
  twoCreative,
} from '@/public/svg-animations';

const ServicesPage = () => {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full flex flex-row xl:flex-col items-center">
        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" w-screen h-screen">
              <ServiceText
                title="WEB APPLICATION DEVELOPMENT"
                subTitle=""
                text=""
              />
            </div>
            <div className=" w-screen h-screen">
              <ServiceLottie animation={webSmall} className="!w-[400px]" />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#114231]"></div>
        </div>

        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" w-screen h-screen">
              <ServiceText
                title="WEB APPLICATION DEVELOPMENT"
                subTitle=""
                text=""
              />
            </div>
            <div className=" w-screen h-screen">
              <ServiceLottie animation={mobileSecond} className="!w-[400px]" />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#2dbb89]"></div>
        </div>

        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" w-screen h-screen">
              <ServiceText
                title="WEB APPLICATION DEVELOPMENT"
                subTitle=""
                text=""
              />
            </div>
            <div className=" w-screen h-screen">
              <ServiceLottie animation={socialThird} className="!w-[400px]" />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#2d5fca]"></div>
        </div>

        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" w-screen h-screen">
              <ServiceText
                title="WEB APPLICATION DEVELOPMENT"
                subTitle=""
                text=""
              />
            </div>
            <div className=" w-screen h-screen">
              <ServiceLottie animation={seoMan} className="!w-[400px]" />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#4d35d8]"></div>
        </div>

        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" w-screen h-screen">
              <ServiceText
                title="WEB APPLICATION DEVELOPMENT"
                subTitle=""
                text=""
              />
            </div>
            <div className=" w-screen h-screen">
              <ServiceLottie animation={twoCreative} className="!w-[400px]" />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#d331c5]"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
