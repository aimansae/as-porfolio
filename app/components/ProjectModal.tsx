"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { projects } from "@/app/data/projectData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { Loader2 } from "lucide-react";
const ProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const currentProject = projects.find((p) => p.id === selectedProject);

  const handleNextProjectClick = () => {
    if (selectedProject === null) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex].id);
    setIsLoading(true);
  };

  const handlePrevProjectClick = () => {
    if (selectedProject === null) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex].id);
    setIsLoading(true);
  };

  return (
    <section className="py-16 sm:py-32" id="projects">
      <h2 className="mb-6 text-xl font-bold text-white sm:mb-12 sm:text-3xl">
        Featured projects
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => {
              setSelectedProject(project.id);
              setOpen(true);
            }}
            className="rounded-lg border border-gray-500/50 bg-gray-600/30 p-5 text-left transition-colors backdrop:blur-sm hover:border-purple-500/50 hover:shadow-sm sm:p-6"
          >
            <div className="flex h-full w-full flex-col hover:cursor-pointer">
              <h3 className="mb-2 text-lg font-semibold text-white hover:underline">
                {project.title}
              </h3>
              <ul className="mt-auto flex flex-wrap gap-1">
                {project.tag.map((tag, i) => (
                  <li
                    className="bg-primary-500/20 rounded-full border border-purple-500/30 px-2 py-0.5 text-xs text-purple-200"
                    key={i}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        {currentProject && (
          <DialogContent className="custom-scrollbar max-h-[85vh] w-11/12 max-w-4xl overflow-y-auto rounded-2xl bg-gray-900 shadow-xl">
            <DialogHeader className="relative">
              <DialogTitle className="px-4 text-xl">
                {currentProject.title}
              </DialogTitle>
              {/* Navigation Buttons */}
              {/* Navigation Buttons */}
            </DialogHeader>

            <DialogDescription className="flex flex-col gap-0 p-4 text-gray-200 sm:gap-10 md:flex-row">
              <div className="flex-1 space-y-4">
                <div className="relative">
                  {" "}
                  <h3 className="mb-4 text-lg font-semibold">Overview</h3>
                  <p>{currentProject.description}</p>
                  <p>{currentProject.fullDescription}</p>
                </div>

                <div className="absolute top-1/2 left-[-1] -translate-y-1/2 md:right-2">
                  <button
                    onClick={handlePrevProjectClick}
                    className="p-1 text-purple-700 shadow-md hover:text-gray-200 hover:shadow-lg"
                  >
                    <ChevronLeft />
                  </button>
                </div>
                <div className="absolute top-1/2 right-1 -translate-y-1/2 md:right-2">
                  <button
                    onClick={handleNextProjectClick}
                    className="p-1 text-purple-700 shadow-md hover:text-gray-200 hover:shadow-lg"
                  >
                    <ChevronRight />
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold underline">Tech Stack</h4>
                  <ul className="mt-2 list-inside list-disc text-sm">
                    {currentProject.techStack?.map((stack, i) => (
                      <li key={i}>{stack}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Find out more:</h4>
                  <div className="my-4 flex items-center gap-4">
                    <Link
                      href={currentProject.deployedSite}
                      className="bg-primary-500/20 flex items-center gap-2 rounded-md border border-purple-500/30 px-4 py-3 text-xs text-purple-200 hover:border-purple-600"
                    >
                      <FaGithub className="font-bold text-gray-200" />
                      Live site
                    </Link>
                    <Link
                      href={currentProject.githubRepo}
                      className="bg-primary-500/20 flex items-center gap-2 rounded-md border border-purple-500/30 px-4 py-3 text-xs text-purple-200 hover:border-purple-600"
                    >
                      <IoRocketOutline className="font-bold text-gray-200" />
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-full flex-col gap-10 md:flex-1">
                <div className="relative h-64 w-full">
                  {isLoading && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-gray-800">
                      <Loader2 className="h-6 w-6 animate-spin text-purple-500" />
                    </div>
                  )}
                  <Image
                    onLoad={() => setIsLoading(false)}
                    fill
                    className="h-auto object-contain"
                    alt={currentProject.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={currentProject.image || ""}
                  />
                </div>
                <div className="relative hidden h-96 w-full md:flex">
                  <Image
                    fill
                    className={`h-auto object-contain transition-opacity duration-300 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    alt={currentProject.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={currentProject.imageMobile || ""}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectModal;
