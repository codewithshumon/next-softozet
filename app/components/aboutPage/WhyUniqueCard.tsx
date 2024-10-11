import Image, { StaticImageData } from "next/image";

interface WhyUniqueCardProps {
  upPhotoTitle: string;
  downPhotoTitle: string;
  image: StaticImageData;
  text: string;
}

const WhyUniqueCard: React.FC<WhyUniqueCardProps> = ({
  upPhotoTitle,
  downPhotoTitle,
  image,
  text,
}) => {
  return (
    <div className=" w-full h-full flex flex-col justify-around mt-10">
      <div className=" relative w-full h-[70%] flex flex-col text-[3rem] font-bold text-[#FFFF00] items-center justify-center ">
        <span className="absolute top-4 left-[-2%] ">{upPhotoTitle}</span>
        <Image
          className="w-[400px] z-[2]"
          src={image}
          alt={`${upPhotoTitle + " " + downPhotoTitle}`}
        />
        <span className="absolute bottom-5 z-[5] right-0">
          {downPhotoTitle}
        </span>
      </div>
      <div className=" w-full h-[30%] px-[5%] ">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WhyUniqueCard;
