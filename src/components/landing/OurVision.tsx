"use client";
import Image from "next/image";
import OurVisonImg from "@/public/LandingSquares.webp";
import { motion } from "motion/react";

const Vision = () => {
  return (
    <div className="relative flex h-fit w-full flex-row overflow-hidden md:my-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="-z-40 hidden h-fit md:block md:pl-0"
      >
        <Image
          src={OurVisonImg}
          alt="Vision background"
          className="pointer-events-none h-fit opacity-50 md:left-0"
        />
      </motion.div>

      <div className="flex w-screen justify-end p-10 text-right">
        <div className="flex max-w-2xl flex-col items-end text-right">
          <div className="text-agsm-blue-200 text-4xl font-semibold md:text-6xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              OUR VISION
            </motion.div>
          </div>
          <div className="text-lg text-[#3A3A3A] md:ml-0 md:text-xl">
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
