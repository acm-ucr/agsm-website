"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="bg-agsm-yellow-100 font-agsm-main flex h-screen w-screen">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="mx-auto w-1/2"
      />
    </div>
  );
};

export default Events;
