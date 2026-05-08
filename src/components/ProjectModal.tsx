import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../data/translations';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
  language: 'pt' | 'en';
}

export default function ProjectModal({ project, isOpen, onClose, language }: ProjectModalProps) {
  if (!project) return null;
  const t = translations[language].projectModal;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close} onClick={onClose}>&times;</button>
            
            <div className={styles.content}>
              <div className={styles.header}>
                <h2 className={styles.title}>{project.title}</h2>
                <div className={styles.tags}>
                  {project.tags.map((tag: string) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.main}>
                <div className={styles.description}>
                  <h3>{t.about}</h3>
                  <p>{project.description}</p>
                  
                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <h4>{t.challenges}</h4>
                      <p>{t.challengesDesc}</p>
                    </div>
                    <div className={styles.detailItem}>
                      <h4>{t.takeaways}</h4>
                      <p>{t.takeawaysDesc}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.media}>
                  {project.youtubeUrl ? (
                    <iframe 
                      src={project.youtubeUrl}
                      title="Video"
                      allowFullScreen
                      className={styles.video}
                    />
                  ) : (
                    <div className={styles.placeholder}>
                      {t.videoNotAvailable}
                    </div>
                  )}
                  
                  <div className={styles.actions}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.btn}>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
