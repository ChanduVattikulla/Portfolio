import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'devicon/devicon.min.css';
import '../styles/Resume.css';

const Resume = ({ darkMode }) => {
  const resumeUrl = './resume.pdf';
  const [activeTab, setActiveTab] = useState('milestones');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const highlights = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="highlight-svg">
          <path d="M18 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
          <path d="M16 2v4M8 2v4M4 10h16M10 14l2 2 4-4" />
        </svg>
      ),
      title: 'Problem Solver',
      badge: '450+ Solved',
      description: 'Solved 450+ algorithmic problems across LeetCode & competitive programming platforms, focusing on dynamic programming and graph traversal.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="highlight-svg">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: 'Full-Stack Engineering',
      badge: 'Microservices',
      description: 'Engineered production-ready, modular web applications with React, modern backends, and optimized API layers.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="highlight-svg">
          <path d="M17.5 19 9 20l-5-3V5l5 3 8.5-1.5" />
          <path d="M12 2v20" />
          <path d="M17 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      ),
      title: 'AWS Infrastructure',
      badge: 'AWS Certified Badges',
      description: 'Earned official AWS badges validating expertise in cloud computing, serverless architectures, and deployment pipelines.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="highlight-svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Hackathons & AI Agents',
      badge: 'Lyzr API Integration',
      description: 'Collaborated in fast-paced hackathons building autonomous workflow automation using AI agent protocols.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="highlight-svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'AI & ML Internship',
      badge: 'Infosys Springboard',
      description: 'Gained hands-on industry experience building machine learning models, NLP pipelines, and modern AI solution workflows.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="highlight-svg">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
      title: 'Academic Foundation',
      badge: 'B.Tech CS Engineering',
      description: 'Pursuing Computer Science Engineering degree at Narsimha Reddy Engineering College with high technical focus.'
    }
  ];

  const skillGroups = [
    {
      category: 'Frontend & UI Engineering',
      skills: [
        { name: 'React', iconClass: 'devicon-react-original colored' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { name: 'HTML5/CSS3', iconClass: 'devicon-html5-plain colored' },
        { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain colored' },
        { name: 'Framer Motion', iconClass: 'devicon-framermotion-original colored' }
      ]
    },
    {
      category: 'Backend, Logic & Systems',
      skills: [
        { name: 'Java', iconClass: 'devicon-java-plain colored' },
        { name: 'Python', iconClass: 'devicon-python-plain colored' },
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
        { name: 'Express', iconClass: 'devicon-express-original' },
        { name: 'REST APIs', iconClass: 'devicon-fastapi-plain colored' }
      ]
    },
    {
      category: 'Databases, Cloud & Tooling',
      skills: [
        { name: 'Git & GitHub', iconClass: 'devicon-git-plain colored' },
        { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
        { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
        { name: 'AWS', iconClass: 'devicon-amazonwebservices-original colored' }
      ]
    }
  ];

  return (
    <section id="resume" className={`v2026-resume-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="resume-section-wrapper">
        
        {/* HEADER BLOCK */}
        <div className="resume-headline-block">
          <motion.span 
            className="resume-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Engineering Dossier
          </motion.span>
          <motion.h2 
            className="resume-main-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Capabilities & Stack
          </motion.h2>
        </div>

        {/* CONTROLS DOCK: PDF ACTIONS + VIEW TOGGLE */}
        <motion.div 
          className="v2026-action-dock"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="dock-glass-hull">
            <div className="dock-left-meta">
              <span className="live-status-pill"><span className="pulse-dot"></span> Active Resume</span>
              <div className="meta-text-block">
                <span className="file-title">Resume_Chandu_Vattikulla.pdf</span>
                <span className="file-status">Verified Build &bull; Ready for Review</span>
              </div>
            </div>

            <div className="dock-right-controls">
              <button 
                className="dock-btn secondary-preview-btn" 
                onClick={() => setIsPreviewOpen(true)}
              >
                <svg viewBox="0 0 24 24" className="btn-svg-icon"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <span>Quick Preview</span>
              </button>

              <motion.a
                href={resumeUrl}
                download
                className="dock-btn primary-download-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg viewBox="0 0 24 24" className="btn-svg-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                <span>Download PDF</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* PERSPECTIVE NAVIGATION TABS */}
        <div className="view-selector-tabs">
          <button 
            className={`tab-pill-btn ${activeTab === 'milestones' ? 'active' : ''}`}
            onClick={() => setActiveTab('milestones')}
          >
            <span>Core Engineering Highlights</span>
          </button>
          <button 
            className={`tab-pill-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <span>Technical Stack Architecture</span>
          </button>
        </div>

        {/* DYNAMIC CONTENT SWITCHER */}
        <AnimatePresence mode="wait">
          {activeTab === 'milestones' ? (
            <motion.div 
              key="milestones"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bento-matrix-grid"
            >
              {highlights.map((item, index) => (
                <div key={index} className="bento-tile-card">
                  <div className="bento-glow-spotlight"></div>
                  <div className="bento-card-header">
                    <div className="bento-icon-wrapper">{item.icon}</div>
                    <span className="bento-tag-badge">{item.badge}</span>
                  </div>
                  <h3 className="bento-card-heading">{item.title}</h3>
                  <p className="bento-card-desc">{item.description}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="stack-architecture-matrix"
            >
              {skillGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="skill-group-container">
                  <h3 className="group-category-title">{group.category}</h3>
                  <div className="skills-chip-row">
                    {group.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="skill-chip-pill">
                        <i className={`${skill.iconClass} skill-devicon`}></i>
                        <span className="skill-chip-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* INLINE MODAL PREVIEW */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div 
            className="resume-preview-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div 
              className={`resume-preview-modal ${darkMode ? 'dark' : 'light'}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-top-bar">
                <h3>Resume Dossier Preview</h3>
                <button className="modal-close-btn" onClick={() => setIsPreviewOpen(false)}>
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div className="pdf-viewer-frame">
                <iframe src={resumeUrl} title="Resume PDF Preview" width="100%" height="100%"></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;