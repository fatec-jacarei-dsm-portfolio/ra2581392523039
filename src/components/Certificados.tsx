import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/portfolio';
import { useTilt } from '../hooks/useTilt';
import styles from './Certificados.module.css';

function CertificateCard({ cert, index, onClick }: { cert: any, index: number, onClick: () => void }) {
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
        <img src={cert.imageUrl} alt={cert.title} loading="lazy" />
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
        <h3 className={styles.cardTitle}>{cert.title}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.issuer}>{cert.issuer}</span>
          <span className={styles.date}>{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certificados() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const selectedCert = certificates.find(c => c.id === selectedCertificate);

  return (
    <section id="certificados" className={styles.certificados}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certificados</h2>
          <p className="section-subtitle">
            Certificações e cursos que evidenciam meu comprometimento com o aprendizado contínuo
          </p>
        </motion.div>

        <div className={styles.grid}>
          {certificates.map((cert, index) => (
            <CertificateCard 
              key={cert.id} 
              cert={cert} 
              index={index} 
              onClick={() => setSelectedCertificate(cert.id)} 
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
            <span className={styles.statNumber}>{certificates.length}</span>
            <span className={styles.statLabel}>Certificados</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statLabel}>Instituições</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2024</span>
            <span className={styles.statLabel}>Ano Atual</span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCertificate && selectedCert && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
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
                onClick={() => setSelectedCertificate(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              
              <div className={styles.lightboxImage}>
                <img src={selectedCert.imageUrl} alt={selectedCert.title} />
              </div>
              
              <div className={styles.lightboxInfo}>
                <h3>{selectedCert.title}</h3>
                <p className={styles.lightboxIssuer}>Emitido por {selectedCert.issuer}</p>
                <p className={styles.lightboxDate}>{selectedCert.date}</p>
                {selectedCert.credentialUrl && (
                  <a 
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.credentialButton}
                  >
                    Ver Credencial
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
