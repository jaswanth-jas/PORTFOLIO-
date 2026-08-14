import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { HoloCore } from './3d/HoloCore';
import { ReactAtom3D } from './3d/ReactAtom3D';
import { ParticleField } from './3d/ParticleField';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundEngine } from '../audio/soundEngine';
import { ArrowRight, Sparkles, Atom, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [hero3dMode, setHero3dMode] = useState<'atom' | 'core'>('atom');

  const handleInteraction = () => {
    soundEngine.playClick();
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden">
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <ParticleField count={2400} />
          {hero3dMode === 'atom' ? (
            <ReactAtom3D color="#61dafb" size={1.8} />
          ) : (
            <HoloCore shape="torusKnot" color="#38bdf8" />
          )}
        </Canvas>
      </div>

      {/* Ambient Lighting Blobs */}
      <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-sky-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[140px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl px-4 text-center">
        
        {/* 3D Mode Switcher & Web3 Status Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 apple-pill px-4 py-1.5 text-xs font-semibold text-sky-300 shadow-xl"
          >
            <Sparkles className="h-4 w-4 text-sky-400 animate-pulse" />
            <span>{PERSONAL_INFO.status}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-1 p-1 apple-glass rounded-full border border-white/10 text-xs font-semibold"
          >
            <button
              onClick={() => { soundEngine.playClick(); setHero3dMode('atom'); }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] transition-all ${
                hero3dMode === 'atom' ? 'bg-[#61dafb]/20 text-[#61dafb] border border-[#61dafb]/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Atom className="h-3.5 w-3.5" />
              <span>React 3D Atom</span>
            </button>

            <button
              onClick={() => { soundEngine.playClick(); setHero3dMode('core'); }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] transition-all ${
                hero3dMode === 'core' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Holo Core</span>
            </button>
          </motion.div>
        </div>

        {/* Profile Portrait Showcase Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:scale-105 transition-transform duration-300">
            <img
              src="/jaswanth-profile.jpg"
              alt="Jaswanth A Professional Portrait"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
            />
            <div className="absolute bottom-1 right-1 bg-emerald-500 border-2 border-slate-900 w-5 h-5 rounded-full shadow-lg" title="Online & Available" />
          </div>
        </motion.div>

        {/* Big Apple Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight font-syne drop-shadow-2xl"
        >
          Hello, I'm{' '}
          <span className="react-cyan-text drop-shadow-[0_10px_35px_rgba(97,218,251,0.4)]">Jaswanth</span>
        </motion.h1>

        {/* Subtitle with Anthropic Serif Aesthetic */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-100 mb-6 max-w-3xl mx-auto leading-snug claude-serif tracking-normal"
        >
          {PERSONAL_INFO.title}
        </motion.h2>

        {/* Bio Subtext with Anthropic Serif Body Voice */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed claude-serif font-normal italic opacity-90"
        >
          "{PERSONAL_INFO.subtext}"
        </motion.p>

        {/* Digital Marketing Style Floating Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto mb-10"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.08 }}
              className="apple-glass rounded-2xl p-4 border border-white/20 text-center shadow-2xl backdrop-blur-2xl"
            >
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-300 font-orbitron mb-1">{stat.label}</div>
              <div className="text-base sm:text-lg font-black text-white font-orbitron tracking-wide">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={handleInteraction}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 hover:scale-105 transition-all duration-300"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="https://github.com/jaswanth-jas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInteraction}
            className="inline-flex items-center gap-2.5 apple-glass apple-glass-hover px-7 py-4 text-sm font-semibold text-white rounded-full"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
