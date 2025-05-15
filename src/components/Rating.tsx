"use client";
import React, { useState } from "react";
import { LuStar } from "react-icons/lu";

const Rating = () => {
  const [rate, setRate] = useState<number>(0);

  function handleRatting(i: number) {
    setRate(i);
  }

  return (
    <div className="flex items-center gap-1 mt-2">
      {Array.from({ length: 5 }, (_, i) => (
        <LuStar
          onClick={() => handleRatting(i)}
          key={i}
          size={18}
          className={`${
            rate >= i && "fill-yellow-500"
          } text-yellow-500 cursor-pointer`}
        />
      ))}
    </div>
  );
};

export default Rating;
