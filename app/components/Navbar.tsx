"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT ME", href: "/about" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT ME", href: "/contact" },
  ];
  return (
    <header className="md:border-b border-white/10  ">
      <div className="flex items-center justify-between max-w-xl sm:max-w-5xl lg:max-w-4xl mx-auto  px-6  py-3 md:pl-30">
        <Link
          href="/"
          className="text-[18px] font-extrabold tracking-[0.22em] text-white   md:mr-0"
        >
          A.S
        </Link>
        {/*Desktop links*/}
        <nav className="hidden items-center gap-8 md:flex bg-red-green-200">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-white transition hover:text-orange-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/*Menu small devices*/}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md md:hidden md:h-12 md:w-12 lg:hidden  "
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute  top-5 z-100 w-full  h-dvh rounded-2xl border border-white/10 bg-black/80  p-5 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold tracking-wide text-white/90 transition hover:text-orange-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
