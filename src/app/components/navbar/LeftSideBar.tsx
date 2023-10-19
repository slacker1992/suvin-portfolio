"use client";
import React from "react";

import styles from "./LeftSideBar.module.scss";
import Image from "next/image";
import aboutImg from "@/images/aboutIMG.jpg";
import { FiSettings } from "react-icons/fi";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

const LeftSideBar = (props: Props) => {
  return (
    <div className={styles.left_sidebar_container}>
      <div className="border border-gray-800 hover:bg-gray-200 dark:bg-gray-800 w-6 h-6 flex items-center justify-center rounded-md mb-6 dark:hover:bg-gray-700 transition-all duration-200 ease-out">
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
        <div className="w-full px-5">
          <div className="flex flex-col items-center py-3">
            <h6>suvinchandula@hotmail.com</h6>
            <p>Base in Colombo, SL</p>
          </div>
          <div className="flex flex-row w-full gap-2 items-center justify-around mb-3">
            <Link
              href={"https://www.linkedin.com/in/suvin-chandula-22a187b5/"}
              target="_blank"
              className="border border-gray-900 dark:border-gray-500 rounded-full extended transition-all duration-200 ease-out flex items-center justify-center w-12 cursor-pointer h-12"
            >
              <AiFillLinkedin className="icon-hover" />
            </Link>
            <Link
              href={"https://www.facebook.com/apply.bright"}
              target="_blank"
              className="border border-gray-500 rounded-full extended transition-all duration-200 ease-out flex items-center justify-center w-12 cursor-pointer h-12"
            >
              <AiFillFacebook className="icon-hover" />
            </Link>
            <Link
              href={"https://www.radiantsparktechnology.com/"}
              target="_blank"
              className="border border-gray-500 rounded-full extended transition-all duration-200 ease-out flex items-center justify-center w-12 cursor-pointer h-12"
            >
              <TbWorld className="icon-hover" />
            </Link>
          </div>
          <button className={"btn-theme"}>
            {" "}
            <AiOutlineMail className="icon-text" />
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
