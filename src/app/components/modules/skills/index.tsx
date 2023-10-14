"use client";
import React, { useContext } from "react";
import { LiaShapesSolid } from "react-icons/lia";
import styles from "./skills.module.scss";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import Skill from "./Skill";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`flex flex-col w-full ${styles.skills_section} pb-10`}
      data-aos="fade-up"
    >
      <div
        className={`flex flex-row gap-2 items-center w-fit border-scheme px-4 py-2 rounded-full font-medium uppercase text-sm mb-10`}
      >
        <LiaShapesSolid className="font-medium" />
        <h5>My Skills</h5>
      </div>
      <h1 className={styles.skills_title}>
        My <span className="hero-name">Advantages</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 transition-all duration-200 ease-in-out">
        <Skill
          image_name="html"
          percentage="95"
          animation="fade-down-left"
          title="HTML"
        />
        <Skill
          image_name="css"
          percentage="95"
          animation="fade-down-right"
          title="CSS"
        />
        <Skill
          image_name="javascript"
          percentage="95"
          animation="zoom-in-left"
          title="Javascript"
        />
        <Skill
          image_name="reactjs"
          percentage="100"
          animation="zoom-in-right"
          title="React js"
        />
        <Skill
          image_name="nextjs"
          percentage="100"
          animation="zoom-in-right"
          title="Next js"
        />
        <Skill
          image_name="redux"
          percentage="90"
          animation="flip-left"
          title="Redux"
        />
        <Skill
          image_name="nodejs"
          percentage="90"
          animation="flip-right"
          title="Node js"
        />
        <Skill
          image_name="expressjs"
          percentage="90"
          animation="flip-right"
          title="Express js"
        />
        <Skill
          image_name="tailwind"
          percentage="100"
          animation="zoom-out-left"
          title="Tailwind CSS"
        />
        <Skill
          image_name="typescript"
          percentage="80"
          animation="zoom-out-right"
          title="Typescript"
        />
        <Skill image_name="mongodb" percentage="90" title="Mongodb" />
        <Skill image_name="git" percentage="95" title="Git" />
      </div>
    </section>
  );
};

export default Skills;
