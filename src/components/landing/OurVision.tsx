import Image from "next/image";
import OurVisonImg from "@/public/LandingSquares.webp";

const Vision = () => {
  return (
    <div className="relative flex min-h-screen w-full py-32">
      <Image
        src={OurVisonImg}
        alt="Vision background"
        className="pointer-events-none absolute top-40 right-27 hidden scale-45 md:left-0 md:flex md:scale-100"
      />

      <div className="flex w-screen justify-end text-center md:text-right">
        <div className="flex max-w-2xl flex-col items-end text-center md:text-right">
          <div className="text-agsm-blue-200 mt-10 mr-20 flex text-3xl font-bold md:mr-35 md:text-6xl">
            OUR VISION
          </div>
          <div className="mt-10 mr-10 ml-10 text-lg text-[#3A3A3A] md:mt-20 md:mr-35 md:ml-0 md:text-xl">
            The AGSM Product Club strives to be the leading community for
            students aspiring to become successful product managers, providing
            them with the necessary resources, skills, and experience to launch
            their careers in the tech industry.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vision;
