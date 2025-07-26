"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import content from "@/app/data/home.json";
import { AlignJustify, X } from "lucide-react";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  console.log("currentpath", pathName);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }; //close mobile Nav if clicked outside
    //
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative  border-b border-b-gray-600 p-4    flex items-center   justify-between   bg-gray-950">
      <div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <AlignJustify className="p-1 rounded md:hidden text-white  border border-gray-600 hover:border-purple-500/50 transition-colors " />
        </button>
      </div>
      {/*Mobile Menu*/}
      {isOpen && (
        <div
          ref={mobileRef}
          className="gap-12 border-b border-b-gray-600 w-2/3 min-h-screen transition md:hidden absolute top-0 left-0 flex flex-col   bg-gray-900   z-50 text-white"
        >
          <div className="flex justify-between py-5 px-4 bg-gray-950">
            <Link href="/" className=" text-md">
              Logo
            </Link>
            <button onClick={() => setIsOpen(false)} className="flex-end">
              <X
                size={24}
                className=" hover:text-purple-400 p-1 rounded md:hidden text-white border border-gray-600 hover:border-purple-500/50 transition-colors"
              />
            </button>
          </div>
          <ul className="capitalize  flex flex-col   flex-1 gap-4  ">
            {content.navLinks.map((link, i) => (
              <li
                className="cursor-pointer px-4 py-2 w-full hover:bg-gray-600/30"
                key={i}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <Footer />
        </div>
      )}
      {/*Desktop menu*/}
      <div className="hidden md:flex justify-between items-center container mx-auto ">
        <Link href="/" className="hidden md:block text-3xl">
          Logo
        </Link>
        <ul className="capitalize   flex justify-between items-center gap-6   ">
          {content.navLinks.map((link, i) => (
            <li
              className={`${pathName === link.href ? "underline text-purple-400" : ""} text-xl   hover:transition-colors hover:text-purple-400`}
              key={i}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
