import ClientImage from "./ClientImage";

import { ardenRealty } from "@/app/asset/image-clients";
import { Century21 } from "@/app/asset/svg-clients";
import Image from "next/image";

const ClientSection = () => {
  return (
    <div className="">
      <div className="w-[200%] text-white">
        <div className="w-full h-[10vw] flex items-center justify-between">
          <div>
            <ClientImage
              svg={Century21}
              imageText="arden Realty"
              className=" object-cover w-full h-full"
            />
          </div>
          <div>First Client</div>
          <div>First Client</div>
          <div>First Client</div>
          <div>First Client</div>
          <div>First Client</div>
          <div>First Client</div>
          <div>First Client</div>
          <div>First Client</div>
          <div>First Client</div>
        </div>
        <div className="w-full h-[10vw] flex items-center justify-between">
          <div className="h-full bg-red-400">
            <ClientImage
              image={ardenRealty}
              imageText="arden Realty"
              className=" object-cover w-full h-full"
            />
          </div>
          <div>Second Client</div>
          <div>Second Client</div>
          <div>Second Client</div>
          <div>Second Client</div>
          <div>Second Client</div>
          <div>Second Client</div>
          <div>Second Client</div>
          <div>Second Client</div>
        </div>
        <div className=" w-full h-[10vw] flex items-center justify-between">
          <div>Third Client</div>
          <div>Third Client</div>
          <div>Third Client</div>
          <div>Third Client</div>
          <div>Third Client</div>
          <div>Third Client</div>
          <div>Third Client</div>
          <div>Third Client</div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
