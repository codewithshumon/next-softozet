import React from "react";
import Image, { StaticImageData } from "next/image";

interface ServiceListCardProps {
  title: string;
  text: string;
  image?: StaticImageData | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const ServiceListCard: React.FC<ServiceListCardProps> = ({
  title,
  text,
  image,
  className,
}) => {
  return (
    <>
      <div className={className}>
        <div className="w-full h-[200px] bg-blue-400">
          {image ? (
            typeof image === "string" || "src" in image ? (
              <Image src={image as StaticImageData} alt={title} />
            ) : (
              React.createElement(
                image as React.ComponentType<React.SVGProps<SVGSVGElement>>
              )
            )
          ) : (
            <p>No Image Provided</p>
          )}
        </div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceListCard;
