"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import AosInit from "./AosInit";

type Props = {
  children: any;
};

const MainLayout = ({ children }: Props) => {
  const { theme, themeColor } = useContext(ThemeContext);
  return (
    <body className={`${theme} ${themeColor} `}>
      <AosInit>{children}</AosInit>
    </body>
  );
};

export default MainLayout;
