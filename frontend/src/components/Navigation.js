import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navigation.css';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Resume', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
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
                <button className="nav-link" onClick={() => scrollToSection(link)}>
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* nav-right is now the anchor point - the panel expands FROM here */}
          <div className="nav-right">
            <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle theme">
              {darkMode ? '☀' : '☽'}
            </button>

            {/* Hamburger stays on top (highest z-index) so it's always clickable to close */}
            <button className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>

            {/* Expanding panel - anchored top-right, grows left & down over the icons */}
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
                        className="dropdown-nav-link"
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

      {/* Overlay stays separate, just dims the page background */}
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