"use client";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>({ theme: "light", undefined });

export const ThemeProvider: any = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const [themeColor, setThemeColor] = useState("theme-green");
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, themeColor, setThemeColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
