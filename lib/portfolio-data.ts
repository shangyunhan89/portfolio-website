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
    description: 'An immersive VR supermarket where users explore cultures, discover everyday local life, and unwind at their own pace.',
    image: '/images/tidekeeper.png',
    tags: ['UNITY', 'BLENDER', 'UI/UX'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Willow Loop',
    category: 'Community Service · Sustainable Design',
    description: 'A willow catkin collecting device that captures airborne fluff in public spaces and reuses it to absorb oil pollution, creating a circular solution for cleaner communities.',
    image: '/images/shoreline-archive.png',
    tags: ['RHINO', 'SERVICE DESIGN', 'MATERIALS'],
    accent: 'lilac',
  },
  {
    number: '03',
    title: 'AI Fabric Lab',
    category: 'AI Textile · Generative Interaction',
    description: 'An AI-powered platform that generates interactive textile patterns from text or images, supporting real-time adjustment and multi-modal input.',
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
    overview: 'Willow Loop explores how airborne willow catkins can be collected within community spaces and transformed from seasonal waste into a reusable material. The project combines environmental observation, material research, and service design to create a circular system for collection and reuse.',
    scene: {
      path: '/images/willow-loop/scene.png',
      alt: 'Willow Loop project scene',
      label: 'Willow Loop scene',
    },
    sections: [
      {
        number: '03',
        title: 'RESEARCH',
        description: 'Understanding the seasonal spread of willow catkins, community pain points, and opportunities for collection.',
        image: { path: '/images/willow-loop/screen1.png', alt: 'Willow Loop research', label: 'Willow Loop research' },
      },
      {
        number: '04',
        title: 'DESIGN',
        description: 'Developing a modular collection structure and exploring material, airflow, and installation strategies.',
        image: { path: '/images/willow-loop/screen2.png', alt: 'Willow Loop design', label: 'Willow Loop design' },
      },
      {
        number: '05',
        title: 'APPLICATION',
        description: 'Applying the system across public spaces and residential environments, while reusing collected willow fluff as an oil-absorbing material.',
        image: { path: '/images/willow-loop/screen3.png', alt: 'Willow Loop application', label: 'Willow Loop application' },
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
      path: '/images/ai-fabric/scene.png',
      alt: 'AI Fabric Lab project scene',
      label: 'AI Fabric Lab scene',
    },
    sections: [
      {
        number: '03',
        title: 'RESEARCH',
        description: 'Exploring generative AI workflows, textile pattern structures, and the limitations of existing image-generation tools.',
        image: { path: '/images/ai-fabric/screen1.png', alt: 'AI Fabric Lab research', label: 'AI Fabric Lab research' },
      },
      {
        number: '04',
        title: 'GENERATION',
        description: 'Building a workflow using Stable Diffusion, LoRA, and ControlNet to generate more controllable textile patterns.',
        image: { path: '/images/ai-fabric/screen2.png', alt: 'AI Fabric Lab generation', label: 'AI Fabric Lab generation' },
      },
      {
        number: '05',
        title: 'INTERACTION',
        description: 'Transforming technical generation parameters into a clearer interactive interface for designers.',
        image: { path: '/images/ai-fabric/screen3.png', alt: 'AI Fabric Lab interaction', label: 'AI Fabric Lab interaction' },
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
  { year: '2024', note: 'Explore service & sustainability', icon: '/icons/3.png' },
  { year: '2025', note: 'Create with AI & interaction', icon: '/icons/4.png' },
];
