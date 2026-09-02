'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Cloud } from 'lucide-react';
import {
  captainStats,
  driftMartProjectLog,
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

function ProjectCard({ project, reduceMotion, onExplore, buttonRef }: { project: Project; reduceMotion: boolean; onExplore?: () => void; buttonRef?: React.RefObject<HTMLButtonElement | null> }) {
  const isDriftMart = project.number === '01';

  return (
    <motion.article className={`project-card ${project.accent}`} initial="rest" whileHover={reduceMotion ? 'rest' : 'hover'} animate="rest" variants={{ rest: { y: 0 }, hover: { y: -5 } }} transition={{ duration: 0.22, ease: 'easeOut' }}>
      <motion.div className="project-number" variants={{ rest: { x: 0 }, hover: { x: 3 } }} transition={{ duration: 0.22 }}>{project.number}</motion.div>
      <div className="project-image"><motion.img src={project.image} alt="" variants={{ rest: { scale: 1 }, hover: { scale: 1.025 } }} transition={{ duration: 0.35, ease: 'easeOut' }} /></div>
      <div className="project-body">
        <span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
        <div className="tag-list">{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
        <button ref={buttonRef} type="button" onClick={onExplore} aria-label={isDriftMart ? 'Explore DriftMart project' : `View ${project.title} case study`}>
          {isDriftMart ? 'Explore project →' : <>View case study <span>›</span></>}
        </button>
      </div>
    </motion.article>
  );
}

type ProjectLogImage = { path: string; label: string };

function ProjectImagePlaceholder({ image, className = '', reduceMotion }: { image: ProjectLogImage; className?: string; reduceMotion: boolean }) {
  return (
    <motion.figure
      className={`project-log-placeholder ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div aria-hidden="true"><span>▧</span><b>IMAGE SLOT</b></div>
      <figcaption><strong>{image.label}</strong><code>{image.path}</code></figcaption>
    </motion.figure>
  );
}

function DriftMartProjectLog({ open, onClose, triggerRef, reduceMotion }: { open: boolean; onClose: () => void; triggerRef: React.RefObject<HTMLButtonElement | null>; reduceMotion: boolean }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    };
  }, [onClose, open, triggerRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="project-log-overlay"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button className="project-log-backdrop" type="button" tabIndex={-1} aria-hidden="true" onClick={onClose} />
          <motion.div
            ref={dialogRef}
            className="project-log-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="driftmart-log-title"
            aria-describedby="driftmart-log-overview"
            initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [0.94, 1.02, 1] }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, times: [0, 0.72, 1], ease: 'easeOut' }}
          >
            <header className="project-log-header">
              <div className="project-log-heading">
                <span className="project-log-kicker">PROJECT LOG {driftMartProjectLog.number}</span>
                <h2 id="driftmart-log-title">{driftMartProjectLog.title}</h2>
                <p>{driftMartProjectLog.subtitle}</p>
                <div className="project-log-tags">{driftMartProjectLog.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
              </div>
              <button ref={closeButtonRef} className="project-log-close" type="button" onClick={onClose} aria-label="Close DriftMart project log">[ × ]</button>
            </header>

            <div className="project-log-scroll">
              <section className="project-log-section project-log-hero-block">
                <span className="project-log-index">01 — HERO</span>
                <ProjectImagePlaceholder image={driftMartProjectLog.images.hero} className="project-log-hero-image" reduceMotion={reduceMotion} />
              </section>

              <section className="project-log-section project-log-overview">
                <span className="project-log-index">02 — OVERVIEW</span>
                <p id="driftmart-log-overview">{driftMartProjectLog.overview}</p>
              </section>

              <section className="project-log-section">
                <div className="project-log-section-heading"><span className="project-log-index">03 — DISCOVER</span><p>Research, context, and early ways of mapping the experience.</p></div>
                <div className="project-log-grid discover-grid">
                  {driftMartProjectLog.images.discover.map((image, index) => <ProjectImagePlaceholder key={image.path} image={image} className={`discover-${index + 1}`} reduceMotion={reduceMotion} />)}
                </div>
              </section>

              <section className="project-log-section">
                <div className="project-log-section-heading"><span className="project-log-index">04 — DESIGN</span><p>Environment, modelling, and interaction details.</p></div>
                <div className="project-log-grid design-grid">
                  {driftMartProjectLog.images.design.map((image, index) => <ProjectImagePlaceholder key={image.path} image={image} className={`design-${index + 1}`} reduceMotion={reduceMotion} />)}
                </div>
              </section>

              <section className="project-log-section">
                <div className="project-log-section-heading"><span className="project-log-index">05 — EXPERIENCE</span><p>VR scenes, interactions, and character encounters.</p></div>
                <div className="project-log-grid experience-grid">
                  {driftMartProjectLog.images.experience.map((image, index) => <ProjectImagePlaceholder key={image.path} image={image} className={`experience-${index + 1}`} reduceMotion={reduceMotion} />)}
                </div>
              </section>

              <section className="project-log-section project-log-outcome">
                <span className="project-log-index">06 — OUTCOME</span>
                <p>{driftMartProjectLog.outcome}</p>
                <ProjectImagePlaceholder image={driftMartProjectLog.images.outcome} className="project-log-final-image" reduceMotion={reduceMotion} />
              </section>

              <footer className="project-log-footer">
                <button className="project-log-back" type="button" onClick={onClose}>← Back to projects</button>
                <span>END OF LOG · 01</span>
              </footer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Projects({ reduceMotion }: { reduceMotion: boolean }) {
  const [isDriftMartOpen, setIsDriftMartOpen] = useState(false);
  const driftMartButtonRef = useRef<HTMLButtonElement>(null);
  const openDriftMart = useCallback(() => setIsDriftMartOpen(true), []);
  const closeDriftMart = useCallback(() => setIsDriftMartOpen(false), []);

  return (
    <>
      <section className="section-block" id="projects">
        <SectionTitle eyebrow="SELECTED TREASURES" title="Featured Projects" action="03 discoveries" />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              reduceMotion={reduceMotion}
              onExplore={project.number === '01' ? openDriftMart : undefined}
              buttonRef={project.number === '01' ? driftMartButtonRef : undefined}
            />
          ))}
        </div>
      </section>
      <DriftMartProjectLog open={isDriftMartOpen} onClose={closeDriftMart} triggerRef={driftMartButtonRef} reduceMotion={reduceMotion} />
    </>
  );
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

function Journey() {
  return (
    <section className="pixel-panel journey-panel" id="journey">
      <SectionTitle eyebrow="ROUTE SO FAR" title="Journey Log" action="Adventure continues" />
      <div className="journey-line">
        <svg className="journey-route" viewBox="0 0 100 22" preserveAspectRatio="none" aria-hidden="true">
          <path
            id="journey-route"
            d="M3 11 C10 8 18 8 26 11 S42 14 50 11 S66 8 74 11 S90 14 97 11"
          />
        </svg>
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

  return <main><div className="game-shell"><Navigation reduceMotion={reduceMotion} /><Hero reduceMotion={reduceMotion} /><section className="intro-grid"><CaptainStatus /><About /></section><Projects reduceMotion={reduceMotion} /><section className="lower-grid"><Skills /><Journey /></section><Contact reduceMotion={reduceMotion} /></div></main>;
}
