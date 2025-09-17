import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Toaster } from 'react-hot-toast'; // Import Toaster
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isVisible, scrollToTop } = useScrollToTop();
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
        </div>
      </div>
    );
  }
  
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <MyWork />
          <Contact />
        </main>
        <Footer />
        <div 
          className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
          </svg>
        </div>
        <Toaster position="top-right" /> {/* Add Toaster component */}
      </div>
    </ThemeProvider>
  );
};

export default App;