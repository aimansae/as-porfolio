"usr client";

import React from "react";
import Link from "next/link";
import content from "@/app/data/home.json";

const Nav = () => {
  return (
    <nav className="w-full md:max-w-7xl mx-auto p-2 bg-[#121212]  border-[#33353F]">
      <ul className="flex items-center justify-between  ">
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
