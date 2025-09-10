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
    <nav
      className={`relative z-50 container mx-auto flex max-w-6xl items-center justify-between border-gray-200 p-4 [font-family:var(--font-bungee)] text-gray-200 duration-200 md:p-8 lg:p-4`}
    >
      <div className="z-50 flex w-full items-center justify-end md:hidden">
        <button
          className="rounded hover:cursor-pointer hover:text-orange-500/80 active:border active:border-gray-600"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AlignJustify size={28} />
        </button>
      </div>
      {/*Mobile dark overlay*/}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/80"
        ></div>
      )}
      {/*Mobile Menu*/}
      {isOpen && (
        <div
          ref={mobileRef}
          className="absolute top-0 left-0 z-50 flex h-screen w-2/3 flex-col border-r border-gray-600 bg-black text-gray-200 shadow transition md:hidden"
        >
          <div className="flex items-center justify-between p-4">
            <Link
              onClick={() => setIsOpen(false)}
              href="/"
              className="text-md relative aspect-square h-8 w-10 active:ring-1"
            >
              <span className="text-2xl uppercase">a.s</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-end cursor-pointer"
            >
              <X
                size={24}
                className="rounded border border-gray-600 p-1 text-white transition-colors hover:border-white hover:text-white md:hidden"
              />
            </button>
          </div>
          <ul className="flex flex-1 flex-col overflow-y-auto capitalize">
            {content.navLinks.map((link, i) => (
              <li
                onClick={() => setIsOpen(false)}
                className={`hover:bg-[#993209] ${pathName === link.href ? "bg-[#bc4414]/40" : ""} w-full cursor-pointer p-4 text-sm tracking-wide transition-colors sm:text-base`}
                key={i}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      )}
      {/*Desktop menu*/}
      <div className="hidden w-full items-center justify-between md:flex">
        <Link href="/" className="text-md relative aspect-square h-12 w-12">
          <span className="text-2xl uppercase">a.s</span>
        </Link>
        <ul className="flex items-center justify-between gap-6 text-gray-200 capitalize">
          {content.navLinks.map((link, i) => (
            <li
              className={`${pathName === link.href ? "text-[#da5824] shadow-2xl shadow-white" : ""} text-md hover:text-[#da5824] hover:transition-colors`}
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
