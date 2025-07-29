import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="relative overflow-hidden ">
      <h1 className="my-4 text-2xl sm:text-4xl font-bold -tracking-tight">
        Aiman Saeed-
        <span className="text-purple-600">Junior Software Developer</span>
      </h1>
      <p className="sm:text-xl  text-gray-300 sm:leading-8 ">
        I design and build responsive, user-friendly web interfaces using modern
        technologies like Next.js, TypeScript, and Tailwind CSS. Passionate
        about clean code and intuitive UX.
      </p>
      <div className=" flex-row  flex mt-10 gap-4 z-40">
        <Link
          href="/about"
          className="bg-purple-600 transition-colors cursor-pointer font-medium hover:bg-purple-700 py-2 px-4 sm:px-8 sm:py-3 rounded-lg whitespace-nowrap "
        >
          About me
        </Link>
        <Link
          href="/contact"
          className="transition-colors cursor-pointer font-medium hover:bg-gray-950 px-4  py-2  sm:px-8 sm:py-3 rounded-lg border whitespace-nowrap border-gray-600"
        >
          Contact me
        </Link>
      </div>
    </header>
  );
};

export default Header;
