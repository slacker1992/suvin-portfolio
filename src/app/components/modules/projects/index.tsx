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
        <div className="mb-4 pb-10 rounded-3xl w-full bg-gray-200 dark:bg-[#464646] cursor-pointer hover:scale-105">
          <Image
            src={portfolio1}
            alt="La massage New Zealand"
            loading="lazy"
            className="w-full h-full rounded-3xl object-cover lg:object-contain object-center"
          />
          <h3 className="text-2xl tracking-wider link link-underline link-underline-black max-w-max px-5 mt-10">
            La Massage{" "}
          </h3>
          <p className="max-w-1/2 px-5 text-xs text-gray-900 dark:text-gray-500">
            La massage is a massage and therapeutical services center located in
            New Zealand. La Massage website was made as per client requirement
            by using wordpress and booknetic plugin.{" "}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between lg:h-[26rem]">
          <div className="max-[767px]:mb-4 rounded-3xl w-full lg:w-1/2 bg-gray-200 dark:bg-[#464646] cursor-pointer hover:scale-105 pb-10">
            <Image
              src={portfolio3}
              alt="Radiant Spark"
              className="w-full h-full object-cover rounded-3xl lg:object-contain object-center"
            />
            <h3 className="text-2xl tracking-wider link link-underline link-underline-black max-w-max px-5 mt-10">
              Radiant Spark Technology{" "}
            </h3>
            <p className="max-w-1/2 px-5 text-xs text-gray-900 dark:text-gray-500">
              Radiant Spark Technology is a software company is located in Sri
              Lanka. website made by using React js and Sanity CMS.
            </p>
          </div>

          <div className="max-[767px]:mb-4 rounded-3xl w-full lg:w-1/2 bg-gray-200 dark:bg-[#464646] cursor-pointer hover:scale-105 pb-10">
            <Image
              src={portfolio4}
              alt="La massage New Zealand"
              className="w-full h-full object-cover rounded-3xl lg:object-contain object-center"
            />
            <h3 className="text-2xl tracking-wider link link-underline link-underline-black max-w-max px-5 mt-10">
              Prestige Auto Care
            </h3>
            <p className="max-w-1/2 px-5 text-xs text-gray-900 dark:text-gray-500">
              Radiant Spark Technology is a software company is located in Sri
              Lanka. website made by using React js and Sanity CMS.
            </p>
          </div>
        </div>
        <div className="max-[767px]:mb-4 rounded-3xl w-full bg-gray-200 dark:bg-[#464646] cursor-pointer hover:scale-105 pb-10">
          <Image
            src={portfolio2}
            alt="La massage New Zealand"
            loading="lazy"
            className="cursor-pointer rounded-3xl"
          />
          <h3 className="text-2xl tracking-wider link link-underline link-underline-black max-w-max px-5 mt-10">
            Sysdee
          </h3>
          <p className="max-w-1/2 px-5 text-xs text-gray-900 dark:text-gray-500">
            Sysdee known as a Creative IT Agency And Solutions Since 2005.
            created by using next js, tailwind css and sanity CMS with live
            editing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
