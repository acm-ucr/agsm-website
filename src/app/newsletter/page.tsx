import Header from "@/components/Header";
import PastEvents from "@/components/events/PastEvents";

const Newsletter = () => {
  return (
    <div className="flex w-full flex-col">
      <Header text={"NEWSLETTER"} />
      <PastEvents />
    </div>
  );
};

export default Newsletter;
