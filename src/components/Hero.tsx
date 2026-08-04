import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { HoloCore } from './3d/HoloCore';
import { ParticleField } from './3d/ParticleField';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundEngine } from '../audio/soundEngine';
import { ChevronRight, Cpu, Zap, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [glitchedName, setGlitchedName] = useState(PERSONAL_INFO.name);
  const [glitchedTitle, setGlitchedTitle] = useState(PERSONAL_INFO.title);

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
      {/* Background 3D Arc Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleField count={2500} />
          <HoloCore shape="icosahedron" color="#ffd700" />
        </Canvas>
      </div>

      {/* Cyberpunk HUD Grid & Vignette Overlay */}
      <div className="hud-grid absolute inset-0 z-0 opacity-30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#030712]/75 to-[#030712] pointer-events-none" />

      {/* Sci-Fi Corner Telemetry Stats */}
      <div className="hidden lg:block absolute top-28 left-8 z-10 font-mono text-[10px] text-amber-400/80 tracking-widest space-y-1">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
          <span>SUIT INTEGRITY: 100%</span>
        </div>
        <div>ARC OUTPUT: 10.2 GW</div>
        <div>DEFENSE MATRIX: ACTIVE</div>
      </div>

      <div className="hidden lg:block absolute top-28 right-8 z-10 font-mono text-[10px] text-cyan-400/80 tracking-widest text-right space-y-1">
        <div className="flex items-center justify-end gap-2">
          <span>STARK TOWER // MALIBU</span>
          <Zap className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
        </div>
        <div>MARK LXXXV: AVIONICS ONLINE</div>
        <div>J.A.R.V.I.S. VOICE: ACTIVE</div>
      </div>

      {/* Main J.A.R.V.I.S. HUD Central Card */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-950/40 px-3 py-1 font-mono text-xs text-amber-300 shadow-[0_0_20px_rgba(255,215,0,0.35)] mb-6">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Glitch Name */}
        <h1
          onMouseEnter={triggerGlitch}
          className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black tracking-wider text-white text-glow-gold mb-4 cursor-pointer select-none"
        >
          {glitchedName}
        </h1>

        {/* Glitch Subtitle */}
        <h2 className="font-mono text-sm sm:text-base md:text-xl font-bold tracking-widest text-cyan-400 text-glow-arc mb-6 max-w-2xl mx-auto">
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
            className="interactive group glass-panel flex items-center gap-3 rounded-lg border-amber-400 px-6 py-3 font-mono text-sm font-bold text-white transition-all hover:bg-amber-500/20 hover:border-amber-300 hover:shadow-[0_0_30px_#ffd700]"
          >
            <span>ENGAGE MARK SUITS // PROJECTS</span>
            <ChevronRight className="h-4 w-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={() => soundEngine.playClick()}
            onMouseEnter={() => soundEngine.playHover()}
            className="interactive group glass-panel flex items-center gap-2 rounded-lg border-cyan-500/50 px-6 py-3 font-mono text-sm font-bold text-cyan-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_#00f3ff]"
          >
            <Cpu className="h-4 w-4 text-cyan-400" />
            <span>JARVIS TERMINAL LINK</span>
          </a>
        </div>

        {/* Telemetry Quick Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {PERSONAL_INFO.stats.map((stat) => (
            <div key={stat.label} className="glass-panel corner-brackets p-3 rounded text-center border-amber-500/30">
              <div className="font-orbitron text-xl font-bold text-amber-400">{stat.value}</div>
              <div className="font-mono text-[10px] text-slate-400 tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
