import type { Project, Skill, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'JASWANTH A',
  handle: '@jaswanth-jas',
  title: 'React JS Developer · Full-Stack Web Engineer · UI/UX & Media Editor',
  subtext: 'B.E ECE Student crafting modern React 19 web applications, interactive 3D WebGL interfaces, Java backend systems, and AI-powered university tools.',
  motto: 'Building responsive React apps with clean architecture & high-fidelity UI! ⚛️💻🎨',
  sector: 'Tamil Nadu, India',
  status: 'System Online · Open for React JS & Full-Stack Engineering Roles',
  stats: [
    { label: 'REACT STACK', value: 'REACT 19 / TS' },
    { label: 'PROJECTS BUILT', value: '10+ APPS' },
    { label: '3D SPATIAL WEB', value: 'R3F / THREE.JS' },
    { label: 'DESIGN FIDELITY', value: 'APPLE GLASS' },
  ],
  aboutMeBullets: [
    '⚛️ Crafting scalable React 19 & Next.js frontend web applications',
    '🎨 Exploring Apple-inspired UI/UX Glassmorphic Design Systems in Figma & Tailwind v4',
    '☕ Engineering Java OOP algorithms & MySQL database architectures',
    '🎬 Producing multimedia video edits & graphics with Premiere Pro & Photoshop',
    '⚡ Lifelong learner passionate about web performance and intuitive user experience'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'smart-classroom-scheduler',
    title: 'Smart Classroom & Timetable Scheduler',
    subtitle: 'AI-Powered University Timetable Engine & Conflict Resolver',
    category: 'Flagship AI & Web App',
    description: 'An intelligent university timetable system automating classroom allocation, faculty schedule overrides, student portals, and conflict resolution with V.S.B. AI Chatbot assistance.',
    longDescription: 'Smart Classroom & Timetable Scheduler resolves complex academic schedule overlaps, allocates lecture halls based on equipment needs, handles faculty leave overrides with automatic substitute assignments, and features an integrated AI Assistant for instant queries.',
    tags: ['JavaScript', 'Tailwind CSS', 'Chart.js', 'AI Chatbot', 'HTML5', 'Lucide Icons'],
    metrics: [
      { label: 'CONFLICT RES', value: '100% AUTO' },
      { label: 'ACCURACY', value: '99.9%' },
      { label: 'LATENCY', value: '< 10ms' },
    ],
    modelShape: 'icosahedron',
    accentColor: '#38bdf8',
    liveUrl: 'https://github.com/jaswanth-jas/smart-classroom-and-timetable-scheduler-using-AI',
    githubUrl: 'https://github.com/jaswanth-jas/smart-classroom-and-timetable-scheduler-using-AI',
    architectureDetails: [
      'Automated conflict detection algorithm evaluating room capacity vs class size',
      'Faculty leave override engine with automatic substitute teacher assignment',
      'Interactive Chart.js analytics dashboard tracking room utilization metrics',
      'V.S.B. AI Chatbot Assistant for instant timetable search & schedule queries'
    ]
  },
  {
    id: 'apple-glassmorphic-portfolio',
    title: 'Apple Glassmorphic 3D Portfolio',
    subtitle: 'High-Performance Apple UI/UX Web Showcase',
    category: 'Spatial Web / Apple UI',
    description: 'An ultra-sleek developer portfolio built with React 19, Three.js, Tailwind CSS, and Apple-inspired glassmorphism, featuring the signature multilingual "Hello" opening animation.',
    longDescription: 'Designed following Apple iOS & macOS human interface guidelines. Combines frosted glass containers, smooth motion physics, dynamic 3D geometric viewports, and custom spatial audio effects.',
    tags: ['React 19', 'Three.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vite'],
    metrics: [
      { label: 'FPS', value: '60 FPS' },
      { label: 'DESIGN SYSTEM', value: 'Apple Glass' },
      { label: 'RESPONSIVE', value: '100%' },
    ],
    modelShape: 'torusKnot',
    accentColor: '#a855f7',
    liveUrl: 'https://github.com/jaswanth-jas/PORTFOLIO-',
    githubUrl: 'https://github.com/jaswanth-jas/PORTFOLIO-',
    architectureDetails: [
      'Multilingual Apple "Hello" intro animation cycling through greetings with fluid typography',
      'Glassmorphic backdrop blur card overlays inspired by macOS Control Center & iOS widgets',
      'React Three Fiber interactive 3D particle constellation & floating geometry',
      'Seamless mobile touch navigation and desktop dock interaction'
    ]
  },
  {
    id: 'java-oop-algorithm-suite',
    title: 'Java OOP & Algorithm Suite',
    subtitle: 'Object-Oriented Architecture & Data Structure Solvers',
    category: 'Core Java Systems',
    description: 'A collection of robust Java modules, object-oriented design patterns, sorting/searching algorithms, and optimization scripts for backend computing.',
    longDescription: 'Demonstrates clean Java architecture principles (Encapsulation, Polymorphism, Inheritance), custom graph and tree structures, algorithmic solvers, and memory-efficient data processing routines.',
    tags: ['Java 17', 'OOP Architecture', 'Data Structures', 'Algorithms', 'Backend Core'],
    metrics: [
      { label: 'COMPILER', value: 'Java 17' },
      { label: 'CODE QUALITY', value: 'Clean Code' },
      { label: 'SPEED', value: 'Optimized' },
    ],
    modelShape: 'octahedron',
    accentColor: '#f43f5e',
    liveUrl: 'https://github.com/jaswanth-jas',
    githubUrl: 'https://github.com/jaswanth-jas',
    architectureDetails: [
      'Strict adherence to object-oriented programming principles and clean code patterns',
      'Custom implementation of graph algorithms, trees, and linked structures',
      'Automated unit testing and performance benchmarking',
      'Optimized time and space complexity algorithms'
    ]
  },
  {
    id: 'ui-ux-digital-media',
    title: 'UI/UX & Digital Media Assets',
    subtitle: 'Figma Component Systems & Video Production',
    category: 'UI/UX & Content Creation',
    description: 'Custom wireframes, vector design kits, video editing projects, and graphic media created using Figma, Adobe Photoshop, and Premiere Pro.',
    longDescription: 'Combines aesthetic visual design with intuitive user experience principles. Features high-fidelity Figma prototypes, modern color palettes, brand graphics, and promotional video edits.',
    tags: ['Figma', 'UI/UX Design', 'Photoshop', 'Premiere Pro', 'Wireframing', 'Media'],
    metrics: [
      { label: 'PROTOTYPES', value: '20+ Screens' },
      { label: 'FIDELITY', value: 'Apple Glass' },
      { label: 'SATISFACTION', value: '99%' },
    ],
    modelShape: 'ringCore',
    accentColor: '#eab308',
    liveUrl: 'https://github.com/jaswanth-jas',
    githubUrl: 'https://github.com/jaswanth-jas',
    architectureDetails: [
      'Comprehensive Figma component libraries and auto-layout wireframes',
      'Color theory harmony tailored for dark glass and high-contrast Apple UI themes',
      'High-definition video rendering with Premiere Pro motion graphics',
      'Vector asset exports optimized for web applications'
    ]
  }
];

export const SKILLS: Skill[] = [
  { id: 'react', name: 'React 19 & React JS Ecosystem', category: 'Frontend', level: 96, experience: '3+ Yrs', iconName: 'Layers', orbitRadius: 2.5, orbitSpeed: 0.9, color: '#61dafb' },
  { id: 'r3f', name: 'React Three Fiber & WebGL 3D', category: '3D & Graphics', level: 90, experience: '2+ Yrs', iconName: 'Cpu', orbitRadius: 3.5, orbitSpeed: -0.7, color: '#a855f7' },
  { id: 'webdev', name: 'HTML5, CSS3, JavaScript (ES6+)', category: 'Frontend', level: 95, experience: '3+ Yrs', iconName: 'Globe', orbitRadius: 4.2, orbitSpeed: 0.5, color: '#38bdf8' },
  { id: 'java', name: 'Java 17 & OOP Architecture', category: 'Backend & Cloud', level: 92, experience: '3+ Yrs', iconName: 'Code2', orbitRadius: 4.8, orbitSpeed: -0.6, color: '#f43f5e' },
  { id: 'uiux', name: 'UI/UX & Figma Glass Design', category: '3D & Graphics', level: 90, experience: '3 Yrs', iconName: 'Palette', orbitRadius: 3.2, orbitSpeed: -0.9, color: '#eab308' },
  { id: 'media', name: 'Premiere Pro & Photoshop', category: '3D & Graphics', level: 88, experience: '3 Yrs', iconName: 'Film', orbitRadius: 5.2, orbitSpeed: 0.7, color: '#10b981' },
  { id: 'tools', name: 'Git, GitHub, Vite & Tailwind v4', category: 'Systems & WASM', level: 94, experience: '3 Yrs', iconName: 'Terminal', orbitRadius: 5.8, orbitSpeed: 0.6, color: '#61dafb' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'B.E ECE STUDENT & FULL-STACK DEVELOPER',
    company: 'ACADEMICS & PROJECTS',
    location: 'Tamil Nadu, India',
    period: '2022 - PRESENT',
    type: 'FULL-TIME',
    status: 'ACTIVE',
    description: 'Pursuing Electronics & Communication Engineering while actively building web applications, Java backend solutions, and AI-powered scheduling engines.',
    achievements: [
      'Architected the Smart Classroom & Timetable Scheduler platform with automated conflict resolution',
      'Developed interactive web applications utilizing HTML, CSS, JavaScript, and React',
      'Implemented algorithms in Java for data processing and object-oriented systems'
    ],
    techStack: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React', 'Git']
  },
  {
    id: 'exp-2',
    title: 'UI/UX DESIGNER & DIGITAL MEDIA CREATOR',
    company: 'FREELANCE & CREATIVE WORK',
    location: 'India',
    period: '2023 - PRESENT',
    type: 'FREELANCE',
    status: 'ACTIVE',
    description: 'Designing intuitive visual interfaces, glassmorphic wireframes, and producing multimedia video & graphic assets.',
    achievements: [
      'Created modern glassmorphic and minimal UI component systems in Figma',
      'Edited high-quality promotional video content using Premiere Pro & Photoshop',
      'Applied Apple-style design principles to deliver clean user experiences'
    ],
    techStack: ['Figma', 'Photoshop', 'Premiere Pro', 'UI/UX Wireframing', 'Glassmorphic Design']
  }
];
