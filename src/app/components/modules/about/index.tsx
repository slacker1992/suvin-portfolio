"use client";
import React, { useContext } from "react";
import { BiUser } from "react-icons/bi";
import styles from "./about.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`flex flex-col w-full h-full ${styles.about_section} inset-0`}
      data-aos="fade-up"
    >
      <div
        className={`flex flex-row gap-2 items-center w-fit border-scheme px-4 py-2 rounded-full font-medium uppercase text-sm`}
      >
        <BiUser className="font-medium" />
        <h5>About</h5>
      </div>
      <h1 className={styles.about_title}>
        Every great design begin with an even{" "}
        <span className="hero-name">better story</span>
      </h1>
      <p className={`subtitle-text-${theme} text-justify`}>
        Greetings! I am a passionate and skilled Full Stack Developer with a
        diverse range of expertise that spans web design, database architecture,
        front-end and back-end development, mobile application development, and
        UI/UX design. My commitment to crafting seamless digital experiences is
        underpinned by a robust skill set and a Bachelor of Science (B.Sc.) in
        Software Engineering from Cardiff Metropolitan University, UK.
      </p>
    </section>
  );
};

export default About;
