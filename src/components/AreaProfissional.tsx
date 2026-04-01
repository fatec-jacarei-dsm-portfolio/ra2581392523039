import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import styles from './AreaProfissional.module.css';

export default function AreaProfissional() {
  return (
    <section id="profissional" className={styles.profissional}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Área Profissional</h2>
          <h3 style={{ 
            textAlign: 'center', 
            fontSize: '1.25rem', 
            fontWeight: 400,
            color: 'var(--text-secondary)',
            marginTop: '0.5rem'
          }}>
            Minha trajetória profissional e contribuições no mercado de tecnologia
          </h3>
        </motion.div>

        <div className={styles.content}>
          {/* Introduction */}
          <motion.div 
            className={styles.intro}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.introCard}>
              <div className={styles.avatar}>
                <span>JP</span>
              </div>
              <div className={styles.introText}>
                <h3>Desenvolvedor</h3>
                <p>
                  Sou um profissional dedicado ao desenvolvimento web, com foco em criar 
                  experiências digitais memoráveis e funcionais. Atualmente busco minha primeira 
                  oportunidade no mercado de tecnologia, animado para aplicar os conhecimentos 
                  adquiridos durante minha formação acadêmica.
                </p>
                <div className={styles.contactInfo}>
                  <span>📍 {personalInfo.location}</span>
                  <span>✉️ {personalInfo.email}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { value: '0', label: 'Anos de Experiência' },
              { value: '3', label: 'Projetos Concluídos' },
              { value: '8+', label: 'Tecnologias' },
              { value: '100%', label: 'Comprometimento' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy */}
          <motion.div 
            className={styles.philosophy}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.philosophyCard}>
              <h3>Minha Filosofia</h3>
              <blockquote>
                "A tecnologia deve ser uma extensão da criatividade humana, 
                não uma barreira. Cada linha de código é uma oportunidade de 
                criar algo que faça a diferença na vida das pessoas."
              </blockquote>
              <div className={styles.values}>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>🎯</span>
                  <span>Foco em Resultados</span>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>🔄</span>
                  <span>Melhoria Contínua</span>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>🤝</span>
                  <span>Colaboração</span>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>💡</span>
                  <span>Inovação</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

