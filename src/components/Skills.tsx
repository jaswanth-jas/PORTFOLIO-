import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { SKILLS } from '../data/portfolioData';
import type { Skill } from '../types';
import { OrbitingSatellites } from './3d/OrbitingSatellites';
import { soundEngine } from '../audio/soundEngine';
import { Zap } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(SKILLS[0]);

  const categories = ['ALL', '3D & Graphics', 'Frontend', 'Backend & Cloud', 'Systems & WASM'];

  const filteredSkills =
    selectedCategory === 'ALL'
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative w-full py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-magenta-400 tracking-widest uppercase mb-2">
          <Zap className="h-4 w-4" />
          <span>CYBERNETIC ARSENAL // TECH MATRIX</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white text-glow-magenta">
          SKILLS & CAPABILITIES
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-magenta-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              soundEngine.playClick();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className={`interactive rounded px-4 py-2 font-mono text-xs font-bold tracking-wider transition-all ${
              selectedCategory === cat
                ? 'border border-cyan-400 bg-cyan-500/20 text-white shadow-[0_0_15px_#00f3ff]'
                : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 3D Orbiting Satellites Canvas */}
        <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden glass-panel corner-brackets border-cyan-500/30">
          <Canvas camera={{ position: [0, 6, 8], fov: 50 }}>
            <OrbitingSatellites
              skills={filteredSkills}
              onSelectSkill={(skill) => setActiveSkill(skill)}
              activeSkillId={activeSkill?.id}
            />
          </Canvas>
          <div className="absolute top-3 left-3 font-mono text-[10px] text-cyan-400 bg-slate-950/80 px-2 py-1 rounded border border-cyan-500/30">
            [ INTERACTIVE 3D CONSTELLATION ]
          </div>
        </div>

        {/* HUD Energy Meters */}
        <div className="space-y-6">
          {/* Active Skill Highlight Header */}
          {activeSkill && (
            <div className="glass-panel p-4 rounded-xl border-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.2)] mb-6">
              <div className="flex items-center justify-between font-mono text-xs text-cyan-400 mb-1">
                <span>[ SELECTED MODULE ]</span>
                <span>EXP: {activeSkill.experience}</span>
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-2" style={{ color: activeSkill.color }}>
                {activeSkill.name}
              </h3>
              <div className="flex items-center justify-between font-mono text-xs text-slate-300">
                <span>POWER LEVEL: {activeSkill.level}%</span>
                <span>CATEGORY: {activeSkill.category}</span>
              </div>
            </div>
          )}

          {/* List of Skills with Energy Bars */}
          <div className="space-y-4 max-h-[340px] overflow-y-auto pr-2">
            {filteredSkills.map((skill) => {
              const isActive = activeSkill?.id === skill.id;

              return (
                <div
                  key={skill.id}
                  onClick={() => {
                    setActiveSkill(skill);
                    soundEngine.playClick();
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className={`interactive glass-panel p-3 rounded-lg border transition-all cursor-pointer ${
                    isActive
                      ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,243,255,0.25)]'
                      : 'border-slate-800 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                    <span className="font-bold text-white">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>

                  {/* Energy Meter Bar */}
                  <div className="relative h-2.5 w-full overflow-hidden rounded bg-slate-950 p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded transition-all duration-500"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
