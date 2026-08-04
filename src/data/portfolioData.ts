import type { Project, Skill, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'ALEX CHEN',
  handle: 'ARCHITECT_0X',
  title: 'LEAD THREE.JS & QUANTUM WEBGL ARCHITECT',
  subtext: 'Engineering immersive 3D sci-fi spatial interfaces, high-frequency WebGL shaders, and next-generation WebGPU command centers.',
  sector: 'SECTOR-09 // TOKYO - SF NEURAL LINK',
  status: 'ONLINE // READY FOR ENGAGEMENT',
  stats: [
    { label: 'SIMULATIONS CREATED', value: '42+' },
    { label: 'WEBGL SHADER OPS', value: '120 FPS' },
    { label: 'NEURAL LATENCY', value: '0.4ms' },
    { label: 'CLIENT SATISFACTION', value: '99.9%' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'neural-net-3d',
    title: 'NEURAL-NET 3D',
    subtitle: 'Real-time 3D AI Brain & Tensor Flow Visualization',
    category: 'WebGL / Spatial AI',
    description: 'An interactive 3D spatial visualizer for deep learning neural networks rendering 50,000 synaptic nodes in real time.',
    longDescription: 'NEURAL-NET 3D bridges high-dimensional machine learning tensors with browser-based WebGL graphics. Built with custom GPGPU compute shaders and React Three Fiber, it allows developers to inspect layer weights, activation signals, and backpropagation flow in interactive 3D space.',
    tags: ['Three.js', 'React Three Fiber', 'WebGL Shaders', 'GLSL', 'TypeScript', 'TailwindCSS'],
    metrics: [
      { label: 'RENDER PERFORMANCE', value: '120 FPS' },
      { label: 'SYNAPSE NODES', value: '50,000+' },
      { label: 'LATENCY OVERHEAD', value: '< 1.2ms' },
    ],
    modelShape: 'icosahedron',
    accentColor: '#00f3ff',
    liveUrl: 'https://example.com/neural-net',
    githubUrl: 'https://github.com/example/neural-net-3d',
    architectureDetails: [
      'GPGPU particle simulation using custom GLSL fragment shaders',
      'InstancedMesh geometry rendering for zero-garbage collection overhead',
      'Real-time WebSocket telemetry stream for tensor activations',
      'Cyberpunk HUD audio feedback on node selection'
    ]
  },
  {
    id: 'hyper-drive-dash',
    title: 'HYPER-DRIVE HUD',
    subtitle: 'Spacecraft Command Center & Flight Control Interface',
    category: 'Sci-Fi UI / Telemetry',
    description: 'A Blade Runner inspired mission control interface with WebGPU rendering, tactical radar, and sub-millisecond telemetry feeds.',
    longDescription: 'Designed for space habitat simulation control, HYPER-DRIVE HUD displays orbital trajectories, environmental life support, propulsion vectors, and tactical sensor grids with glassmorphic sci-fi aesthetic and procedural grid lighting.',
    tags: ['React', 'Three.js', 'GSAP', 'WebAudio API', 'TailwindCSS', 'Zustand'],
    metrics: [
      { label: 'DATA REFRESH', value: '60 Hz' },
      { label: 'HUD LAYER COUNT', value: '18 Layers' },
      { label: 'MEMORY FOOTPRINT', value: '14 MB' },
    ],
    modelShape: 'torusKnot',
    accentColor: '#ff0055',
    liveUrl: 'https://example.com/hyper-drive',
    githubUrl: 'https://github.com/example/hyper-drive-hud',
    architectureDetails: [
      'Procedural CRT scanline shader with chromatic aberration sliders',
      'Dual-pass Bloom post-processing pipeline for high intensity neon glows',
      'Reactive Web Audio synthesizer for keypress and warning telemetry alarms',
      'Adaptive mobile viewport downsampling for low-tier GPU devices'
    ]
  },
  {
    id: 'cyber-city-sim',
    title: 'CYBER-CITY MATRIX',
    subtitle: 'Procedural 3D Cyberpunk Megacity & Drone Traffic Engine',
    category: 'Procedural 3D / WebGPU',
    description: 'Procedural neon city generation engine rendering thousands of illuminated skyscrapers and automated sky-traffic streams.',
    longDescription: 'CYBER-CITY MATRIX uses procedural noise algorithms to construct infinite sci-fi metropolis sectors complete with rain reflections, holographic billboard ads, and dynamic airborne vehicle navigation vectors.',
    tags: ['Three.js', 'Procedural Mesh', 'Raymarching', 'WebGPU', 'TypeScript'],
    metrics: [
      { label: 'BUILDING COUNT', value: '5,000+' },
      { label: 'DRONE TRAFFIC', value: '2,500 Units' },
      { label: 'DRAWCALLS', value: '3 Draw Calls' },
    ],
    modelShape: 'ringCore',
    accentColor: '#8a2be2',
    liveUrl: 'https://example.com/cyber-city',
    githubUrl: 'https://github.com/example/cyber-city-matrix',
    architectureDetails: [
      'Single draw-call InstancedBufferGeometry architecture for maximum density',
      'Volumetric atmospheric fog shaders with dynamic light dispersion',
      'Custom procedural texture synthesis on GPU without heavy PNG downloads',
      'Interactive flight camera mode with collision detection'
    ]
  },
  {
    id: 'quantum-code-ide',
    title: 'QUANTUM IDE 3D',
    subtitle: 'Spatial Code Editor & Holographic Dataflow Graph',
    category: 'Developer Tools',
    description: 'A revolutionary spatial IDE that transforms codebases into navigable 3D node constellations with live debugging halos.',
    longDescription: 'QUANTUM IDE 3D visualizes abstract syntax trees and dependency graphs in 3D holographic space. Developers can walk through function call stacks, inspect variables in 3D floating panels, and trigger hot reload directly in spatial view.',
    tags: ['React', 'Monaco Editor', 'Three.js', 'WebSockets', 'TailwindCSS'],
    metrics: [
      { label: 'AST NODES LOADED', value: '12,000' },
      { label: 'HOT RELOAD SPEED', value: '45 ms' },
      { label: 'USER EFFICIENCY', value: '+340%' },
    ],
    modelShape: 'octahedron',
    accentColor: '#00ff66',
    liveUrl: 'https://example.com/quantum-ide',
    githubUrl: 'https://github.com/example/quantum-ide-3d',
    architectureDetails: [
      'Force-directed 3D graph layout physics running on Web Workers',
      'Monaco Editor integration wrapped inside WebGL textured floating planes',
      'Real-time collaborative editing using CRDT synchronization protocol',
      'Integrated matrix code terminal with custom bash script runner'
    ]
  },
  {
    id: 'orbit-mesh-os',
    title: 'ORBIT-MESH OS',
    subtitle: 'Decentralized Holographic Desktop Ecosystem',
    category: 'Spatial Web OS',
    description: 'A browser-based spatial operating system featuring draggable 3D windows, widget orbits, and encrypted neural drive.',
    longDescription: 'ORBIT-MESH OS reimagines computing interfaces by organizing applications in concentric 3D spatial rings around the user. Supports floating windows, terminal shells, 3D file browsers, and audio visualizers.',
    tags: ['React Three Fiber', 'Zustand', 'TailwindCSS', 'WebAudio', 'IndexedDB'],
    metrics: [
      { label: 'SYSTEM APPS', value: '12 Apps' },
      { label: 'FRAME STABILITY', value: '99.8%' },
      { label: 'BOOT TIME', value: '0.8 Sec' },
    ],
    modelShape: 'cubeCluster',
    accentColor: '#ffb700',
    liveUrl: 'https://example.com/orbit-mesh',
    githubUrl: 'https://github.com/example/orbit-mesh-os',
    architectureDetails: [
      'Spatial 3D window manager with physics-based snap-to-grid collision',
      'Local-first encrypted storage using Web Crypto API & IndexedDB',
      'Custom theme engine with neon color palettes and glowing glass shaders',
      'Built-in audio reactive 3D visualizer canvas'
    ]
  }
];

export const SKILLS: Skill[] = [
  { id: 'threejs', name: 'Three.js / R3F', category: '3D & Graphics', level: 98, experience: '6+ Yrs', iconName: 'Box', orbitRadius: 2.8, orbitSpeed: 0.8, color: '#00f3ff' },
  { id: 'webgl', name: 'WebGL & GLSL', category: '3D & Graphics', level: 94, experience: '5 Yrs', iconName: 'Cpu', orbitRadius: 3.8, orbitSpeed: -0.6, color: '#ff0055' },
  { id: 'react', name: 'React 19 & Next.js', category: 'Frontend', level: 96, experience: '7 Yrs', iconName: 'Code2', orbitRadius: 4.8, orbitSpeed: 0.5, color: '#00ff66' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', level: 95, experience: '6 Yrs', iconName: 'FileCode', orbitRadius: 3.2, orbitSpeed: -0.9, color: '#ffb700' },
  { id: 'gsap', name: 'GSAP & Animation', category: 'Frontend', level: 92, experience: '5 Yrs', iconName: 'Zap', orbitRadius: 4.2, orbitSpeed: 0.7, color: '#8a2be2' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', level: 95, experience: '5 Yrs', iconName: 'Layers', orbitRadius: 2.2, orbitSpeed: -1.1, color: '#00f3ff' },
  { id: 'webgpu', name: 'WebGPU Next-Gen', category: '3D & Graphics', level: 88, experience: '2 Yrs', iconName: 'Sparkles', orbitRadius: 5.4, orbitSpeed: 0.4, color: '#ff0055' },
  { id: 'nodejs', name: 'Node.js & Express', category: 'Backend & Cloud', level: 90, experience: '6 Yrs', iconName: 'Server', orbitRadius: 4.6, orbitSpeed: -0.5, color: '#00ff66' },
  { id: 'wasm', name: 'Rust & WebAssembly', category: 'Systems & WASM', level: 84, experience: '3 Yrs', iconName: 'Terminal', orbitRadius: 5.0, orbitSpeed: 0.6, color: '#ffb700' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'PRINCIPAL SPATIAL WEB GRAPHICS ARCHITECT',
    company: 'NEURAL-INTERFACE LABS',
    location: 'TOKYO // SF',
    period: '2024 - PRESENT',
    type: 'FULL-TIME',
    status: 'ACTIVE',
    description: 'Leading a cross-functional team of 12 graphics engineers building WebGL/WebGPU spatial web engines for interactive 3D product simulation.',
    achievements: [
      'Architected 3D spatial viewport rendering framework reducing initial load times by 62%',
      'Developed custom GLSL post-processing pipelines for real-time volumetric neon lighting',
      'Pioneered WebGPU rendering backends for high-density particle physics simulations'
    ],
    techStack: ['Three.js', 'React Three Fiber', 'WebGPU', 'GLSL', 'Rust', 'TypeScript']
  },
  {
    id: 'exp-2',
    title: 'SENIOR THREE.JS & FRONTEND ENGINEER',
    company: 'CYBER-CYBERNETICS INC.',
    location: 'SINGAPORE // REMOTE',
    period: '2021 - 2024',
    type: 'CONTRACT',
    status: 'ARCHIVED',
    description: 'Designed and deployed high-performance 3D WebGL web applications and scifi dashboards for aerospace and AI research clients.',
    achievements: [
      'Engineered interactive 3D digital twin dashboard handling 100,000 sensor telemetry points',
      'Implemented instanced rendering systems maintaining stable 120 FPS on standard desktop GPUs',
      'Mentored 8 frontend engineers in modern WebGL math and shader optimizations'
    ],
    techStack: ['Three.js', 'React', 'GSAP', 'TailwindCSS', 'WebAudio API', 'Vite']
  },
  {
    id: 'exp-3',
    title: 'CREATIVE GRAPHICS & UI DEVELOPER',
    company: 'QUANTUM INTERACTIVE',
    location: 'SAN FRANCISCO, CA',
    period: '2019 - 2021',
    type: 'FULL-TIME',
    status: 'ARCHIVED',
    description: 'Crafted award-winning interactive promotional websites, WebGL canvas experiments, and immersive marketing micro-sites.',
    achievements: [
      'Won 4 Awwwards Site of the Day accolades for immersive WebGL 3D story experiences',
      'Created reusable library of shader glass materials and glowing particle systems',
      'Reduced memory leaks by 90% across long-running WebGL canvas instances'
    ],
    techStack: ['JavaScript', 'Three.js', 'CSS3', 'GLSL Shaders', 'HTML5 Canvas']
  }
];
