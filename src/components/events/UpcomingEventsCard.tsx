interface UpcomingEventCardType {
  month: string;
  date: string;
  eventName: string;
  schoolName: string;
  time: string;
  description: string;
}

const UpcomingEventCard = ({
  month,
  date,
  eventName,
  schoolName,
  time,
  description,
}: UpcomingEventCardType) => {
  return (
    <div className="bg-agsm-yellow-100 max-w-1/3 shadow-md">
      <div className="p-9">
        <div className="text-agsm-blue-200 mb-8 flex items-center justify-center gap-10">
          <div className="bg-agsm-blue-100 flex w-1/5 flex-col items-center justify-center rounded-xl p-3">
            <div className="text-xl">{month}</div>
            <div className="text-6xl">{date}</div>
          </div>
          <div className="w-4/5">
            <div className="py-2 text-4xl">{eventName}</div>
            <div className="text-3xl">
              {schoolName} | {time}
            </div>
          </div>
        </div>
        <div className="text-2xl">{description}</div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
