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

export default BoardCard;
