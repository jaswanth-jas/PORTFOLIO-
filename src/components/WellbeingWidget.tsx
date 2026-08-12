import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../audio/soundEngine';
import { Heart, Sparkles, Volume2, VolumeX, Activity, Smile, Sun, Moon, CheckCircle2, Zap } from 'lucide-react';

const MOODS = [
  { label: 'Energized', icon: '⚡', color: '#38bdf8' },
  { label: 'Focused', icon: '🧠', color: '#c084fc' },
  { label: 'Calm', icon: '🌱', color: '#10b981' },
  { label: 'Creative', icon: '🎨', color: '#fb7185' },
];

const HABITS = [
  { id: 1, title: 'Deep Work & Code Session', target: '2 Hours Completed' },
  { id: 2, title: 'Mindful Breathing & Rest', target: '10 Mins Completed' },
  { id: 3, title: 'Algorithm & Logic Optimization', target: '1 Module Done' },
];

export const WellbeingWidget: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [completedHabits, setCompletedHabits] = useState<number[]>([1]);

  const handleMoodSelect = (index: number) => {
    soundEngine.playClick();
    setSelectedMood(index);
  };

  const toggleHabit = (id: number) => {
    soundEngine.playClick();
    setCompletedHabits((prev) =>
      prev.includes(id) ? prev.filter((h) => h !== id) : [...prev, id]
    );
  };

  const toggleAudio = () => {
    soundEngine.playClick();
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section id="wellbeing" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 apple-pill px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-4">
          <Heart className="h-4 w-4 text-emerald-400 animate-pulse" />
          <span>Nixtio Wellbeing & Mindset Suite</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-web3">
          Daily Focus & <span className="apple-gradient-text">Mindset Hub</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Interactive wellness, mood tracking, and focus soundscapes designed following Nixtio's calming UI/UX principles.
        </p>
      </motion.div>

      {/* Nixtio Wellbeing Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Interactive Mood Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="apple-glass rounded-3xl p-8 flex flex-col justify-between border border-white/10"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="apple-pill px-3 py-1 text-xs font-semibold text-sky-300">
                Mindset Status
              </span>
              <Activity className="h-4 w-4 text-sky-400 animate-pulse" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Current Developer State</h3>
            <p className="text-xs text-slate-400 mb-6">Select your current energy and focus level</p>

            {/* Mood Selector Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {MOODS.map((mood, idx) => {
                const isSelected = selectedMood === idx;
                return (
                  <button
                    key={mood.label}
                    onClick={() => handleMoodSelect(idx)}
                    className={`rounded-2xl p-3 text-left border transition-all cursor-pointer flex items-center gap-2.5 ${
                      isSelected
                        ? 'bg-white/15 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] scale-[1.03]'
                        : 'bg-slate-900/60 border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-xl">{mood.icon}</span>
                    <span className="text-xs font-semibold text-white">{mood.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stat Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-slate-400">
            <span>Focus Level</span>
            <span className="font-bold text-emerald-400">98% OPTIMAL</span>
          </div>
        </motion.div>

        {/* Card 2: Calming Soundscape & Audio Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="apple-glass rounded-3xl p-8 flex flex-col justify-between border border-white/10"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="apple-pill px-3 py-1 text-xs font-semibold text-purple-300">
                Focus Soundscape
              </span>
              <Sparkles className="h-4 w-4 text-purple-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Alpha Waves & Ambient Rain</h3>
            <p className="text-xs text-slate-400 mb-6">Binaural audio frequency for deep programming concentration</p>

            {/* Audio Visualizer Bars */}
            <div className="h-20 flex items-end justify-center gap-1.5 mb-6 apple-glass rounded-2xl p-4">
              {[40, 75, 55, 90, 60, 100, 80, 45, 65, 85, 50, 70].map((h, i) => (
                <div
                  key={i}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    isPlayingAudio ? 'bg-gradient-to-t from-purple-500 to-sky-400 animate-pulse' : 'bg-slate-700'
                  }`}
                  style={{ height: isPlayingAudio ? `${h}%` : '20%' }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={toggleAudio}
            className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-sky-500 py-3 text-xs font-bold text-white shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="h-4 w-4" />
                <span>Pause Soundscape</span>
              </>
            ) : (
              <>
                <Volume2 className="h-4 w-4" />
                <span>Play Calming Waves</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Card 3: Daily Habit Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="apple-glass rounded-3xl p-8 flex flex-col justify-between border border-white/10"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="apple-pill px-3 py-1 text-xs font-semibold text-emerald-300">
                Daily Routine
              </span>
              <Zap className="h-4 w-4 text-emerald-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Productivity Checkpoints</h3>
            <p className="text-xs text-slate-400 mb-6">Track habit milestones for sustainable engineering focus</p>

            <div className="space-y-3 mb-6">
              {HABITS.map((habit) => {
                const isDone = completedHabits.includes(habit.id);
                return (
                  <div
                    key={habit.id}
                    onClick={() => toggleHabit(habit.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isDone
                        ? 'bg-emerald-500/10 border-emerald-400/40 text-white'
                        : 'bg-slate-900/60 border-white/10 text-slate-400 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className={`h-4 w-4 ${isDone ? 'text-emerald-400' : 'text-slate-600'}`} />
                      <span className="text-xs font-semibold">{habit.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{habit.target}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>Daily Progress</span>
            <span className="text-emerald-400">{Math.round((completedHabits.length / HABITS.length) * 100)}% Completed</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
