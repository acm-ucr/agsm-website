"use client";
import { usePathname } from "next/navigation";
import AGSMLogo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";

const items = [
  { name: "BOARD", link: "/board" },
  { name: "EVENTS", link: "/events" },
  { name: "ALUMNI", link: "/alumni" },
  { name: "NEWSLETTER", link: "/newsletter" },
];

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -100 },
};

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 md:hidden">
        <Link href="/">
          <Image src={AGSMLogo} alt="AGSM Logo" className="size-20" />
        </Link>
        <div
          onClick={toggleMobileMenu}
          className="text-agsm-blue-200 hover:cursor-pointer"
        >
          <Menu />
        </div>
      </div>

      <motion.div
        className="hidden h-28 w-full bg-white shadow-md md:flex"
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
                    pathname === link ? "text-blue-500" : ""
                  }`}
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3 }}
            className={`text-agsm-blue-200 absolute top-25 left-0 z-50 flex w-full flex-col bg-white px-6 py-10 text-2xl shadow-lg md:hidden`}
          >
            {items.map(({ name, link }) => (
              <Link
                href={link}
                key={link}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-center underline-offset-4 transition hover:underline ${pathname == link ? "underline" : ""}`}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
