import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          CK
        </div>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link}>
              <button 
                className="nav-link"
                onClick={() => scrollToSection(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

      

       <div className="nav-right">
  <button className="theme-toggle" onClick={toggleDarkMode}>
    {darkMode ? '☀️' : '🌙'}
  </button>
  <button 
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>
</div>
      </div>

      {menuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <button 
              key={link}
              className="mobile-nav-link"
              onClick={() => scrollToSection(link)}
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;