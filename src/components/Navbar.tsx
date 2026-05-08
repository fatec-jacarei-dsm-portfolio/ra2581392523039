import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { language, setLanguage, theme, toggleTheme } = useAppContext();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { id: 'hero', label: t.nav.hero },
    { id: 'curriculo', label: t.nav.curriculo },
    { id: 'profissional', label: t.nav.profissional },
    { id: 'projetos', label: t.nav.projetos },
    { id: 'diplomas', label: t.nav.diplomas },
    { id: 'certificados', label: t.nav.certificados },
    { id: 'interesses', label: t.nav.interesses },
    { id: 'contact', label: t.nav.contact }
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <div className={styles.container}>
        <motion.a 
          href="#hero" 
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          whileHover={{ scale: 1.05 }}
        >
          <span className={styles.logoText}>JP</span>
          <span className={styles.logoDot}></span>
        </motion.a>

        <div className={styles.rightSide}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>

          <div className={styles.controls}>
            <button 
              className={styles.controlBtn}
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              title={t.nav.switchLanguage}
            >
              {language === 'pt' ? '🇺🇸' : '🇧🇷'}
            </button>
            <button 
              className={styles.controlBtn}
              onClick={toggleTheme}
              title={theme === 'dark' ? t.nav.switchTheme : t.nav.switchThemeDark}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          <button 
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${styles.mobileLink} ${activeSection === item.id ? styles.active : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

