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
      <div className="text-center">
        <p className="text-agsm-blue-200 text-xl font-semibold">{name}</p>
        <p className="text-agsm-blue-200 text-sm">{role}</p>
      </div>
import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  position: string;
}

const BoardCard = ({ image, name, position }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        className="h-full w-[40vw] rounded-sm object-cover sm:w-[20vw]"
      />
      <div className="mt-4">
        <p className="text-agsm-blue-200 text-3xl font-semibold">{name}</p>
      </div>
      <p className="text-agsm-blue-200 text-2xl">{position}</p>
    </div>
  );
};

export default Card;
export default BoardCard;
