import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // ✅ Structured content – clean paragraphs
  const shortIntro = `I'm a B.Tech Computer Science student passionate about building modern web applications and exploring artificial intelligence. With hands-on experience in full-stack development, I've worked on diverse projects from real-time web apps to AI solutions.`;

  const additionalParagraphs = [
    `Over the past year, I've worked on diverse projects ranging from full-stack web applications to AI-powered solutions. I specialize in React for frontend development, Python and Flask for backend, and have experience with PostgreSQL and MongoDB for data persistence. I'm equally comfortable working solo or collaborating with teams.`,
    `Beyond coding, I'm an active member of the developer community. I contribute to open-source projects, solve complex problems on LeetCode, and love sharing my knowledge through GitHub. I believe in writing clean, maintainable code and creating user experiences that genuinely matter. When I'm not coding, you'll find me exploring new technologies, reading about machine learning breakthroughs, or mentoring junior developers.`
  ];

  // ✅ Container variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className={`about ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="about-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div 
            className={`about-container ${darkMode ? 'dark' : 'light'}`}
            ref={containerRef}
          >
            <motion.div className="about-content">
              {/* ✅ Short intro – always visible */}
              <motion.p 
                className="about-intro"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {shortIntro}
              </motion.p>
              
              {/* ✅ Expanded paragraphs with stagger animation */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="expanded-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            </motion.div>

            {/* Read More / Read Less button */}
            <motion.button
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;