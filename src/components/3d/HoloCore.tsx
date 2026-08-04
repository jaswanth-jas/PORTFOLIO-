import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HoloCoreProps {
  shape?: 'icosahedron' | 'torusKnot' | 'octahedron';
  color?: string;
}

export const HoloCore: React.FC<HoloCoreProps> = ({
  shape = 'icosahedron',
  color = '#ffd700',
}) => {
  const outerGroupRef = useRef<THREE.Group>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);
  const arcRing1Ref = useRef<THREE.Mesh>(null!);
  const arcRing2Ref = useRef<THREE.Mesh>(null!);
  const arcRing3Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (outerGroupRef.current) {
      const mouseX = state.pointer.x * 0.45;
      const mouseY = state.pointer.y * 0.45;

      outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.y,
        t * 0.25 + mouseX,
        0.05
      );
      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.x,
        Math.sin(t * 0.35) * 0.15 - mouseY,
        0.05
      );
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = -t * 0.6;
      innerCoreRef.current.rotation.z = t * 0.4;
      const scale = 1 + Math.sin(t * 2.5) * 0.08;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    if (arcRing1Ref.current) arcRing1Ref.current.rotation.x = t * 0.7;
    if (arcRing2Ref.current) arcRing2Ref.current.rotation.y = t * 0.5;
    if (arcRing3Ref.current) arcRing3Ref.current.rotation.z = t * 0.6;
  });

  return (
    <group ref={outerGroupRef}>
      {/* Outer Stark Wireframe Geometry */}
      <mesh>
        {shape === 'icosahedron' && <icosahedronGeometry args={[2.3, 2]} />}
        {shape === 'torusKnot' && <torusKnotGeometry args={[1.7, 0.45, 128, 32]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[2.3, 2]} />}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Inner Plasma Arc Core */}
      <mesh ref={innerCoreRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#00f3ff"
          emissive="#00f3ff"
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Concentric Arc Reactor Gyro Rings */}
      <mesh ref={arcRing1Ref}>
        <torusGeometry args={[2.9, 0.025, 16, 100]} />
        <meshBasicMaterial color="#ffd700" wireframe transparent opacity={0.8} />
      </mesh>

      <mesh ref={arcRing2Ref}>
        <torusGeometry args={[3.3, 0.03, 16, 100]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.7} />
      </mesh>

      <mesh ref={arcRing3Ref}>
        <torusGeometry args={[3.7, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ff1a1a" wireframe transparent opacity={0.6} />
      </mesh>

      {/* Stark Arc Reactor Lights */}
      <pointLight color="#ffd700" intensity={5} distance={10} />
      <pointLight color="#00f3ff" intensity={4} distance={8} />
      <pointLight color="#ff1a1a" intensity={3} distance={6} />
    </group>
  );
};
