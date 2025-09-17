import React, { useState } from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  
  return (
    <section className="services" id="Services">
      <div className="services-container">
        <div className="services-header">
          <h1>My Services</h1>
          <p>Specialized solutions to bring your digital vision to life</p>
        </div>
        
        <div className="services-grid">
          {Services_Data.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-number">{service.s_no}</div>
              <div className="service-content">
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="service-readmore">
                  <span>Read More</span>
                  <img 
                    src={arrow_icon} 
                    alt="Arrow icon" 
                    className={`arrow-icon ${hoveredService === index ? 'active' : ''}`}
                  />
                </div>
              </div>
              <div className="service-decoration"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="services-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Services;