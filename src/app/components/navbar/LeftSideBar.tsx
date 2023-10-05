"use client";
import React from "react";

import styles from "./LeftSideBar.module.scss";
import Image from "next/image";
import aboutImg from "@/images/aboutIMG.jpg";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
type Props = {};

const LeftSideBar = (props: Props) => {
  return (
    <div className={styles.left_sidebar_container}>
      <div className="border border-gray-800 hover:bg-gray-200 dark:bg-gray-800 w-6 h-6 flex items-center justify-center rounded-md mb-6 cursor-pointer dark:hover:bg-gray-700 transition-all duration-200 ease-out">
        <motion.div
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <FiSettings className="muted-text" />
        </motion.div>
      </div>
      <div className={`${styles.left_sidebar}`}>
        <div className={`${styles.main_title}`}>
          <h3>Suvin</h3>
          <p>Full Stack Web developer</p>
        </div>
        <div className={styles.image_wrapper}>
          <Image
            src={aboutImg}
            fill
            alt="Suvin Chandula - profile image"
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
        <div className={styles.main_title}>
          <h3>Suvin</h3>
          <p>Full Stack Web developer</p>
        </div>
        <div className="grid grid-cols-4 ">
          <div className="border border-gray-500 rounded-full hover:bg-gray-500 transition-all duration-200 ease-out">
            <SocialIcon
              bgColor="transparent"
              fgColor="gray"
              url="https://twitter.com"
            />
          </div>
        </div>
        <button className={"btn-theme"}>
          {" "}
          <AiOutlineMail className="icon-text" />
          Hire me
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
