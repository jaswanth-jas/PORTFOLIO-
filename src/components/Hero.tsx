import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { HoloCore } from './3d/HoloCore';
import { ParticleField } from './3d/ParticleField';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundEngine } from '../audio/soundEngine';
import { ChevronRight, Cpu, Radio, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [glitchedName, setGlitchedName] = useState(PERSONAL_INFO.name);
  const [glitchedTitle, setGlitchedTitle] = useState(PERSONAL_INFO.title);

  // Scifi Glitch Text Effect
  const triggerGlitch = () => {
    soundEngine.playGlitch();
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let count = 0;
    const interval = setInterval(() => {
      setGlitchedName(
        PERSONAL_INFO.name
          .split('')
          .map((char) => (Math.random() > 0.4 ? chars[Math.floor(Math.random() * chars.length)] : char))
          .join('')
      );
      setGlitchedTitle(
        PERSONAL_INFO.title
          .split('')
          .map((char) => (Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char))
          .join('')
      );
      count++;
      if (count > 6) {
        clearInterval(interval);
        setGlitchedName(PERSONAL_INFO.name);
        setGlitchedTitle(PERSONAL_INFO.title);
      }
    }, 40);
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleField count={2200} />
          <HoloCore shape="icosahedron" color="#00f3ff" />
        </Canvas>
      </div>

      {/* Cyberpunk HUD Grid & Vignette Overlay */}
      <div className="hud-grid absolute inset-0 z-0 opacity-30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#030712]/70 to-[#030712] pointer-events-none" />

      {/* Sci-Fi Corner Telemetry Stats */}
      <div className="hidden lg:block absolute top-28 left-8 z-10 font-mono text-[10px] text-cyan-400/70 tracking-widest space-y-1">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3 w-3 text-cyan-400" />
          <span>NEURAL_LINK: ENCRYPTED</span>
        </div>
        <div>SYS_LATENCY: 0.4ms</div>
        <div>FPS_TARGET: 120Hz</div>
      </div>

      <div className="hidden lg:block absolute top-28 right-8 z-10 font-mono text-[10px] text-magenta-400/70 tracking-widest text-right space-y-1">
        <div className="flex items-center justify-end gap-2">
          <span>SECTOR-09 // TOKYO</span>
          <Radio className="h-3 w-3 text-magenta-400 animate-pulse" />
        </div>
        <div>COORDINATES: 35.6762° N, 139.6503° E</div>
        <div>GRID_MODE: THREE_JS_V3</div>
      </div>

      {/* Main HUD Central Card */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/40 px-3 py-1 font-mono text-xs text-cyan-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] mb-6">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Glitch Name */}
        <h1
          onMouseEnter={triggerGlitch}
          className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black tracking-wider text-white text-glow-cyan mb-4 cursor-pointer select-none"
        >
          {glitchedName}
        </h1>

        {/* Glitch Subtitle */}
        <h2 className="font-mono text-sm sm:text-base md:text-xl font-bold tracking-widest text-magenta-400 text-glow-magenta mb-6 max-w-2xl mx-auto">
          {glitchedTitle}
        </h2>

        {/* Description Bio */}
        <p className="font-rajdhani text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
          {PERSONAL_INFO.subtext}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={() => soundEngine.playClick()}
            onMouseEnter={() => soundEngine.playHover()}
            className="interactive group glass-panel flex items-center gap-3 rounded-lg border-cyan-400 px-6 py-3 font-mono text-sm font-bold text-white transition-all hover:bg-cyan-500/20 hover:border-cyan-300 hover:shadow-[0_0_25px_#00f3ff]"
          >
            <span>ENGAGE PROTOCOLS // PROJECTS</span>
            <ChevronRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={() => soundEngine.playClick()}
            onMouseEnter={() => soundEngine.playHover()}
            className="interactive group glass-panel flex items-center gap-2 rounded-lg border-magenta-500/50 px-6 py-3 font-mono text-sm font-bold text-magenta-300 transition-all hover:bg-magenta-500/20 hover:border-magenta-400 hover:shadow-[0_0_20px_#ff0055]"
          >
            <Cpu className="h-4 w-4 text-magenta-400" />
            <span>OPEN TERMINAL LINK</span>
          </a>
        </div>

        {/* Telemetry Quick Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {PERSONAL_INFO.stats.map((stat) => (
            <div key={stat.label} className="glass-panel corner-brackets p-3 rounded text-center">
              <div className="font-orbitron text-xl font-bold text-cyan-400">{stat.value}</div>
              <div className="font-mono text-[10px] text-slate-400 tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
