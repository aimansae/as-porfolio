"use client";

import React, { useState } from "react";
import { projects } from "../data/projectData";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaGithub } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const current = projects.find((p) => p.id === selectedProject);
  const [isOpen, setIsOpen] = useState(false);
  const currentIndex = projects.findIndex((p) => p.id === selectedProject);
  const [showMobileImg, setShowMobileImg] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadGalleryImg, setLoadGalleryImg] = useState<Record<number, boolean>>(
    {},
  );
  const handleNextProjectClick = () => {
    if (projects.length === 0) return;

    const next = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[next].id);
    setShowMobileImg(false);
  };
  const handlePrevProjectClick = () => {
    const prev = (currentIndex - 1) % projects.length;
    setSelectedProject(prev);
    setShowMobileImg(false);
  };
  return (
    <section className="flex flex-col gap-4 pb-4 md:gap-6">
      <h3 className="[font-family:var(--font-bungee)] text-xl tracking-wide sm:text-2xl md:my-4">
        Projects
      </h3>
      <div className="relative flex items-center justify-center">
        <div className="h-full w-full columns-2 space-y-3 sm:col-2 md:columns-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project.id);
                setIsOpen(true);
              }}
              className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-md border border-orange-400/60 shadow-[0_0_10px_rgba(251,146,60,0.5)] transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]"
            >
              {loadGalleryImg[project.id] !== false && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900/80">
                  <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
                </div>
              )}
              {/*overlay*/}
              <div className="absolute inset-0 bg-black/10"></div>
              {project.galleryImage && (
                <Image
                  width={800}
                  height={600}
                  src={project.galleryImage}
                  alt={project.title}
                  sizes="100vw"
                  unoptimized
                  onLoad={() =>
                    setLoadGalleryImg((prev) => ({
                      ...prev,
                      [project.id]: false,
                    }))
                  }
                  className="h-auto w-full transform object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center px-1 opacity-0 group-hover:opacity-100">
                <span className="bg-gray-900/80 [font-family:var(--font-roboto)] text-[8px] font-bold tracking-wider underline sm:p-1 sm:text-xs">
                  {" "}
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*modal*/}
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="max-h-[85vh] w-11/12 max-w-4xl overflow-y-auto rounded-2xl bg-[#080808]/95 [font-family:var(--font-roboto)] text-gray-200 shadow-xl md:h-min">
          {current ? (
            <div>
              {/* Header */}
              <DialogHeader className="relative mb-6">
                <DialogTitle className="flex items-center [font-family:var(--font-bungee)] text-2xl tracking-wide text-gray-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:text-3xl md:text-4xl">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={current.deployedSite}
                  >
                    {" "}
                    <span className="hover:underline">{current.title}</span>
                  </Link>
                </DialogTitle>
              </DialogHeader>

              <div className="gap-6 p-4 text-gray-200">
                {/* Left column */}
                <div className="flex flex-col gap-4">
                  <div className="space-y-4">
                    <h3 className="border-b border-orange-500/50 pb-2 text-xl font-bold text-gray-300 uppercase sm:text-2xl">
                      Overview
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {current.fullDescription?.map((line, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1 text-sm leading-relaxed sm:text-base"
                        >
                          <span className="text-orange-500">🔸</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prev / Next arrows */}
                  <div className="absolute top-1/2 left-2 -translate-y-1/2">
                    <button
                      onClick={handlePrevProjectClick}
                      className="cursor-pointer rounded-full bg-gray-800/60 p-2 shadow-md transition hover:bg-[#da5824]/70"
                    >
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </div>
                  <div className="absolute top-1/2 right-2 -translate-y-1/2">
                    <button
                      onClick={handleNextProjectClick}
                      className="cursor-pointer rounded-full bg-gray-800/60 p-2 shadow-md transition hover:bg-[#da5824]/70"
                    >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </div>
                </div>

                {/* Right column */}
                <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-start">
                  {/* Tech stack */}
                  <div className="md:w-1/3">
                    <h4 className="border-b border-orange-400/50 pb-2 text-xl font-bold text-gray-300 uppercase">
                      Tech Stack
                    </h4>
                    <ul className="mt-3 list-inside list-disc space-y-2 text-sm tracking-wide sm:text-base">
                      {current.tag?.map((tag, i) => {
                        const Icon = tag.icon;

                        return (
                          <li
                            key={i}
                            className="group flex cursor-pointer items-center gap-2"
                          >
                            {Icon && (
                              <Icon
                                className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 hover:rotate-6 ${tag.className}`}
                              />
                            )}
                            <span>{tag.label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Screenshot(s) */}
                  <div className="relative flex-1 cursor-pointer space-y-4">
                    {current.imageMobile && showMobileImg ? (
                      <div
                        onClick={() => setShowMobileImg((prev) => !prev)}
                        className="group relative h-52 w-full overflow-hidden rounded-lg p-2 shadow-lg transition-all duration-500 hover:shadow-orange-500/20 sm:h-72"
                      >
                        <Image
                          fill
                          alt={current.title}
                          src={current.imageMobile}
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 70vw, 
         50vw"
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowMobileImg((prev) => !prev)}
                        className="group bg- relative h-52 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-orange-500/20 sm:h-72"
                      >
                        <Image
                          onLoad={() => setLoading(false)}
                          sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 70vw, 
         50vw"
                          alt={current.title}
                          fill
                          src={current.image || ""}
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        {loading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                            <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer links */}
                <div>
                  <h4 className="mt-6 text-base font-semibold text-gray-300 uppercase sm:text-lg">
                    Find out more:
                  </h4>
                  <div className="mt-3 grid w-max grid-cols-2 gap-4">
                    <Link
                      href={current.deployedSite}
                      className="flex items-center gap-1 rounded-md bg-[#b93a08]/80 px-4 py-2 text-sm font-medium text-white shadow-[0_0_10px_rgba(255,255,255,0.6)] transition hover:bg-[#b93a08] sm:text-base"
                    >
                      <IoRocketOutline className="whitespace-nowrap" /> Live
                    </Link>
                    <Link
                      href={current.githubRepo}
                      className="flex items-center gap-1 rounded-md border border-gray-700 bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-[0_0_10px_rgba(255,255,255,0.6)] transition hover:bg-gray-800 sm:text-base"
                    >
                      <FaGithub className=" " /> GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
