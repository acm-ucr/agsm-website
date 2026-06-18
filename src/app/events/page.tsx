"use client";

import CalendarEvents from "@/components/events/CalendarEvents";
import PastEvents from "@/components/events/PastEvents";
import Header from "@/components/Header";
import Title from "@/components/board/Header";
import UpcomingEvents from "@/components/events/UpcomingEvents";

const Events = () => {
  return (
    <div className="font-agsm-main n flex w-screen flex-col">
      <Header text={"EVENTS"} />
      <UpcomingEvents />
      <CalendarEvents />
      <Title title={"PAST EVENTS"} />
      <PastEvents />
    </div>
  );
};

export default Events;
