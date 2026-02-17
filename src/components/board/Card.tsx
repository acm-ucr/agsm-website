import Image from "next/image";

interface BoardProps {
  name: string;
  role: string;
  image: string;
}

const Card = ({ name, role, image }: BoardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-agsm-yellow-100 rounded-sm p-6 pb-4">
        <div className="relative h-65 w-65">
          <Image
            src={image}
            alt={`Photo of ${name}`}
            width={300}
            height={300}
            className="rounded-sm object-cover"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-agsm-blue-200 text-xl font-semibold">{name}</p>
        <p className="text-agsm-blue-200 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Card;
