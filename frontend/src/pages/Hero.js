import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import '../styles/Hero.css';

const ROLES = [
  "Full-Stack Web Developer",
  "Software Engineering Student",
  "AI & Automation Developer",
  "Frontend & React Developer"
];

const Hero = ({ darkMode }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentFullText = ROLES[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.7 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="hero" className={`hero ${darkMode ? 'dark' : 'light'}`}>
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Terminal window wraps the content column */}
        <div className="hero-terminal">
          <div className="terminal-titlebar">
            <span className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot amber"></span>
              <span className="terminal-dot green"></span>
            </span>
            <span className="terminal-filename">chandu@portfolio: ~/hero</span>
          </div>

          <motion.div className="terminal-body" variants={containerVariants} initial="hidden" animate="visible">

            {/* Prompt-style status badge */}
            <motion.div className="hero-status-tag" variants={itemVariants}>
              <span className="prompt-symbol">&gt;</span>
              <span className="pulse-container">
                <span className="pulse-dot"></span>
                <span className="pulse-ring"></span>
              </span>
              <span className="status-text">Open to Engineering Opportunities</span>
            </motion.div>

            {/* Main Name Header */}
            <motion.h1 className="hero-title" variants={itemVariants}>
              <span className="caret">&gt;</span>
              <span>Hi, I'm <span className="highlight">Chandu Vattikulla</span></span>
            </motion.h1>

            {/* Subtitle with typing effect */}
            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              <span className="prompt-dollar">$</span>
              <span className="typing-text">{displayText}</span>
              <span className="cursor"></span>
            </motion.h2>

            {/* Summary, styled as a code comment */}
            <motion.p className="hero-tagline" variants={itemVariants}>
              <span className="comment-mark">{'//'}</span>
              Building web software, working with modern tools and AI APIs, and focusing on clean, reliable user experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View Projects</span>
                <ArrowUpRight className="btn-icon" size={18} />
              </motion.button>

              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('/Chandu_Vattikulla_Resume.pdf', '_blank')}
              >
                <FileText className="btn-icon" size={17} />
                <span>Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Image Column */}
        <motion.div className="hero-image-wrapper" variants={itemVariants}>
          <div className="profile-frame">
            <span className="frame-corner tl"></span>
            <span className="frame-corner tr"></span>
            <span className="frame-corner bl"></span>
            <span className="frame-corner br"></span>
            <motion.div
              className={`profile-circle ${darkMode ? 'dark' : 'light'}`}
              initial={{ y: 0, scale: 0.98 }}
              animate={{ y: [0, -10, 0], scale: [0.98, 1.01, 0.98] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="profile-scanline"></span>
              <img src="/images/profile.jpeg" alt="Chandu Vattikulla" className="profile-img" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
