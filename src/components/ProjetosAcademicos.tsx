import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import styles from './ProjetosAcademicos.module.css';

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
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 8.8 12 8.8s-1.17.2-1.71.67c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.47 1.11.67 1.71.67s1.17-.2 1.71-.67c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-6.87c1.07.45 1.72 1.08 2.03 1.93c.25-.22.45-.45.59-.72h-1.18c-.13.18-.31.36-.52.54c-.37.32-.75.64-1.17.96l.25 1.26c.38-.11.73-.25 1.06-.42c-.34-.52-.78-1.09-1.06-1.55M8.7 1.27c.18.26.35.53.51.83h1.09c.08-.12.18-.24.28-.35c.35-.38.73-.68 1.13-1l-.25-1.26c-.38.18-.77.39-1.13.71c-.4.36-.78.78-1.14 1.22l.51.25M15.71 17.5c-.54-.47-1.11-.67-1.71-.67s-1.17.2-1.71.67c-.29.47-.61.94-.91 1.47l-.81 1.5l.81 1.5c.3.53.62 1 .91 1.47c.54.47 1.11.67 1.71.67s1.17-.2 1.71-.67c.29-.47.61-.94.91-1.47l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47m-2.43 3.02c.34.52.78 1.09 1.06 1.55c.34.17.69.31 1.06.42l.25-1.26c-.42-.32-.8-.64-1.13-.96c-.2-.18-.4-.36-.52-.54h-1.18c.14.27.34.5.59.72c.31-.85.96-1.48 2.03-1.93l-.26 1.1m-2.16-9.45c.18-.26.4-.5.59-.72h-1.18c-.2.27-.4.5-.59.72l.39.39l.79.79z"/>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12.001 0L5.5 5.855l.929-.002L11.5 1.293l.5.5-.929 4.062h5.929l-.928 4.062.5.5-1.5 1.5h-2l1.5-1.5-.5-.5h-3.072l-.5 2h6.072l-.5 2h-6.5l.5.5 3.572 3.308-3.572 3.308-.5.5h2.5l3.5-3.5 3.5 3.5h2.5l-4.071-3.785L21.5 14.5l-1.5-1.5-3.571 3.43-3.429-3.43-1.5 1.5 3.429 3.43-3.429 3.43-1.5-1.5 3.429-3.43L7 16.5l1.5-1.5.5.5h3.072l.5-2H8.5l-.5-.5-3.572-3.308L11 1.5l.5-.5.929 4.062H5.5l-.5-.5.929-4.062L12.001 0z" />
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
  )
};

export default function ProjetosAcademicos() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projetos" className={styles.projetos}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projetos Acadêmicos</h2>
          <p className="section-subtitle">
            Projetos desenvolvidos durante minha formação que demonstram minhas habilidades técnicas e criatividade
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.card} ${selectedProject === project.id ? styles.active : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
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
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className={styles.tag}>
                        {techIcons[tag] && <span className={styles.tagIcon}>{techIcons[tag]}</span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.viewMore}>
                      Ver detalhes
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div className={styles.cardBack}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  
                  <div className={styles.allTags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>
                        {techIcons[tag] && <span className={styles.tagIcon}>{techIcons[tag]}</span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className={styles.links}>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.liveLink}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

