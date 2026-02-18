"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselApi,
  CarouselItem,
} from "@/components/ui/carousel";
import Image1 from "@/public/carousal/1.webp";
import Image2 from "@/public/carousal/2.webp";
import Image3 from "@/public/carousal/3.webp";
import Image4 from "@/public/carousal/4.webp";
import Image5 from "@/public/carousal/5.webp";
import leftArrow from "@/public/carousal/left_arrow.svg";
import rightArrow from "@/public/carousal/right_arrow.svg";
import { useState } from "react";

const Carousal = () => {
  const imageArray = [Image1, Image2, Image3, Image4, Image5];

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  return (
    <div className="p-8">
      <div className="text-agsm-blue-200 flex items-center justify-center text-6xl font-bold">
        GALLERY
      </div>
      <div className="relative mx-auto w-full overflow-hidden p-8">
        {/* Left fade overlay */}
        {/*<div className="from-agsm-yellow-100 pointer-events-none absolute top-0 left-0 z-10 h-full w-100 border-2 border-red-500 bg-gradient-to-r to-transparent"></div>*/}

        {/* Right fade overlay */}
        {/*<div className="from-agsm-yellow-100 pointer-events-none absolute top-0 right-0 z-10 h-full w-100 border-2 border-red-500 bg-gradient-to-l to-transparent"></div>*/}

        <div className="absolute top-0 left-0 z-20 flex h-full w-16 items-center justify-start md:w-32">
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
            {imageArray.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-10 md:basis-1/3"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image src={image} alt="Image" className="object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute top-0 right-0 z-20 flex h-full w-16 items-center justify-end md:w-32">
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
