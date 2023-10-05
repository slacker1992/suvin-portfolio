"use client";
import React, { useContext } from "react";
import { BiUser } from "react-icons/bi";
import styles from "./resume.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`flex flex-col w-full h-full ${styles.resume_section} inset-0 mb-10`}
      data-aos="fade-up"
    >
      <div
        className={`flex flex-row gap-2 items-center w-fit border-scheme px-4 py-2 rounded-full font-medium uppercase text-sm mb-10`}
      >
        <BiUser className="font-medium" />
        <h5>Resume</h5>
      </div>
      <h1 className={styles.resume_title}>
        Education & <span className="hero-name">Experience</span>
      </h1>
      <div className={`${styles.resume_card} w-full mt-10`}>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="300"
          className={`${styles.item} item flex flex-col w-full justify-between`}
        >
          <span className={`subtitle-text-${theme} mb-6 text-base`}>
            2017 - 2018
          </span>
          <h2 className={`text-2xl mb-2`}>Php Website Developer</h2>
          <p className={`mb-8 subtitle-text-${theme}`}>
            K Art Factory Solutions
          </p>
          <h2 className={`text-2xl mb-2`}>IOS Mobile App Developer</h2>
          <p className={`mb-8 subtitle-text-${theme}`}>
            K Art Factory Solutions
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="300"
          className={`${styles.item} item flex flex-col w-full justify-between`}
        >
          <span className={`subtitle-text-${theme} mb-6 text-base`}>
            2019 - 2020
          </span>
          <h2 className={`text-2xl mb-2`}>Java Developer</h2>
          <p className={`mb-8 subtitle-text-${theme}`}>
            Apply Bright IT Solutions
          </p>
          <h2 className={`text-2xl mb-2`}>.NET Developer</h2>
          <p className={`mb-8 subtitle-text-${theme}`}>MobiOs Pvt Ltd.</p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="300"
          className={`${styles.item} item flex flex-col w-full justify-between`}
        >
          <span className={`subtitle-text-${theme} mb-6 text-base`}>
            2020 - Present
          </span>
          <h2 className={`text-2xl mb-2`}>Front-end Developer</h2>
          <p className={`mb-8 subtitle-text-${theme}`}>
            Apply Bright IT Solutions
          </p>
          <h2 className={`text-2xl mb-2`}>Full-stack Developer</h2>
          <p className={`mb-8 subtitle-text-${theme}`}>
            Apply Bright IT Solutions
          </p>
          <h2 className={`text-2xl mb-2`}>
            Bachelor Degree of Software Engineering
          </h2>
          <p className={`mb-8 subtitle-text-${theme}`}>
            Cardiff metropolitan University - UK
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
