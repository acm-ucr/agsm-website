"use client";

import Image from "next/image";
import Image1 from "@/public/what_we_offer_signs.webp";
import Image2 from "@/public/what_we_offer_table.webp";
import Card from "@/components/landing/Card";
import { BookMinus, BriefcaseBusiness, Lightbulb, Network } from "lucide-react";

const cardsData = [
  {
    title: "Resources & Learning",
    description:
      "Access to curated books, newsletters, and certification recommendations tailored for aspiring PMs.",
    icon: BookMinus,
  },
  {
    title: "Internship Preparation",
    description:
      "Get ready for summer internship recruiting with our interview strategies, resume reviews, and networking tips.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Hands-On Experience",
    description:
      "Sharpen your skills through real-world case competitions where you'll tackle actual product challenges.",
    icon: Lightbulb,
  },
  {
    title: "Alumni Network",
    description:
      "Connect with AGSM alumni and industry leaders who are actively working as product managers.",
    icon: Network,
  },
];

const WhatWeOffer = () => {
  return (
    <div className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-7xl pl-4">
        <p className="text-agsm-blue-200 mb-10 text-4xl font-semibold">
          What We Offer
        </p>
      </div>

      <div className="mb-24 grid grid-cols-3 gap-x-12 pl-24">
        <Card
          Icon={cardsData[0].icon}
          title={cardsData[0].title}
          description={cardsData[0].description}
        />
        <Card
          Icon={cardsData[1].icon}
          title={cardsData[1].title}
          description={cardsData[1].description}
        />
        <div className="-mr-8 h-105 overflow-hidden rounded-2xl">
          <Image
            src={Image1}
            alt="UCR Business students"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-12 pr-24">
        <div className="-ml-8 h-105 overflow-hidden rounded-2xl">
          <Image
            src={Image2}
            alt="UCR table event"
            className="h-full w-full object-cover"
          />
        </div>
        <Card
          Icon={cardsData[2].icon}
          title={cardsData[2].title}
          description={cardsData[2].description}
        />
        <Card
          Icon={cardsData[3].icon}
          title={cardsData[3].title}
          description={cardsData[3].description}
        />
      </div>
    </div>
  );
};

export default WhatWeOffer;
