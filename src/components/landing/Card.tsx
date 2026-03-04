type CardProps = {
  Icon?: React.ElementType;
  title: string;
  description: string;
};

const Card = ({ Icon, title, description }: CardProps) => {
  return (
    <div className="bg-agsm-yellow-100 flex h-105 w-full flex-col rounded-md p-10 shadow-xl">
      <div>
        {Icon && (
          <Icon className="bg-agsm-blue-100 text-agsm-blue-200 h-18 w-18 rounded-md p-4" />
        )}
      </div>
      <div className="text-agsm-blue-200 my-5 text-3xl select-none">
        {title}
      </div>
      <div className="text-aneutral-800 text-2xl font-thin select-none">
        {description}
      </div>
    </div>
  );
};

export default Card;
