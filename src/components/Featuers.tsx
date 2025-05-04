"use client";
import { features } from "@/constants";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Features = () => {
  const featureRef = useRef<HTMLDivElement | null>(null);
  const [featureWidth, setFeatureWidth] = useState<number>(0);
  const [isHoverd , setIsHoverd] = useState<number>(0)
  useEffect(() => {
    const updateWidth = () => {
      if (featureRef.current) {
        setFeatureWidth(featureRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function handleMouseOver (id : number) {
    setIsHoverd(id)
  }
  function handleMouseLeave (id : number) {
    setIsHoverd(0)
  }
  return (
    <div className="w-full max-w-[96%] mx-auto min-h-[100dvh] relative mt-20">
      <Image
        src="/banner.jpg"
        alt="Feature Banner"
        fill
        className="object-cover rounded-xl w-full h-full"
      />

      <div className="absolute bottom-5 left-0 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {features.map((feature) => (
          <div
            style={{backgroundColor : feature.id === isHoverd ? "#fff" : ""}}
            key={feature.id}
            ref={featureRef}
            className="p-1 flex-1 bg-red-200/10 backdrop-blur-md h-full flex items-center rounded-full justify-between"
          >
            <h4  className={`mx-4 capitalize ${feature.id === isHoverd ? 'text-black' : 'text-white'}  text-lg font-bold`}>
              {feature.title}
            </h4>
            <motion.div
            onMouseEnter={() => handleMouseOver(feature.id)}
            onMouseLeave={() =>handleMouseLeave(feature.id)}
              whileHover={{ x: -(featureWidth - 80) }}
              transition={{duration : 0.6 , delay : 0.2}}
              style={{ backgroundColor: feature.bgColor }}
              className="w-[70px] h-[70px] rounded-full flex items-center justify-center cursor-pointer"
            >
              <div className="text-white text-base font-bold">
                {feature.icon && <feature.icon size={24} />}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
