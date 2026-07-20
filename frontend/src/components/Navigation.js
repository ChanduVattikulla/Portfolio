import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

// ✅ Moved outside component (stable constant)
const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Resume', 'Contact'];

const navMotion = {
  hidden: { opacity: 0, y: -22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const linkMotion = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ✅ Map display names to actual section IDs
  const getSectionId = (link) => {
    return link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase();
  };

  // ✅ Scroll tracking with bottom detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If scrolled to the bottom, set active to Contact
      if (scrollPosition + windowHeight >= documentHeight - 10) {
        const lastSection = navLinks[navLinks.length - 1].toLowerCase();
        setActiveSection(lastSection);
        return;
      }

      let currentSection = 'home';

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const sectionId = getSectionId(link);
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = link.toLowerCase();
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // ✅ FIX: removed navLinks from deps (it's stable outside component)

  const scrollToSection = (section) => {
    const id = getSectionId(section);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${darkMode ? 'dark' : 'light'}`}
        variants={navMotion}
        initial="hidden"
        animate="visible"
      >
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            CK
          </motion.div>

          <motion.ul
            className="nav-menu"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } } }}
          >
            {navLinks.map((link) => (
              <motion.li key={link} variants={linkMotion}>
                <button
                  className={`nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}
                  onClick={() => scrollToSection(link)}
                >
                  {link}
                </button>
              </motion.li>
            ))}
          </motion.ul>

          <div className="nav-right">
            <motion.button
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.05, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Open mobile menu"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, scale: 0.35 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.35 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="dropdown-links">
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link}
                        className={`dropdown-nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}
                        onClick={() => scrollToSection(link)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15, delay: 0.04 * index + 0.1 }}
                      >
                        {link}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;