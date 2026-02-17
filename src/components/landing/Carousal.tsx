"use client";

import Image from "next/image";
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
import { useEffect, useState } from "react";

const Carousal = () => {
  const imageArray = [Image1, Image2, Image3, Image4, Image5];

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <div className="p-8">
      <div className="text-agsm-blue-200 flex items-center justify-center text-6xl font-bold">
        GALLERY
      </div>
      <div className="flex justify-center gap-4 p-8">
        <button
          onClick={() => carouselApi?.scrollTo(currentIndex - 1)}
          className="cursor-pointer"
        >
          <Image src={leftArrow} alt="Left Arrow" />
        </button>
        <Carousel
          setApi={setCarouselApi}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="-ml-8">
            {imageArray.map((image, index) => (
              <CarouselItem key={index} className="basis-1/3 pl-8">
                <Image src={image} alt="Image" className="rounded-md" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <button
          onClick={() => carouselApi?.scrollTo(currentIndex + 1)}
          className="cursor-pointer"
        >
          <Image src={rightArrow} alt="Right Arrow" />
        </button>
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
