"use client";
import headerBackground from "@/public/header_background.svg";
import Image from "next/image";
import { motion } from "motion/react";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <motion.div
      className="border-agsm-blue-200 border-b-1 md:py-8"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <Image
          src={headerBackground}
          alt="Header Background"
          objectFit="cover"
          className="absolute z-0 h-full w-full"
        />
        <div className="text-agsm-blue-200 z-20 w-4/5 py-12 text-3xl md:w-3/5 md:text-6xl">
          {text}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
