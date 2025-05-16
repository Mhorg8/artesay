"use client";
import Image from "next/image";
import React from "react";
import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import { CardType } from "../types";
import Rating from "./Rating";

interface CardProps {
  card: CardType;
  type?: "primary" | "secondary";
}

const Card = ({ card, type = "primary" }: CardProps) => {
  if (type === "primary") {
    return (
      <div className="w-full h-[400px]">
        <Link
          href={`/product/${card.id}`}
          className="flex-1 h-full border block  border-black/20 shadow-xl rounded-xl w-full relative  overflow-hidden cursor-pointer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: easeIn }}
            className="w-full h-full relative"
          >
            <Image
              src={card.image}
              fill
              className="rounded-xl object-cover"
              alt="Travis Scott Poster"
            />
          </motion.div>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <p className="text-2xl tracking-tight font-bold capitalize">
            {card.name}
          </p>
          <p className="text-2xl font-bold text-red-400">${card.price}</p>
        </div>
      </div>
    );
  }

  if (type === "secondary") {
    return (
      <div className="h-[400px] w-full block">
        <div className=" w-full h-full">
          <Link
            href={`/product/${card.id}`}
            className="w-full h-2/3 relative block"
          >
            <Image
              src={card.image}
              alt={card.name}
              fill
              sizes="fill"
              className="object-cover rounded-md shadow-2xl"
            />
          </Link>

          <div className="w-full h-1/3 p-3  overflow-hidden ">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold capitalize">{card.name}</h3>
              <Rating />
            </div>

            <div className="">
              <p className="line-clamp-3  text-sm text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur officiis distinctio nobis architecto voluptatum?
                Sint perspiciatis blanditiis harum praesentium, quidem sunt
                quasi officiis,?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
