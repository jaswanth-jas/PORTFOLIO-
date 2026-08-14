import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto apple-glass rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl backdrop-blur-3xl flex flex-col items-center justify-center gap-6">
        
        {/* Profile Avatar + Brand Name */}
        <div className="flex items-center gap-3 text-white font-extrabold text-xl tracking-tight">
          <div className="relative">
            <img
              src="/jaswanth-profile.jpg"
              alt="Jaswanth A"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border-2 border-sky-400/80 shadow-lg shadow-sky-500/25"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
          </div>
          <span>Jaswanth<span className="text-sky-400">.dev</span></span>
        </div>

        {/* Clear Description Text */}
        <p className="text-sm text-slate-200 max-w-lg leading-relaxed font-jakarta tracking-normal">
          Designed with Apple Glassmorphism UI/UX principles. Built with React 19, Three.js, TypeScript, and Tailwind CSS.
        </p>

        {/* Social Action Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/jaswanth-jas"
            target="_blank"
            rel="noreferrer"
            className="h-11 w-11 rounded-full apple-glass flex items-center justify-center text-slate-200 hover:text-white hover:border-sky-400 transition-colors border border-white/15 shadow-md"
            title="GitHub"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/jaswanth-jas"
            target="_blank"
            rel="noreferrer"
            className="h-11 w-11 rounded-full apple-glass flex items-center justify-center text-slate-200 hover:text-white hover:border-sky-400 transition-colors border border-white/15 shadow-md"
            title="LinkedIn"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="mailto:jaswanth@example.com"
            className="h-11 w-11 rounded-full apple-glass flex items-center justify-center text-slate-200 hover:text-white hover:border-sky-400 transition-colors border border-white/15 shadow-md"
            title="Email Contact"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="text-xs text-slate-300 font-semibold tracking-normal">
          © 2026 Jaswanth A. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
