import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/portfolioData';
import { Cpu, Code2, Globe, Layers, Palette, Film, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-5 w-5 text-rose-400" />,
  Globe: <Globe className="h-5 w-5 text-sky-400" />,
  Layers: <Layers className="h-5 w-5 text-purple-400" />,
  Palette: <Palette className="h-5 w-5 text-amber-400" />,
  Film: <Film className="h-5 w-5 text-emerald-400" />,
  Cpu: <Cpu className="h-5 w-5 text-sky-400" />,
  Terminal: <Terminal className="h-5 w-5 text-purple-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 apple-pill px-4 py-1.5 text-xs font-semibold text-sky-300 mb-4">
          <Cpu className="h-4 w-4 text-sky-400" />
          <span>Tech Stack & Tools</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Capabilities & <span className="apple-gradient-text">Skills</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Extracted from my GitHub Profile README — technologies, frameworks, and design tools I use daily.
        </p>
      </motion.div>

      {/* Skills Apple Widget Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="apple-glass apple-glass-hover rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-2xl apple-glass flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {iconMap[skill.iconName] || <Code2 className="h-5 w-5 text-sky-400" />}
              </div>
              <span className="text-xs font-semibold text-slate-400 apple-pill px-3 py-1">
                {skill.experience}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
              <p className="text-xs font-medium text-slate-400 mb-4">{skill.category}</p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-900/80 rounded-full h-2 overflow-hidden border border-white/10 p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
                  className="h-full rounded-full shadow-md"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <div className="flex justify-between items-center mt-2 text-[11px] font-semibold text-slate-400">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
