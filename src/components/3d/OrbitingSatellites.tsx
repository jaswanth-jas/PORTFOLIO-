import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { Skill } from '../../types';
import { soundEngine } from '../../audio/soundEngine';

interface OrbitingSatellitesProps {
  skills: Skill[];
  onSelectSkill: (skill: Skill) => void;
  activeSkillId?: string;
}

export const OrbitingSatellites: React.FC<OrbitingSatellitesProps> = ({
  skills,
  onSelectSkill,
  activeSkillId,
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core Tech Sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#00f3ff"
          emissive="#00f3ff"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshBasicMaterial color="#ff0055" />
      </mesh>

      <Html position={[0, -1.8, 0]} center>
        <div className="pointer-events-none rounded bg-cyan-950/80 px-2 py-1 font-mono text-[10px] tracking-widest text-cyan-400 border border-cyan-500/50 shadow-[0_0_10px_#00f3ff]">
          [ CORE ARCHITECTURE ]
        </div>
      </Html>

      {/* Orbiting Tech Satellite Nodes */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * skill.orbitRadius;
        const z = Math.sin(angle) * skill.orbitRadius;
        const y = Math.sin(angle * 2) * 0.6;

        const isHovered = hoveredId === skill.id;
        const isActive = activeSkillId === skill.id;

        return (
          <group key={skill.id} position={[x, y, z]}>
            {/* Connecting Line to Center */}
            <line>
              <bufferGeometry
                attach="geometry"
                onUpdate={(geo) => {
                  geo.setFromPoints([
                    new THREE.Vector3(0, 0, 0),
                    new THREE.Vector3(-x, -y, -z),
                  ]);
                }}
              />
              <lineBasicMaterial
                attach="material"
                color={skill.color}
                transparent
                opacity={isHovered || isActive ? 0.9 : 0.25}
                linewidth={isHovered ? 2 : 1}
              />
            </line>

            {/* Satellite Mesh Node */}
            <mesh
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredId(skill.id);
                soundEngine.playHover();
              }}
              onPointerOut={() => setHoveredId(null)}
              onClick={(e) => {
                e.stopPropagation();
                onSelectSkill(skill);
                soundEngine.playClick();
              }}
            >
              <octahedronGeometry args={[isHovered || isActive ? 0.45 : 0.3, 0]} />
              <meshStandardMaterial
                color={skill.color}
                emissive={skill.color}
                emissiveIntensity={isHovered || isActive ? 1.5 : 0.6}
                wireframe={!isHovered && !isActive}
              />
            </mesh>

            {/* HTML Sci-fi Label */}
            <Html position={[0, 0.6, 0]} center distanceFactor={12}>
              <button
                onClick={() => {
                  onSelectSkill(skill);
                  soundEngine.playClick();
                }}
                className={`interactive whitespace-nowrap rounded px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider transition-all duration-200 ${
                  isActive || isHovered
                    ? 'border border-cyan-400 bg-cyan-500/30 text-white shadow-[0_0_15px_#00f3ff] scale-110'
                    : 'border border-slate-700 bg-slate-900/80 text-cyan-400/80 hover:border-cyan-400 hover:text-cyan-300'
                }`}
              >
                {skill.name}
              </button>
            </Html>
          </group>
        );
      })}

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
    </group>
  );
};
