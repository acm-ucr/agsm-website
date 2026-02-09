"use client";
import { usePathname } from "next/navigation";
import AGSMLogo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";

const items = [
  { name: "BOARD", link: "/board" },
  { name: "EVENTS", link: "/events" },
  { name: "ALUMNI", link: "/alumni" },
  { name: "NEWSLETTER", link: "/newsletter" },
];

const Navbar = () => {
  return (
    <div className="flex h-28 w-full shadow-md">
      <div className="flex h-full w-full items-center justify-between px-10">
        <Link href="/">
          <Image src={AGSMLogo} alt="AGSM Logo" className="size-20" />
        </Link>
        <div className="text-agsm-blue-200 mt-1 ml-10 flex flex-row gap-14 text-2xl font-bold">
          {items.map(({ link, name }) => (
            <div key={link}>
              <Link
                href={link}
                className={`inline-block transition-transform duration-150 ${
                  usePathname() === link
                    ? "text-blue-500 hover:scale-105"
                    : "hover:scale-105"
                }`}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
