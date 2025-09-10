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
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];

    setMousePos({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
  };
  return (
    <div className="flex w-full flex-col">
      {/* ---------- Mobile Layout (background image) ---------- */}
      <div className="relative flex h-full flex-col justify-around bg-black/40 bg-[url('/assets/avatar.png')] bg-contain bg-right bg-no-repeat p-4 bg-blend-multiply transition-colors hover:bg-black/10 md:hidden">
        <div className="w-1/2">
          <h1 className="[font-family:var(--font-bungee)] text-3xl tracking-wide sm:text-4xl">
            aiman saeed
          </h1>
        </div>

        <h2 className="[font-family:var(--font-bungee)] text-2xl leading-relaxed tracking-wide sm:text-4xl">
          Junior <br /> Frontend <br /> Developer
        </h2>

        <Intro />

        <div className="w-1/2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[#bc4414] px-4 py-3 [font-family:var(--font-bungee)] text-sm tracking-wide text-white uppercase shadow-md transition hover:scale-105 hover:bg-[#993209] sm:text-base"
          >
            <span className="tracking-wide">Projects</span>
            <IoIosArrowRoundForward className="animate-arrow text-xl font-bold" />
          </Link>
        </div>
      </div>

      {/* ---------- Desktop Layout (side by side) ---------- */}
      <div className="hidden w-full items-center justify-between px-8 md:flex lg:mx-auto lg:max-w-3xl lg:gap-8">
        {/* Left content */}
        <div className="z-40 flex w-1/2 flex-col gap-6 p-4">
          <h1 className="[font-family:var(--font-bungee)] text-4xl tracking-wide">
            aiman saeed
          </h1>

          <h2 className="[font-family:var(--font-bungee)] text-2xl leading-relaxed tracking-wide">
            Junior Frontend <br /> Developer
          </h2>

          <p className="[font-family:var(--font-roboto)] font-semibold">
            I design and build responsive, <br />
            user-friendly web interfaces <br />
            using modern technologies.
          </p>

          <Intro />

          <Link
            href="/projects"
            className="inline-flex w-max items-center gap-2 rounded-md bg-[#993209] px-4 py-3 [font-family:var(--font-bungee)] text-sm tracking-wide text-white uppercase shadow-md transition hover:scale-105 hover:bg-[#bc4414] sm:text-base"
          >
            <span className="tracking-wide">Projects</span>
            <IoIosArrowRoundForward className="animate-arrow text-xl font-bold" />
          </Link>
        </div>

        {/* Right image */}
        <div
          className="relative z-20 flex h-[70vh] w-1/2 overflow-hidden"
          onMouseMove={onMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={() => setHovered(true)}
          onTouchMove={onTouchMove}
          onTouchEnd={() => setHovered(false)}
        >
          <Image
            src="/assets/avatar.png"
            alt="avatar"
            fill
            priority
            sizes="(max-width: 1200px) 50vw, 600px"
            className={`mask object-contain transition duration-500 ${
              hovered ? "" : "brightness-75"
            }`}
          />
          {hovered && (
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle 40px at ${mousePos.x}px ${mousePos.y}px,
                rgba(255,255,255,1) 0%,
                rgba(255,255,255,0.8) 60%,
                rgba(255,255,255,0) 100%)`,
                mixBlendMode: "overlay",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Hero;
