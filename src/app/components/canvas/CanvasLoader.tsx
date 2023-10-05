import React from "react";
import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p className="hero-name">{progress.toFixed(2)}%</p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
