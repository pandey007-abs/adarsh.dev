import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './MyWork.css';
import arrow_icon from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const initialProjectsCount = 3;

  // Expand projects automatically if coming from email (#mywork in URL)
  useEffect(() => {
    if (window.location.hash === "#mywork") {
      setShowAll(true);
    }
  }, []);

  // Projects to show
  const visibleProjects = showAll 
    ? mywork_data 
    : mywork_data.slice(0, initialProjectsCount);

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="mywork" id="mywork">
      <div className="mywork-container">
        {/* Header */}
        <motion.div 
          className="mywork-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>My Portfolio</h1>
          <p>Explore my latest projects and creative work</p>
        </motion.div>
        
        {/* Grid of projects */}
        <div className="mywork-grid">
          {visibleProjects.map((work, index) => (
            <motion.div 
              key={work.w_no}
              className="project-card"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="project-image-container">
                <img 
                  src={work.w_img} 
                  alt={work.w_name || `Project ${work.w_no}`} 
                  className="project-image"
                />
                <motion.div 
                  className={`project-overlay ${hoveredProject === index ? 'active' : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-details">
                    <h3>{work.w_name || `Project ${work.w_no}`}</h3>
                    <p>Web design project showcasing modern techniques</p>
                    <div className="project-links">
                      <a  
                        href={work.w_link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Show More / Show Less Button */}
        {mywork_data.length > initialProjectsCount && (
          <motion.div 
            className="mywork-showmore"
            onClick={toggleShowMore}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span>{showAll ? 'Show Less' : 'Show More'}</span>
            <img 
              src={arrow_icon} 
              alt="Arrow icon" 
              className={`arrow-icon ${showAll ? 'rotated' : ''}`}
            />
          </motion.div>
        )}
      </div>
      
      {/* Decorative Shapes */}
      <div className="mywork-shapes">
        <motion.div 
          className="shape shape-1"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div 
          className="shape shape-2"
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div 
          className="shape shape-3"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
      </div>
    </section>
  );
};

export default MyWork;
