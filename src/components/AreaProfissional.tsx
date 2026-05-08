import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import styles from './AreaProfissional.module.css';

export default function AreaProfissional() {
  const { language } = useAppContext();
  const t = translations[language].areaProfissional;

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
          <h2 className="section-title">{t.title}</h2>
          <h3 style={{ 
            textAlign: 'center', 
            fontSize: '1.25rem', 
            fontWeight: 400,
            color: 'var(--text-secondary)',
            marginTop: '0.5rem'
          }}>
            {t.subtitle}
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
                {personalInfo.avatarUrl ? (
                  <img
                    className={styles.avatarImg}
                    src={personalInfo.avatarUrl}
                    alt={`Foto de perfil de ${personalInfo.name}`}
                    loading="lazy"
                  />
                ) : (
                  <span>{personalInfo.name.split(' ')[0].slice(0, 2).toUpperCase()}</span>
                )}
              </div>
              <div className={styles.introText}>
                <h3>{t.role}</h3>
                <p>
                  {t.description}
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
              { value: '0', label: t.stats.years },
              { value: '3', label: t.stats.projects },
              { value: '8+', label: t.stats.techs },
              { value: '100%', label: t.stats.commitment }
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
              <h3>{t.philosophy.title}</h3>
              <blockquote>
                {t.philosophy.quote}
              </blockquote>
              <div className={styles.values}>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>🎯</span>
                  <span>{t.philosophy.values[0]}</span>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>🔄</span>
                  <span>{t.philosophy.values[1]}</span>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>🤝</span>
                  <span>{t.philosophy.values[2]}</span>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>💡</span>
                  <span>{t.philosophy.values[3]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

