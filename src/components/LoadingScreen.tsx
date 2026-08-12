import React, { useEffect, useState } from 'react';
import { soundEngine } from '../audio/soundEngine';

interface LoadingScreenProps {
  onComplete: () => void;
}

const GREETINGS = [
  'Hello',
  'Bonjour',
  'Hola',
  'Ciao',
  'Namaste',
  'Konnichiwa',
  'Jaswanth'
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Greeting cycling interval
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 380);

    // Progress bar interval
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(greetingInterval);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }
        soundEngine.playTyping();
        return Math.min(prev + Math.floor(Math.random() * 9 + 4), 100);
      });
    }, 70);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none animate-pulse" />

      {/* Main Apple "Hello" Container */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-lg">
        {/* Apple Logo Icon */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl apple-glass shadow-2xl border border-white/20">
          <svg className="h-7 w-7 text-white fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.16-1.9-14.49-6.1-3.21-2.63-7.14-7.27-11.8-13.94-7.14-10.23-12.74-21.84-16.79-34.82-4.05-12.98-6.08-25.29-6.08-36.93 0-14.54 3.7-26.23 11.09-35.07 7.39-8.84 16.58-13.36 27.57-13.56 4.79 0 9.94 1.18 15.45 3.55 5.51 2.37 9.4 3.65 11.66 3.85 2.53 0 6.64-1.38 12.33-4.14 5.69-2.76 10.63-4.04 14.83-3.85 10.99.66 19.98 4.79 26.97 12.39-9.84 5.91-14.65 14.12-14.42 24.63.23 10.23 4.41 18.5 12.56 24.8 4.47 3.55 9.49 6.05 15.06 7.5-2.5 7.23-5.91 14.73-10.23 22.5zM119.22 31.09c0-6.73 2.45-13.12 7.35-19.16 4.9-6.04 11.13-9.67 18.69-10.89.23.92.35 1.77.35 2.56 0 6.6-2.48 13.06-7.44 19.37-4.96 6.31-11.17 9.87-18.63 10.68-.12-1.05-.32-1.9-.32-2.56z" />
          </svg>
        </div>

        {/* Dynamic Cursive Hello Greeting */}
        <div className="h-28 flex items-center justify-center mb-6">
          <h1 className="apple-hello-text text-6xl sm:text-7xl font-bold tracking-normal transition-all duration-300">
            {GREETINGS[greetingIndex]}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm font-medium text-slate-400 mb-8 tracking-wide uppercase">
          Jaswanth A · Apple UI & Glassmorphism Showcase
        </p>

        {/* Progress Bar Container */}
        <div className="relative h-1.5 w-64 overflow-hidden rounded-full bg-slate-800/80 border border-white/10 p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-rose-400 transition-all duration-150 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-3 text-xs font-semibold text-slate-400 tracking-wider">
          {progress}%
        </div>
      </div>
    </div>
  );
};
