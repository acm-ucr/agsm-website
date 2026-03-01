"use client";
import Image from "next/image";
import OurVisonImg from "@/public/LandingSquares.webp";
import { motion } from "motion/react";

const Vision = () => {
  return (
    <div className="relative flex min-h-screen w-full py-32">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-50 right-50 md:left-0 md:pl-0"
      >
        <Image
          src={OurVisonImg}
          alt="Vision background"
          className="pointer-events-none top-40 scale-90 md:left-0 md:scale-100"
        />
      </motion.div>

      <div className="flex w-screen justify-end text-right">
        <div className="flex max-w-2xl flex-col items-end text-right">
          <div className="text-agsm-blue-200 mt-10 mr-10 text-3xl font-bold md:mr-35 md:text-6xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              OUR VISION
            </motion.div>
          </div>
          <div className="mt-10 mr-10 ml-42 text-lg text-[#3A3A3A] md:mt-20 md:mr-35 md:ml-0 md:text-xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              The AGSM Product Club strives to be the leading community for
              students aspiring to become successful product managers, providing
              them with the necessary resources, skills, and experience to
              launch their careers in the tech industry.
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vision;
