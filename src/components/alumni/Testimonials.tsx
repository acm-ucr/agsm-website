"use client";
import { motion } from "motion/react";

const TestimonialsHeader = () => {
  return (
    <div className="mb-8 flex w-full flex-col gap-8">
      <div className="to-agsm-blue-100 bg-gradient-to-r from-white p-4">
        <p className="text-agsm-blue-200 font-agsm-main text-center text-4xl font-bold">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            TESTIMONIALS
          </motion.div>
        </p>
      </div>
    </div>
  );
};

export default TestimonialsHeader;
