import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/adarsh-logo-f.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo-container">
          <img src={logo} alt="Adarsh.dev Logo" className="logo" />
        </a>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About Me</a></li>
            <li><a href="#Services" className="nav-link" onClick={closeMenu}>Services</a></li>
            <li><a href="#mywork" className="nav-link" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="#Contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className="nav-actions">
            <ThemeToggle />
            <a href="#Contact" className="nav-connect" onClick={closeMenu}>Connect With Me</a>
          </div>
        </div>
      </div>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
    </nav>
  );
};

export default Navbar;