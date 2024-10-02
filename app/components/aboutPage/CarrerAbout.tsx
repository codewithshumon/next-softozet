import ServiceButton from "../botton/ServiceButton";

const CarrerAbout = () => {
  return (
    <div className=" h-screen w-full flex flex-row  text-black px-20">
      <div className=" w-[50%] h-full flex flex-col gap-5 justify-around">
        <div>
          <span>Transparent</span>
          {/* <Image /> */}
          <span>Communication</span>
        </div>
        <p>
          We prioritize open dialogue, ensuring clients are informed at every
          turn. Our clear communication fosters trust and alignment, enriching
          collaboration.
        </p>
      </div>

      <div className="w-[50%] h-full flex flex-col gap-5 justify-around ">
        <h2>Key Values That Make Us Stand Out</h2>
        <p></p>
        <ServiceButton
          borderColor="#03EB64"
          buttonArrowColor="black"
          textColor="black"
        />
      </div>
    </div>
  );
};

export default CarrerAbout;
