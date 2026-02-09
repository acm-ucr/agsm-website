import Image from "next/image";
import AboutUsIm from "@/public/about_us.webp";
import Logo from "@/public/logo.webp";

const AboutUs = () => {
  return (
    <div className="mt-3 flex w-full flex-col items-center gap-18 p-5">
      <p className="text-agsm-blue-200 text-6xl font-bold">ABOUT US</p>
      <div className="items-top flex w-4/5 flex-row justify-center gap-x-15 text-left">
        <div className="flex w-3/5 flex-col items-center gap-15">
          <p className="text-agsm-blue-200 mt-7 p-2 text-4xl font-bold">
            Launching the Next Generation of Product Leaders
          </p>
          <p className="w-full pr-20 text-xl">
            Whether you're exploring PM roles for the first time or preparing
            for your dream teach internship, we provide the resources, hands-on
            experience, and network you need to succeed. From curated learning
            materials to case competitions and alumni mentorship, we're building
            the pathway from zero experience to product leadership.
          </p>
        </div>
        <div className="h-4/3 w-1/2 overflow-hidden rounded-lg">
          <Image
            src={AboutUsIm}
            alt="Students and faculty members in a meeting"
            className="h-full w-full items-center object-cover"
          />
          <div className="">
            <Image
              src={Logo}
              alt="AGSM Logo"
              className="absolute right-30 bottom-13 size-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
