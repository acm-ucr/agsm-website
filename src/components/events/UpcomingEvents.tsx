"use client";

import { motion } from "motion/react";
import UpcomingEventCard from "./UpcomingEventsCard";

const UpcomingEvents = () => {
  const sampleEvents = [
    {
      month: "DEC",
      date: "21",
      eventName: "Event Name",
      schoolName: "School of Business",
      time: "6:00 PM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      position: 0,
    },
    {
      month: "DEC",
      date: "21",
      eventName: "Event Name",
      schoolName: "School of Business",
      time: "6:00 PM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      position: 1,
    },
  ];

  return (
    <div className="mb-20 flex flex-col items-center gap-8 px-6 select-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-agsm-blue-200 text-5xl font-bold md:text-7xl"
      >
        UPCOMING EVENTS
      </motion.div>
      <div className="mt-15 flex w-full max-w-7xl flex-col justify-center gap-8 md:flex-row">
        {sampleEvents.map((event, index) => (
          <UpcomingEventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
