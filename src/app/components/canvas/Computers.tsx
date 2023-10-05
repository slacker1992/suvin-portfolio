import React, { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
extend({ OrbitControls });
import CanvasLoader from "@/components/canvas/CanvasLoader";

const Computers = () => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        rotation={[-0.01, -0.5, -0.1]}
        scale={1.5}
        position={[0.5, -2.5, -4]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: "100%",
        height: "20%",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
