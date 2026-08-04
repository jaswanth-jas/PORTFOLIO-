import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ProjectModelPreviewProps {
  shape: 'icosahedron' | 'torusKnot' | 'octahedron' | 'ringCore' | 'cubeCluster';
  color: string;
}

export const ProjectModelPreview: React.FC<ProjectModelPreviewProps> = ({
  shape,
  color,
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }

    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        {shape === 'icosahedron' && <icosahedronGeometry args={[1.8, 1]} />}
        {shape === 'torusKnot' && <torusKnotGeometry args={[1.4, 0.35, 100, 16]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[1.8, 1]} />}
        {shape === 'ringCore' && <torusGeometry args={[1.6, 0.4, 16, 50]} />}
        {shape === 'cubeCluster' && <boxGeometry args={[1.8, 1.8, 1.8]} />}

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner Glowing Shield */}
      <mesh>
        <sphereGeometry args={[0.9, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} wireframe />
      </mesh>

      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={3} color={color} />
      <pointLight position={[-5, -5, -5]} intensity={2} color="#ff0055" />
    </group>
  );
};
