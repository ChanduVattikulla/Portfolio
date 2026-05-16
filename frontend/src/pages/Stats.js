import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Stats.css';
const Stats = ({ darkMode }) => {
  // Statistics section showing real achievements
  // TO MODIFY: Update the target values below with your actual numbers
  // These will automatically animate when scrolled into view
  
  const [stats, setStats] = useState([
    { 
      label: 'LeetCode Problems',
      target: 450,  // Change this to your actual LeetCode solved problems
      current: 0,
      link: 'https://leetcode.com/yourprofile'  // Update with your profile
    },
    { 
      label: 'GitHub Repositories',
      target: 8,    // Change to your actual repo count
      current: 0,
      link: 'https://github.com/yourprofile'  // Update with your profile
    },
    { 
      label: 'Certifications',
      target: 12,   // Change to your actual cert count
      current: 0,
      link: '#certifications'  // Links to certifications section
    },
    { 
      label: 'Internships',
      target: 2,    // Change to your actual internship count
      current: 0,
      link: '#experience'  // Links to experience section
    },
  ]);

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          current: Math.min(stat.current + Math.ceil(stat.target / 25), stat.target)
        }))
      );
    }, 40);

    return () => clearInterval(interval);
  }, [shouldAnimate]);

  return (
    <section id="stats" className={`stats ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, onViewEnter: () => setShouldAnimate(true) }}
        >
          By The Numbers
        </motion.h2>

        <motion.p 
          className="stats-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Real achievements backed by real work
        </motion.p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.a
              key={index}
              href={stat.link}
              className="stat-card-link"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.08, y: -5 }}
              >
                <div className="stat-value">{stat.current}+</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;