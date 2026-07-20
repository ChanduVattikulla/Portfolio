import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'devicon/devicon.min.css';
import '../styles/Certifications.css';

const Certifications = ({ darkMode }) => {
  const certs = [
    {
      id: 1,
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      image: 'https://imgs.search.brave.com/_rKP3ZgbeQzxznZy8cLocUVYT12V6xRbOdjcEy76ACQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZC1t/YWluc2l0ZS1jZG4u/dHV0b3JpYWxsd29q/by5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTAvQVdT/LUNlcnRpZmllZC1T/b2x1dGlvbnMtQXJj/aGl0ZWN0LVByb2Zl/c3Npb25hbC1qcGcu/d2VicA',
      certImage: 'https://imgs.search.brave.com/_rKP3ZgbeQzxznZy8cLocUVYT12V6xRbOdjcEy76ACQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZC1t/YWluc2l0ZS1jZG4u/dHV0b3JpYWxsd29q/by5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTAvQVdT/LUNlcnRpZmllZC1T/b2x1dGlvbnMtQXJj/aGl0ZWN0LVByb2Zl/c3Npb25hbC1qcGcu/d2VicA',
      verifyLink: 'https://aws.amazon.com/certification',
      issueDate: 'Jan 2024'
    },
    {
      id: 2,
      title: 'Google Cloud Associate',
      issuer: 'Google Cloud',
      image: 'https://imgs.search.brave.com/6IXtGWtQqTeiUu9Q8iyv4LLBTouR8wJEdYQxc0OzNc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGxpbGVhcm4u/Y29tL2ljZTkvY2Vy/dGlmaWNhdGVzL0dv/b2dsZS1DbG91ZC1D/ZXJ0aWZpY2F0aW9u/cy9Hb29nbGVfQXNz/b2NpYXRlX0Nsb3Vk/X0VuZ2luZWVyX1Ry/YWhuaW5nXzA3XzAx/XzIwMjUuanBn',
      certImage: 'https://imgs.search.brave.com/6IXtGWtQqTeiUu9Q8iyv4LLBTouR8wJEdYQxc0OzNc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGxpbGVhcm4u/Y29tL2ljZTkvY2Vy/dGlmaWNhdGVzL0dv/b2dsZS1DbG91ZC1D/ZXJ0aWZpY2F0aW9u/cy9Hb29nbGVfQXNz/b2NpYXRlX0Nsb3Vk/X0VuZ2luZWVyX1Ry/YWhuaW5nXzA3XzAx/XzIwMjUuanBn',
      verifyLink: 'https://cloud.google.com/certification',
      issueDate: 'Dec 2023'
    },
    {
      id: 3,
      title: 'React Developer Certified',
      issuer: 'Udemy',
      image: 'https://imgs.search.brave.com/3VAPj4K2Uw44fjNXp7fv7F0AmdPNNgGskk6qpkaIB90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JvbWFjYW1wdXMu/Y29tL3B1YmxpYy9p/bWcvQ2VydGlmaWNhdGUtbmV3LWZpbGUu/d2VicA',
      certImage: 'https://imgs.search.brave.com/3VAPj4K2Uw44fjNXp7fv7F0AmdPNNgGskk6qpkaIB90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JvbWFjYW1wdXMu/Y29tL3B1YmxpYy9p/bWcvQ2VydGlmaWNhdGUtbmV3LWZpbGUu/d2VicA',
      verifyLink: 'https://udemy.com/certificate',
      issueDate: 'Nov 2023'
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      issuer: 'Coursera',
      image: 'https://imgs.search.brave.com/BpRrTcUZ2HA1EOy50heT4ZxPhZmy-VXfpsiLMSZ-vTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ueHR3/YXZlLmltZ2l4Lm5l/dC9jY2JwLXdlYnNp/dGUvQmxvZ3MvaG9t/ZS9iZXN0LWZ1bGwt/c3RhY2stZGV2ZWxv/cGVyLWNvdXJzZXMu/c3ZnP2F1dG89Zm9y/bWF0LGNvbXByZXNz/JnE9ODA',
      certImage: 'https://imgs.search.brave.com/BpRrTcUZ2HA1EOy50heT4ZxPhZmy-VXfpsiLMSZ-vTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ueHR3/YXZlLmltZ2l4Lm5l/dC9jY2JwLXdlYnNp/dGUvQmxvZ3MvaG9t/ZS9iZXN0LWZ1bGwt/c3RhY2stZGV2ZWxv/cGVyLWNvdXJzZXMu/c3ZnP2F1dG89Zm9y/bWF0LGNvbXByZXNz/JnE9ODA',
      verifyLink: 'https://coursera.org/certificate',
      issueDate: 'Oct 2023'
    },
    {
      id: 5,
      title: 'Python Expert',
      issuer: 'DataCamp',
      image: 'https://via.placeholder.com/200x200?text=Python',
      certImage: 'https://via.placeholder.com/600x400?text=Python+Certificate',
      verifyLink: 'https://datacamp.com/certificate',
      issueDate: 'Sep 2023'
    },
    {
      id: 6,
      title: 'JavaScript Mastery',
      issuer: 'Codecademy',
      image: 'https://via.placeholder.com/200x200?text=JavaScript',
      certImage: 'https://via.placeholder.com/600x400?text=JavaScript+Certificate',
      verifyLink: 'https://codecademy.com/certificate',
      issueDate: 'Aug 2023'
    },
    {
      id: 7,
      title: 'Database Design',
      issuer: 'LinkedIn Learning',
      image: 'https://via.placeholder.com/200x200?text=Database',
      certImage: 'https://via.placeholder.com/600x400?text=Database+Certificate',
      verifyLink: 'https://linkedin.com/learning',
      issueDate: 'Jul 2023'
    },
    {
      id: 8,
      title: 'Web Development',
      issuer: 'FreeCodeCamp',
      image: 'https://via.placeholder.com/200x200?text=WebDev',
      certImage: 'https://via.placeholder.com/600x400?text=WebDev+Certificate',
      verifyLink: 'https://freecodecamp.org',
      issueDate: 'Jun 2023'
    },
    {
      id: 9,
      title: 'Git & GitHub',
      issuer: 'Udacity',
      image: 'https://via.placeholder.com/200x200?text=Git',
      certImage: 'https://via.placeholder.com/600x400?text=Git+Certificate',
      verifyLink: 'https://udacity.com',
      issueDate: 'May 2023'
    },
    {
      id: 10,
      title: 'REST APIs',
      issuer: 'Postman Learning',
      image: 'https://via.placeholder.com/200x200?text=REST',
      certImage: 'https://via.placeholder.com/600x400?text=REST+Certificate',
      verifyLink: 'https://postman.com/learning',
      issueDate: 'Apr 2023'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [wheelDeltaX, setWheelDeltaX] = useState(0);
  const [direction, setDirection] = useState(0); // -1: Left, 1: Right
  
  // New state to manage auto-scroll pausing
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certs.length);
  }, [certs.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certs.length) % certs.length);
  }, [certs.length]);

  // AUTO-PLAY ENGINE
  useEffect(() => {
    // Don't auto-scroll if modal is open or user is hovering
    if (isAutoPlayPaused || selectedCert) return;

    const autoPlayInterval = setInterval(() => {
      handleNext();
    }, 3500); // Transitions every 3.5 seconds

    return () => clearInterval(autoPlayInterval);
  }, [isAutoPlayPaused, selectedCert, handleNext]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const getVisibleCerts = () => {
    const prev = (currentIndex - 1 + certs.length) % certs.length;
    const curr = currentIndex;
    const next = (currentIndex + 1) % certs.length;
    return { prev: certs[prev], curr: certs[curr], next: certs[next] };
  };

  const { prev, curr, next } = getVisibleCerts();

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    const minSwipeDistance = 50;
    if (touchStart - touchEnd > minSwipeDistance) {
      handleNext();
    } else if (touchEnd - touchStart > minSwipeDistance) {
      handlePrev();
    }
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      const newDelta = wheelDeltaX + e.deltaX;
      const threshold = 50; 
      if (Math.abs(newDelta) >= threshold) {
        if (newDelta > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        setWheelDeltaX(0);
      } else {
        setWheelDeltaX(newDelta);
      }
    } else {
      setWheelDeltaX(0);
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section id="certifications" className={`premium-cert-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="cert-section-wrapper">
        
        <div className="cert-headline-block">
          <motion.span 
            className="cert-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.span>
          <motion.h2 
            className="cert-main-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Verified Skills & Credentials
          </motion.h2>
        </div>

        {/* GALLERY STAGE WITH HOVER PAUSE LISTENERS */}
        <motion.div
          className="premium-gallery-outer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsAutoPlayPaused(true)}
          onMouseLeave={() => setIsAutoPlayPaused(false)}
        >
          <div 
            className="premium-gallery-stage"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            {/* Left Preview */}
            <div className="gallery-wing side-left" onClick={handlePrev} title="Previous Certificate">
              <div className="wing-glass-shield"></div>
              <img src={prev.image} alt={prev.title} loading="lazy" />
            </div>

            {/* Active Core Badge */}
            <div className="gallery-spotlight-housing">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div 
                  key={curr.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="spotlight-badge-frame"
                  onClick={() => setSelectedCert(curr)}
                >
                  <div className="spotlight-glow-layer"></div>
                  <img src={curr.image} alt={curr.title} loading="lazy" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Preview */}
            <div className="gallery-wing side-right" onClick={handleNext} title="Next Certificate">
              <div className="wing-glass-shield"></div>
              <img src={next.image} alt={next.title} loading="lazy" />
            </div>
          </div>

          {/* ACTIVE CERTIFICATE INFO */}
          <div className="cert-identity-rail">
            <AnimatePresence mode="wait">
              <motion.div 
                key={curr.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="identity-meta-content"
              >
                <h3>{curr.title}</h3>
                <p>{curr.issuer} &bull; {curr.issueDate}</p>
              </motion.div>
            </AnimatePresence>

            <div className="cert-interactive-actions">
              <motion.button
                className="premium-verify-trigger"
                onClick={() => setSelectedCert(curr)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg viewBox="0 0 24 24" className="action-svg-icon"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <span>View Certificate</span>
              </motion.button>
              
              <a href={curr.verifyLink} target="_blank" rel="noopener noreferrer" className="premium-verify-anchor">
                <span>Verify Credential</span>
                <svg viewBox="0 0 24 24" className="arrow-svg-icon"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>

            {/* Pagination Progress */}
            <div className="premium-pagination-track">
              <div className="pagination-bar-wrapper">
                <div 
                  className="pagination-fill-gauge" 
                  style={{ width: `${((currentIndex + 1) / certs.length) * 100}%` }}
                ></div>
              </div>
              <span className="pagination-counter-label">{currentIndex + 1} / {certs.length}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULL CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="premium-cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className={`premium-modal-lightbox ${darkMode ? 'dark' : 'light'}`}
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-dismiss-trigger" onClick={() => setSelectedCert(null)} aria-label="Close modal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              
              <div className="lightbox-image-housing">
                <img src={selectedCert.certImage} alt={selectedCert.title} className="lightbox-core-img" loading="lazy" />
              </div>
              
              <div className="lightbox-meta-footer">
                <h3>{selectedCert.title}</h3>
                <p>Issued by {selectedCert.issuer} ({selectedCert.issueDate})</p>
                <a 
                  href={selectedCert.verifyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="lightbox-route-trigger"
                >
                  <span>Verify Online Credential</span>
                  <svg viewBox="0 0 24 24" className="arrow-svg-icon"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;