import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="contact-container">
        <div className="contact-title">
          <h1>Get In Touch</h1>
          <div className="theme-pattern"></div>
        </div>

        <div className="contact-content">
          {/* Info Section */}
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              I'm always excited to work on new projects and collaborate with creative minds. 
              Whether you have a question, a project idea, or just want to say hello, 
              feel free to reach out. I'll get back to you as soon as possible!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><img src={mail_icon} alt="Mail Icon" /></div>
                <div className="contact-text"><h3>Email</h3><p>adarsh.dev@example.com</p></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><img src={call_icon} alt="Call Icon" /></div>
                <div className="contact-text"><h3>Phone</h3><p>+91 1234567890</p></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><img src={location_icon} alt="Location Icon" /></div>
                <div className="contact-text"><h3>Location</h3><p>Patna, Bihar, India</p></div>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" id="name" name="name" placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" id="email" name="email" placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" name="message" placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
            <p className="contact-note">I'll get back to you within 24 hours</p>
          </div>
        </div>
      </div>

      <div className="contact-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
}

export default Contact;
