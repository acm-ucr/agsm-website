"use client";

import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselApi,
  CarouselItem,
} from "@/components/ui/carousel";
import Image1 from "@/public/carousal/1.png";
import Image2 from "@/public/carousal/2.png";
import Image3 from "@/public/carousal/3.png";
import Image4 from "@/public/carousal/4.png";
import Image5 from "@/public/carousal/5.png";
import leftArrow from "@/public/carousal/left_arrow.svg";
import rightArrow from "@/public/carousal/right_arrow.svg";
import { useState } from "react";

const Carousal = () => {
  const imageArray: {
    data: StaticImageData;
    alt: string;
  }[] = [
    {
      data: Image1,
      alt: "A person standing in front of a slideshow",
    },
    {
      data: Image2,
      alt: "A group of people holding certificates",
    },
    {
      data: Image3,
      alt: "A group of people taking pictures together and giving a gift",
    },
    {
      data: Image4,
      alt: "A person giving a presentation",
    },
    {
      data: Image5,
      alt: "A group of people giving a presentation",
    },
  ];

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  return (
    <div className="p-6">
      <div className="text-agsm-blue-200 flex items-center justify-center text-6xl font-bold">
        GALLERY
      </div>
      <div className="relative my-8 w-full">
        <div className="absolute left-0 top-0 z-20 flex h-full w-16 items-center justify-start md:w-32">
          <div className="from-agsm-yellow-100 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
          <button
            onClick={() => carouselApi?.scrollPrev()}
            className="z-20 cursor-pointer"
          >
            <Image src={leftArrow} alt="Left Arrow" />
          </button>
        </div>

        <Carousel
          setApi={setCarouselApi}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-10">
            {imageArray.map(({ data, alt }, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-10 md:basis-1/3"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image src={data} alt={alt} className="block h-auto w-full" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute right-0 top-0 z-20 flex h-full w-16 items-center justify-end md:w-32">
          <div className="from-agsm-yellow-100 pointer-events-none absolute inset-0 bg-gradient-to-l to-transparent" />
          <button
            onClick={() => carouselApi?.scrollNext()}
            className="z-20 cursor-pointer"
          >
            <Image src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-agsm-blue-200 rounded-md px-6 py-2 text-xl text-white">
          See More
        </div>
      </div>
    </div>
  );
};

export default Carousal;
