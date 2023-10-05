import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from
const Earth = () => {
  const earth = useGLTF("./earth_sc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <primitive object={earth.scene} />
    </mesh>
  );
};

// const EarthCanvas = ()=> {
//   return <Canvas frameloop="demand"></Canvas>
// }

export default Earth;
