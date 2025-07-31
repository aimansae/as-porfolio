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
      <h2 className="text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-12">
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
            className="text-left hover:shadow-sm rounded-lg p-5 sm:p-6 border border-gray-500/50 hover:border-purple-500/50 transition-colors backdrop:blur-sm bg-gray-600/30"
          >
            <div className="flex flex-col h-full w-full hover:cursor-pointer">
              <h3 className="hover:underline text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <ul className="flex flex-wrap gap-1 mt-auto">
                {project.tag.map((tag, i) => (
                  <li
                    className="px-2 py-0.5 rounded-full text-xs bg-primary-500/20 text-purple-200 border border-purple-500/30"
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
          <DialogContent className="  bg-gray-900 custom-scrollbar rounded-2xl shadow-xl max-w-4xl w-11/12 max-h-[85vh] overflow-y-auto">
            <DialogHeader className="relative">
              <DialogTitle className="px-4 text-xl">
                {currentProject.title}
              </DialogTitle>
              {/* Navigation Buttons */}
              {/* Navigation Buttons */}
            </DialogHeader>

            <DialogDescription className=" text-gray-200  flex flex-col md:flex-row gap-0 sm:gap-10 p-4">
              <div className="flex-1 space-y-4 ">
                <div className="relative ">
                  {" "}
                  <h3 className="text-lg font-semibold mb-4">Overview</h3>
                  <p>{currentProject.description}</p>
                  <p>{currentProject.fullDescription}</p>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 left-[-1] md:right-2">
                  <button
                    onClick={handlePrevProjectClick}
                    className="shadow-md hover:shadow-lg p-1 text-purple-700 hover:text-gray-200"
                  >
                    <ChevronLeft />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-1 md:right-2">
                  <button
                    onClick={handleNextProjectClick}
                    className="shadow-md hover:shadow-lg p-1 text-purple-700 hover:text-gray-200"
                  >
                    <ChevronRight />
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold underline">Tech Stack</h4>
                  <ul className="list-disc list-inside text-sm mt-2">
                    {currentProject.techStack?.map((stack, i) => (
                      <li key={i}>{stack}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Find out more:</h4>
                  <div className="flex items-center gap-4 my-4">
                    <Link
                      href={currentProject.deployedSite}
                      className="flex items-center gap-2 py-3 px-4 rounded-md text-xs bg-primary-500/20 text-purple-200 border border-purple-500/30 hover:border-purple-600"
                    >
                      <FaGithub className="text-gray-200 font-bold" />
                      Live site
                    </Link>
                    <Link
                      href={currentProject.githubRepo}
                      className="flex items-center gap-2 py-3 px-4 rounded-md text-xs bg-primary-500/20 text-purple-200 border border-purple-500/30 hover:border-purple-600"
                    >
                      <IoRocketOutline className="text-gray-200 font-bold" />
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full w-full gap-10 md:flex-1">
                <div className="relative w-full h-64">
                  {isLoading && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-800 rounded-xl">
                      <Loader2 className="animate-spin text-purple-500 w-6 h-6" />
                    </div>
                  )}
                  <Image
                    onLoad={() => setIsLoading(false)}
                    fill
                    className="object-contain h-auto"
                    alt={currentProject.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={currentProject.image || ""}
                  />
                </div>
                <div className="hidden md:flex relative w-full h-96">
                  <Image
                    fill
                    className={`object-contain h-auto transition-opacity duration-300 ${
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
