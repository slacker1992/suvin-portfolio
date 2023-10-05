"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInit = ({ children }: any) => {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  return <>{children}</>;
};

export default AosInit;
