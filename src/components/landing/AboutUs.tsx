"use client";
import Image from "next/image";
import AboutUsIm from "@/public/about_us.webp";
import Logo from "@/public/logo.webp";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center lg:gap-13 lg:p-5">
      <motion.div 
        className="text-agsm-blue-200 mt-8 text-3xl font-bold md:mt-3 md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        ABOUT US
      </motion.div>
      <div className="flex flex-col px-8 md:flex-col lg:w-4/5 lg:flex-row lg:gap-x-15 lg:px-0 lg:text-left">
        <div className="mt-5 flex flex-col text-center md:mt-3 md:text-center lg:w-3/5 lg:gap-15 lg:text-left">
          <motion.div
            className="text-agsm-blue-200 text-xl font-bold md:text-2xl lg:mt-7 lg:p-2 lg:text-4xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            >
            Launching the Next Generation of Product Leaders
          </motion.div>
          <motion.div 
            className="mt-5 w-full text-center md:mt-3 md:px-8 md:text-center md:text-lg lg:mt-2 lg:px-0 lg:text-left lg:text-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            >
            Whether you're exploring PM roles for the first time or preparing
            for your dream teach internship, we provide the resources, hands-on
            experience, and network you need to succeed. From curated learning
            materials to case competitions and alumni mentorship, we're building
            the pathway from zero experience to product leadership.
          </motion.div>
        </div>
        <motion.div 
          className="relative mt-5 flex items-center justify-center overflow-visible md:mt-3 md:h-full md:w-full lg:h-4/3 lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          >
          <Image
            src={AboutUsIm}
            alt="Students and faculty members in a meeting"
            className="rounded-lg object-cover md:h-full md:w-4/5 lg:h-full lg:w-full"
          />
          <motion.div 
            className="absolute -right-2 -bottom-6 md:right-4 md:-bottom-8 lg:-right-8 lg:-bottom-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            >
            <Image
              src={Logo}
              alt="AGSM Logo"
              className="size-20 md:size-32 lg:size-35"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
