"use client";

import { motion } from "motion/react";

interface UpcomingEventCardType {
  month: string;
  date: string;
  eventName: string;
  schoolName: string;
  time: string;
  description: string;
  position: number;
}

const UpcomingEventCard = ({
  month,
  date,
  eventName,
  schoolName,
  time,
  description,
  // Passing in "position" prop to animate the card from 2 sides of the screen instead of one side only
  position,
}: UpcomingEventCardType) => {
  return (
    <motion.div
      initial={{
        x: position % 2 == 0 ? -100 : 100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 1.02,
      }}
      viewport={{
        once: true,
      }}
      className="bg-agsm-yellow-100 w-full shadow-md"
    >
      <div className="p-9">
        <div className="text-agsm-blue-200 mb-8 flex items-center justify-center gap-10">
          <div className="bg-agsm-blue-100 flex w-1/5 flex-col items-center justify-center rounded-xl p-3">
            <div className="text-xl">{month}</div>
            <div className="text-6xl">{date}</div>
          </div>
          <div className="w-4/5">
            <div className="py-2 text-4xl">{eventName}</div>
            <div className="text-3xl">
              {schoolName} | {time}
            </div>
          </div>
        </div>
        <div className="text-2xl">{description}</div>
      </div>
    </motion.div>
  );
};

export default UpcomingEventCard;
