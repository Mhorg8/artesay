import Link from "next/link";
import React from "react";
import Navmenu from "./Navmenu";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <div className="fixed top-5 left-3 px-3 py-3 rounded-md bg-black/20 right-3 w-[96%] mx-auto shadow-md flex items-center justify-between z-50 background-blur">
      <Navmenu />
      <Link
        href="/"
        className=" text-3xl text-white font-bold tracking-tighter"
      >
        ARTESAY
      </Link>
      <button className="flex items-center gap-1 bg-white hover:bg-red-400 hoverEffect font-bold text-sm md:text-lg  cursor-pointer p-1 hover:text-white group rounded-md">
        BUY NOW
        <span className="bg-red-400 p-2 rounded-md text-white group-hover:bg-white group-hover:text-red-400 hoverEffect">
          <FiShoppingBag />
        </span>
      </button>
    </div>
  );
};

export default Header;
