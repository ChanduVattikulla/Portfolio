import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import '../styles/About.css';

const About = ({ darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside the container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target) && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const shortIntro = `I'm a B.Tech Computer Science student passionate about building modern web applications and exploring artificial intelligence. With hands-on experience in full-stack development, I've worked on diverse projects from real-time web apps to AI solutions.`;

  const additionalParagraphs = [
    `Over the past year, I've worked on diverse projects ranging from full-stack web applications to AI-powered solutions. I specialize in React for frontend development, Python and Flask for backend, and have experience with PostgreSQL and MongoDB for data persistence. I'm equally comfortable working solo or collaborating with teams.`,
    `Beyond coding, I'm an active member of the developer community. I contribute to open-source projects, solve complex problems on LeetCode, and love sharing my knowledge through GitHub. I believe in writing clean, maintainable code and creating user experiences that genuinely matter. When I'm not coding, you'll find me exploring new technologies, reading about machine learning breakthroughs, or mentoring junior developers.`
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <section id="about" className={`about ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Introduction</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <motion.div 
          className="about-wrapper"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div 
            className="about-container"
            ref={containerRef}
          >
            <div className="about-content">
              {/* Short intro – always visible */}
              <p className="about-intro">
                {shortIntro}
              </p>
              
              {/* Expanded paragraphs with stagger animation */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    className="expanded-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <motion.div
                      className="expanded-paragraphs"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {additionalParagraphs.map((paragraph, index) => (
                        <motion.p 
                          key={index}
                          className="about-expanded-text"
                          variants={itemVariants}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Read More / Read Less button */}
            <button
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
              <ChevronDown className={`btn-icon ${isExpanded ? 'rotated' : ''}`} size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;