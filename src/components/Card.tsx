"use client";
import Image from "next/image";
import React from "react";
import { easeIn, motion } from "framer-motion";
const Card = () => {
  return (
    <div className="w-full h-[550px]">
      <div className="flex-1 h-full border  border-black/20 shadow-xl rounded-xl w-full relative  overflow-hidden cursor-pointer">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5, ease: easeIn }}
          className="w-full h-full relative"
        >
          <Image
            src="/poster-3.webp"
            fill
            className="rounded-xl object-cover"
            alt="Travis Scott Poster"
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <p className="text-2xl tracking-tight font-bold">TRAVIS SCOTT</p>
        <p className="text-2xl font-bold text-red-400">$19</p>
      </div>
    </div>
  );
};

export default Card;
