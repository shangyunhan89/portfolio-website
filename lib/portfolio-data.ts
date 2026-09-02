export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  accent: string;
};

export type ProjectLogImage = {
  path: string;
  alt: string;
  label?: string;
};

export type ProjectLogSection = {
  number: string;
  title: string;
  description: string;
  image: ProjectLogImage;
};

export type ProjectLog = {
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  overview: string;
  scene: ProjectLogImage;
  sections: ProjectLogSection[];
};

export const navigation = [
  { label: 'Home', href: '#home', icon: '⌂' },
  { label: 'About', href: '#about', icon: '◉' },
  { label: 'Projects', href: '#projects', icon: '▣' },
  { label: 'Skills', href: '#skills', icon: '✦' },
  { label: 'Journey', href: '#journey', icon: '↝' },
  { label: 'Contact', href: '#contact', icon: '✉' },
];

export const captainStats = [
  { label: 'Curiosity', value: 92, icon: '♥', color: '#f06f8c' },
  { label: 'Creativity', value: 86, icon: '★', color: '#786ed4' },
  { label: 'Courage', value: 80, icon: '⚓', color: '#44b9ae' },
  { label: 'Energy', value: 84, icon: 'ϟ', color: '#f2aa55' },
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'DriftMart',
    category: '3D Modelling · VR Interaction',
    description: 'An immersive VR supermarket where users explore local cultures, everyday products, and stories while browsing freely in a calm, playful environment.',
    image: '/images/tidekeeper.png',
    tags: ['UNITY', 'BLENDER', 'UI/UX'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Willow Loop',
    category: 'Community Service · Sustainable Design',
    description: 'A community-based system that captures airborne willow catkins in public and residential spaces, then reuses them as an oil-absorbing material.',
    image: '/images/shoreline-archive.png',
    tags: ['RHINO', 'SERVICE DESIGN', 'MATERIALS'],
    accent: 'lilac',
  },
  {
    number: '03',
    title: 'AI Fabric Lab',
    category: 'AI Textile · Generative Interaction',
    description: 'An AI-powered textile platform that transforms text and image inputs into adjustable fabric patterns through real-time generative interaction and control.',
    image: '/images/deep-dive-lab.png',
    tags: ['STABLE DIFFUSION', 'LoRA', 'CONTROLNET'],
    accent: 'mint',
  },
];

export const projectLogs: Record<string, ProjectLog> = {
  '01': {
    number: '01',
    title: 'DriftMart',
    subtitle: '3D Modelling · VR Interaction · UI/UX Design',
    tags: ['UNITY', 'BLENDER', 'UI/UX', 'VR'],
    overview: 'Three modes support discovery, relaxation, and playful learning through authentic products, adaptive NPCs, and validated local stories.',
    scene: {
      path: '/images/driftmart/scene.png',
      alt: 'DriftMart VR supermarket scene',
      label: 'DriftMart scene',
    },
    sections: [
      {
        number: '03',
        title: 'TASK MODE',
        description: 'Complete guided shopping tasks while discovering authentic products and local stories.',
        image: { path: '/images/driftmart/screen1.png', alt: 'DriftMart Task Mode' },
      },
      {
        number: '04',
        title: 'CALM MODE',
        description: 'Browse at your own pace in a low-pressure environment designed for gentle exploration.',
        image: { path: '/images/driftmart/screen2.png', alt: 'DriftMart Calm Mode' },
      },
      {
        number: '05',
        title: 'KIDS MODE',
        description: 'Learn through playful prompts, friendly characters, and approachable interactions.',
        image: { path: '/images/driftmart/screen3.png', alt: 'DriftMart Kids Mode' },
      },
    ],
  },
  '02': {
    number: '02',
    title: 'Willow Loop',
    subtitle: 'Community Service · Sustainable Design',
    tags: ['RHINO', 'SERVICE DESIGN', 'MATERIALS'],
    overview: 'To enable the collection and reuse of willow catkins, the project introduces a two-stage capture system: a primary collection structure in public spaces and a secondary capture module integrated into residential facades.',
    scene: {
      path: '/images/willowloop/tree.png',
      alt: 'Willow Loop project scene',
      label: 'Willow Loop scene',
    },
    sections: [
      {
        number: '03',
        title: 'Residential Facade Module',
        description: 'Capture catkins close to homes\nwithout disrupting daily life.',
        image: { path: '/images/willowloop/tree1.png', alt: 'Willow Loop research', label: 'Willow Loop research' },
      },
      {
        number: '04',
        title: 'Public Capture Structure',
        description: 'Capture large amounts of drifting catkins\nin open spaces.',
        image: { path: '/images/willowloop/tree2.png', alt: 'Willow Loop design', label: 'Willow Loop design' },
      },
    ],
  },
  '03': {
    number: '03',
    title: 'AI Fabric Lab',
    subtitle: 'AI Textile · Generative Interaction',
    tags: ['STABLE DIFFUSION', 'LoRA', 'CONTROLNET'],
    overview: 'AI Fabric Lab is an interactive generative design platform that explores how AI can support textile ideation. Users can generate and adjust textile patterns through text and image inputs while controlling visual parameters in real time.',
    scene: {
      path: '/images/aifabriclab/fig.png',
      alt: 'AI Fabric Lab project scene',
      label: 'AI Fabric Lab scene',
    },
    sections: [
      {
        number: '03',
        title: 'Pipeline',
        description: 'Converting text-based fabric parameters\ninto generated textile visuals \nthrough encoding, denoising, and image decoding.',
        image: { path: '/images/aifabriclab/fig1.png', alt: 'AI Fabric Lab generation pipeline', label: 'AI Fabric Lab generation pipeline' },
      },
      {
        number: '04',
        title: 'Generation results',
        description: 'Generating multiple weave structures\nwhile preserving color and structural details.',
        image: { path: '/images/aifabriclab/fig2.png', alt: 'AI Fabric Lab generation results', label: 'AI Fabric Lab generation results' },
      },
    ],
  },
};

export const driftMartProjectLog = projectLogs['01'];

export const skills = [
  { name: 'UNITY', icon: '/icons/unity.png' },
  { name: 'BLENDER', icon: '/icons/blender.png' },
  { name: 'RHINO', icon: '/icons/rhino.png' },
  { name: 'FIGMA', icon: '/icons/figma.png' },
  { name: 'CLO', icon: '/icons/CLO.png' },
  { name: 'PYTHON', icon: '/icons/python.png' },
  { name: 'SPSS', icon: '/icons/SPSS.png' },
  { name: 'CODEX', icon: '/icons/codex.png' },
];

export const journey = [
  { year: '2021', note: 'Set sail on a creative path', icon: '/icons/1.png' },
  { year: '2023', note: 'Built projects & design skills', icon: '/icons/2.png' },
  { year: '2024', note: 'Service & sustainability', icon: '/icons/3.png' },
  { year: '2025', note: 'Create with AI & interaction', icon: '/icons/4.png' },
];
