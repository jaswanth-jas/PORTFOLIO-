import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HoloCoreProps {
  shape?: 'icosahedron' | 'torusKnot' | 'octahedron';
  color?: string;
}

export const HoloCore: React.FC<HoloCoreProps> = ({
  shape = 'torusKnot',
  color = '#38bdf8',
}) => {
  const outerGroupRef = useRef<THREE.Group>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (outerGroupRef.current) {
      const mouseX = state.pointer.x * 0.35;
      const mouseY = state.pointer.y * 0.35;

      outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.y,
        t * 0.2 + mouseX,
        0.05
      );
      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.x,
        Math.sin(t * 0.3) * 0.1 - mouseY,
        0.05
      );
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = -t * 0.5;
      innerCoreRef.current.rotation.z = t * 0.3;
      const scale = 1 + Math.sin(t * 2) * 0.05;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    if (ring1Ref.current) ring1Ref.current.rotation.x = t * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.y = t * 0.3;
  });

  return (
    <group ref={outerGroupRef}>
      {/* Outer Apple Wireframe Node */}
      <mesh>
        {shape === 'icosahedron' && <icosahedronGeometry args={[2.2, 2]} />}
        {shape === 'torusKnot' && <torusKnotGeometry args={[1.6, 0.4, 128, 32]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[2.2, 2]} />}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.65}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Inner Glowing Glass Core */}
      <mesh ref={innerCoreRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Concentric Glass Orbits */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.7} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.6} />
      </mesh>

      {/* Soft Ambient Lights */}
      <pointLight color="#38bdf8" intensity={4} distance={10} />
      <pointLight color="#a855f7" intensity={4} distance={8} />
    </group>
  );
};
