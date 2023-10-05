import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./home.module.scss";
type Props = {};

const Hero: React.FC<any> = (props: Props) => {
  return (
    <section className={`flex flex-col w-full h-full ${styles.hero_section}`}>
      <div
        className={`flex flex-row gap-2 items-center w-fit border-scheme px-4 py-2 rounded-full font-medium uppercase text-sm`}
      >
        <AiOutlineHome className="font-medium" />
        <h5>Introduce</h5>
      </div>
      <h1 className={styles.hero_title}>
        Say Hi from <span className="hero-name">Suvin</span>, Full Stack
        developer and designer
      </h1>

      <p>
        I design and code beautifully simple things and i love what i do. Just
        simple like that!
      </p>
    </section>
  );
};

export default Hero;
