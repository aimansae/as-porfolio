"use client";
import React, { useState } from "react";
import { projects } from "@/app/data/projectData";
import ProjectModal2 from "./ProjectModal2";

const Project2 = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClickProject = (id: number) => {
    console.log("ID", id);
    setShowModal(true);
  };
  return (
    <div>
      <section className="py-16 sm:py-32" id="projects">
        <h2 className=" text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-12">
          Featured projects
        </h2>

        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <button
              onClick={() => handleClickProject(project.id)}
              className="text-left hover:shadow-sm rounded-lg p-5 sm:p-6 border border-gray-500/50 hover:border-purple-500/50 transition-colors backdrop:blur-sm bg-gray-600/30"
              key={i}
            >
              <div className="flex flex-col h-full w-full hover:cursor-pointer">
                <h3 className="hover:underline text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <ul className="flex flex-wrap gap-1 mt-auto">
                  {project.tag.map((tag, i) => (
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
          {showModal && <ProjectModal2 />}
        </div>
      </section>
    </div>
  );
};

export default Project2;
