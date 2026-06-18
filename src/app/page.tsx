import AboutUs from "@/components/landing/AboutUs";
import WhatWeOffer from "@/components/landing/WhatWeOffer";
import OurVision from "@/components/landing/OurVision";
import Carousal from "@/components/landing/Carousal";
import Landing from "@/components/landing/landing";
import UpcomingEvents from "@/components/events/UpcomingEvents";

const Home = () => {
  return (
    <div className="font-agsm-main flex min-h-screen w-full flex-col">
      <Landing />
      <AboutUs />
      <WhatWeOffer />
      <OurVision />
      <UpcomingEvents />
      <Carousal />
    </div>
  );
};

export default Home;
