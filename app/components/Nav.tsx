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
    <nav className="relative px-8 py-4     flex items-center   justify-between   bg-gray-950 duration-200 text-gray-200   border-gray-200 ">
      <div className="flex items-center justify-end  w-full md:hidden ">
        <button
          className=" active:border rounded active:border-gray-600  purple-600/50transform hover:cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AlignJustify size={28} />
        </button>
      </div>
      {/*Mobile dark overlay*/}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 z-40"
        ></div>
      )}
      {/*Mobile Menu*/}

      {isOpen && (
        <div
          ref={mobileRef}
          className="  p-4  shadow w-2/3 h-screen    transition md:hidden absolute top-0 left-0 flex flex-col bg-gray-950 border-r border-gray-600   z-50 text-gray-200"
        >
          <div className="flex  justify-between items-center     ">
            <Link
              onClick={() => setIsOpen(false)}
              href="/"
              className="h-8 w-10 text-md relative aspect-square  active:ring-1 active:ring-purple-500 "
            >
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
                className="active:border-purple-600/50 hover:text-purple-400 p-1 rounded md:hidden text-white border border-gray-600 hover:border-purple-500/50 transition-colors"
              />
            </button>
          </div>
          <ul className="mt-6 capitalize overflow-y-auto  flex flex-col   flex-1   ">
            {content.navLinks.map((link, i) => (
              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer py-4 px-2 transition-colors w-full hover:bg-purple-600/30 active:bg-purple-600/50  "
                key={i}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Footer className="text-xs" />
          </div>
        </div>
      )}
      {/*Desktop menu*/}
      <div className="hidden md:flex justify-between items-center container mx-auto p-4  sm:px-20 ">
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
