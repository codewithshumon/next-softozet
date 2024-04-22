"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ClientImage from "./ClientImage";
import {
  ardenRealty,
  cryeLeikeRealty,
  daymarkRealty,
  kellerWilliams,
} from "@/app/asset/image-clients";
import {
  Century21,
  clik2pay,
  comenda,
  curti,
  damart,
  dbRealty,
  dempseyWood,
  dormer,
  edinaRealty,
  federalRealty,
  hainbuch,
  klineMayRealty,
  maisons,
  onbuy,
  once,
  paybright,
  pequity,
  stanley,
  tapestry,
  teba,
  turner,
  vrt,
} from "@/app/asset/svg-clients";

const ClientSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateSections = () => {
      gsap.to(".logo-group-1", {
        xPercent: -62,
        ease: "none",
        scrollTrigger: {
          trigger: ".animate-logos",
          start: "bottom bottom",
          scrub: 1,
          //snap: { duration: { min: 0.2, max: 3 } }, // the snap animation should be
          //delay: 0.2, // wait 0.2 seconds from the last scroll event
          //ease: "power1.inOut",
        },
      });
      gsap.to(".logo-group-2", {
        xPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".animate-logos",
          start: "bottom bottom",
          scrub: 1,
          //snap: { duration: { min: 0.2, max: 3 } }, // the snap animation should be
          //delay: 0.2, // wait 0.2 seconds from the last scroll event
          //ease: "power1.inOut",
        },
      });
      gsap.to(".logo-group-3", {
        xPercent: -62,
        ease: "none",
        scrollTrigger: {
          trigger: ".animate-logos",
          start: "bottom bottom",
          scrub: 1,
          //snap: { duration: { min: 0.2, max: 3 } }, // the snap animation should be
          //delay: 0.2, // wait 0.2 seconds from the last scroll event
          //ease: "power1.inOut",
        },
      });
    };

    animateSections();

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className=" w-[100vw] overflow-hidden">
      <div className="animate-logos w-[160vw] text-white">
        <div className="logo-group-1 w-full h-[10vw] flex items-center justify-between //translate-x-[-62vw]">
          <div>
            <ClientImage
              svg={Century21}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full "
            />
          </div>
          <div>
            <ClientImage
              svg={clik2pay}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={comenda}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={damart}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={curti}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={dempseyWood}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={dormer}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={hainbuch}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
        </div>
        <div className="logo-group-2 w-full h-[10vw] flex items-center justify-around translate-x-[-60vw] //translate-x-[0vw]">
          <div>
            <ClientImage
              svg={dbRealty}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={kellerWilliams}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={edinaRealty}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={federalRealty}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={klineMayRealty}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={ardenRealty}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={cryeLeikeRealty}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={daymarkRealty}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
        </div>
        <div className="logo-group-3 w-full h-[10vw] flex items-center justify-between //translate-x-[-62vw]">
          <div>
            <ClientImage
              svg={maisons}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={onbuy}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={once}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={paybright}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={pequity}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>

          <div>
            <ClientImage
              svg={stanley}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={tapestry}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={teba}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={turner}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
          <div>
            <ClientImage
              svg={vrt}
              imageText="arden Realty"
              className=" object-cover w-[200px] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
