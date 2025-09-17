import React from 'react';
import './Footer.css';
import logo from '../../assets/adarsh-logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Services', url: '#services' },
    { name: 'Portfolio', url: '#portfolio' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <footer className="footer" id="Footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-logo-container">
              <img src={logo} alt="Company Logo" className="footer-logo" />
            </div>
            <p className="footer-description">
              I'm a passionate frontend developer based in Patna, Bihar,
              specializing in creating modern, responsive web experiences with
              React and modern CSS frameworks.
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <div className={`social-icon ${social.icon}`}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            {/* Newsletter (UI only) */}
            <div className="newsletter-section">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-description">
                Subscribe to my newsletter for the latest updates and projects.
              </p>

              <div className="footer-email-form">
                <div className="footer-email-input">
                  <img src={user_icon} alt="" aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    disabled
                  />
                </div>
                <button type="button" className="footer-subscribe" disabled>
                  Subscribe
                </button>
              </div>
              <p className="subscription-note">
                (Newsletter coming soon — no backend yet)
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-links-section">
              <h3 className="footer-links-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-text">
            © {currentYear} Adarsh Kumar. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
