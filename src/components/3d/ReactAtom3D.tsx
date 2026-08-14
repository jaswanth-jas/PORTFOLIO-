import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ReactAtom3DProps {
  color?: string;
  size?: number;
}

export const ReactAtom3D: React.FC<ReactAtom3DProps> = ({ color = '#61dafb', size = 1.8 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const electron1Ref = useRef<THREE.Mesh>(null);
  const electron2Ref = useRef<THREE.Mesh>(null);
  const electron3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15;
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.5;
    if (ring3Ref.current) ring3Ref.current.rotation.z += delta * 0.6;

    const t = state.clock.getElapsedTime() * 2;
    const r = size * 1.5;

    // Electron 1 orbit
    if (electron1Ref.current) {
      electron1Ref.current.position.x = Math.cos(t) * r;
      electron1Ref.current.position.y = Math.sin(t) * r;
    }

    // Electron 2 orbit (tilted 60 deg)
    if (electron2Ref.current) {
      const angle = t + (Math.PI * 2) / 3;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      electron2Ref.current.position.x = x * Math.cos(Math.PI / 3) - y * Math.sin(Math.PI / 3);
      electron2Ref.current.position.y = x * Math.sin(Math.PI / 3) + y * Math.cos(Math.PI / 3);
      electron2Ref.current.position.z = Math.sin(angle) * 0.5;
    }

    // Electron 3 orbit (tilted -60 deg)
    if (electron3Ref.current) {
      const angle = t + (Math.PI * 4) / 3;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      electron3Ref.current.position.x = x * Math.cos(-Math.PI / 3) - y * Math.sin(-Math.PI / 3);
      electron3Ref.current.position.y = x * Math.sin(-Math.PI / 3) + y * Math.cos(-Math.PI / 3);
      electron3Ref.current.position.z = Math.cos(angle) * 0.5;
    }

    // Nucleus pulse
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 3) * 0.08;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central React Nucleus */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[size * 0.35, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Orbit 1 */}
      <group rotation={[0, 0, 0]}>
        <mesh ref={ring1Ref}>
          <torusGeometry args={[size * 1.5, 0.035, 16, 100]} />
          <meshBasicMaterial color={color} opacity={0.85} transparent />
        </mesh>
        <mesh ref={electron1Ref}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Orbit 2 (Tilted 60 deg) */}
      <group rotation={[0, 0, Math.PI / 3]}>
        <mesh ref={ring2Ref}>
          <torusGeometry args={[size * 1.5, 0.035, 16, 100]} />
          <meshBasicMaterial color="#38bdf8" opacity={0.85} transparent />
        </mesh>
        <mesh ref={electron2Ref}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshBasicMaterial color="#61dafb" />
        </mesh>
      </group>

      {/* Orbit 3 (Tilted -60 deg) */}
      <group rotation={[0, 0, -Math.PI / 3]}>
        <mesh ref={ring3Ref}>
          <torusGeometry args={[size * 1.5, 0.035, 16, 100]} />
          <meshBasicMaterial color="#a855f7" opacity={0.85} transparent />
        </mesh>
        <mesh ref={electron3Ref}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshBasicMaterial color="#e0e7ff" />
        </mesh>
      </group>

      {/* Point Light inside React Atom */}
      <pointLight color={color} intensity={3} distance={10} />
    </group>
  );
};
