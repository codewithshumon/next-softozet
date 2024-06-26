import Background from "./components/landingPage/Background";
import ClientSection from "./components/landingPage/clientSection/ClientSection";
import LandingSections from "./components/landingPage/heroSection/HeroSection";
import OurServices from "./components/landingPage/servicesSection/OurServices";
import CompanyDetails from "./components/landingPage/companyDetails/CompanyDetails";
import VideoSection from "./components/landingPage/VideoSection";
import Testimonial from "./components/landingPage/testimonial/Testimonial";

export default function Home() {
  return (
    <main className="">
      <section className="absolute z-10 w-full h-full  ">
        <LandingSections />
        <VideoSection />
        <ClientSection />
        <div>
          <OurServices />
        </div>
        <CompanyDetails />
        <Testimonial />
        <div className=" text-white">member</div>
      </section>
      <section className="relative w-full h-full bg-[#01081b] z-[5] ">
        <Background />
      </section>
    </main>
  );
}
