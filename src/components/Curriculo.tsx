import { motion } from 'framer-motion';
import { education, experiences, skills } from '../data/portfolio';
import styles from './Curriculo.module.css';

const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: '#6366f1' },
  { key: 'backend', label: 'Backend', color: '#10b981' },
  { key: 'tools', label: 'Ferramentas', color: '#f59e0b' },
  { key: 'soft', label: 'Soft Skills', color: '#f43f5e' }
];

const skillIcons: Record<string, string> = {
  'React': '⚛️',
  'TypeScript': '📘',
  'JavaScript': '🟨',
  'HTML': '🔷',
  'CSS': '🎨',
  'Node.js': '🟢',
  'Python': '🐍',
  'SQL': '🗃️',
  'PHP': '🐘',
  'Hack': '💜',
  'Git': '📂',
  'Figma': '🎯',
  'Trello': '📋',
  'Comunicação': '💬',
  'Trabalho em Equipe': '👥',
  'Resolução de Problemas': '🔧'
};

export default function Curriculo() {
  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="curriculo" className={styles.curriculo}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Currículo</h2>
          <p className="section-subtitle">
            Minha formação acadêmica, experiência profissional e habilidades técnicas
          </p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.mainColumn}>
            {/* Education */}
            <motion.div 
              className={styles.section}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className={styles.sectionTitle}>
                <span className={styles.icon}>🎓</span>
                Formação Acadêmica
              </h3>
              <div className={styles.timeline}>
                {education.map((edu, index) => (
                  <motion.div 
                    key={edu.id}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <span className={styles.period}>{edu.period}</span>
                      <h4 className={styles.degree}>{edu.degree}</h4>
                      <h5 className={styles.institution}>{edu.institution}</h5>
                      <p className={styles.description}>{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              className={styles.section}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={styles.sectionTitle}>
                <span className={styles.icon}>💼</span>
                Experiência Profissional
              </h3>
              {experiences.length > 0 ? (
                <div className={styles.timeline}>
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={exp.id}
                      className={styles.timelineItem}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className={styles.timelineDot}></div>
                      <div className={styles.timelineContent}>
                        <span className={styles.period}>{exp.period}</span>
                        <h4 className={styles.role}>{exp.role}</h4>
                        <h5 className={styles.company}>{exp.company}</h5>
                        <p className={styles.description}>{exp.description}</p>
                        {exp.highlights && (
                          <ul className={styles.highlights}>
                            {exp.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className={styles.timeline}>
                  <motion.div 
                    className={styles.timelineItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <span className={styles.period}>Em construção</span>
                      <h4 className={styles.role}>Buscando primeira oportunidade</h4>
                      <h5 className={styles.company}>Mercado de Tecnologia</h5>
                      <p className={styles.description}>
                        Atualmente em formação na FATEC, desenvolvendo projetos acadêmicos 
                        e adquirindo habilidades em desenvolvimento web. Ansioso para aplicar 
                        meus conhecimentos em um ambiente profissional.
                      </p>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div 
            className={styles.skillsColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.sectionTitle}>
              <span className={styles.icon}>⚡</span>
              Habilidades
            </h3>
            
            {skillCategories.map((category, catIndex) => (
              <div key={category.key} className={styles.skillCategory}>
                <h4 className={styles.skillCategoryTitle} style={{ color: category.color }}>
                  {category.label}
                </h4>
                <div className={styles.skillsList}>
                  {getSkillsByCategory(category.key).map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className={styles.skillItem}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className={styles.skillInfo}>
                        <span className={styles.skillIcon}>{skillIcons[skill.name]}</span>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

