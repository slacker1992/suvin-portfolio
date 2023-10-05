import LeftSideBar, { Hero, MainSectionLayout } from "./components";
import About from "./components/modules/about";
import Resume from "./components/modules/resume";

export default function Home() {
  return (
    <div className="main flex flex-col">
      <LeftSideBar />
      <MainSectionLayout>
        <Hero />
        <About />
        <Resume />
      </MainSectionLayout>
    </div>
  );
}
