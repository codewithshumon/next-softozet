import ServiceKeyPoint from "./ServiceKeyPoint";

interface SingleServiceProps {
  serviceItems: string[];
}

const SingleService: React.FC<SingleServiceProps> = ({ serviceItems }) => {
  return (
    <div className=" relative w-full h-full ">
      <div className=" relative w-full h-[100vh] flex flex-row-reverse">
        <div className="w-[50%] h-full p-10 flex items-center justify-center">
          <div className=" w-[300px] h-[200px] bg-blue-500"></div>
        </div>
        <div className="w-[50%] h-full flex flex-col ">
          <div className=" w-full">
            <h2>Branding</h2>
          </div>
          <div className=" w-full">
            <p>
              Our approach connects brand and user experience closely. We
              specialize in creating and presenting digital brand identities on
              all platforms. We also provide strategy help and guidelines to
              keep everything consistent.
            </p>
          </div>
          <div className=" w-full">
            <ServiceKeyPoint items={serviceItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
