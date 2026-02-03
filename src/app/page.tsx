import OurVision from "@/components/landing/OurVision";
const Home = () => {
  return (
    <div>
      <OurVision
        text1="OUR VISION"
        text2={
          <div>
            The AGSM Product Club strives to be the leading community for
            students aspiring to become successful product managers, providing
            them with the necessary resources, skills, and experience to launch
            their careers in the tech industry.
          </div>
        }
      />
    </div>
  );
};

export default Home;
