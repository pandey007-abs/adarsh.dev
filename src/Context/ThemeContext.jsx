import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Always default to light mode unless user explicitly saved dark
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // true if "dark", otherwise false (light)
  });

  useEffect(() => {
    // Apply the correct class to body
    document.body.classList.toggle('dark-mode', darkMode);
    // Save preference to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);
