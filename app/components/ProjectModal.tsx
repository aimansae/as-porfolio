import React from "react";
import Image from "next/image";

type ProjectInfo = {
  id: number;
  title: string;
  tags?: string[];
};
type Props = {
  project: ProjectInfo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};
const ProjectModal = ({ project, onClose, onNext, onPrev }: Props) => {
  return (
    <div className="inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50 fixed ">
      <div>
        <h2>{project.title}</h2>
        <button onClick={onClose}>Close</button>
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default ProjectModal;
