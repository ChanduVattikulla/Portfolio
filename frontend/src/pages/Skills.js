import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Database, Sparkles, Layers } from 'lucide-react';
import '../styles/Skills.css';
import 'devicon/devicon.min.css';

const Skills = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      id: 'languages',
      title: "Languages & Core",
      icon: <Terminal size={18} />,
      items: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'HTML5/CSS3', icon: 'devicon-html5-plain colored' },
        { name: 'Problem Solving', icon: <span className="emoji-icon">🧩</span> }
      ]
    },
    {
      id: 'frameworks',
      title: "Frameworks & Arch",
      icon: <Cpu size={18} />,
      items: [
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'Flask', icon: 'devicon-flask-original' },
        { name: 'REST APIs', icon: <span className="emoji-icon">🔗</span> }
      ]
    },
    {
      id: 'data',
      title: "Data & Cloud",
      icon: <Database size={18} />,
      items: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
        { name: 'Git & GitHub', icon: 'devicon-github-original' }
      ]
    }
  ];

  const categories = ['All', ...skillCategories.map(cat => cat.title)];

  const displayedSkills = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.title === activeCategory);

  return (
    <section id="skills" className={`skills ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="subtitle-badge">
            <Sparkles size={14} className="sparkle-icon" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <motion.div 
          className="skills-filter-nav"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' && <Layers size={14} />}
              <span>{cat}</span>
              {activeCategory === cat && (
                <motion.div 
                  className="active-indicator" 
                  layoutId="activeSkillTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid layout */}
        <motion.div layout className="skills-bento-grid">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((category) => (
              <motion.div
                layout
                key={category.id}
                className="bento-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="card-header">
                  <div className="category-icon-wrapper">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-tags-container">
                  {category.items.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      className="skill-pill"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <span className="pill-icon">
                        {typeof skill.icon === 'string' ? <i className={skill.icon}></i> : skill.icon}
                      </span>
                      <span className="pill-text">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;