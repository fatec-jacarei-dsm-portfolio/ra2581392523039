import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInterests } from '../data/portfolio';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import styles from './InteressesPessoais.module.css';

export default function InteressesPessoais() {
  const { language } = useAppContext();
  const t = translations[language].interesses;
  const [activeInterest, setActiveInterest] = useState<string | null>(null);

  return (
    <section id="interesses" className={styles.interesses}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Interactive Grid */}
          <div className={styles.grid}>
            {personalInterests.map((interest, index) => (
              <motion.div
                key={interest.id}
                className={`${styles.card} ${activeInterest === interest.id ? styles.active : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveInterest(activeInterest === interest.id ? null : interest.id)}
                style={{ '--accent-color': interest.color } as React.CSSProperties}
              >
                <div className={styles.cardBackground} />
                <div className={styles.cardContent}>
                  <motion.span 
                    className={styles.icon}
                    animate={activeInterest === interest.id ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {interest.icon}
                  </motion.span>
                  <h3 className={styles.title}>{interest.title}</h3>
                  <p className={styles.shortDesc}>
                    {interest.description}
                  </p>
                  
                  {/* Styles Tags - Always visible for interests with styles */}
                  {interest.styles && interest.styles.length > 0 && (
                    <div className={styles.stylesList}>
                      {interest.styles.map((style, styleIndex) => (
                        <span 
                          key={styleIndex} 
                          className={styles.styleTag}
                          style={{ borderColor: interest.color, color: interest.color }}
                        >
                          {style}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <AnimatePresence>
                    {activeInterest === interest.id && (
                      <motion.div
                        className={styles.expandedContent}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={styles.tags}>
                          <span className={styles.tag} style={{ background: interest.color }}>★ {t.featured}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className={styles.cardGlow} />
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div 
            className={styles.quoteSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.quoteCard}>
              <div className={styles.quoteIcon}>💭</div>
              <blockquote>
                {t.quote}
              </blockquote>
              <cite>{t.author}</cite>
            </div>
          </motion.div>

          {/* Inspiration Cards */}
          <motion.div 
            className={styles.inspirationSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.inspirationTitle}>{t.inspiration.title}</h3>
            <div className={styles.inspirationGrid}>
              <div className={styles.inspirationCard}>
                <span className={styles.inspirationIcon}>🌟</span>
                <h4>{t.inspiration.innovation.title}</h4>
                <p>{t.inspiration.innovation.desc}</p>
              </div>
              <div className={styles.inspirationCard}>
                <span className={styles.inspirationIcon}>🎨</span>
                <h4>{t.inspiration.art.title}</h4>
                <p>{t.inspiration.art.desc}</p>
              </div>
              <div className={styles.inspirationCard}>
                <span className={styles.inspirationIcon}>🌍</span>
                <h4>{t.inspiration.travel.title}</h4>
                <p>{t.inspiration.travel.desc}</p>
              </div>
              <div className={styles.inspirationCard}>
                <span className={styles.inspirationIcon}>📖</span>
                <h4>{t.inspiration.learning.title}</h4>
                <p>{t.inspiration.learning.desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

