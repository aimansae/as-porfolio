import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Link as LinkIcon, X } from "lucide-react";
import { ProjectType } from "../types";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

type ProjectModalProps = {
  project: ProjectType;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};
const ProjectModal = ({
  project,
  onClose,
  onNext,
  onPrev,
}: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative flex flex-col bg-gray-900 rounded-2xl shadow-xl max-w-4xl w-11/12 max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link
            title="Deployed Site"
            href={project.deployedSite}
            className="flex items-center gap-2  hover:text-purple-300 transition-colors capitalize text-2xl font-bold text-purple-500"
          >
            <LinkIcon />
            <h2 className=""> {project.title}</h2>
          </Link>

          <button
            onClick={onClose}
            className="p-1 rounded-md   hover:border-purple-400 hover:border text-gray-600 hover:text-purple-300  transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="text-gray-200  flex flex-col md:flex-row gap-0 sm:gap-10 p-8">
          {/* Description */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold  ">Overview</h3>
            <p className=" ">{project.description}</p>
            <p className=" ">{project.fullDescription}</p>

            {/* Tech stack */}
            <div>
              <h4 className="font-semibold underline ">Tech Stack</h4>
              <ul className="list-disc list-inside   text-sm mt-2">
                {project.techStack?.map((stack, i) => (
                  <li key={i}>
                    <span>{stack}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/*Find out more*/}
            <div>
              <h4 className="font-semibold">Find out more:</h4>
              <div className="flex items-center gap-4 my-4">
                <Link
                  className="items-center gap-2 flex py-3 px-4 rounded-md text-xs bg-primary-500/20 text-purple-200 border border-purple-500/30 hover:border-purple-600  "
                  href={project.deployedSite}
                >
                  <FaGithub className="text-gray-200 font-bold" />
                  Live site
                </Link>
                <Link
                  className="items-center gap-2 flex py-3 px-4 rounded-md text-xs bg-primary-500/20 text-purple-200 border border-purple-500/30 hover:border-purple-600  "
                  href={project.githubRepo}
                >
                  <IoRocketOutline className="text-gray-200 font-bold" />
                  Github
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full w-full gap-10 md:flex-1">
            <div className="relative w-full  h-64 md:full    ">
              <Image
                fill
                className="  object-contain h-auto "
                alt={project.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={project.image || ""}
              />
            </div>
            <div className="hidden md:flex relative w-full  h-96 md:w-full  ">
              <Image
                fill
                className="  object-contain "
                alt={project.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={project.imageMobile || ""}
              />
            </div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-1] md:right-2">
          <button
            onClick={onPrev}
            className=" shadow-md hover:shadow-lg p-1 text-purple-700 hover:text-gray-200"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-1 md:right-2">
          <button
            onClick={onNext}
            className=" shadow-md hover:shadow-lg p-1 text-purple-700 hover:text-gray-200"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
