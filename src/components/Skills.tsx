import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import styles from './Skills.module.css';

export default function Skills() {
  const { language } = useAppContext();
  const t = translations[language].skills;

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'soft', label: 'Soft Skills', icon: '🤝' },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </motion.div>

        <div className={styles.grid}>
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.id}
              className={styles.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3>{cat.label}</h3>
              </div>
              
              <div className={styles.skillList}>
                {skills.filter(s => s.category === cat.id).map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={styles.barBg}>
                      <motion.div 
                        className={styles.barFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
