import PostSection from "../components/PostSection";
import ProjectModal from "../components/ProjectModal";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className=" mx-auto container  p-4 pb-20 sm:p-20  ">
      <Header />
      <ProjectModal />
      <PostSection></PostSection>
    </div>
  );
}
