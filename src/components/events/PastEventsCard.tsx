"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

export interface PastEventsCardProps {
  text1: string;
  text2: string;
  photo: StaticImageData;
  position: number;
}

const PastEventsCard = ({
  text1,
  text2,
  photo,
  // Passing in "position" prop to animate the card from 2 sides of the screen instead of one side only
  position,
}: PastEventsCardProps) => {
  return (
    <motion.div
      initial={{ x: position % 2 == 0 ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.02 }}
      viewport={{ once: true }}
      className="bg-agsm-yellow-100 flex h-full w-full flex-col items-center justify-center p-6 shadow-lg shadow-gray-500 md:w-full md:flex-row md:gap-4"
    >
      <div className="md:w-1/2">
        <Image
          src={photo}
          alt={"photo of a lecture room with students in it"}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col md:w-1/2">
        <div className="text-agsm-blue-200 mt-5 flex w-2/3 flex-col gap-4 text-2xl font-extrabold">
          {text1}
        </div>
        <div className="text-l mt-5 text-gray-600">{text2}</div>
      </div>
    </motion.div>
  );
};

export default PastEventsCard;
