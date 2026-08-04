import React from 'react';
import { Cpu } from 'lucide-react';
import { soundEngine } from '../audio/soundEngine';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full border-t border-cyan-500/20 bg-slate-950/80 py-12 px-4 font-mono text-xs text-slate-400">
      <div className="hud-grid absolute inset-0 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded border border-cyan-400/50 bg-cyan-500/10">
            <Cpu className="h-4 w-4 text-cyan-400" />
          </div>
          <div>
            <div className="font-orbitron font-bold text-white tracking-widest">
              ALEX CHEN <span className="text-cyan-400">//</span> COMMAND CENTER
            </div>
            <div className="text-[10px] text-slate-500">
              © 2026 QUANTUM GRAPHICS LABS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>

        {/* Telemetry Footer Badge */}
        <div className="flex items-center gap-6 font-mono text-[11px] text-cyan-400/80">
          <div>ENGINE: THREE.JS R168</div>
          <div>FRAMEWORK: REACT 19</div>
          <div>GPU_COMPUTE: WEBGPU_READY</div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="interactive flex h-9 w-9 items-center justify-center rounded border border-slate-800 bg-slate-900 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_#00f3ff] transition-all"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="interactive flex h-9 w-9 items-center justify-center rounded border border-slate-800 bg-slate-900 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_#00f3ff] transition-all"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="interactive flex h-9 w-9 items-center justify-center rounded border border-slate-800 bg-slate-900 text-slate-400 hover:border-magenta-400 hover:text-magenta-400 hover:shadow-[0_0_15px_#ff0055] transition-all"
          >
            <TwitterIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
