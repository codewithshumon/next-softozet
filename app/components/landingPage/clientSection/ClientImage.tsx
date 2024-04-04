import Image, { StaticImageData } from "next/image";

interface ClientImageProps {
  image?: StaticImageData;
  imageText?: string;
  className?: string;
  svg?: StaticImageData;
}

const ClientImage: React.FC<ClientImageProps> = ({
  svg,
  image,
  imageText = "",
  className,
}) => {
  return (
    <>
      {image && <Image src={image} alt={imageText} className={className} />}
      {svg && <Image src={svg} alt={imageText} className={className} />}
    </>
  );
};

export default ClientImage;
