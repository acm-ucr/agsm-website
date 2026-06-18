import PastEventsCard from "@/components/events/PastEventsCard";
import eventPhoto from "@/public/about_us.webp";

const pastEvents = [
  {
    text1: "Lorem ipsum.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan sapien aliquam tempus varius. Nunc et quam felis. Donec non neque eu nulla fermentum posuere vitae quis urna. Sed maximus vestibulum nisl ultricies cursus. Proin id gravida felis, a semper tortor. Proin fermentum semper est, sed imperdiet orci. Sed vitae viverra leo, non blandit massa. Quisque ullamcorper vehicula efficitur.",
    photo: eventPhoto,
  },
];

const PastEvents = () => {
  return (
    <div className="flex items-center justify-center p-10 md:p-6">
      <div
        className={`grid gap-6 ${pastEvents.length > 1 ? "md:grid-cols-2" : ""}`}
      >
        {pastEvents.map(({ text1, text2, photo }, index) => {
          const isLastOddItem =
            pastEvents.length % 2 !== 0 && index === pastEvents.length - 1;

          return (
            <div
              key={index}
              className={`flex justify-center ${isLastOddItem ? "md:col-span-2" : ""}`}
            >
              <div className="w-full md:max-w-5xl">
                <PastEventsCard
                  position={index}
                  text1={text1}
                  text2={text2}
                  photo={photo}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PastEvents;
