import dynamic from "next/dynamic";
import LeftSideBar, { Hero, MainSectionLayout } from "./components";
import Skills from "./components/modules/skills";
import Projects from "./components/modules/projects";

const Specialization = dynamic(
  () => import("./components/modules/specialization"),
  {
    ssr: false,
  }
);
const Resume = dynamic(() => import("./components/modules/resume"), {
  ssr: false,
});
const About = dynamic(() => import("./components/modules/about"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="main flex flex-col">
      <LeftSideBar />
      <MainSectionLayout>
        <Hero />
        <About />
        <Resume />
        <Specialization />
        <Skills />
        <Projects />
      </MainSectionLayout>
    </div>
  );
}
