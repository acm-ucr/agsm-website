import Header from "@/components/Header";
import PastEvents from "@/components/events/PastEvents";
import eventphoto from "@/public/about_us.webp";

const Newsletter = () => {
  return (
    <div className="flex w-full flex-col">
      <Header text={"NEWSLETTER"} />
      <PastEvents
        text1="Event Name"
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        photo={eventphoto}
      />
    </div>
  );
};

export default Newsletter;
