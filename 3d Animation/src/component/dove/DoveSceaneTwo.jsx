


import { OrbitControls, Sky, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { AmbientLight } from 'three';


const InteractiveDove = () => {
    const doveRef = useRef();
    const { scene } = useGLTF('../glb/animated_bee.glb');
  
    const handlePointerOver = () => {
      document.body.style.cursor = 'pointer';
      // Additional hover effects (e.g., change color or play animation)
      doveRef.current.scale.set(0.6, 0.6, 0.6); // Scale up on hover
    };
  
    const handlePointerOut = () => {
      document.body.style.cursor = 'default';
      doveRef.current.scale.set(0.5, 0.5, 0.5); // Reset scale
    };
  
    const handleClick = () => {
      alert('Dove clicked!'); // Add custom interactions
    };
  
    return (
      <primitive
        ref={doveRef}
        object={scene}
        scale={0.5}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      />
    );
  };
  
const DoveSceneTwo = () => {
  return (
    <Canvas>
      <Sky sunPosition={[100, 20, 100]} />
      <AmbientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <InteractiveDove />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default DoveSceneTwo;
