import Image from "next/image";

interface BoardProps {
  name: string;
  role: string;
  image: string;
}

const Card = ({ name, role, image }: BoardProps) => {
  return (
    <div className="flex w-64 flex-col items-center">
      <div className="bg-agsm-yellow-100 w-full rounded-sm p-6 pb-4">
        <div className="relative aspect-square w-full">
          <Image
            src={image}
            alt={`Photo of ${name}`}
            fill
            className="rounded-sm object-cover"
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-agsm-blue-200 text-xl font-semibold">{name}</p>
        <p className="text-agsm-blue-200 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Card;
