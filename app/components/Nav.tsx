"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import content from "@/app/data/home.json";
import { AlignJustify, X } from "lucide-react";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    <nav className="relative      p-4    flex items-center   justify-between   bg-gray-950 duration-200 text-gray-200   border-gray-200 ">
      <div>
        <button
          className=" hover:border-purple-500/50 border rounded transform hover:cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AlignJustify className="p-1  text-2xl md:hidden   " />
        </button>
      </div>
      {/*Mobile Menu*/}
      {isOpen && (
        <div
          ref={mobileRef}
          className="gap-8 shadow w-2/3 min-h-screen transition md:hidden absolute top-0 left-0 flex flex-col bg-gray-950 border-r border-gray-600   z-50 text-gray-200"
        >
          <div className="flex justify-between items-center  px-4 py-5  ">
            <Link href="/" className=" text-md relative aspect-square  w-9 h-6">
              <Image
                fill
                alt="logo"
                src="/assets/logo.png"
                className="object-cover "
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-end cursor-pointer"
            >
              <X
                size={24}
                className=" hover:text-purple-400 p-1 rounded md:hidden text-white border border-gray-600 hover:border-purple-500/50 transition-colors"
              />
            </button>
          </div>
          <ul className="capitalize  flex flex-col   flex-1   ">
            {content.navLinks.map((link, i) => (
              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer p-4 transition-colors w-full hover:bg-purple-600/30"
                key={i}
              >
                <Link href={link.href}>A{link.label}</Link>
              </li>
            ))}
          </ul>

          <Footer className="bg-" />
        </div>
      )}
      {/*Desktop menu*/}
      <div className="hidden md:flex justify-between items-center container mx-auto ">
        <Link href="/" className=" text-md relative aspect-square  w-12 h-12">
          <Image
            fill
            alt="logo"
            src="/assets/logo.png"
            className="object-cover "
          />
        </Link>
        <ul className="capitalize  text-gray-200 flex justify-between items-center gap-6   ">
          {content.navLinks.map((link, i) => (
            <li
              className={`${pathName === link.href ? "shadow-white  shadow-2xl text-purple-400" : ""} text-md   hover:transition-colors hover:text-purple-400`}
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
