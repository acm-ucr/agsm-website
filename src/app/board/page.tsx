"use client";
import { motion } from "motion/react";
import BoardMap from "@/components/board/BoardMap";
import Header from "@/components/Header";

export default function BoardPage() {
  return (
    <div className="flex w-full flex-col">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1}}
        transition={{duration: 0.8}}
        >
      <Header text={"MEET THE BOARD"} />
    </motion.div>
    <BoardMap />
    </div>
  );
}
