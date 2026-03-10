import headerBackground from "@/public/header_background.svg";
import Image from "next/image";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <div className="mb-16">
      <div className="my-6 md:my-12">
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <Image
            src={headerBackground}
            alt="Header Background"
            objectFit="cover"
            className="absolute z-0 h-full w-full"
          />
          <div className="text-agsm-blue-200 z-20 w-4/5 py-12 text-3xl md:w-3/5 md:py-8 md:text-6xl lg:py-12 lg:text-9xl">
            {text}
          </div>
        </div>
      </div>
      <div className="border-agsm-blue-200 w-full border-1" />
    </div>
  );
};

export default Header;
