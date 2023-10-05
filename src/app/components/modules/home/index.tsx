"use client";
import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./home.module.scss";
import { ThemeContext } from "@/context/ThemeContext";
import ComputerCanvas from "@/components/canvas/Computers";
type Props = {};

const Hero: React.FC<any> = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`flex flex-col w-full h-full ${styles.hero_section} inset-0`}
      data-aos="fade-up"
    >
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

      <p className={`subtitle-text-${theme}`}>
        I design and code beautifully simple things and i love what i do. Just
        simple like that!
      </p>
      <ComputerCanvas />
      <div className="flex flex-row w-1/2 justify-between">
        <h1 className="flex flex-col items-center justify-center hero-name text-[4rem]">
          3+{" "}
          <span
            className={`subtitle-text-${theme} text-sm uppercase font-semibold`}
          >
            years of
            <br /> experience
          </span>
        </h1>
        <h1 className="flex flex-col items-center justify-center hero-name text-[4rem]">
          10+{" "}
          <span
            className={`subtitle-text-${theme} text-sm uppercase font-semibold`}
          >
            projects completed on
            <br /> 5 countries
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
