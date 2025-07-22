"usr client";

import React from "react";
import Link from "next/link";
import content from "@/app/data/home.json";

const Nav = () => {
  return (
    <nav className="w-full md:max-w-7xl mx-auto p-2 bg-green-400">
      <ul className="flex items-center justify-between bg-pink-500">
        {content.navLinks.map((link, i) => (
          <li className=" " key={i}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
