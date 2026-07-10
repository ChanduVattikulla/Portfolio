import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/Stats.css';

const Stats = ({ darkMode }) => {
  const [stats, setStats] = useState([
    { 
      label: 'LeetCode Problems',
      target: 50,
      current: 0,
      link: 'https://leetcode.com/u/ChanduVattikulla/'
    },
    { 
      label: 'GitHub Repositories',
      target: 8,
      current: 0,
      link: 'https://github.com/ChanduVattikulla'
    },
    { 
      label: 'Certifications',
      target: 12,
      current: 0,
      link: '#certifications'
    },
    { 
      label: 'Internships',
      target: 3,
      current: 0,
      link: '#experience'
    },
  ]);

  // 👇 attach a ref to the section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          current: Math.min(stat.current + Math.ceil(stat.target / 25), stat.target)
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="stats" 
      className={`stats ${darkMode ? 'dark' : 'light'}`}
    >
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
  {...(stat.link.startsWith('#') 
      ? {} 
      : { target: "_blank", rel: "noopener noreferrer" })}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: index * 0.2 }}
  viewport={{ once: true }}
>

              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.08, y: -5 }}
              >
                <motion.div 
  className="stat-value"
  animate={stat.current === stat.target ? { scale: [1, 1.2, 1] } : {}}
  transition={{ duration: 0.8 }}
>
  {new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(stat.current)}+
</motion.div>

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
