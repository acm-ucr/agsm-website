"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type Props = {
  headshot: StaticImageData;
  name: string;
  testimonial: string;
};

const TestimonialsCard = ({ headshot, name, testimonial }: Props) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-agsm-yellow-100 mx-auto flex max-w-2xl flex-row gap-4 p-6 shadow-xl">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={headshot}
              alt={name}
              className="h-40 w-40 rounded-lg object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-4 p-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-agsm-blue-200 font-agsm-main text-2xl font-bold">
                {name}
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="font-agsm-main">"{testimonial}"</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsCard;
