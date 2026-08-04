import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({ count = 2500 }) => {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const posArr = new Float32Array(count * 3);
    const colArr = new Float32Array(count * 3);

    const gold = new THREE.Color('#ffd700');
    const cyan = new THREE.Color('#00f3ff');
    const crimson = new THREE.Color('#ff1a1a');

    for (let i = 0; i < count; i++) {
      posArr[i * 3] = (Math.random() - 0.5) * 35;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 35;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const randColor = Math.random();
      let selectedColor = gold;
      if (randColor > 0.65) selectedColor = cyan;
      else if (randColor > 0.4) selectedColor = crimson;

      colArr[i * 3] = selectedColor.r;
      colArr[i * 3 + 1] = selectedColor.g;
      colArr[i * 3 + 2] = selectedColor.b;
    }

    return { positions: posArr, colors: colArr };
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.035;
      pointsRef.current.rotation.x += delta * 0.012;

      const mouseX = state.pointer.x * 0.5;
      const mouseY = state.pointer.y * 0.5;
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, pointsRef.current.rotation.y + mouseX * 0.02, 0.05);
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, pointsRef.current.rotation.x - mouseY * 0.02, 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};
