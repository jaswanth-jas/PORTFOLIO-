import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HoloCoreProps {
  shape?: 'icosahedron' | 'torusKnot' | 'octahedron';
  color?: string;
  wireframe?: boolean;
}

export const HoloCore: React.FC<HoloCoreProps> = ({
  shape = 'icosahedron',
  color = '#00f3ff',
}) => {
  const outerGroupRef = useRef<THREE.Group>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (outerGroupRef.current) {
      // Parallax mouse rotation
      const mouseX = state.pointer.x * 0.4;
      const mouseY = state.pointer.y * 0.4;

      outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.y,
        t * 0.2 + mouseX,
        0.05
      );
      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.x,
        Math.sin(t * 0.3) * 0.15 - mouseY,
        0.05
      );
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = -t * 0.5;
      innerCoreRef.current.rotation.z = t * 0.3;
      const scale = 1 + Math.sin(t * 2) * 0.06;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    if (ring1Ref.current) ring1Ref.current.rotation.x = t * 0.6;
    if (ring2Ref.current) ring2Ref.current.rotation.y = t * 0.4;
    if (ring3Ref.current) ring3Ref.current.rotation.z = t * 0.5;
  });

  return (
    <group ref={outerGroupRef}>
      {/* Outer Holographic Geometry */}
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

      {/* Inner Energy Core */}
      <mesh ref={innerCoreRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#ff0055"
          emissive="#ff0055"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Concentric Gyroscope Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.7} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.2, 0.025, 16, 100]} />
        <meshBasicMaterial color="#8a2be2" wireframe transparent opacity={0.6} />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.6, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ffb700" wireframe transparent opacity={0.5} />
      </mesh>

      {/* Light Sources */}
      <pointLight color="#00f3ff" intensity={4} distance={8} />
      <pointLight color="#ff0055" intensity={3} distance={6} />
    </group>
  );
};
