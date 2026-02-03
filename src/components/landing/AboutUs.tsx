import Image from "next/image";
import AboutUsIm from "@/public/about_us.webp";
import Logo from "@/public/logo.webp";

interface AboutUsProps {
  title: string;
  description: string;
  title2: string;
}

const AboutUs = ({ title, description, title2 }: AboutUsProps) => {
  return (
    <div className="mt-3 flex w-screen flex-col items-center gap-20 p-8">
      <h1 className="text-agsm-blue-200 text-7xl font-bold">{title}</h1>
      <div className="items-top flex w-4/5 flex-row justify-center gap-x-20 text-left">
        <div className="flex w-3/7 flex-col items-center gap-15">
          <h2 className="text-agsm-blue-200 mt-20 w-12/11 gap-20 p-2 text-5xl">
            {title2}
          </h2>
          <p className="w-12/11 pr-20 text-2xl">{description}</p>
        </div>
        <div className="h-7/6 w-1/3 overflow-hidden rounded-lg">
          <Image
            src={AboutUsIm}
            alt="Students and faculty members in a meeting"
            className="h-full w-full items-center object-cover"
          />
          <div className="">
            <Image
              src={Logo}
              alt="AGSM Logo"
              className="absolute bottom-30 left-360 size-55"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
