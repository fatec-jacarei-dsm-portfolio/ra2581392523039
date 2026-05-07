import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import styles from './Contact.module.css';

export default function Contact() {
  const { language } = useAppContext();
  const t = translations[language].contact;
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Nota: Substitua o ID abaixo pelo seu ID do Formspree (ex: https://formspree.io/f/seu_id)
      const response = await fetch('https://formspree.io/f/xgodlyqw', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
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
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.field}>
              <label>{t.name}</label>
              <input type="text" name="name" required />
            </div>
            <div className={styles.field}>
              <label>{t.email}</label>
              <input type="email" name="email" required />
            </div>
            <div className={styles.field}>
              <label>{t.message}</label>
              <textarea name="message" rows={5} required></textarea>
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (language === 'pt' ? 'Enviando...' : 'Sending...') :
                status === 'success' ? t.success :
                  status === 'error' ? (language === 'pt' ? 'Erro ao enviar' : 'Error sending') :
                    t.send}
            </button>
          </motion.form>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.contactCard}>
              <span className={styles.icon}>📍</span>
              <div>
                <h3>Localização</h3>
                <p>São José dos Campos, SP</p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h3>E-mail</h3>
                <p>joaopedroluvisariseveriano@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
