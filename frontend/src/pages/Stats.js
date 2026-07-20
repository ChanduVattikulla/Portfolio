import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, GitFork, Award, Briefcase, ExternalLink, ArrowUpRight } from 'lucide-react';
import '../styles/Stats.css';

const Stats = ({ darkMode }) => {
  const [stats, setStats] = useState([
    {
      id: 'leetcode',
      label: 'LeetCode Problems',
      target: 50,
      current: 0,
      icon: Code2,
      badge: 'Problem Solving',
      link: 'https://leetcode.com/u/ChanduVattikulla/',
      actionText: 'View Profile'
    },
    {
      id: 'github',
      label: 'GitHub Repositories',
      target: 8,
      current: 0,
      icon: GitFork,
      badge: 'Open Source',
      link: 'https://github.com/ChanduVattikulla',
      actionText: 'Browse Code'
    },
    {
      id: 'skills',
      label: 'Skills Certified',
      target: 12,
      current: 0,
      icon: Award,
      badge: 'Verified Tech',
      link: '#skills',
      actionText: 'View Credentials'
    },
    {
      id: 'internships',
      label: 'Internships & Projects',
      target: 3,
      current: 0,
      icon: Briefcase,
      badge: 'Industry Practice',
      link: '#experience',
      actionText: 'Explore Roles'
    },
  ]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          current: Math.min(stat.current + Math.ceil(stat.target / 30), stat.target)
        }))
      );
    }, 35);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="stats" 
      className={`stats-section ${darkMode ? 'dark' : 'light'}`}
    >
      <div className="stats-container">
        {/* Section Header */}
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="stats-pill">
            <span className="pulse-indicator"></span>
            <span>Real-Time Highlights</span>
          </div>
          <h2 className="stats-title">Impact & Proof Work</h2>
        </motion.div>

        {/* Modern 2026 Cards Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const progressPercent = Math.round((stat.current / stat.target) * 100);

            return (
              <motion.a
                key={stat.id}
                href={stat.link}
                className="stat-card-wrapper"
                {...(stat.link.startsWith('#') 
                  ? {} 
                  : { target: "_blank", rel: "noopener noreferrer" })}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`stat-card ${stat.current === stat.target ? 'is-complete' : ''}`}>
                  {/* Top Ambient Glow */}
                  <div className="glow-aura" />

                  {/* Header Row: Icon + Badge */}
                  <div className="card-top-row">
                    <div className="icon-box">
                      <IconComponent size={20} />
                    </div>
                    <span className="category-badge">{stat.badge}</span>
                  </div>

                  {/* Stat Value & Counter */}
                  <div className="stat-value-container">
                    <span className="stat-number">
                      {new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(stat.current)}
                    </span>
                    <span className="stat-plus">+</span>
                  </div>

                  {/* Label */}
                  <div className="stat-label">{stat.label}</div>

                  {/* Dynamic Progress Fill Bar */}
                  <div className="progress-bar-track">
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  {/* Card Footer Link Hint */}
                  <div className="card-footer-action">
                    <span>{stat.actionText}</span>
                    {stat.link.startsWith('#') ? (
                      <ArrowUpRight size={14} className="action-icon" />
                    ) : (
                      <ExternalLink size={14} className="action-icon" />
                    )}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;