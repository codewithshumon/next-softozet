import Image, { StaticImageData } from "next/image";
import React from "react";

interface OurProcessCardProps {
  title: string;
  image: StaticImageData | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const OurProcessCard: React.FC<OurProcessCardProps> = ({
  title,
  image,
  text,
}) => {
  return (
    <div className="w-[50%] h-[100%] flex flex-col justify-around">
      <div className="flex flex-col gap-2">
        {typeof image === "string" || "src" in image ? (
          <Image src={image as StaticImageData} alt={title} />
        ) : (
          React.createElement(
            image as React.ComponentType<React.SVGProps<SVGSVGElement>>
          )
        )}
        <h2 className="uppercase">{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default OurProcessCard;
