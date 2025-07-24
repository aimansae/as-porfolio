"use client";

import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import P1 from "@/public/assets/saw.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProjectClick = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject
    );

    if (currentIndex === -1) return null;

    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex].id);
  };

  const handlePrevProjectClick = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject
    );

    if (currentIndex === -1) return null;

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex].id);
  };
  const projects = [
    {
      id: 1,
      title: "title1dcfg ",
      tags: ["React", "Tailwind", "CSS"],
      description: "This project was made with ddfjvcskxmsdvf",
      fullDescription: "Full description here ghdncdvf",
      image: P1,
      techStack: ["React", "Tailwind", "CSS"],
    },
    {
      id: 2,
      title: "title2sdf ",
      tags: ["React", "Tailwind", "CSS"],
      image: "./",
    },
    { id: 3, title: "title3 ", tags: ["React", "Tailwind", "CSS"] },
    { id: 4, title: "title4 ", tags: ["React", "Tailwind", "CSS"] },
    { id: 5, title: "title5 ", tags: ["React", "Tailwind", "CSS"] },
    { id: 6, title: "title6 ", tags: ["React", "Tailwind", "CSS"] },
  ];
  const project = projects.find((project) => project.id === selectedProject)!;

  return (
    <section className="  py-32  ">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Featured projects
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, i) => (
          <button
            onClick={() => handleProjectClick(project.id)}
            className="text-left hover:shadow-sm rounded-lg p-6 border border-gray-500/50 hover:border-purple-500/50 transition-colors backdrop:blur-sm bg-gray-600/30"
            key={i}
          >
            <div className="flex flex-col h-full w-full">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
                 <ul className="flex flex-wrap gap-1 mt-auto">
                  {project.tags.map((tag, i) => (
                    <li
                      className="px-2 py-0.5 rounded-full text-xs bg-primary-500/20 text-purple-200 border border-purple-500/30  "
                      key={i}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
           </button>
        ))}
        {project && (
          <ProjectModal
            project={project}
            onClose={handleCloseModal}
            onNext={handleNextProjectClick}
            onPrev={handlePrevProjectClick}
          />
        )}
      </div>
    </section>
  );
};

export default Project;
