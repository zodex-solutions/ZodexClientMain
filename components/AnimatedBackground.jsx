"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Cube({ position, delay }) {
  const meshRef = useRef();

  // Floating animation logic
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t + delay) * 0.2;
    meshRef.current.rotation.y = Math.sin(t / 4) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#111" 
        emissive="#408" 
        emissiveIntensity={0.5} 
        roughness={0.1}
        metalness={0.8}
      />
      {/* Edges highlighting for that neon look */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color="#00ffff" linewidth={2} />
      </lineSegments>
    </mesh>
  );
}

export default function AnimatedBackground() {
  // Creating a grid of cubes like in the screenshot
  const cubes = [];
  for (let x = -2; x <= 2; x++) {
    for (let z = -2; z <= 2; z++) {
      if (Math.random() > 0.3) { // Randomly skip some for organic look
        cubes.push({ pos: [x * 1.2, 0, z * 1.2], delay: Math.random() * 10 });
      }
    }
  }

  return (
    <div className="absolute inset-0 z-0 h-screen w-full bg-black">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        
        <group rotation={[0, Math.PI / 4, 0]}>
          {cubes.map((c, i) => (
            <Cube key={i} position={c.pos} delay={c.delay} />
          ))}
        </group>
      </Canvas>
    </div>
  );
}