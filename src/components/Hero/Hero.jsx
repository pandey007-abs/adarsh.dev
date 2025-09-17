import React from 'react';
import './Hero.css';
import adarsh_img from '../../assets/adarsh_img.jpg';
import resume from '../../assets/resume.pdf'; // ✅ imported properly

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={adarsh_img} alt="Adarsh Kumar Pandey" className='p_img' />
          <div className="hero-badge">2+ Years Experience</div>
        </div>
        
        <div className="hero-text">
          <div className="hero-greeting">
            <span>Hi, I'm</span>
          </div>
          <h1>
            <span className="hero-name">Adarsh Kumar Pandey</span>
            <span className="hero-title">Frontend Developer</span>
          </h1>
          <p>
            Based in Patna, Bihar, I specialize in crafting engaging, responsive, and user-friendly web interfaces with modern technologies.
          </p>
          
          <div className="hero-action">
            <a href="#Contact" className="hero-con">Contact Me</a>
            {/* ✅ use imported resume */}
            <a href={resume} className="hero-res" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default Hero;
