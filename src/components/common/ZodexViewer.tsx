"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const gltf = useGLTF("/models/zodex.glb");

  return (
    <primitive
      object={gltf.scene}
      scale={1.15}
      position={[0, 0, 0]}
    />
  );
}

export default function ZodexViewer() {
  return (
    <div className="w-full h-[500px] bg-black">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 3, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/zodex.glb");
