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

    const cyan = new THREE.Color('#00f3ff');
    const magenta = new THREE.Color('#ff0055');
    const purple = new THREE.Color('#8a2be2');

    for (let i = 0; i < count; i++) {
      // Spread across 3D space
      posArr[i * 3] = (Math.random() - 0.5) * 35;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 35;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 35;

      // Color pick
      const randColor = Math.random();
      let selectedColor = cyan;
      if (randColor > 0.75) selectedColor = magenta;
      else if (randColor > 0.5) selectedColor = purple;

      colArr[i * 3] = selectedColor.r;
      colArr[i * 3 + 1] = selectedColor.g;
      colArr[i * 3 + 2] = selectedColor.b;
    }

    return { positions: posArr, colors: colArr };
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;

      // Mouse deflection tilt
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
        size={0.06}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};
