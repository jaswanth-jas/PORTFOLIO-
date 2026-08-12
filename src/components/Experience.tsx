import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';
import { soundEngine } from '../audio/soundEngine';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    soundEngine.playClick();
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="relative py-24 px-4 max-w-5xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 apple-pill px-4 py-1.5 text-xs font-semibold text-sky-300 mb-4">
          <Briefcase className="h-4 w-4 text-sky-400" />
          <span>Career Journey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Experience & <span className="apple-gradient-text">Background</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Engineering academics, software development projects, and UI/UX design achievements.
        </p>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
        {EXPERIENCES.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-2 h-6 w-6 rounded-full border border-white/20 transition-all duration-300 flex items-center justify-center ${
                  exp.status === 'ACTIVE'
                    ? 'bg-sky-500/20 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                    : 'bg-slate-900'
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    exp.status === 'ACTIVE' ? 'bg-sky-400 animate-ping' : 'bg-slate-500'
                  }`}
                />
              </div>

              <div
                onClick={() => toggleExpand(exp.id)}
                className="apple-glass apple-glass-hover rounded-3xl p-6 sm:p-8 cursor-pointer border border-white/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-sky-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-purple-400" />
                      {exp.location}
                    </span>
                  </div>

                  <span className="apple-pill px-3 py-0.5 text-[11px] font-semibold text-sky-300">
                    {exp.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm font-semibold text-sky-400 mb-4">{exp.company}</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.4 }}
                    className="pt-4 border-t border-white/10 space-y-3"
                  >
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Highlights & Achievements:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="apple-pill px-2.5 py-1 text-[11px] font-medium text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
