import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModelPreview } from './3d/ProjectModelPreview';
import { MatrixRain } from './3d/MatrixRain';
import { soundEngine } from '../audio/soundEngine';
import { ExternalLink, X, Layers, Cpu, Code2 } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [cardRotate, setCardRotate] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    setCardRotate((prev) => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
  };

  const handleMouseLeaveCard = (id: string) => {
    setCardRotate((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
    setHoveredCardId(null);
  };

  return (
    <section id="projects" className="relative w-full py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
          <Layers className="h-4 w-4" />
          <span>TACTICAL MODULES // 3D ARCHITECTURE</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white text-glow-cyan">
          FEATURED PROJECTS
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-magenta-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid of 3D Floating Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => {
          const rot = cardRotate[project.id] || { x: 0, y: 0 };
          const isHovered = hoveredCardId === project.id;

          return (
            <div
              key={project.id}
              onMouseMove={(e) => handleMouseMoveCard(e, project.id)}
              onMouseEnter={() => {
                setHoveredCardId(project.id);
                soundEngine.playHover();
              }}
              onMouseLeave={() => handleMouseLeaveCard(project.id)}
              onClick={() => {
                setSelectedProject(project);
                soundEngine.playClick();
              }}
              style={{
                transform: `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
              }}
              className="interactive glass-panel glass-panel-hover corner-brackets relative cursor-pointer rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between font-mono text-[10px] text-cyan-400 mb-3">
                  <span className="rounded bg-cyan-950/80 px-2 py-0.5 border border-cyan-500/40">
                    {project.category}
                  </span>
                  <span>ID: {project.id.toUpperCase()}</span>
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-white mb-1 group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-magenta-400 mb-3">{project.subtitle}</p>
                <p className="font-rajdhani text-sm text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Metric Readout */}
                <div className="mb-4 grid grid-cols-2 gap-2 font-mono text-[10px] bg-slate-950/60 p-2 rounded border border-slate-800">
                  {project.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <div className="text-slate-400">{m.label}</div>
                      <div className="text-cyan-300 font-bold">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] rounded bg-slate-800/80 px-2 py-0.5 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action trigger label */}
                <div className="flex items-center justify-between font-mono text-xs text-cyan-400 pt-2 border-t border-cyan-500/20">
                  <span>INSPECT MODULE</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-Screen Holo-Inspector Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
          {/* Matrix Code Rain Canvas */}
          <MatrixRain color={selectedProject.accentColor} opacity={0.25} />

          {/* Modal Container */}
          <div className="glass-panel corner-brackets relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border-cyan-400 p-6 shadow-[0_0_50px_rgba(0,243,255,0.3)] text-white">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProject(null);
                soundEngine.playClick();
              }}
              className="interactive absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-900 text-cyan-400 hover:bg-magenta-500 hover:text-white transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 3D Preview Canvas */}
              <div className="relative h-64 lg:h-auto min-h-[260px] rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-950/80">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ProjectModelPreview
                    shape={selectedProject.modelShape}
                    color={selectedProject.accentColor}
                  />
                </Canvas>
                <div className="absolute bottom-2 left-2 font-mono text-[10px] text-cyan-400 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  [ 3D HOLO INSPECTOR ACTIVE ]
                </div>
              </div>

              {/* Detail Content */}
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
                  <Cpu className="h-4 w-4" />
                  <span>{selectedProject.category}</span>
                </div>

                <h3 className="font-orbitron text-2xl sm:text-3xl font-black text-white mb-1">
                  {selectedProject.title}
                </h3>
                <p className="font-mono text-sm text-magenta-400 mb-4">
                  {selectedProject.subtitle}
                </p>

                <p className="font-rajdhani text-base text-slate-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Telemetry Metrics */}
                <div className="mb-6 grid grid-cols-3 gap-2 font-mono text-xs bg-slate-950 p-3 rounded border border-cyan-500/30">
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-slate-400 text-[10px]">{m.label}</div>
                      <div className="text-cyan-400 font-bold">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="mb-6">
                  <div className="font-mono text-xs font-bold text-cyan-300 mb-2 flex items-center gap-1.5">
                    <Code2 className="h-4 w-4 text-cyan-400" />
                    <span>SYSTEM ARCHITECTURE HIGHLIGHTS:</span>
                  </div>
                  <ul className="space-y-1.5 font-rajdhani text-sm text-slate-300">
                    {selectedProject.architectureDetails.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono">&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-cyan-500/20">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive flex items-center gap-2 rounded bg-cyan-500 px-4 py-2 font-mono text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-[0_0_15px_#00f3ff]"
                    >
                      <span>LAUNCH SIMULATION</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive flex items-center gap-2 rounded border border-slate-700 bg-slate-900 px-4 py-2 font-mono text-xs font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>SOURCE CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
