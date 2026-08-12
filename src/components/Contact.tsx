import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundEngine } from '../audio/soundEngine';
import { Mail, Send, MapPin, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playClick();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 apple-pill px-4 py-1.5 text-xs font-semibold text-sky-300 mb-4">
          <Mail className="h-4 w-4 text-sky-400" />
          <span>Let's Connect</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Get In <span className="apple-gradient-text">Touch</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Have a project idea, question, or engineering opportunity? Send a message directly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="apple-glass rounded-3xl p-6 flex items-center gap-5 border border-white/10">
            <div className="h-14 w-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-0.5">Email Me</h3>
              <p className="text-xs text-slate-400">jaswanth@example.com</p>
            </div>
          </div>

          <div className="apple-glass rounded-3xl p-6 flex items-center gap-5 border border-white/10">
            <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-0.5">LinkedIn Profile</h3>
              <a href="https://linkedin.com/in/jaswanth-jas" target="_blank" rel="noreferrer" className="text-xs text-purple-300 hover:underline">
                linkedin.com/in/jaswanth-jas
              </a>
            </div>
          </div>

          <div className="apple-glass rounded-3xl p-6 flex items-center gap-5 border border-white/10">
            <div className="h-14 w-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-0.5">GitHub Repository</h3>
              <a href="https://github.com/jaswanth-jas" target="_blank" rel="noreferrer" className="text-xs text-amber-300 hover:underline">
                github.com/jaswanth-jas
              </a>
            </div>
          </div>

          <div className="apple-glass rounded-3xl p-6 flex items-center gap-5 border border-white/10">
            <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-0.5">Location</h3>
              <p className="text-xs text-slate-400">{PERSONAL_INFO.sector}</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="apple-glass rounded-3xl p-8 border border-white/10 space-y-6"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Your Name</label>
            <input
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              placeholder="e.g. Alex Morgan"
              className="w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Your Email</label>
            <input
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              placeholder="alex@example.com"
              className="w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Message</label>
            <textarea
              rows={4}
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Tell me about your project or idea..."
              className="w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 py-4 text-sm font-bold text-white shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            {submitted ? (
              <>
                <CheckCircle className="h-4 w-4 text-white" />
                <span>Message Sent!</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
