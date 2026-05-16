import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles/App.css';
import Navigation from './components/Navigation';
import Hero from './pages/Hero';
import About from './pages/About';
import Stats from './pages/Stats';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Auto-detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Stats darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Resume darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </motion.main>
    </div>
  );
}

export default App;