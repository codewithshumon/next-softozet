import ServiceLottie from '@/app/components/services/ServiceLottie';
import ServiceText from '@/app/components/services/ServiceText';
import { ServiceData } from '@/app/constant/serviceData';

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
          <div className="container absolute inset-0 flex flex-col md:flex-row justify-between gap-2 md:gap-5">
            <div className=" h-full my-auto">
              <ServiceText
                title={ServiceData.webServiceData.title}
                subTitle={ServiceData.webServiceData.subTitle}
                text={ServiceData.webServiceData.text}
              />
            </div>

            <div className="mx-auto">
              <ServiceLottie
                animation={webSmall}
                className="!p-2 md:!p-5 !w-[300px] xs:!w-[400px] md:!w-[600px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#114231]"></div>
        </div>

        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" ">
              <ServiceText
                title={ServiceData.webServiceData.title}
                subTitle={ServiceData.webServiceData.subTitle}
                text={ServiceData.webServiceData.text}
              />
            </div>
            <div className=" ">
              <ServiceLottie
                animation={mobileSecond}
                className="!p-2 md:!p-5 !w-[310px] xs:!w-[430px] md:!w-[650px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#c54f3b]"></div>
        </div>

        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" w-screen h-screen">
              <ServiceText
                title={ServiceData.webServiceData.title}
                subTitle={ServiceData.webServiceData.subTitle}
                text={ServiceData.webServiceData.text}
              />
            </div>
            <div className=" ">
              <ServiceLottie
                animation={socialThird}
                className="!p-2 md:!p-5 !w-[300px] xs:!w-[400px] md:!w-[600px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#2d5fca]"></div>
        </div>

        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" ">
              <ServiceText
                title={ServiceData.webServiceData.title}
                subTitle={ServiceData.webServiceData.subTitle}
                text={ServiceData.webServiceData.text}
              />
            </div>
            <div className="">
              <ServiceLottie
                animation={seoMan}
                className="!p-2 md:!p-5 !w-[250px] xs:!w-[350px] md:!w-[550px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#4d35d8]"></div>
        </div>

        <div className="w-full h-full relative">
          <div className="container absolute inset-0 flex flex-row justify-between">
            <div className=" ">
              <ServiceText
                title={ServiceData.webServiceData.title}
                subTitle={ServiceData.webServiceData.subTitle}
                text={ServiceData.webServiceData.text}
              />
            </div>
            <div className=" ">
              <ServiceLottie
                animation={twoCreative}
                className="!p-2 md:!p-5 !w-[300px] xs:!w-[400px] md:!w-[600px]"
              />
            </div>
          </div>
          <div className="w-screen h-screen bg-[#d331c5]"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
