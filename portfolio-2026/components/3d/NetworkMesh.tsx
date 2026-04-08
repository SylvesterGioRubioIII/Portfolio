"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleNetwork() {
  const ref = useRef<THREE.Points>(null);
  const timer = useMemo(() => new THREE.Timer(), []);

  useEffect(() => {
    timer.connect(document);
    return () => { timer.dispose(); };
  }, [timer]);

  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const points = new Float32Array(3000);
    for (let i = 0; i < 3000; i += 3) {
      const radius = 2.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const r = Math.cbrt(Math.random()) * radius;

      points[i] = r * Math.sin(phi) * Math.cos(theta);
      points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i + 2] = r * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame(() => {
    timer.update();
    const delta = timer.getDelta();
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#d946ef" // fuchsia-500
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      {/* Wireframe inner sphere to look like a structure */}
      <mesh>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial color="#c026d3" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default function NetworkMesh() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
