import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import MagnetButton from './MagnetButton';
import styles from './Hero.module.css';

export default function Hero() {
  const { language } = useAppContext();
  const t = translations[language].hero;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background}>
        <motion.div style={{ y: y1, rotate }} className={styles.gradientOrb1}></motion.div>
        <motion.div style={{ y: y2, rotate: -rotate }} className={styles.gradientOrb2}></motion.div>
        <div className={styles.gridPattern}></div>
      </div>
      
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.avatarWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <img
              className={styles.avatar}
              src={personalInfo.avatarUrl}
              alt={`Foto de perfil de ${personalInfo.name}`}
              loading="eager"
            />
          </motion.div>

          <motion.h1 
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {personalInfo.title}
          </motion.h2>
          
          <motion.p 
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t.tagline}
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <MagnetButton
              onClick={() => scrollToSection('projetos')}
              className={styles.primaryButton}
            >
              {t.cta_projects}
            </MagnetButton>
            <MagnetButton
              onClick={() => scrollToSection('curriculo')}
              className={styles.secondaryButton}
            >
              {t.cta_resume}
            </MagnetButton>
          </motion.div>
          
          <div className={styles.bottomHero}>
            <motion.div 
              className={styles.socialLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#f5f5f7' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#f5f5f7' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className={styles.mouse}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className={styles.wheel}></div>
          </motion.div>
          <span className={styles.scrollText}>{t.scroll}</span>
        </motion.div>
      </div>
    </section>
  );
}

