"use client";
import React, { useContext } from "react";
import { LiaShapesSolid } from "react-icons/lia";
import styles from "./projects.module.scss";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import portfolio1 from "@/images/portfolio1.jpg";
import portfolio2 from "@/images/portfolio4.jpg";
import portfolio3 from "@/images/p-1.jpg";
import portfolio4 from "@/images/p-2.jpg";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`flex flex-col w-full ${styles.projects_section}`}
      data-aos="fade-up"
    >
      <div
        className={`flex flex-row gap-2 items-center w-fit border-scheme px-4 py-2 rounded-full font-medium uppercase text-sm mb-10`}
      >
        <LiaShapesSolid className="font-medium" />
        <h5>Portfolio</h5>
      </div>
      <h1 className={styles.projects_title}>
        My <span className="hero-name">Projects</span>
      </h1>

      <div className="flex flex-col gap-2">
        <Image
          src={portfolio1}
          alt="La massage New Zealand"
          loading="lazy"
          className="rounded-3xl max-[767px]:mb-4 "
        />

        <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between">
          <Image
            src={portfolio3}
            alt="La massage New Zealand"
            className=" max-[767px]:mb-4 rounded-3xl w-full lg:w-1/2 lg:h-96 object-cover lg:object-contain object-center bg-[#464646]"
          />
          <Image
            src={portfolio4}
            alt="La massage New Zealand"
            className=" max-[767px]:mb-4 rounded-3xl w-full lg:w-1/2 lg:h-96 object-cover object-center"
          />
        </div>

        <Image
          src={portfolio2}
          alt="La massage New Zealand"
          loading="lazy"
          className=" max-[767px]:mb-4 rounded-3xl "
        />
      </div>
    </section>
  );
};

export default Projects;
