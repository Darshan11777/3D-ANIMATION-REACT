import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const AnimatedDove = () => {
  const doveRef = useRef();
  const { scene } = useGLTF('../glb/animated_bee.glb'); // Replace with your dove model path

  // Animation loop: Make the dove flap its wings or move
  useFrame((state, delta) => {
    if (doveRef.current) {
      doveRef.current.rotation.y += delta * 0.2; // Rotate around the Y-axis
      doveRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5; // Hover effect
    }
  });

  return <primitive ref={doveRef} object={scene} scale={0.5} />;
};

export default AnimatedDove;
