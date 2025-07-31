import Header from "../components/Header";
import PostSection from "../components/PostSection";
import Project from "../components/Project";
import Project2 from "../components/Project2";
import ProjectModal2 from "../components/ProjectModal2";

export default function Home() {
  return (
    <div className=" mx-auto container  p-4 pb-20 sm:p-20  ">
      <Header />
      <ProjectModal2 />
      <PostSection></PostSection>
    </div>
  );
}
