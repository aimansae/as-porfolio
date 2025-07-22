import React from "react";

const Header = () => {
  return (
    <header className="relative ">
      <div className="opacity-10">
        <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-purple-700/50 rounded-full blur-3xl"></div>
        <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-purple-500/60 rounded-full blur-2xl"></div>
        <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-purple-400/70 rounded-full blur-xl"></div>
      </div>
      <h1 className="my-4 text-4xl font-bold -tracking-tight">
        Aiman Saeed -{" "}
        <span className="text-purple-600">Junior Software Developer</span>
      </h1>
      <p className="text-xl  text-gray-300 leading-8">
        I design and build responsive, user-friendly web interfaces using modern
        technologies like Next.js, TypeScript, and Tailwind CSS. Passionate
        about clean code and intuitive UX.
      </p>
      <div className="flex mt-10 gap-4">
        <button className="bg-purple-600 font-medium hover:bg-purple-500 px-8 py-3 rounded-lg ">
          About me
        </button>
        <button className="font-medium hover:bg-purple-500 px-8 py-3 rounded-lg border  border-gray-600">
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;
