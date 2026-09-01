'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Cloud } from 'lucide-react';
import {
  captainStats,
  journey,
  navigation,
  projects,
  skills,
  type Project,
} from '@/lib/portfolio-data';

function PixelButton({ href, children, variant = 'primary', reduceMotion = false }: { href: string; children: React.ReactNode; variant?: 'primary' | 'light'; reduceMotion?: boolean }) {
  return (
    <motion.a whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { y: 1 }} className={`pixel-button ${variant}`} href={href}>
      {children}<span aria-hidden="true">›</span>
    </motion.a>
  );
}

function SectionTitle({ eyebrow, title, action }: { eyebrow: string; title: string; action?: string }) {
  return (
    <div className="section-heading">
      <div><span className="section-eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {action && <span className="section-action">{action} ✦</span>}
    </div>
  );
}

function Navigation({ reduceMotion }: { reduceMotion: boolean }) {
  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    const section = document.querySelector(href);
    if (!section) return;
    event.preventDefault();
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', href);
  };

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="SYH.tide home" onClick={(event) => handleSectionClick(event, '#home')}><span className="brand-mark">⚓</span><span>SYH.tide</span></a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => <a key={item.label} href={item.href} onClick={(event) => handleSectionClick(event, item.href)}><span aria-hidden="true">{item.icon}</span>{item.label}</a>)}
      </nav>
      <a className="available-pill" href="#contact" onClick={(event) => handleSectionClick(event, '#contact')}><i /> Available for quests</a>
    </header>
  );
}

function Hero({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section className="hero" id="home">
      <motion.img
        className="hero-scene"
        src="/images/captain-hero.png"
        alt="Pixel-art mint-haired captain sailing a small boat toward a lighthouse"
        animate={reduceMotion ? { scale: 1.012 } : { y: [-2, 2, -2], scale: 1.012 }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="hero-shade" />
      <div className="hero-atmosphere" aria-hidden="true">
        <motion.span className="floating-cloud cloud-one" animate={reduceMotion ? undefined : { x: [0, 12, 0], y: [0, -2, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}><Cloud /></motion.span>
        <motion.span className="floating-cloud cloud-two" animate={reduceMotion ? undefined : { x: [0, -10, 0], y: [0, 2, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}><Cloud /></motion.span>
        {[0, 1, 2, 3].map((sparkle) => (
          <motion.span
            className={`hero-sparkle sparkle-${sparkle + 1}`}
            key={sparkle}
            animate={reduceMotion ? undefined : { opacity: [0.25, 0.8, 0.25], scale: [0.96, 1.06, 0.96] }}
            transition={{ duration: 3.6 + sparkle * 0.55, delay: sparkle * 0.6, repeat: Infinity, ease: 'easeInOut' }}
          >✦</motion.span>
        ))}
      </div>
      <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <span className="speech-chip">AHOY! <b>✦</b></span>
        <p className="kicker">CREATIVE CAPTAIN · DIGITAL EXPLORER</p>
        <h1>I design delightful<br />things for the<br /><em>digital sea.</em></h1>
        <p className="hero-note">Part product designer, part creative coder — always charting a course toward useful, playful experiences.</p>
        <div className="hero-actions"><PixelButton href="#projects" reduceMotion={reduceMotion}>Explore my work</PixelButton><PixelButton href="#contact" variant="light" reduceMotion={reduceMotion}>Send a signal</PixelButton></div>
      </motion.div>
      <div className="coordinate-chip">LAT 36.8° N · LONG 174.7° E</div>
    </section>
  );
}

function CaptainStatus() {
  return (
    <article className="pixel-panel status-panel">
      <SectionTitle eyebrow="PROFILE" title="Captain Status" />
      <div className="status-grid">
        <div className="avatar-card"><img src="/images/captain-hero.png" alt="SYH, the mint-haired captain" /><span>LV. 08</span></div>
        <div className="stats">
          {captainStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-label"><b style={{ color: stat.color }}>{stat.icon}</b><span>{stat.label}</span><small>{stat.value}/100</small></div>
              <div className="stat-track"><i style={{ width: `${stat.value}%`, background: stat.color }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="xp-row"><span>XP</span><div><i /></div><small>2,840 / 3,200</small></div>
    </article>
  );
}

function About() {
  return (
    <article className="pixel-panel about-panel" id="about">
      <SectionTitle eyebrow="CAPTAIN'S LOG" title="About Me" />
      <p className="big-copy">Hi, I’m <strong>Yunhan Shang</strong> — a multidisciplinary designer inspired by everyday life, human experiences, and the possibilities hidden in ordinary things.</p>
      <p>I enjoy turning observations into thoughtful design explorations across experiences, systems, and emerging technologies.</p>
      <p>I also love traveling and discovering new cultures and perspectives — for me, design is much like a journey: a way to stay curious, explore the unknown, and imagine new possibilities.</p>
    </article>
  );
}

function ProjectCard({ project, reduceMotion }: { project: Project; reduceMotion: boolean }) {
  return (
    <motion.article className={`project-card ${project.accent}`} initial="rest" whileHover={reduceMotion ? 'rest' : 'hover'} animate="rest" variants={{ rest: { y: 0 }, hover: { y: -5 } }} transition={{ duration: 0.22, ease: 'easeOut' }}>
      <motion.div className="project-number" variants={{ rest: { x: 0 }, hover: { x: 3 } }} transition={{ duration: 0.22 }}>{project.number}</motion.div>
      <div className="project-image"><motion.img src={project.image} alt="" variants={{ rest: { scale: 1 }, hover: { scale: 1.025 } }} transition={{ duration: 0.35, ease: 'easeOut' }} /></div>
      <div className="project-body">
        <span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
        <div className="tag-list">{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
        <button type="button" aria-label={`View ${project.title} case study`}>View case study <span>›</span></button>
      </div>
    </motion.article>
  );
}

function Projects({ reduceMotion }: { reduceMotion: boolean }) {
  return <section className="section-block" id="projects"><SectionTitle eyebrow="SELECTED TREASURES" title="Featured Projects" action="03 discoveries" /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} reduceMotion={reduceMotion} />)}</div></section>;
}

function Skills() {
  return (
    <section className="pixel-panel skills-panel" id="skills">
      <SectionTitle
        eyebrow="SHIP'S INVENTORY"
        title="Skills & Tools"
      />

      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <img
              className="skill-icon"
              src={skill.icon}
              alt={skill.name}
            />
            <b>{skill.name}</b>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journey({ reduceMotion }: { reduceMotion: boolean }) {
  const routeTimes = [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.82, 0.92, 1];

  return (
    <section className="pixel-panel journey-panel" id="journey">
      <SectionTitle eyebrow="ROUTE SO FAR" title="Journey Log" action="Adventure continues" />
      <div className="journey-line">
        <svg className="journey-route" viewBox="0 0 100 22" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M6 11 C18 2 28 20 40 11 S63 2 76 11 S88 18 95 11"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={reduceMotion ? { pathLength: 1 } : { pathLength: [0, 0.18, 0.38, 0.58, 0.78, 0.9, 1, 1, 0] }}
            transition={{ duration: 9.5, times: routeTimes, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
        <motion.img
          className="journey-boat"
          src="/images/journey-boat.png"
          alt=""
          initial={reduceMotion ? { left: '6%', top: 6, opacity: 1 } : { left: '6%', top: 6, opacity: 0 }}
          animate={reduceMotion ? { left: '6%', top: 6, opacity: 1 } : {
            left: ['6%', '23%', '40%', '58%', '76%', '86%', '95%', '95%', '6%'],
            top: [6, -4, 6, -4, 6, 14, 6, 6, 6],
            opacity: [0, 1, 1, 1, 1, 1, 1, 0, 0],
          }}
          transition={{ duration: 9.5, times: routeTimes, repeat: Infinity, ease: 'linear' }}
        />
        {journey.map((stop) => <div className="journey-stop" key={stop.year}><img
  className="journey-icon"
  src={stop.icon}
  alt=""
/><b>{stop.year}</b><strong>{stop.title}</strong><small>{stop.note}</small></div>)}
      </div>
    </section>
  );
}

function Contact({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section className="contact" id="contact">
      <div><span className="section-eyebrow light">OPEN CHANNEL</span><h2>Ready for a new adventure?</h2><p>I’m always happy to hear about thoughtful products, curious collaborations, or new adventures we might set sail on together.</p></div>
      <div className="contact-actions"><PixelButton href="shangyunhan89@gmail.com" reduceMotion={reduceMotion}>Send a message</PixelButton><a href="#home">Back to top ↑</a></div>
      <div className="footer-row"><span>© 2026 SYH.tide</span><span>MADE WITH ♡ + REACT</span><span>CALM SEAS · FULL HEART</span></div>
    </section>
  );
}

export function PortfolioHome() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  return <main><div className="game-shell"><Navigation reduceMotion={reduceMotion} /><Hero reduceMotion={reduceMotion} /><section className="intro-grid"><CaptainStatus /><About /></section><Projects reduceMotion={reduceMotion} /><section className="lower-grid"><Skills /><Journey reduceMotion={reduceMotion} /></section><Contact reduceMotion={reduceMotion} /></div></main>;
}
