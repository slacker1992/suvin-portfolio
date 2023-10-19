import dynamic from "next/dynamic";
import LeftSideBar, { Hero, MainSectionLayout } from "./components";
import Skills from "./components/modules/skills";
import Projects from "./components/modules/projects";
import Testimonials from "./components/modules/testimonials";
import "swiper/css";
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
        <Testimonials />
      </MainSectionLayout>
    </div>
  );
}
