"use client";

import { motion } from "motion/react";
import Card from "@/components/board/Card";
import Header from "@/components/board/Header";
import { board } from "@/data/Board";

import { executives } from "@/data/Board";
import { operations } from "@/data/Board";

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const BoardMap = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center py-8">
      <div className="flex w-screen flex-col items-center justify-center gap-16 py-16">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header title="Executives" />
        </motion.div>
        <div className="flex w-full flex-row flex-wrap justify-center gap-16">
          {executives.map((member) => (
            <Card image={member.image} name={member.name} role={member.role} />
          ))}
        </div>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header title="Operations" />
        </motion.div>
        <div className="flex w-full flex-row flex-wrap justify-center gap-16">
          {operations.map((member) => (
            <Card
              key={member.name}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header title="Marketing" />
          </motion.div>
          <div className="-ml-18 flex w-full flex-row justify-center gap-2">
            {board.slice(0, 1).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card key={index} name={name} role={position} image={image} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header title="Outreach" />
          </motion.div>
          <div className="-ml-18 flex w-full flex-row justify-center gap-2">
            {board.slice(1, 2).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card key={index} name={name} role={position} image={image} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header title="Finance" />
          </motion.div>
          <div className="-ml-18 flex w-full flex-row justify-center gap-2">
            {board.slice(2, 3).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card key={index} name={name} role={position} image={image} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header title="Communications" />
          </motion.div>
          <div className="-ml-18 flex w-full flex-row justify-center gap-2">
            {board.slice(3, 4).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card key={index} name={name} role={position} image={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMap;
