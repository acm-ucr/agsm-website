import PastEvents from "@/components/events/PastEvents";
import eventphoto from "@/public/about_us.webp";
const Events = () => {
  return (
    <div>
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
