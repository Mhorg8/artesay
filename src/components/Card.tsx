"use client";
import Image from "next/image";
import React from "react";
import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import { CardType } from "../../types";

interface CardProps {
  card: CardType;
}

const Card = ({ card }: CardProps) => {
  return (
    <Link href={`/product/${card.id}`} className="w-full h-[400px]">
      <div className="flex-1 h-full border  border-black/20 shadow-xl rounded-xl w-full relative  overflow-hidden cursor-pointer">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5, ease: easeIn }}
          className="w-full h-full relative"
        >
          <Image
            src={card.image}
            fill
            className="rounded-xl object-cover"
            alt="Travis Scott Poster"
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <p className="text-2xl tracking-tight font-bold">{card.name}</p>
        <p className="text-2xl font-bold text-red-400">${card.price}</p>
      </div>
    </Link>
  );
};

export default Card;
