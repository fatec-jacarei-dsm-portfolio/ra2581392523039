import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, etecPortfolios } from '../data/portfolio';
import { useTilt } from '../hooks/useTilt';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import ProjectModal from './ProjectModal';
import styles from './ProjetosAcademicosFix.module.css';

const techIcons: Record<string, React.ReactNode> = {
  JavaScript: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM9.75 19.5h-3V4.5h3v15zm6.375-8.25c0 .984-.703 1.594-1.875 1.594h-1.5v-3.188h1.5c1.172 0 1.875.703 1.875 1.594v.001zm-6.375-3.938h4.5v3.188h-4.5v-3.188zm6.75 7.815c0 1.172-.703 1.578-1.875 1.578h-1.5v-3.281h1.5c1.172 0 1.875.703 1.875 1.703z"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 8.8 12 8.8s-1.17.2-1.71.67c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.47 1.11.67 1.71.67s1.17-.2 1.71-.67c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51z"/>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.356 1.836H3.652l1.23-6.326h2.688c.799 0 1.369.188 1.709.563.34.375.43.94.27 1.69-.07.358-.19.672-.351.93-.161.258-.37.48-.603.592l.145.75zm5.077-.576h-1.16l.403-2.069h-1.138l-.403 2.069h-1.16l1.23-6.326h1.16l-.407 2.09h1.138l.407-2.09h1.161l-1.231 6.326zm5.52-1.261c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H16l-.357 1.836h-1.349l1.231-6.326h2.688c.799 0 1.368.188 1.709.563.34.375.43.94.27 1.69-.072.358-.191.672-.351.93-.162.258-.37.48-.604.592zm-1.098-1.95h-.944l-.516 2.648h.838c.556 0 .971-.105 1.242-.314.272-.21.456-.559.551-1.049.092-.47.049-.802-.124-.995-.175-.193-.522-.29-1.047-.29z"/>
    </svg>
  ),
  SCSS: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0c-3.3 0-6 2.7-6 6 0 2.1 1.1 4 2.8 5.2l-.6 2.4c-.2.8.5 1.4 1.3 1.1l2.2-.8 2.2.8c.8.3 1.5-.3 1.3-1.1l-.6-2.4c1.7-1.2 2.8-3.1 2.8-5.2 0-3.3-2.7-6-6-6zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" />
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
    </svg>
  ),
  Hack: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 3.5l7.5 4.5v9l-7.5 4.5-7.5-4.5v-9l7.5-4.5z" />
    </svg>
  ),
  Other: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z" />
    </svg>
  )
};

// ── Sub-section divider ─────────────────────────────────────────────────────
interface SubsectionHeaderProps {
  badge: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
}
function SubsectionHeader({ badge, badgeColor = '#6366f1', title, subtitle, style }: SubsectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.subsectionHeader}
      style={style}
    >
      <div className={styles.subsectionBadge}>
        <span className={styles.subsectionDot} style={{ background: badgeColor }} />
        {badge}
      </div>
      <h3 className={styles.subsectionTitle}>{title}</h3>
      <p className={styles.subsectionSubtitle}>{subtitle}</p>
    </motion.div>
  );
}

// ── Project card ────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onDetails }: { project: any, index: number, onDetails: () => void }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();
  const { language } = useAppContext();
  const t = translations[language].projects;

  return (
    <motion.div
      layout
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.cardIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardDescription}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className={styles.tag}>
                {techIcons[tag] && <span className={styles.tagIcon}>{techIcons[tag]}</span>}
                {tag}
              </span>
            ))}
          </div>
          <button className={styles.detailsBtn} onClick={onDetails}>
            {t.details}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ── ETEC portfolio card ─────────────────────────────────────────────────────
function EtecPortfolioCard({ portfolio, index }: { portfolio: any, index: number }) {
  const { language } = useAppContext();
  const t = translations[language].projects;

  return (
    <motion.a
      href={portfolio.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.etecCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6, scale: 1.02 }}
      style={{ '--etec-color': portfolio.color } as React.CSSProperties}
    >
      <div className={styles.etecCardGlow} style={{ background: portfolio.color }} />
      <div className={styles.etecCardContent}>
        <div className={styles.etecIcon}>{portfolio.icon}</div>
        <div className={styles.etecBadge}>{portfolio.year}</div>
        <h3 className={styles.etecTitle}>{portfolio.title}</h3>
        <p className={styles.etecDescription}>{portfolio.description}</p>
        <span className={styles.etecLink}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          {t.etec_visit}
        </span>
      </div>
    </motion.a>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export default function ProjetosAcademicos() {
  const { language } = useAppContext();
  const t = translations[language].projects;
  const [filter, setFilter] = useState('Todos');
  const [modalProject, setModalProject] = useState<any>(null);

  const fatecProjects  = projects.filter(p => p.source === 'fatec');
  const personalProjects = projects.filter(p => p.source === 'personal');

  const categories = ['Todos', 'React', 'TypeScript', 'PHP', 'JavaScript'];

  const filteredFatec = useMemo(() => {
    if (filter === 'Todos') return fatecProjects;
    return fatecProjects.filter(p => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projetos" className={styles.projetos}>
      <div className={styles.container}>

        {/* ── Main header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </motion.div>

        {/* ══ FATEC Jacareí ══ */}
        <SubsectionHeader
          badge="FATEC Jacareí"
          badgeColor="#6366f1"
          title={t.fatec_section}
          subtitle={t.fatec_subtitle}
        />

        <div className={styles.filterContainer}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterButton} ${filter === cat ? styles.filterActive : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'Todos' ? t.filter_all : cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredFatec.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onDetails={() => setModalProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ══ Projetos Pessoais ══ */}
        <SubsectionHeader
          badge="Projetos Independentes"
          badgeColor="#10b981"
          title={t.personal_section}
          subtitle={t.personal_subtitle}
          style={{ marginTop: '5rem' }}
        />

        <div className={styles.grid}>
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onDetails={() => setModalProject(project)}
            />
          ))}
        </div>

        {/* ══ Portfólios ETEC ══ */}
        <SubsectionHeader
          badge="ETEC São José dos Campos"
          badgeColor="#8b5cf6"
          title={t.etec_section}
          subtitle={t.etec_subtitle}
          style={{ marginTop: '5rem' }}
        />

        <div className={styles.etecGrid}>
          {etecPortfolios.map((portfolio, index) => (
            <EtecPortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
          ))}
        </div>

      </div>

      <ProjectModal
        project={modalProject}
        isOpen={!!modalProject}
        onClose={() => setModalProject(null)}
        language={language}
      />
    </section>
  );
}
