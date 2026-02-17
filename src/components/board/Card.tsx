import Image from "next/image";

interface BoardProps {
  name: string;
  role: string;
  image: string;
}

const Card = ({ name, role, image }: BoardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-agsm-yellow-100 p-6 pb-10 rounded-sm">
        <div className="relative w-[220px] h-[220px]">
          <Image
            src={image}
            alt={`Photo of ${name}`}
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-[#1F4E8C] text-xl font-semibold">{name}</p>
        <p className="text-[#1F4E8C] text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Card;