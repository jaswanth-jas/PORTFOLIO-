import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { soundEngine } from '../audio/soundEngine';
import { ShieldCheck, ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    soundEngine.playClick();
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="relative w-full py-20 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase mb-2">
          <Briefcase className="h-4 w-4" />
          <span>FLIGHT COMPUTER LOGS // TIMELINE</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white text-glow-amber">
          MISSION HISTORY
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Flight Log Timeline Stream */}
      <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
        {EXPERIENCES.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Glowing Node Checkpoint */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-6 w-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  exp.status === 'ACTIVE'
                    ? 'border-cyan-400 bg-cyan-500/20 shadow-[0_0_15px_#00f3ff]'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    exp.status === 'ACTIVE' ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'
                  }`}
                />
              </div>

              {/* Log Card */}
              <div
                onClick={() => toggleExpand(exp.id)}
                onMouseEnter={() => soundEngine.playHover()}
                className="interactive glass-panel glass-panel-hover corner-brackets rounded-xl p-6 cursor-pointer"
              >
                {/* Log Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                    <span className="text-slate-600">|</span>
                    <MapPin className="h-3.5 w-3.5 text-magenta-400" />
                    <span>{exp.location}</span>
                  </div>

                  <span
                    className={`font-mono text-[10px] rounded px-2 py-0.5 border ${
                      exp.status === 'ACTIVE'
                        ? 'border-cyan-400 text-cyan-300 bg-cyan-950/80'
                        : 'border-slate-700 text-slate-400 bg-slate-900'
                    }`}
                  >
                    STATUS: {exp.status}
                  </span>
                </div>

                <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="font-mono text-sm text-magenta-400 mb-4">{exp.company}</p>

                <p className="font-rajdhani text-base text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Expandable Achievements */}
                {isExpanded && (
                  <div className="pt-4 border-t border-cyan-500/20 space-y-4">
                    <div>
                      <div className="font-mono text-xs font-bold text-cyan-300 mb-2">
                        // KEY MISSION ACHIEVEMENTS:
                      </div>
                      <ul className="space-y-2 font-rajdhani text-sm text-slate-300">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-mono text-xs font-bold text-slate-400 mb-2">
                        // DEPLOYED TECH STACK:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs rounded bg-slate-900 px-2.5 py-1 text-cyan-300 border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Toggle Footer */}
                <div className="mt-4 flex items-center justify-between font-mono text-xs text-cyan-400/80 pt-2 border-t border-slate-800">
                  <span>{isExpanded ? 'COLLAPSE MISSION LOG' : 'EXPAND MISSION DETAILS'}</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
