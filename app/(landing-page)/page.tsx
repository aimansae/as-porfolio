import Header from "../components/Header";
import PostSection from "../components/PostSection";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className=" mx-auto container  p-8 pb-20 sm:p-20  ">
      <Header />
      <Project />
      <PostSection></PostSection>
    </div>
  );
}
