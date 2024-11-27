import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

const TexturedCube = () => {
  const cubeRef = useRef();

  // Load the six images as textures
  const [side1, side2, side3, side4, side5, side6] = useLoader(TextureLoader, [
    "https://res.cloudinary.com/dbuuc0cdy/image/upload/v1732529096/e409ed7d-5813-4afc-8bac-fa777b0023e6_qxtwfs.jpg", // Front
    "https://res.cloudinary.com/dbuuc0cdy/image/upload/v1732529096/e409ed7d-5813-4afc-8bac-fa777b0023e6_qxtwfs.jpg", // Back
    "https://res.cloudinary.com/dbuuc0cdy/image/upload/v1732529096/e409ed7d-5813-4afc-8bac-fa777b0023e6_qxtwfs.jpg", // Top
    "https://res.cloudinary.com/dbuuc0cdy/image/upload/v1732529096/e409ed7d-5813-4afc-8bac-fa777b0023e6_qxtwfs.jpg", // Bottom
    "https://res.cloudinary.com/dbuuc0cdy/image/upload/v1732529096/e409ed7d-5813-4afc-8bac-fa777b0023e6_qxtwfs.jpg", // Right
    "https://res.cloudinary.com/dbuuc0cdy/image/upload/v1732529096/e409ed7d-5813-4afc-8bac-fa777b0023e6_qxtwfs.jpg", // Left
  ]);

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} /> {/* Cube dimensions */}
      {/* Assign a different texture to each side */}
      <meshStandardMaterial attachArray="material" map={side1} /> {/* Front */}
      <meshStandardMaterial attachArray="material" map={side2} /> {/* Back */}
      <meshStandardMaterial attachArray="material" map={side3} /> {/* Top */}
      <meshStandardMaterial attachArray="material" map={side4} /> {/* Bottom */}
      <meshStandardMaterial attachArray="material" map={side5} /> {/* Right */}
      <meshStandardMaterial attachArray="material" map={side6} /> {/* Left */}
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} /> {/* Basic ambient lighting */}
      <directionalLight position={[5, 5, 5]} intensity={1} />{" "}
      {/* Directional light */}
      <OrbitControls enableZoom={true} /> {/* Allows camera interaction */}
      <TexturedCube /> {/* Add the textured cube */}
    </Canvas>
  );
};

export default Scene;
