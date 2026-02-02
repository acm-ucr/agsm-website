"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Home = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="mx-auto w-1/2"
      />
    </div>
  );
};

export default Home;
