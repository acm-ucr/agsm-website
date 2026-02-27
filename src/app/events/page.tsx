"use client";

import CalendarEvents from "@/components/events/CalendarEvents";
import PastEvents from "@/components/events/PastEvents";
import eventphoto from "@/public/about_us.webp";

const Events = () => {
  return (
    <div className="bg-agsm-yellow-100 font-agsm-main n flex w-screen flex-col">
      <CalendarEvents />
      <PastEvents
        text1="PAST EVENTS"
        text2="Event Name"
        text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        photo={eventphoto}
      />
    </div>
  );
};

export default Events;
