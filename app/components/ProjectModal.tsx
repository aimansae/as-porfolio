import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { StaticImageData } from "next/image";

type ProjectInfo = {
  id: number;
  title: string;
  tags: string[];
  description?: string;
  fullDescription?: string;
  image?: string | StaticImageData;
  techStack?: string[];
};
type Props = {
  project: ProjectInfo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};
const ProjectModal = ({ project, onClose, onNext, onPrev }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative flex flex-col bg-gray-900 rounded-2xl shadow-xl max-w-4xl w-11/12 max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="capitalize text-2xl font-bold text-purple-600">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="text-gray-200  flex flex-col md:flex-row gap-10 p-6">
          {/* Description */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold  ">Overview</h3>
            <p className=" ">{project.description}</p>
            <p className=" ">{project.fullDescription}</p>

            {/* Tech stack */}
            <div>
              <h4 className="font-semibold  ">Tech Stack</h4>
              <ul className="list-disc list-inside   text-sm mt-2">
                {project.techStack?.map((stack, i) => (
                  <li key={i}>
                    <span>{stack}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full  h-64 md:w-1/2  ">
            <Image
              fill
              className="rounded-xl object-cover "
              alt={project.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={project.image || ""}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-2">
          <button
            onClick={onPrev}
            className="bg-white shadow-md hover:shadow-lg rounded-full p-2 border border-gray-200 text-gray-700 hover:text-black"
          >
            Prev
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-2">
          <button
            onClick={onNext}
            className="bg-white shadow-md hover:shadow-lg rounded-full p-2 border border-gray-200 text-gray-700 hover:text-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
