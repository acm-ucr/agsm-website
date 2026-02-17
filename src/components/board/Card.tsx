import Image from "next/image";

interface BoardProps {
  name: string;
  role: string;
  image: string;
}

const Card = ({ name, role, image }: BoardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-agsm-yellow-100 rounded-sm p-6 pb-10">
        <div className="relative h-[220px] w-[220px]">
          <Image
            src={image}
            alt={`Photo of ${name}`}
            width={300}
            height={300}
            className="rounded-sm object-cover"
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-xl font-semibold text-[#1F4E8C]">{name}</p>
        <p className="text-sm text-[#1F4E8C]">{role}</p>
      </div>
    </div>
  );
};

export default Card;
