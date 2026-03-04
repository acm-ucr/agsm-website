"use client";

import Image from "next/image";
import LandingTop from "@/public/landing_top_gradient.webp";
import HeaderBgLeft from "@/public/landing_rectangles_left.webp";
import HeaderBgRight from "@/public/landing_rectangles_right.webp";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="bg-agsm-yellow-100 mb-65 flex flex-col lg:h-screen">
      <div className="relative w-screen overflow-hidden">
        <Image
          src={LandingTop}
          alt="Cover Image"
          className="h-[120%] w-[150%] object-cover object-center"
        />
        <div className="absolute -bottom-1 flex w-full justify-center text-4xl font-bold text-white lg:text-8xl">
          UCR AGSM Product Club
        </div>
      </div>

      <div className="absolute my-60 w-full md:my-110 lg:my-180">
        <div className="text-agsm-blue-200 mt-4 flex justify-center text-center text-2xl lg:text-3xl">
          UC Riverside's premier community for aspiring product managers
        </div>
        <Link
          href="/"
          className="bg-agsm-blue-200 mx-auto my-12 flex w-55 justify-center rounded-sm px-1 py-6 text-4xl text-white"
        >
          Join Us
        </Link>
      </div>
      <div className="absolute mt-[-2rem] w-full py-224">
        <Image src={HeaderBgLeft} alt="" className="absolute left-0 w-50" />
        <Image src={HeaderBgRight} alt="" className="absolute right-0 w-70" />
      </div>
    </div>
  );
};

export default Landing;
