import AboutUs from "@/components/landing/AboutUs";
import WhatWeOffer from "@/components/landing/WhatWeOffer";
import OurVision from "@/components/landing/OurVision";
import Carousal from "@/components/landing/Carousal";

const Home = () => {
  return (
    <div className="font-agsm-main flex min-h-screen w-full flex-col">
      <AboutUs />
      <WhatWeOffer />
      <OurVision />
      <Carousal />
    </div>
  );
};

export default Home;
