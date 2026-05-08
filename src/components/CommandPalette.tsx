import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import styles from './CommandPalette.module.css';

export default function CommandPalette() {
  const { language, setLanguage, toggleTheme, isCommandPaletteOpen, setCommandPaletteOpen } = useAppContext();
  const [query, setQuery] = useState('');
  const t = translations[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setCommandPaletteOpen]);

  const actions = [
    { id: 'hero', icon: '🏠', label: t.nav.hero, action: () => scrollTo('hero') },
    { id: 'curriculo', icon: '📄', label: t.nav.curriculo, action: () => scrollTo('curriculo') },
    { id: 'profissional', icon: '💼', label: t.nav.profissional, action: () => scrollTo('profissional') },
    { id: 'projetos', icon: '🚀', label: t.nav.projetos, action: () => scrollTo('projetos') },
    { id: 'diplomas', icon: '🎓', label: t.nav.diplomas, action: () => scrollTo('diplomas') },
    { id: 'certificados', icon: '📜', label: t.nav.certificados, action: () => scrollTo('certificados') },
    { id: 'interesses', icon: '🎨', label: t.nav.interesses, action: () => scrollTo('interesses') },
    { id: 'contact', icon: '📧', label: t.nav.contact, action: () => scrollTo('contact') },
    { id: 'theme', icon: '🌗', label: t.commandPalette.toggleTheme, action: toggleTheme },
    { id: 'lang', icon: '🌍', label: t.commandPalette.switchLanguage, action: () => setLanguage(language === 'pt' ? 'en' : 'pt') },
  ];

  const filteredActions = actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setCommandPaletteOpen(false);
  };

  if (!isCommandPaletteOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setCommandPaletteOpen(false)}
      >
        <motion.div 
          className={styles.palette}
          initial={{ scale: 0.9, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: -20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.search}>
            <span className={styles.searchIcon}>🔍</span>
            <input 
              autoFocus
              placeholder={t.commandPalette.placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className={styles.shortcut}>{t.commandPalette.shortcut}</span>
          </div>

          <div className={styles.results}>
            {filteredActions.map(action => (
              <button 
                key={action.id}
                className={styles.action}
                onClick={action.action}
              >
                <span className={styles.actionIcon}>{action.icon}</span>
                <span className={styles.actionLabel}>{action.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
