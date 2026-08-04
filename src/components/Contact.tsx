import React, { useState, useRef, useEffect } from 'react';
import { soundEngine } from '../audio/soundEngine';
import confetti from 'canvas-confetti';
import { Terminal, Send, CheckCircle2, RefreshCw, Radio } from 'lucide-react';

interface CommandOutput {
  id: string;
  type: 'input' | 'system' | 'error' | 'success';
  text: string;
}

export const Contact: React.FC = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });
  const [terminalLogs, setTerminalLogs] = useState<CommandOutput[]>([
    { id: '1', type: 'system', text: 'QUANTUM TERMINAL LINK v4.2 INITIALIZED' },
    { id: '2', type: 'system', text: 'Type "help" or fill command fields below to transmit payload.' },
  ]);
  const [cliInput, setCliInput] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSent, setTransmissionSent] = useState(false);

  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;

    soundEngine.playClick();
    const cmd = cliInput.trim().toLowerCase();
    const newLogs: CommandOutput[] = [
      ...terminalLogs,
      { id: Date.now().toString(), type: 'input', text: `$ ${cliInput}` },
    ];

    if (cmd === 'help') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: 'AVAILABLE COMMANDS: help, contact, skills, clear, matrix, send',
      });
    } else if (cmd === 'contact') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: 'DIRECT INTERFACE: alex.chen.architect@quantum-tech.io | DISCORD: ARCHITECT_0X',
      });
    } else if (cmd === 'skills') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: 'PRIMARY STACK: Three.js, React, WebGL Shaders, Rust/WASM, TypeScript, TailwindCSS',
      });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setCliInput('');
      return;
    } else if (cmd === 'matrix') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'success',
        text: 'MATRIX PROTOCOL ENGAGED // FOLLOW THE WHITE RABBIT',
      });
    } else if (cmd.startsWith('send')) {
      triggerTransmission();
      return;
    } else {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'error',
        text: `UNRECOGNIZED COMMAND: "${cliInput}". TYPE "help" FOR PROTOCOL COMMANDS.`,
      });
    }

    setTerminalLogs(newLogs);
    setCliInput('');
  };

  const triggerTransmission = () => {
    soundEngine.playWarp();
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionSent(true);

      // Trigger Cyberpunk Neon Confetti Burst
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f3ff', '#ff0055', '#8a2be2', '#00ff66'],
      });

      setTerminalLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: 'success',
          text: '>>> TRANSMISSION DISPATCHED SUCCESSFULLY TO SECTOR-09 RECEPTION CORE.',
        },
      ]);
    }, 1500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.message) return;
    triggerTransmission();
  };

  return (
    <section id="contact" className="relative w-full py-20 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
          <Terminal className="h-4 w-4" />
          <span>QUANTUM TERMINAL LINK // ENCRYPTED DISPATCH</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white text-glow-cyan">
          INITIATE CONTACT
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-magenta-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Cyberpunk Terminal Window */}
      <div className="glass-panel corner-brackets relative rounded-xl border-cyan-400 p-4 sm:p-6 shadow-[0_0_40px_rgba(0,243,255,0.25)]">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-500/30 font-mono text-xs text-cyan-400">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500 inline-block" />
            <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
            <span className="ml-2">terminal@quantum-link: ~</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            <span>PORT 8080 // SECURE</span>
          </div>
        </div>

        {/* Terminal Output Log Feed */}
        <div className="h-48 overflow-y-auto mb-6 p-3 rounded bg-slate-950 font-mono text-xs space-y-1.5 border border-slate-800">
          {terminalLogs.map((log) => (
            <div
              key={log.id}
              className={
                log.type === 'input'
                  ? 'text-white font-bold'
                  : log.type === 'error'
                  ? 'text-red-400'
                  : log.type === 'success'
                  ? 'text-emerald-400 font-bold'
                  : 'text-cyan-400/90'
              }
            >
              {log.text}
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>

        {/* CLI Command Line Input */}
        <form onSubmit={handleCliSubmit} className="mb-8 flex items-center gap-2">
          <span className="font-mono text-xs text-magenta-400 font-bold">&gt;</span>
          <input
            type="text"
            value={cliInput}
            onChange={(e) => {
              setCliInput(e.target.value);
              soundEngine.playTyping();
            }}
            placeholder="Type terminal command (e.g. help, contact)..."
            className="flex-1 bg-transparent font-mono text-xs text-cyan-300 placeholder-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="interactive rounded bg-cyan-950 px-3 py-1 font-mono text-xs text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/20"
          >
            EXEC
          </button>
        </form>

        {/* Transmission Form */}
        {!transmissionSent ? (
          <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-cyan-500/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  AGENT_NAME [REQUIRED]
                </label>
                <input
                  type="text"
                  required
                  value={inputs.name}
                  onChange={(e) => {
                    setInputs({ ...inputs, name: e.target.value });
                    soundEngine.playTyping();
                  }}
                  placeholder="Enter your name / callsign..."
                  className="w-full rounded border border-cyan-500/30 bg-slate-950 p-2.5 font-mono text-xs text-cyan-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  COMMUNICATION_LINK [EMAIL]
                </label>
                <input
                  type="email"
                  required
                  value={inputs.email}
                  onChange={(e) => {
                    setInputs({ ...inputs, email: e.target.value });
                    soundEngine.playTyping();
                  }}
                  placeholder="agent@domain.com..."
                  className="w-full rounded border border-cyan-500/30 bg-slate-950 p-2.5 font-mono text-xs text-cyan-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-slate-400 mb-1">
                TRANSMISSION_PAYLOAD [MESSAGE]
              </label>
              <textarea
                rows={4}
                required
                value={inputs.message}
                onChange={(e) => {
                  setInputs({ ...inputs, message: e.target.value });
                  soundEngine.playTyping();
                }}
                placeholder="Type your message project specs or inquiry payload..."
                className="w-full rounded border border-cyan-500/30 bg-slate-950 p-2.5 font-mono text-xs text-cyan-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isTransmitting}
              onMouseEnter={() => soundEngine.playHover()}
              className="interactive w-full glass-panel flex items-center justify-center gap-3 rounded-lg border-cyan-400 py-3.5 font-mono text-sm font-bold text-white transition-all hover:bg-cyan-500/25 hover:shadow-[0_0_30px_#00f3ff] disabled:opacity-50"
            >
              {isTransmitting ? (
                <>
                  <RefreshCw className="h-4 w-4 text-cyan-400 animate-spin" />
                  <span>TRANSMITTING ENCRYPTED PAYLOAD...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 text-cyan-400" />
                  <span>DISPATCH TRANSMISSION</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center bg-emerald-950/40 border border-emerald-500/50 rounded-xl space-y-4">
            <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="font-orbitron text-2xl font-bold text-white">
              TRANSMISSION RECEIVED & CONFIRMED
            </h3>
            <p className="font-rajdhani text-slate-300 max-w-md mx-auto">
              Your message payload has been securely routed to Sector-09 command center. Expect response within 24 standard hours.
            </p>
            <button
              onClick={() => {
                setTransmissionSent(false);
                setInputs({ name: '', email: '', message: '' });
                soundEngine.playClick();
              }}
              className="interactive rounded border border-emerald-400 bg-emerald-500/20 px-4 py-2 font-mono text-xs font-bold text-emerald-300 hover:bg-emerald-500/40"
            >
              SEND ANOTHER TRANSMISSION
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
