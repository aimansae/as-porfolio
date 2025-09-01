"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Intro from "../components/Intro";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const divPosition = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - divPosition.left,
      y: e.clientY - divPosition.top,
    });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 px-4">
      <div className="flex items-center justify-center">
        {/*Left*/}
        <div className="relative z-40 flex w-full flex-col items-start justify-between gap-4 md:w-1/2">
          <h1 className="[font-family:var(--font-bungee)] text-2xl leading-relaxed tracking-wider text-gray-200 uppercase sm:text-3xl md:text-4xl">
            <span className="block">aiman</span>
            <span className="block">saeed</span>
          </h1>
          <h2 className="z-40 [font-family:var(--font-bungee)] sm:text-2xl">
            Junior - <br />
            frontend
            <br /> developer
          </h2>
          <Intro />
          <div className="z-40 my-2">
            <Link
              href="/projects"
              className="flex items-center bg-[#bc4414] p-2 [font-family:var(--font-bungee)] text-xs hover:bg-[#993209] sm:w-30 sm:text-base"
            >
              projects
              <IoIosArrowRoundForward className="animate-arrow text-xl font-bold" />
            </Link>
          </div>
        </div>
        {/*Right Image*/}
        <div
          className="relative z-20 flex h-full w-full items-center justify-center md:h-[500px] lg:h-[500px] lg:justify-end xl:h-[400px]"
          onMouseMove={onMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/assets/avatar.png"
            alt=""
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className={`mask max-h-full object-cover transition duration-500 ${
              hovered ? " " : "brightness-75"
            }`}
          />{" "}
          {hovered && (
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle 40px at ${mousePos.x}px ${mousePos.y}px,
 rgba(255,255,255,1) 0%,
    rgba(255,255,255,0.8) 60%,
    rgba(255,255,255,0) 100%`,
                mixBlendMode: "overlay",
              }}
            ></div>
          )}
        </div>
      </div>
      <div className="py-2 tracking-wide md:hidden">
        <p className="[font-family:var(--font-roboto)] text-xs font-semibold sm:text-base">
          I design and build responsive, user-friendly web interfaces using
          modern technologies. Passionate about clean code and new learnings.
        </p>
      </div>
    </div>
  );
};

export default Hero;
