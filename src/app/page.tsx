import Image from "next/image";
import LeftSideBar, { Hero, MainSectionLayout } from "./components";

export default function Home() {
  return (
    <div className="main flex flex-col">
      <LeftSideBar />
      <MainSectionLayout>
        <Hero />
      </MainSectionLayout>
    </div>
  );
}
