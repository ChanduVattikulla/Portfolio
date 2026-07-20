import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, ChevronDown, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = ({ darkMode }) => {
  const allProjects = [
    {
      id: 1,
      title: 'NRCM AttendEase',
      description: 'Full-stack attendance tracker for NRCM students — live portal scraping, skip calculator, day-by-day & period-wise attendance planner with real-time planned percentage updates',
      tech: ['FastAPI', 'PostgreSQL', 'Vanilla JS', 'Python', 'Vercel', 'Render'],
      image: '/images/nrcmattendlogin.png',
      github: 'https://github.com/ChanduVattikulla/nrcm-attendease',
      demo: 'https://nrcmattend.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Platform',
      description: 'Personal portfolio platform with modern design and smooth animations',
      tech: ['React', 'Framer Motion', 'CSS3'],
      image: '/images/personalportfolio.png',
      github: 'https://github.com/ChanduVattikulla/Portfolio',
      demo: 'https://chanduvattikulla.netlify.app/',
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce app with payment integration and admin dashboard',
      tech: ['React', 'Flask', 'PostgreSQL', 'Stripe'],
      image: 'https://market-resized.envatousercontent.com/previews/files/804979924/02.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=bdf540bf3fc52cda632d386afbfe538f3ae9ae2b7a04be2d7b2d824c559da55c',
      github: 'https://github.com/yourprofile/ecommerce',
      demo: 'https://project-demo.com',
      featured: true
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and notifications',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://imgs.search.brave.com/VxXFVNjxIL5TsAE-YmiAgp5_fnsZTIMd6ZRvQWdV-EM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC8y/MDM1YmYxNzUwMjU1/MDUuWTNKdmNDd3lN/ekF4TERFNE1EQXNO/VEVzTUEuanBn',
      github: 'https://github.com/yourprofile/task-manager',
      demo: 'https://task-manager-demo.com',
      featured: false
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
      image: 'https://imgs.search.brave.com/K-G0lBHTV4768blHABKrwiSvJVh1MIIWhHNQNLTiEN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVzZXJjb250ZW50LW5h/MS5uZXQvaHViLzUz/L2h1YmZzL2Jlc3Ql/MjBibG9nZ2luZyUy/MHBsYXRmb3Jtcywl/MjBqb29tbGEud2Vi/cD93aWR0aD02NTAm/aGVpZ2h0PTM1NSZu/YW1lPWJlc3QlMjBi/bG9nZ2luZyUyMHBs/YXRmb3JtcywlMjBq/b29tbGEud2VicA',
      github: 'https://github.com/yourprofile/blog',
      demo: 'https://blog-demo.com',
      featured: false
    },
    {
      id: 7,
      title: 'Attendance Tracker',
      description: 'Simple attendance tracking application with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://imgs.search.brave.com/K-G0lBHTV4768blHABKrwiSvJVh1MIIWhHNQNLTiEN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVzZXJjb250ZW50LW5h/MS5uZXQvaHViLzUz/L2h1YmZzL2Jlc3Ql/MjBibG9nZ2luZyUy/MHBsYXRmb3Jtcywl/MjBqb29tbGEud2Vi/cD93aWR0aD02NTAm/aGVpZ2h0PTM1NSZu/YW1lPWJlc3QlMjBi/bG9nZ2luZyUyMHBs/YXRmb3JtcywlMjBq/b29tbGEud2VicA',
      github: 'https://github.com/yourprofile/attendance-tracker',
      demo: 'https://attendance-tracker-demo.com',
      featured: false
    }
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const carouselRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);
  const moreProjects = allProjects.filter(p => !p.featured || !featuredProjects.includes(p));

  const handleCarouselScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 360;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const updateActiveDot = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.querySelector('.project-card')?.offsetWidth || 320;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveDot(index);
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="image-overlay"></div>
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
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-github">
            <FaGithub size={16} />
            <span>Code</span>
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-demo">
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className={`projects ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="subtitle-badge">
            <FolderGit2 size={14} />
            <span>My Creative Space</span>
          </div>
          <h2 className="section-title">Featured Engineering Works</h2>
        </motion.div>

        {/* Top 3 Featured Grid */}
        <div className="featured-projects-wrapper">
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Action Toggle Button */}
        {moreProjects.length > 0 && (
          <div className="view-more-center">
            <motion.button
              className={`view-more-btn ${isExpanded ? 'active' : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{isExpanded ? 'Collapse Archive' : 'Explore Full Archive'}</span>
              <ChevronDown className="arrow-icon" size={18} />
            </motion.button>
          </div>
        )}

        {/* Hidden Carousel Section */}
        <AnimatePresence>
          {isExpanded && moreProjects.length > 0 && (
            <motion.div
              className="more-projects-section"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 className="archive-title">Supplemental Projects</h3>

              <div className="carousel-wrapper">
                <button
                  className="carousel-btn left"
                  onClick={() => handleCarouselScroll('left')}
                  aria-label="Scroll Left"
                >
                  <ChevronLeft size={20} />
                </button>

                <div 
                  className="carousel" 
                  ref={carouselRef}
                  onScroll={updateActiveDot}
                >
                  {moreProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>

                <button
                  className="carousel-btn right"
                  onClick={() => handleCarouselScroll('right')}
                  aria-label="Scroll Right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="carousel-progress">
                {moreProjects.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`progress-dot ${activeDot === idx ? 'active' : ''}`}
                    onClick={() => {
                      const cardWidth = carouselRef.current?.querySelector('.project-card')?.offsetWidth || 320;
                      carouselRef.current?.scrollTo({ left: idx * (cardWidth + 24), behavior: 'smooth' });
                    }}
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