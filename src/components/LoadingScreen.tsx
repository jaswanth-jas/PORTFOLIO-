import React, { useEffect, useState } from 'react';
import { soundEngine } from '../audio/soundEngine';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOGS = [
  'SYSTEM_BOOT // INITIALIZING QUANTUM CORE...',
  'ALLOCATING WEBGL SHADER BUFFERS...',
  'CONNECTING NEURAL MESH INTERFACE...',
  'COMPILING 3D RAYMARCHING PIPELINES...',
  'CALIBRATING HYPER-DRIVE TELEMETRY...',
  'SYSTEM STATUS: ONLINE // COMMAND CENTER READY'
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8 + 3);
        if (next > 30 && logIndex === 0) setLogIndex(1);
        if (next > 55 && logIndex <= 1) setLogIndex(2);
        if (next > 75 && logIndex <= 2) setLogIndex(3);
        if (next > 90 && logIndex <= 3) setLogIndex(4);
        if (next >= 100 && logIndex <= 4) setLogIndex(5);

        soundEngine.playTyping();
        return Math.min(next, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [logIndex, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] font-mono text-cyan-400">
      {/* Background HUD Grid & CRT */}
      <div className="hud-grid absolute inset-0 opacity-20" />
      <div className="crt-overlay absolute inset-0 z-10 pointer-events-none" />

      {/* Center Holographic Wireframe Constructing Box */}
      <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
        {/* Animated outer ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400 animate-spin"
          style={{ animationDuration: '6s' }}
        />
        {/* Animated inner ring */}
        <div
          className="absolute inset-2 rounded-full border border-magenta-500/60 animate-spin"
          style={{ animationDuration: '3s', animationDirection: 'reverse' }}
        />

        {/* 3D Wireframe Box assembly simulation */}
        <div
          className="h-16 w-16 border-2 border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_#00f3ff] transition-all duration-300"
          style={{
            transform: `rotate(${progress * 3.6}deg) scale(${0.5 + progress / 200})`,
          }}
        />

        {/* Center Percentage */}
        <div className="absolute font-orbitron text-lg font-bold text-white tracking-wider">
          {progress}%
        </div>
      </div>

      {/* Cyberpunk Title */}
      <h1 className="mb-2 font-orbitron text-xl font-black tracking-widest text-white text-glow-cyan">
        SYSTEM BOOT SEQUENCE
      </h1>

      {/* Progress Bar Container */}
      <div className="relative mb-4 h-2 w-72 overflow-hidden rounded border border-cyan-500/40 bg-slate-900 p-0.5">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-magenta-500 to-amber-400 transition-all duration-150 shadow-[0_0_10px_#00f3ff]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Diagnostic Log Output */}
      <div className="h-6 font-mono text-xs tracking-wider text-cyan-400/80">
        &gt; {LOGS[logIndex]}
      </div>
    </div>
  );
};
