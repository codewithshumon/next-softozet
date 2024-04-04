import Background from "../components/landingPage/Background";
import LandingSections from "../components/landingPage/heroSection/HeroSection";
import VideoSection from "../components/landingPage/VideoSection";

export default function Home() {
  return (
    <main>
      <section className="absolute z-10 w-full h-full  ">
        <LandingSections />
        <VideoSection />
      </section>
      <section className="relative w-full h-full bg-[#01081b] z-0">
        <Background />
      </section>
    </main>
  );
}
