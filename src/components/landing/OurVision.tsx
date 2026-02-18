import Image from "next/image";
import OurVisonImg from "@/public/LandingSquares.webp";

const Vision = () => {
  return (
    <div className="relative flex min-h-screen w-full py-32">
      <Image
        src={OurVisonImg}
        alt="Vision background"
        className="pointer-events-none absolute top-40"
      />

      <div className="flex w-full justify-end">
        <div className="flex max-w-2xl flex-col items-end text-right">
          <div className="text-agsm-blue-200 mt-10 mr-35 text-6xl font-bold">
            OUR VISION
          </div>
          <div className="mt-20 mr-35 text-xl text-[#3A3A3A]">
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
