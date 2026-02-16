"use client";

import { Calendar } from "@/components/ui/calendar";

const Events = () => {
  return (
    <div className="bg-agsm-yellow-100 font-agsm-main flex h-screen w-screen">
      <Calendar
        className="mx-auto w-1/2 mt-15"
      />
    </div>
  );
};

export default Events;
