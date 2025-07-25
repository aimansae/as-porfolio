import React from "react";

const Header = () => {
  return (
    <header className="relative ">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900 opacity-25 rounded-full blur-[180px]" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-purple-800 opacity-20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-15%] left-[20%] w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full blur-[120px] mix-blend-lighten	" />

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
