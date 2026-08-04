import React, { useEffect, useState } from 'react';
import { soundEngine } from '../audio/soundEngine';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOGS = [
  'J.A.R.V.I.S. INITIALIZING // WELCOME HOME, SIR...',
  'CHARGING TRI-ARC REACTOR COIL [10.2 GW]...',
  'ALLOCATING NANOTECH SUIT SHADERS...',
  'CALIBRATING REPULSOR AVIONICS PIPELINES...',
  'TARGET LOCK PROTOCOLS: ACTIVE',
  'STARK SUIT STATUS: ONLINE // COMMAND CENTER READY'
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] font-mono text-amber-400">
      {/* Background HUD Grid & CRT */}
      <div className="hud-grid absolute inset-0 opacity-25" />
      <div className="crt-overlay absolute inset-0 z-10 pointer-events-none" />

      {/* Center Holographic Arc Reactor Assembly */}
      <div className="relative mb-8 flex h-36 w-36 items-center justify-center">
        {/* Outer Gold Rotating Ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400 animate-spin"
          style={{ animationDuration: '7s' }}
        />
        {/* Middle Arc Cyan Ring */}
        <div
          className="absolute inset-3 rounded-full border border-cyan-400/80 animate-spin shadow-[0_0_20px_#00f3ff]"
          style={{ animationDuration: '3.5s', animationDirection: 'reverse' }}
        />
        {/* Inner Crimson Core Ring */}
        <div
          className="absolute inset-6 rounded-full border border-red-500/80 animate-ping"
        />

        {/* 3D Arc Core glowing pulse */}
        <div
          className="h-16 w-16 rounded-full border-2 border-amber-400 bg-amber-500/20 shadow-[0_0_35px_#ffd700] transition-all duration-300 flex items-center justify-center"
          style={{
            transform: `scale(${0.7 + progress / 250})`,
          }}
        >
          <div className="h-6 w-6 rounded-full bg-cyan-400 shadow-[0_0_20px_#00f3ff]" />
        </div>

        {/* Center Percentage */}
        <div className="absolute font-orbitron text-sm font-black text-white tracking-widest drop-shadow-[0_0_10px_#ffd700]">
          {progress}%
        </div>
      </div>

      {/* J.A.R.V.I.S. Title */}
      <h1 className="mb-2 font-orbitron text-xl sm:text-2xl font-black tracking-widest text-white text-glow-gold">
        J.A.R.V.I.S. SYSTEM BOOT PROTOCOL
      </h1>

      {/* Progress Bar Container */}
      <div className="relative mb-4 h-2.5 w-80 overflow-hidden rounded border border-amber-500/50 bg-slate-950 p-0.5 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-red-500 transition-all duration-150 shadow-[0_0_15px_#ffd700]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Diagnostic Log Output */}
      <div className="h-6 font-mono text-xs tracking-wider text-amber-300">
        &gt; {LOGS[logIndex]}
      </div>
    </div>
  );
};
