"use client";
import React, { useContext } from "react";
import { LiaStreamSolid } from "react-icons/lia";
import styles from "./specialization.module.scss";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const Specialization = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`flex flex-col w-full ${styles.specialization_section}`}
      data-aos="fade-up"
    >
      <div
        className={`flex flex-row gap-2 items-center w-fit border-scheme px-4 py-2 rounded-full font-medium uppercase text-sm mb-10`}
      >
        <LiaStreamSolid className="font-medium" />
        <h5>Services</h5>
      </div>
      <h1 className={styles.specialization_title}>
        My <span className="hero-name">Specializations</span>
      </h1>
      <div className="flex flex-col gap-2">
        <div className={`${styles.specialization_card} w-full mt-10`}>
          <div className={`special_box p-10 rounded-2xl`}>
            <h2 className="text-2xl">Website Design</h2>
            <p className={`mb-8 subtitle-text-${theme} text-justify`}>
              I specialize in crafting beautiful and creative website designs
              that not only capture attention but also elevate user engagement.
              With a keen eye for aesthetics and a commitment to user-centric
              design, I transform concepts into visually stunning digital
              experiences.
            </p>
            <Link href={"#"} className="uppercase text-sm">
              10 Projects
            </Link>
          </div>
        </div>
        <div className={`${styles.specialization_card} w-full mt-10`}>
          <div className={`special_box p-10 rounded-2xl`}>
            <h2 className="text-2xl">Website Application development</h2>
            <p className={`mb-8 subtitle-text-${theme} text-justify`}>
              Greetings! I am a highly driven and experienced web developer who
              enjoys developing unique and effective solutions using a varied
              set of technologies. My specialty is web application development,
              and I have extensive knowledge with essential technologies such as{" "}
              <strong>
                React, Node.js, Express.js, Next.js, MySQL, and MongoDB.
              </strong>
            </p>
            <Link href={"#"} className="uppercase text-sm">
              5 Projects
            </Link>
          </div>
        </div>
        <div className={`${styles.specialization_card} w-full mt-10`}>
          <div className={`special_box p-10 rounded-2xl`}>
            <h2 className="text-2xl">Mobile Application developing</h2>
            <p className={`mb-8 subtitle-text-${theme}`}>
              I have experience with creating cross-platform mobile applications
              with <strong>React Native</strong>
            </p>
            <Link href={"#"} className="uppercase text-sm">
              3 Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
