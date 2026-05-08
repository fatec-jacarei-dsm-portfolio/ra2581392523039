import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { diplomas } from '../data/portfolio';
import { useTilt } from '../hooks/useTilt';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import styles from './Diplomas.module.css';

function DiplomaCard({ diploma, index, onClick }: { diploma: any, index: number, onClick: () => void }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
    >
      <div className={styles.cardImage}>
        <img src={diploma.imageUrl} alt={diploma.title} loading="lazy" />
        <div className={styles.overlay}>
          <span className={styles.zoomIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{diploma.title}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.issuer}>{diploma.issuer}</span>
          <span className={styles.date}>{diploma.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Diplomas() {
  const { language } = useAppContext();
  const t = translations[language].diplomas;
  const [selectedDiploma, setSelectedDiploma] = useState<string | null>(null);

  const localizedDiplomas = useMemo(() => {
    return diplomas.map(d => {
      const translated = (translations[language].data as any).diplomas.find((td: any) => td.id === d.id);
      return { ...d, ...translated };
    });
  }, [language]);

  const selectedDip = localizedDiplomas.find(d => d.id === selectedDiploma);

  return (
    <section id="diplomas" className={styles.certificados}>
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

        <div className={styles.grid}>
          {localizedDiplomas.map((diploma, index) => (
            <DiplomaCard 
              key={diploma.id} 
              diploma={diploma} 
              index={index} 
              onClick={() => setSelectedDiploma(diploma.id)} 
            />
          ))}
        </div>

        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{localizedDiplomas.length}</span>
            <span className={styles.statLabel}>{t.stats.diplomas}</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1</span>
            <span className={styles.statLabel}>{t.stats.institutions}</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2026</span>
            <span className={styles.statLabel}>{t.stats.year}</span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedDiploma && selectedDip && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDiploma(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedDiploma(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              
              <div className={styles.lightboxImage}>
                <img src={selectedDip.imageUrl} alt={selectedDip.title} />
              </div>
              
              <div className={styles.lightboxInfo}>
                <h3>{selectedDip.title}</h3>
                <p className={styles.lightboxIssuer}>{t.issuedBy} {selectedDip.issuer}</p>
                <p className={styles.lightboxDate}>{selectedDip.date}</p>
                {selectedDip.credentialUrl && (
                  <a 
                    href={selectedDip.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.credentialButton}
                  >
                    {t.viewCredential}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
