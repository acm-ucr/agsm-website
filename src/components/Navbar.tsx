"use client";
import { usePathname } from "next/navigation";
import AGSMLogo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const items = [
  { name: "BOARD", link: "/board" },
  { name: "EVENTS", link: "/events" },
  { name: "ALUMNI", link: "/alumni" },
  { name: "NEWSLETTER", link: "/newsletter" },
];

const Navbar = () => {
  return (
    <motion.div
      className="flex h-28 w-full bg-white shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex h-full w-full items-center justify-between px-10">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/">
            <Image src={AGSMLogo} alt="AGSM Logo" className="size-20" />
          </Link>
        </motion.div>
        <div className="text-agsm-blue-200 mt-1 ml-10 flex flex-row gap-14 text-2xl font-bold">
          {items.map(({ link, name }) => (
            <motion.div key={link} whileHover={{ scale: 1.05 }}>
              <Link
                href={link}
                className={`inline-block ${
                  usePathname() === link ? "text-blue-500" : ""
                }`}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
