"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

type Props = {
  children: any;
};

const MainLayout = ({ children }: Props) => {
  const { theme, themeColor } = useContext(ThemeContext);
  return <body className={`${theme} ${themeColor} `}>{children}</body>;
};

export default MainLayout;
