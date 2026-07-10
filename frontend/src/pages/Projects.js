import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

const Projects = ({ darkMode }) => {
  // Projects section: Top 3 featured, remaining hidden until "View More" clicked
  // TO MODIFY: Replace projects array with your actual GitHub projects
  // Add image URLs, links, and descriptions for each project

  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce app with payment integration and admin dashboard',
      tech: ['React', 'Flask', 'PostgreSQL', 'Stripe'],
      image: 'https://market-resized.envatousercontent.com/previews/files/804979924/02.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=bdf540bf3fc52cda632d386afbfe538f3ae9ae2b7a04be2d7b2d824c559da55c',
      github: 'https://github.com/yourprofile/ecommerce',
      demo: 'https://project-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'NRCM AttendEase',
      description: 'Full-stack attendance tracker for NRCM students — live portal scraping, skip calculator, day-by-day & period-wise attendance planner with real-time planned percentage updates',
      tech: ['FastAPI', 'PostgreSQL', 'Vanilla JS', 'Python', 'Vercel', 'Render'],
      image: '/images/nrcmattendlogin.png',
      github: 'https://github.com/ChanduVattikulla/nrcm-attendease',
      demo: 'https://nrcmattend.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and notifications',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://imgs.search.brave.com/VxXFVNjxIL5TsAE-YmiAgp5_fnsZTIMd6ZRvQWdV-EM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC8y/MDM1YmYxNzUwMjU1/MDUuWTNKdmNDd3lN/ekF4TERFNE1EQXNO/VEVzTUEuanBn',
      github: 'https://github.com/yourprofile/task-manager',
      demo: 'https://task-manager-demo.com',
      featured: true
    },
     {
      id: 8,
      title: 'AI Chat Assistant',
      description: 'Real-time chat application powered by AI with WebSocket integration',
      tech: ['React', 'Flask', 'WebSocket', 'Python'],
      image: 'https://imgs.search.brave.com/cTEtpfc4GhCBOfoLCRVXM_8Tz1RMn2j6EEETI8JFcAk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE3/OTk0MTA5Ni92ZWN0/b3IvY2hhdGJvdC1h/c3Npc3RhbnQtYXJ0/aWZpY2lhbC1pbnRl/bGxpZ2VuY2UtaGVs/cC1zZXJ2aWNlLWZv/ci1idXNpbmVzcy1k/YXRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1UNG84UVpD/MXdGZ1dvc1ZaU0xr/TC03QzYwV3NZZUI3/clliZmg5UkNYdmxj/PQ',
      github: 'https://github.com/yourprofile/ai-chat',
      demo: 'https://ai-chat-demo.com',
      featured: true
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with forecasts and weather alerts',
      tech: ['React', 'Weather API', 'Charts.js'],
      image: 'https://imgs.search.brave.com/Xxd6fIZD3V7Z29mBipQQHerKLwG5Z_TtqhVNrfu7hzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MjgzNzI3MC9maWxl/L29yaWdpbmFsLTIy/ODE3NTllNjFmZjcz/ZmM2YWM4ZmRhNTg0/YmQ4OGY0LnBuZz9m/b3JtYXQ9d2VicCZy/ZXNpemU9NDAweDMw/MCZ2ZXJ0aWNhbD1j/ZW50ZXI',
      github: 'https://github.com/yourprofile/weather',
      demo: 'https://weather-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Blogging platform with markdown support and user authentication',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://imgs.search.brave.com/K-G0lBHTV4768blHABKrwiSvJVh1MIIWhHNQNLTiEN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVz/ZXJjb250ZW50LW5h/MS5uZXQvaHViLzUz/L2h1YmZzL2Jlc3Ql/MjBibG9nZ2luZyUy/MHBsYXRmb3Jtcywl/MjBqb29tbGEud2Vi/cD93aWR0aD02NTAm/aGVpZ2h0PTM1NSZu/YW1lPWJlc3QlMjBi/bG9nZ2luZyUyMHBs/YXRmb3JtcywlMjBq/b29tbGEud2VicA',
      github: 'https://github.com/yourprofile/blog',
      demo: 'https://blog-demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Platform',
      description: 'Personal portfolio platform with modern design and smooth animations',
      tech: ['React', 'Framer Motion', 'CSS3'],
      image: 'https://imgs.search.brave.com/K-G0lBHTV4768blHABKrwiSvJVh1MIIWhHNQNLTiEN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVz/ZXJjb250ZW50LW5h/MS5uZXQvaHViLzUz/L2h1YmZzL2Jlc3Ql/MjBibG9nZ2luZyUy/MHBsYXRmb3Jtcywl/MjBqb29tbGEud2Vi/cD93aWR0aD02NTAm/aGVpZ2h0PTM1NSZu/YW1lPWJlc3QlMjBi/bG9nZ2luZyUyMHBs/YXRmb3JtcywlMjBq/b29tbGEud2VicA',
      github: 'https://github.com/yourprofile/portfolio',
      demo: 'https://portfolio-demo.com',
      featured: false
    },
    {
      id: 7,
      title: 'Attendance Tracker',
      description: 'Simple attendance tracking application with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://imgs.search.brave.com/K-G0lBHTV4768blHABKrwiSvJVh1MIIWhHNQNLTiEN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVz/ZXJjb250ZW50LW5h/MS5uZXQvaHViLzUz/L2h1YmZzL2Jlc3Ql/MjBibG9nZ2luZyUy/MHBsYXRmb3Jtcywl/MjBqb29tbGEud2Vi/cD93aWR0aD02NTAm/aGVpZ2h0PTM1NSZu/YW1lPWJlc3QlMjBi/bG9nZ2luZyUyMHBs/YXRmb3JtcywlMjBq/b29tbGEud2VicA',
      github: 'https://github.com/yourprofile/attendance-tracker',
      demo: 'https://attendance-tracker-demo.com',
      featured: false
    }
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const carouselRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
// Show only first 3 featured projects in top section
const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);
// All other projects (non-featured + any extra featured beyond first 3) go to carousel
const moreProjects = allProjects.filter(p => !p.featured || !featuredProjects.includes(p));

  const handleCarouselScroll = (direction) => {
    const container = document.querySelector('.carousel');
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const updateActiveDot = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.querySelector('.project-card')?.offsetWidth || 300;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveDot(index);
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className={`projects ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Top 3 Projects in Container */}
        <motion.div 
          className="featured-projects-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        {moreProjects.length > 0 && (
          <motion.div className="view-more-center">
            <motion.button
              className="view-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? '↑ Show Less' : '↓ View More Projects'}
            </motion.button>
          </motion.div>
        )}

        {/* Remaining Projects Carousel (Hidden by default) */}
        <AnimatePresence>
          {isExpanded && moreProjects.length > 0 && (
            <motion.div
              className="more-projects-section"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3>More Projects</h3>

              {/* CAROUSEL WRAPPER with exactly 3 children: left button, carousel, right button */}
              <div className="carousel-wrapper">
                <motion.button
                  className="carousel-btn left"
                  onClick={() => handleCarouselScroll('left')}
                  whileHover={{ scale: 1.1 }}
                >
                  ‹
                </motion.button>

                <div 
                  className="carousel" 
                  ref={carouselRef}
                  onScroll={updateActiveDot}
                >
                  {moreProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>

                <motion.button
                  className="carousel-btn right"
                  onClick={() => handleCarouselScroll('right')}
                  whileHover={{ scale: 1.1 }}
                >
                  ›
                </motion.button>
              </div>

              {/* Progress dots placed OUTSIDE the carousel wrapper */}
              <div className="carousel-progress">
                {moreProjects.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`progress-dot ${activeDot === idx ? 'active' : ''}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;