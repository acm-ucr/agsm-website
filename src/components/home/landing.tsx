"use client";

import Image from "next/image";
import LandingTop from "@/public/landing_top.webp";
import HeaderBg from "@/public/header_background.svg";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden">
        <Image
          src={LandingTop}
          alt="Cover Image"
          className="h-[120%] w-[150%] object-cover object-center"
        />
        <div className="absolute -bottom-1 flex w-full justify-center text-7xl font-bold text-white">
          UCR AGSM Product Club
        </div>
      </div>

      <div className="bg-white">
        <div className="text-agsm-blue-200 mt-4 flex justify-center text-xl">
          UC Riverside's premier community for aspiring product managers
        </div>
        <Link
          href="/"
          className="bg-agsm-blue-200 mx-auto my-8 flex w-36 justify-center rounded-sm px-1 py-3 text-2xl text-white"
        >
          Join Us
        </Link>
        <Image src={HeaderBg} alt="" className="" />
      </div>
    </div>
  );
};

export default Landing;
