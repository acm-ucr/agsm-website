import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import AGSMLogo from "@/public/logo.webp";
import { FaFlickr } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-agsm-blue-200 flex h-45 w-full">
      <div className="flex h-full w-full items-center justify-between px-30">
        <div className="flex">
          <div>
            <Image src={AGSMLogo} alt="AGSM Logo" className="size-30" />
          </div>
          <div className="mt-1 ml-10 flex flex-col gap-7 text-white">
            <div>
              <p className="mb-1 text-3xl font-semibold">AGSM Product Club</p>
              <p className="text-xs">
                A. Gary Anderson Graduate School of Management
              </p>
            </div>
            <div>
              <p>University of California, Riverside</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div className="flex justify-end">
            <p className="text-white">Contact Us!</p>
          </div>
          <div className="flex justify-between gap-5">
            <Link
              href="mailto:ucr_agsm@ucr.edu"
              aria-label="Email"
              target="_blank"
            >
              <IoIosMail className="size-9 text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/school/university-of-california-riverside---a.-gary-anderson-graduate-school-of-management/"
              target="_blank"
            >
              <FaLinkedin className="mt-1 size-7 text-white" />
            </Link>
            <Link href="https://www.instagram.com/ucragsm/" target="_blank">
              <BiLogoInstagramAlt className="mt-0.5 size-8 text-white" />
            </Link>
            <Link
              href="https://github.com/acm-ucr/agsm-website/issues/flickr.com/photos/ucrschoolofbusiness/albums"
              target="_blank"
            >
              <FaFlickr className="mt-1 size-7 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
