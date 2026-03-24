"use client";

import CalendarEvents from "@/components/events/CalendarEvents";
import PastEvents from "@/components/events/PastEvents";
import Header from "@/components/Header";
import Title from "@/components/board/Header";

const Events = () => {
  return (
    <div className="font-agsm-main n flex w-screen flex-col">
      <Header text={"EVENTS"} />
      <CalendarEvents />
      <Title title={"PAST EVENTS"} />
      <PastEvents />
    </div>
  );
};

export default Events;
