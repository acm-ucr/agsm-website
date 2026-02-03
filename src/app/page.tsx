import AboutUs from "@/components/landing/AboutUs";

const Home = () => {
  return (
    <div className="bg-agsm-yellow-100 font-agsm-main flex h-screen w-screen">
      <AboutUs
        title="ABOUT US"
        title2="Launching the Next Generation of Product Leaders"
        description="Whether you're exploring PM roles for the first time or preparing for your dream teach internship, we provide the resources, hands-on experience, and network you need to succeed. From curated learning materials to case competitions and alumni mentorship, we're building the pathway from zero experience to product leadership."
      />
    </div>
  );
};

export default Home;
