import { IconType } from "react-icons";

export type ProjectType = {
  id: number;
  title: string;
  githubRepo: string;
  deployedSite: string;
  description: string;
  fullDescription: string[];
  image?: string;
  imageMobile?: string;
  galleryImage?: string;
  tag: { label: string; icon?: IconType; className?: string }[];
  techStack?: string[];
};
