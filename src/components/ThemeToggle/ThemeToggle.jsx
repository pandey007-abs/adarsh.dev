import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle-slider">
        <div className={`theme-toggle-icon ${darkMode ? 'moon' : 'sun'}`}>
          {darkMode ? '🌙' : '☀️'}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;