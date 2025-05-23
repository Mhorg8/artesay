import { auth } from "@/app/auth";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navmenu = async () => {
  const session = await auth();

  return (
    <ul className="hidden md:flex items-center text-white">
      {navLinks.map((link) => (
        <Link
          href={link.path}
          key={link.id}
          className="px-3 border-e uppercase font-medium border-e-white/20 last:border-e-0  text-lg hover:text-red-400 hoverEffect"
        >
          {link.title}
        </Link>
      ))}
      <Link
        href={session ? "/profile" : "/login"}
        className="px-3 border-e uppercase font-medium border-e-white/20 last:border-e-0  text-lg hover:text-red-400 hoverEffect"
      >
        {session ? "Profile" : "Login"}
      </Link>
    </ul>
  );
};

export default Navmenu;
