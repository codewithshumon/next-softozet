import {
  communication,
  detail,
  innovative,
  management,
} from "@/app/asset/other-images/why-unique-images";

import WhyUniqueCard from "./WhyUniqueCard";
import WhyUniqueList from "./WhyUniqueList";

const WhyUnique = () => {
  const WhyUniqueListItem = [
    "Transparent Communication",
    "Precision Management",
    "Meticulous Detail",
    "Innovative Excellence",
  ];

  return (
    <div className=" h-[120vh] w-full bg-[#222121] flex flex-row  text-white px-20 py-10">
      <WhyUniqueList
        keyPoints={WhyUniqueListItem}
        title="Key Values That Make Us Stand Out"
      />
      <div className="w-[50%] h-full">
        <WhyUniqueCard
          image={communication}
          upPhotoTitle="Transparent"
          downPhotoTitle="Communication"
          text="We prioritize open dialogue, ensuring clients are informed at every
          turn. Our clear communication fosters trust and alignment, enriching
          collaboration."
        />
      </div>
    </div>
  );
};

export default WhyUnique;
