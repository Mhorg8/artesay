import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const ProductCommend = () => {
  return (
    <div className="w-full grid grid-cols-4 hover:bg-white transition-all duration-200 p-3 justify-between">
      <div className="w-full col-span-2 pr-4 line-clamp-3">
        <h4 className="text-black font-semibold">Mohammad</h4>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          reiciendis facere nihil beatae. Rerum atque voluptas facere, expedita
          molestias, excepturi omnis iusto, rem ipsa nam quasi saepe odio.
          Adipisci, magnam!
        </p>
      </div>
      <div className="col-span-2 md:col-span-1 flex h-full items-center justify-end md:justify-center gap-3">
        <button>
          <AiOutlineLike
            className=" hover:fill-green-500"
            cursor={"pointer"}
            size={22}
          />
        </button>
        <button className="">
          <AiOutlineDislike
            className=" hover:fill-red-500"
            cursor={"pointer"}
            size={22}
          />
        </button>
      </div>

      <div className="hidden md:flex md:col-span-1  h-full items-center justify-center">
        2025/5/20
      </div>
    </div>
  );
};

export default ProductCommend;
