import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Resume', 'Contact'];

const navMotion = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const getSectionId = (link) => {
    return link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase();
  };

  // Ultra-smooth scroll handler using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const scrollPosition = window.scrollY + 120;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          if (scrollPosition + windowHeight >= documentHeight - 10) {
            setActiveSection(navLinks[navLinks.length - 1].toLowerCase());
            ticking = false;
            return;
          }

          let current = 'home';
          for (let i = navLinks.length - 1; i >= 0; i--) {
            const link = navLinks[i];
            const sectionId = getSectionId(link);
            const element = document.getElementById(sectionId);
            if (element && scrollPosition >= element.offsetTop) {
              current = link.toLowerCase();
              break;
            }
          }

          setActiveSection(current);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const id = getSectionId(section);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`navbar ${darkMode ? 'dark' : 'light'} ${scrolled ? 'scrolled' : ''}`}
        variants={navMotion}
        initial="hidden"
        animate="visible"
      >
        <div className="nav-container">
          {/* Logo */}
          <div 
            className="nav-logo" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="logo-prompt">~/</span>
            <span className="logo-text">CK</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu-wrapper">
            <ul className="nav-menu">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.toLowerCase();
                return (
                  <li key={link} className="nav-item">
                    <button
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => scrollToSection(link)}
                    >
                      <span className="nav-num">0{idx + 1}</span>
                      <span className="nav-text">{link}</span>

                      {/* Continuous Smooth Express Indicator */}
                      <motion.div
                        className="express-pill"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.94,
                        }}
                        transition={{ duration: 0.24, ease: 'easeOut' }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Controls */}
          <div className="nav-right">
            <button
              onClick={toggleDarkMode}
              className="icon-btn theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              className="icon-btn menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {navLinks.map((link, index) => (
                    <button
                      key={link}
                      className={`dropdown-nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}
                      onClick={() => scrollToSection(link)}
                    >
                      <span className="dropdown-num">0{index + 1}.</span>
                      <span>{link}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;