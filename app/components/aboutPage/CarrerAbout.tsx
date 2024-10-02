import ServiceButton from "../botton/ServiceButton";

const CarrerAbout = () => {
  return (
    <div className=" h-screen w-full bg-[#ebe6e6] flex flex-row  text-black px-20">
      <div className=" w-[50%] h-full flex flex-col gap-5 justify-around">
        <div>
          <span>Career</span>
          {/* <Image /> */}
          <span>Opportunities</span>
        </div>
        <p>
          We prioritize open dialogue, ensuring clients are informed at every
          turn. Our clear communication fosters trust and alignment, enriching
          collaboration.
        </p>
      </div>

      <div className="w-[50%] h-full flex flex-col gap-5 justify-around ">
        <h2>Work with Softozet</h2>
        <p>
          Choose Musemind to embrace your skills and passion. We are your growth
          partner, encouraging creativity and individual development while
          creating excellent user experiences in a fast-paced, collaborative
          atmosphere.
        </p>
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
