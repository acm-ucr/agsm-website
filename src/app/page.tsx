import AboutUs from "@/components/landing/AboutUs";
import OurVision from "@/components/landing/OurVision";
import Carousal from "@/components/landing/Carousal";

const Home = () => {
  return (
    <div className="bg-agsm-yellow-100 font-agsm-main flex min-h-screen w-full flex-col">
      <AboutUs />
      <OurVision />
      <Carousal />
    </div>
  );
};

export default Home;
