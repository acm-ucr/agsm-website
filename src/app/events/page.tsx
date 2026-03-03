"use client";

import CalendarEvents from "@/components/events/CalendarEvents";
import PastEvents from "@/components/events/PastEvents";
import eventphoto from "@/public/about_us.webp";
import Header from "@/components/Header";
import Title from "@/components/board/Header";

const Events = () => {
  return (
    <div className="font-agsm-main n flex w-screen flex-col">
      <Header text={"EVENTS"} />
      <CalendarEvents />
      <Title title={"PAST EVENTS"} />
      <PastEvents
        text1="Event Name"
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        photo={eventphoto}
      />
    </div>
  );
};

export default Events;
