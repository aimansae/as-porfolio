export type ProjectType = {
  id: number;
  title: string;
  githubRepo: string;
  deployedSite: string;
  description: string;
  fullDescription: string;
  image?: string;
  imageMobile?: string;
  tag: string[];
  techStack?: string[];
};
