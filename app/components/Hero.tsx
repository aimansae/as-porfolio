"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";

import Link from "next/link";
import { Monitor, Code2 } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
} from "react-icons/si";
const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  //blinking text

  // const text = "Projects";
  // const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (index < text.length) {
  //       setIndex(index + 1);
  //     } else setIndex(0);
  //   }, 200);

  //   return () => clearInterval(interval);
  // }, [index]);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const divPosition = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - divPosition.left,
      y: e.clientY - divPosition.top,
    });
    console.log("pos", mousePos);
  };

  return (
    <div className="flex flex-col px-4">
      <div className="flex items-center justify-center">
        <div className="relative z-40 flex w-full flex-col items-start justify-between gap-4 md:w-2/3">
          <h1 className="[font-family:var(--font-bungee)] text-2xl leading-relaxed tracking-wider text-gray-200 uppercase sm:text-3xl md:text-4xl">
            <span className="block">aiman</span>
            <span className="block">saeed</span>
          </h1>
          <h2 className="md:text-2lg z-40 [font-family:var(--font-bungee)] text-xl sm:text-2xl">
            Junior - <br />
            frontend developer
          </h2>
          <div className="z-40 my-2">
            <Link
              href="/projects"
              className="flex items-center bg-[#bc4414] p-2 [font-family:var(--font-bungee)] text-xs hover:bg-[#993209] sm:w-30 sm:text-base"
            >
              projects{" "}
              <IoIosArrowRoundForward className="animate-arrow text-xl font-bold" />
            </Link>{" "}
          </div>
          <div className="my-2 hidden p-2 tracking-wider md:block">
            <p className="[font-family:var(--font-roboto)] font-semibold">
              I design and build responsive, user-friendly web interfaces using
              modern technologies such as:
              <br />
              <span className="my-2">
                Next.js, TypeScript, and Tailwind CSS. <br />
                Passionate about clean code and new learnings.
              </span>
            </p>
            {/* Tech stack */}
            <div className="overflow-hidden">
              <div className="flex items-center gap-2">
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <SiNextdotjs className="h-6 w-6 text-white" />
                </Link>

                <Link
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <SiTypescript className="h-6 w-6 text-blue-500" />
                </Link>

                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <SiTailwindcss className="h-6 w-6 text-sky-400" />
                </Link>
                <Link
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <SiReact className="h-6 w-6 text-cyan-400" />
                </Link>

                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <SiJavascript className="h-5 w-5 text-yellow-400" />
                </Link>

                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <SiHtml5 className="h-6 w-6 text-orange-500" />
                </Link>

                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <SiCss3 className="h-6 w-6 text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative z-20 flex h-full w-full items-center justify-center sm:w-1/2"
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
            className={`mask object-cover transition duration-500 ${
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
      {/*Small devices*/}
      <div className="my-2 text-sm tracking-wider sm:text-base md:hidden md:text-xl">
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <span className="font-semibold">
            I design and build responsive, user-friendly web interfaces using
            modern technologies.
            <br /> Passionate about clean code and continuous learning.
          </span>
        </div>
      </div>
      {/* Tech stack */}
      <div className="my-4 w-1/2 overflow-hidden md:hidden">
        <div className="flex items-center gap-2">
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiNextdotjs className="h-6 w-6 text-white" />
          </Link>

          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiTypescript className="h-6 w-6 text-blue-500" />
          </Link>

          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiTailwindcss className="h-6 w-6 text-sky-400" />
          </Link>
          <Link
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiReact className="h-6 w-6 text-cyan-400" />
          </Link>

          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiJavascript className="h-5 w-5 text-yellow-400" />
          </Link>

          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiHtml5 className="h-6 w-6 text-orange-500" />
          </Link>

          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiCss3 className="h-6 w-6 text-blue-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
