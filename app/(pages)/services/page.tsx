"use client";

import { useRouter } from "next/navigation";

import SingleService from "@/app/components/servicesPage/SingleService";

import { ServicePageData } from "@/app/constant/ServicePageData";
import ProjectIdea from "@/app/components/global/ProjectIdea";

const ServicesPage = () => {
  const router = useRouter();

  return (
    <div className=" w-full h-full ">
      <div className="container bg-[#302f2f] ">
        <div className=" w-full h-[100vh] flex flex-col px-10 pt-[20vh] gap-5">
          <div>
            <h1 className="text-[80px] font-extrabold text-white">
              Digital Product Design & Consulting Services
            </h1>
          </div>
          <div>
            <p className="text-[15px] font-extrabold text-[#9c9898]">
              Our Global digital product design agency helps brands to make
              top-quality SaaS, MVP, software, mobile apps, and websites. We
              focus on user-friendly designs that look great and work smoothly.
              Let us help your business grow with our expert digital product
              solutions.
            </p>
          </div>
          <div className="text-[40px] w-fit px-5 py-3 bg-yellow-400 rounded-full font-bold">
            <div>Share Your Ideas</div>
          </div>
        </div>
      </div>
      <div className="container  bg-[#dfdcdc] ">
        <div className=" w-full h-full px-5 ">
          <SingleService
            buttonAction={() => router.push("/services/branding")}
            items={ServicePageData.brandingData.brandingItems}
            title={ServicePageData.brandingData.brandingTitle}
            text={ServicePageData.brandingData.brandingText}
            flexClass="flex flex-row"
          />
        </div>
        <div className=" w-full h-full px-5 ">
          <SingleService
            buttonAction={() => router.push("/services/ui-ux-design")}
            items={ServicePageData.uxuiDesingData.uxuiDesingItems}
            title={ServicePageData.uxuiDesingData.uxuiDesingTitle}
            text={ServicePageData.uxuiDesingData.uxuiDesingText}
            flexClass="flex flex-row-reverse"
          />
        </div>
        <div className=" w-full h-full px-5 ">
          <SingleService
            buttonAction={() => router.push("/services/web-app-development")}
            items={ServicePageData.webDesignData.webDesignItems}
            title={ServicePageData.webDesignData.webDesignTitle}
            text={ServicePageData.webDesignData.webDesignText}
            flexClass="flex flex-row"
          />
        </div>
        <div className=" w-full h-full px-5 ">
          <SingleService
            buttonAction={() => router.push("/services/mobile-app-development")}
            items={ServicePageData.mobileDesignData.mobileDesignItems}
            title={ServicePageData.mobileDesignData.mobileDesignTitle}
            text={ServicePageData.mobileDesignData.mobileDesignText}
            flexClass="flex flex-row-reverse"
          />
        </div>
        <div className=" w-full h-full px-5 ">
          <SingleService
            buttonAction={() =>
              router.push("/services/custom-software-development")
            }
            items={ServicePageData.customSoftwareData.customSoftwareItems}
            title={ServicePageData.customSoftwareData.customSoftwareTitle}
            text={ServicePageData.customSoftwareData.customSoftwareText}
            flexClass="flex flex-row"
          />
        </div>
        <div className=" w-full h-full  px-5">
          <SingleService
            buttonAction={() =>
              router.push("/services/search-engine-optimization")
            }
            items={ServicePageData.searchEngineData.searchEngineItems}
            title={ServicePageData.searchEngineData.searchEngineTitle}
            text={ServicePageData.searchEngineData.searchEngineText}
            flexClass="flex flex-row-reverse"
          />
        </div>
        <div className=" w-full h-full px-5 ">
          <SingleService
            buttonAction={() => router.push("/services/social-media-marketing")}
            items={ServicePageData.socialMediaData.socialMediaItems}
            title={ServicePageData.socialMediaData.socialMediaTitle}
            text={ServicePageData.socialMediaData.socialMediaText}
            flexClass="flex flex-row"
          />
        </div>
        <div className=" w-full h-full  px-5">
          <SingleService
            buttonAction={() =>
              router.push("/services/creative-content-design")
            }
            items={ServicePageData.creativeContentData.creativeContentItems}
            title={ServicePageData.creativeContentData.creativeContentTitle}
            text={ServicePageData.creativeContentData.creativeContentText}
            flexClass="flex flex-row-reverse"
          />
        </div>

        <div className=" w-full h-full  px-5">
          <SingleService
            buttonAction={() =>
              router.push("/services/professional-video-editing")
            }
            items={ServicePageData.videoEditingData.videoEditingItems}
            title={ServicePageData.videoEditingData.videoEditingTitle}
            text={ServicePageData.videoEditingData.videoEditingText}
            flexClass="flex flex-row"
          />
        </div>
        <div className=" w-full h-full px-5 ">
          <SingleService
            buttonAction={() => router.push("/services/back-office-support")}
            items={ServicePageData.backOfficeData.backOfficeItems}
            title={ServicePageData.backOfficeData.backOfficeTitle}
            text={ServicePageData.backOfficeData.backOfficeText}
            flexClass="flex flex-row-reverse"
          />
        </div>

        <div className=" w-full h-full bg-purpleColor">
          <div className="container flex flex-col xl:flex-row py-10 md:py-20">
            <div className=" w-full xl:w-[50%] h-full">
              <h1 className=" py-10 w-[90%] text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] xl:text-[5rem] text-white font-extrabold">
                Have a Project Idea?
              </h1>
            </div>
            <div className=" w-full xl:w-[50%] h-full">
              <ProjectIdea />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
