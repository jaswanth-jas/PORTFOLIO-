import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { soundEngine } from '../audio/soundEngine';
import { ExternalLink, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelect = (project: Project) => {
    soundEngine.playCardSelect();
    setSelectedProject(project);
  };

  const closeModal = () => {
    soundEngine.playClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 apple-pill px-4 py-1.5 text-xs font-extrabold text-purple-300 mb-4 font-orbitron shadow-xl">
          <Layers className="h-4 w-4 text-purple-400" />
          <span>CURATED PORTFOLIO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 font-syne drop-shadow-xl">
          Featured <span className="react-cyan-text drop-shadow-[0_4px_25px_rgba(97,218,251,0.4)]">Projects</span>
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base font-jakarta leading-relaxed">
          Showcasing my flagship AI systems, web development projects, Java suites, and UI/UX design systems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => handleSelect(project)}
            className="apple-glass apple-glass-hover rounded-3xl p-8 cursor-pointer relative overflow-hidden flex flex-col justify-between group border border-white/20 shadow-2xl backdrop-blur-2xl"
          >
            {/* Ambient Card Background Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
              style={{ backgroundColor: project.accentColor }}
            />

            <div>
              {/* Category Pill */}
              <div className="flex items-center justify-between mb-6">
                <span className="apple-pill px-3.5 py-1 text-xs font-extrabold text-sky-300 border border-white/15 font-orbitron">
                  {project.category}
                </span>
                <Sparkles className="h-4 w-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-sky-300 transition-colors font-syne">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs font-bold text-purple-300 mb-4 uppercase tracking-wider font-orbitron">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-200 text-sm mb-6 leading-relaxed font-jakarta">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="apple-pill px-3 py-1 text-xs font-semibold text-slate-200 border border-white/10 font-jakarta"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs font-semibold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Project Specs</span>
                <ChevronRight className="h-4 w-4" />
              </span>

              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="h-9 w-9 rounded-full apple-glass flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="h-9 w-9 rounded-full apple-glass flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="apple-glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 h-10 w-10 rounded-full apple-glass flex items-center justify-center text-slate-300 hover:text-white"
            >
              ✕
            </button>

            <span className="apple-pill px-3.5 py-1 text-xs font-semibold text-sky-300 mb-4 inline-block">
              {selectedProject.category}
            </span>

            <h3 className="text-3xl font-extrabold text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm font-semibold text-purple-300 mb-6 uppercase tracking-wider">
              {selectedProject.subtitle}
            </p>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            {/* Architecture Details */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">
                Key Features & Architecture:
              </h4>
              <div className="space-y-2.5">
                {selectedProject.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {selectedProject.metrics.map((metric) => (
                <div key={metric.label} className="apple-glass rounded-2xl p-4 text-center">
                  <div className="text-xs font-semibold text-slate-400 mb-1">{metric.label}</div>
                  <div className="text-base font-bold text-sky-400">{metric.value}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 apple-glass px-5 py-2.5 rounded-full text-xs font-semibold text-white hover:bg-white/10"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
