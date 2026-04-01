import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInterests } from '../data/portfolio';
import styles from './InteressesPessoais.module.css';

export default function InteressesPessoais() {
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
          <h2 className="section-title">Interesses Pessoais</h2>
          <p className="section-subtitle">
            O que me inspira e motiva fora do mundo da tecnologia
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
                          <span className={styles.tag} style={{ background: interest.color }}>★ Destaque</span>
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
                "A criatividade é a inteligência se divertindo. Busco sempre encontrar 
                inspiração em tudo ao meu redor, transformando experiências cotidianas 
                em motivação para novos projetos."
              </blockquote>
              <cite>— João Pedro</cite>
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
            <h3 className={styles.inspirationTitle}>Fontes de Inspiração</h3>
            <div className={styles.inspirationGrid}>
              <div className={styles.inspirationCard}>
                <span className={styles.inspirationIcon}>🌟</span>
                <h4>Inovação</h4>
                <p>Tecnologias emergentes e novas abordagens para problemas antigos</p>
              </div>
              <div className={styles.inspirationCard}>
                <span className={styles.inspirationIcon}>🎨</span>
                <h4>Arte & Design</h4>
                <p>Fotografia, ilustração e design de interfaces</p>
              </div>
              <div className={styles.inspirationCard}>
                <span className={styles.inspirationIcon}>🌍</span>
                <h4>Viajens</h4>
                <p>Novas culturas e perspectivas de vida</p>
              </div>
              <div className={styles.inspirationCard}>
                <span className={styles.inspirationIcon}>📖</span>
                <h4>Aprendizado</h4>
                <p>Livros, podcasts e cursos diversos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

