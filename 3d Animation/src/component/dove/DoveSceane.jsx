

// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// // import{a} from '../../../public/glb/animated_bee.glb'

// const AnimatedBee = () => {
//   const { scene } = useGLTF('../../../public/glb/animated_bee.glb'); // Ensure the path is correct
//   return <primitive object={scene} />;
// };

// const Scene = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <AnimatedBee />
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default Scene;



// 22222222222222222222222222222222222

// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF, useAnimations, SpotLight } from '@react-three/drei';

// const AnimatedBee = () => {
//   const group = useRef();
//   const { scene, animations } = useGLTF('../../../public/glb/animated_bee.glb'); // Ensure the path is correct
//   const { actions } = useAnimations(animations, group);

//   // Play the first animation (if it exists)
//   React.useEffect(() => {
//     if (actions && animations.length > 0) {
//       actions[animations[2].name]?.play();
//     }
//   }, [actions, animations]);

//   // Add simple rotation animation to the bee
//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += 0.01; // Rotate slowly
//     }
//   });

//   return <primitive ref={group} object={scene} />;
// };



// const Scene = () => {
//   return (
//     <Canvas>
//       {/* Ambient light to softly illuminate the scene */}
//       <ambientLight intensity={0.5} />

//       {/* Directional light for shadowing */}
//       <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

//       {/* Spotlight focusing on the bee */}
//       <SpotLight position={[0, 5, 5]} intensity={1.5} angle={0.3} penumbra={1} castShadow />

//       {/* Bee model with animation */}
//       <AnimatedBee />

//       {/* Orbit controls for camera movement */}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default Scene;




// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

// const AnimatedBee = () => {
//   const group = useRef();
//   const { scene, animations } = useGLTF('../../../public/glb/animated_bee.glb'); // Ensure the path is correct
//   const { actions } = useAnimations(animations, group);

//   // Play the first animation (if it exists)
//   React.useEffect(() => {
//     if (actions && animations.length > 0) {
//       actions[animations[0].name]?.play();
//     }
//   }, [actions, animations]);

//   // Add simple rotation animation to the bee
//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += 0.01; // Rotate slowly
//     }
//   });

//   return <primitive ref={group} object={scene} />;
// };

// const LightEffect = () => {
//   const lightRef = useRef();
//   let intensity = 1;

//   // Create a flickering effect
//   useFrame(() => {
//     if (lightRef.current) {
//       intensity += (Math.random() - 0.5) * 0.1; // Random fluctuation
//       intensity = Math.max(0.8, Math.min(1.5, intensity)); // Clamp intensity
//       lightRef.current.intensity = intensity;
//     }
//   });

//   return (
//     <pointLight
//       ref={lightRef}
//       position={[20, 20, 20]}
//       intensity={5}
//       distance={5}
//       decay={2}
//       color="yellow"
//     />
//   );
// };

// const Scene = () => {
//   return (
//     <Canvas>
//       {/* Ambient light to softly illuminate the scene */}
//       <ambientLight intensity={0.3} />

//       {/* Directional light for shadowing */}
//       <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

//       {/* Spotlight focusing on the bee */}
//       <spotLight position={[0, 5, 5]} intensity={1.5} angle={0.3} penumbra={1} castShadow />

//       {/* Flickering light effect */}
//       <LightEffect />

//       {/* Bee model with animation */}
//       <AnimatedBee />

//       {/* Orbit controls for camera movement */}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default Scene;


// 55555555555555555555

import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei';

const AnimatedBee = () => {
  const group = useRef();
  const { scene, animations } = useGLTF('../../../public/glb/be.glb'); // Ensure the path is correct
  const { actions } = useAnimations(animations, group);

  // Ensure materials are set to respond to lighting
  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        // child.material.emissive = new ReactThreeFiber.Color(0x555555); // Add emissive light
        child.material.metalness = 0.5; // Make material more reflective
        child.material.roughness = 0.2; // Less rough for more glossiness
        child.material.needsUpdate = true; // Update material properties
      }
    });
  }, [scene]);

  // Play the first animation (if it exists)
  // React.useEffect(() => {
  //   if (actions && animations.length > 0) {
  //     actions[animations[2].name]?.play();
  //   }
  // }, [actions, animations]);

  // Add simple rotation animation to the bee
  // useFrame(() => {
  //   if (group.current) {
  //     group.current.rotation.y += 0.01; // Rotate slowly
  //   }
  // });

  return <primitive ref={group} object={scene} />;
};

const TopLightShow = () => {
  const lightRef = useRef();
  let intensity = 1;

  // Create a flickering effect for the top light show
  useFrame(() => {
    if (lightRef.current) {
      intensity += (Math.random() - 0.5) * 0.2; // Random fluctuation
      intensity = Math.max(0.8, Math.min(2, intensity)); // Clamp intensity
      lightRef.current.intensity = intensity;
    }
  });

  return (
    <>
      {/* Main overhead light source */}
      <spotLight
        ref={lightRef}
        position={[1, 2, 2]} // Positioned above the bee
        angle={20}
        intensity={200}  // Increased intensity
        color="red"
        penumbra={1}
        castShadow
        distance={245}
        decay={2}
      />
      
      {/* Additional overhead spotlights for dramatic effect */}
      <spotLight
        position={[-5, 10, 5]} // Light from the left
        angle={10}
        intensity={150}  // Slightly stronger light from the left
        color="red"
        penumbra={1}
        castShadow
        distance={12}
        decay={1.5}
      />
      <spotLight
        position={[5, 10, -5]} // Light from the right
        angle={0.3}
        intensity={1.5}  // Slightly stronger light from the right
        color="blue"
        penumbra={1}
        castShadow
        distance={12}
        decay={1.5}
      />
      
      {/* Simulated atmospheric light coming from the top */}
      <ambientLight intensity={0.3} color="white" />
    </>
  );
};

const Scene = () => {

    const cameraRef = useRef();

    useEffect(() => {
      // Set initial camera position here if needed
      if (cameraRef.current) {
        cameraRef.current.position.z = 13;
      }
    }, []);
  return (
    <Canvas>
              <PerspectiveCamera makeDefault fov={10} aspect={window.innerWidth / window.innerHeight} near={0.5} far={1000} position={[0, 0, 13]} />

      {/* Ambient light to softly illuminate the scene */}
      <ambientLight intensity={1.3} color="#ffffff" />
      <directionalLight intensity={1} color="#ffffff" position={[500, 500, 500]} />

      {/* Directional light for basic shadowing */}
      {/* <directionalLight 
      position={[500, 500, 500]} 
      intensity={1} // castShadow 
      color="#ffffff" /> */}

      {/* Full top light show */}
      {/* <TopLightShow /> */}

      {/* Bee model with animation */}
      <AnimatedBee />

      {/* Orbit controls for camera movement */}
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;

// import React, { useEffect, useRef, useState } from 'react';
// import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { PerspectiveCamera, AmbientLight } from '@react-three/drei';
// import { DirectionalLight } from 'three'; // Import from 'three'
// import * as THREE from 'three';

// const AnimatedBee = () => {
//   const [bee, setBee] = useState(null);
//   const [mixer, setMixer] = useState(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load(
//       '/demon_bee_full_texture.glb',
//       (gltf) => {
//         setBee(gltf.scene);
//         const animationMixer = new THREE.AnimationMixer(gltf.scene);
//         animationMixer.clipAction(gltf.animations[0]).play();
//         setMixer(animationMixer);
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.error('Error loading the model:', error);
//       }
//     );
//   }, []);

//   // Animation loop
//   useFrame((state, delta) => {
//     if (mixer) mixer.update(delta);
//   });

//   return <>{bee && <primitive object={bee} />}</>;
// };

// const Scene = () => {
//   const { camera } = useThree();
//   const cameraRef = useRef();

//   // Set up the camera (same as PerspectiveCamera from Three.js)
//   useEffect(() => {
//     if (cameraRef.current) {
//       cameraRef.current.position.z = 13;
//     }
//   }, [camera]);

//   return (
//     <>
//       <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 13]} fov={10} />
//       <ambientLight intensity={1.3} color="#ffffff" />
//       <DirectionalLight position={[500, 500, 500]} intensity={1} color="#ffffff" />
//       <AnimatedBee />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Canvas>
//       <Scene />
//     </Canvas>
//   );
// };

// export default App;
