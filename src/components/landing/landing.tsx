"use client";
import { motion } from "motion/react";

import Image from "next/image";
import LandingTop from "@/public/landing_top_gradient.webp";
import HeaderBgLeft from "@/public/landing_rectangles_left.webp";
import HeaderBgRight from "@/public/landing_rectangles_right.webp";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col lg:h-screen relative">
      <div className="relative w-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={LandingTop}
            alt="Cover Image"
            className=" max-h-[600px] w-[150%] object-cover object-center"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-1 flex w-full justify-center text-4xl font-bold text-white lg:text-8xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          UCR AGSM Product Club
        </motion.div>
      </div>

      <div className="w-full">
        <motion.div
          className="text-agsm-blue-200 text-xl font-bold md:text-2xl lg:mt-7 lg:p-2 lg:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-agsm-blue-200 mt-4 flex justify-center text-center text-2xl lg:text-3xl">
            UC Riverside's premier community for aspiring product managers
          </div>
          <Link
            href="/"
            className="bg-agsm-blue-200 mx-auto my-12 flex w-55 justify-center rounded-sm px-1 py-6 text-4xl text-white"
          >
            Join Us
          </Link>
        </motion.div>
      </div>
      <Image src={HeaderBgLeft} alt="" className="absolute left-0 w-50 bottom-0 -z-30 hidden lg:block opacity-50" />
      <Image src={HeaderBgRight} alt="" className="absolute right-0 w-70 bottom-0 -z-30 hidden lg:block opacity-50" />
    </div>
  );
};

export default Landing;
