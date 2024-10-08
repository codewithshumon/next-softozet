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
    <div className=" w-full h-full flex flex-col gap-5 justify-around">
      <div className="flex flex-col">
        <span>{upPhotoTitle}</span>
        <Image
          className="w-[450px]"
          src={image}
          alt={`${upPhotoTitle + " " + downPhotoTitle}`}
        />
        <span>{downPhotoTitle}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default WhyUniqueCard;
