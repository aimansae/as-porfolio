import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
 import { FaJs } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100dvh-120px)] w-full items-center justify-center overflow-hidden md:mx-auto md:max-w-5xl">
      {/* Background image */}
      <Image
        src="/assets/backgroundImg.png"
        alt="Aiman Saeed"
        fill
        priority
        className="object-cover object-[68%_22%] md:object-contain md:object-right"
      />
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/55 md:bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,,transparent_22%)]" />
      {/*Content*/}
      <div className="z-20 items-center justify-center border-yellow-200/20 px-6  grid   grid-cols-3 lg:px-0">
        <div className=" col-span-2 flex flex-col gap-6">
          <h1 className="leading-none font-extrabold text-[#f2cbaa] uppercase text-2xl md:text-3xl lg:text-4xl tracking-wide">
            AIMAN SAEED
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-[#e79b62] uppercase lg:text-3xl">
            FRONTEND DEVELOPER
          </h2>

          <p className="max-w-[430px] text-base text-white/90 md:text-xl">
            I craft high-performance, responsive websites with modern,
            user-friendly interfaces and clean, maintainable code.
          </p>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:text-orange-400">
              <FaJs size={24} />
            </Link>
            <Link href="#" className="text-[#0A66C2] hover:opacity-80">
              <IoLogoHtml5  size={24} />
            </Link>
            <Link href="#" className="text-[#3b82f6] hover:opacity-80">
              <SiTypescript size={24} />
            </Link>
            <Link href="#" className="text-[#1d9bf0] hover:opacity-80">
              <FaReact size={22} />
            </Link>
            <Link href="#" className="text-[#facc15] hover:opacity-80">
              <TbBrandNextjs  size={24} />
            </Link>
          </div>

          <div className=" ">
            <Link
              href="/projects"
              className="inline-flex items-center gap-4 rounded-md border border-orange-500/70 bg-gradient-to-b from-orange-500/10 to-transparent px-3 py-2 text-sm font-extrabold tracking-wide text-white uppercase shadow-[0_0_10px_rgba(255,115,0,0.6),0_0_25px_rgba(255,115,0,0.4),inset_0_0_8px_rgba(255,115,0,0.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(255,115,0,0.9),0_0_40px_rgba(255,115,0,0.6),inset_0_0_10px_rgba(255,115,0,0.7)]"
            >
              view projects
              <FaArrowRightLong />
            </Link>
          </div>
        </div>

        <div />
      </div>
    </section>
  )
}
