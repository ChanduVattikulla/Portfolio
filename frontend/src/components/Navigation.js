import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navigation.css';

// ✅ Moved outside component (stable constant)
const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Resume', 'Contact'];

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
      <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            CK
          </div>

          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  className={`nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}
                  onClick={() => scrollToSection(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle theme">
              {darkMode ? '☀' : '☽'}
            </button>

            <button className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>

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
      </nav>

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