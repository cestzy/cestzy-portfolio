import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync dark class for Tailwind
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`w-full min-h-screen relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-[#111111] text-gray-300' : 'bg-[#ffedf1] text-gray-800'}`}>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="pulse-container">
          <div className="core" />
          <span style={{ '--i': 1 }} />
          <span style={{ '--i': 2 }} />
          <span style={{ '--i': 3 }} />
          <span style={{ '--i': 4 }} />
          <span style={{ '--i': 5 }} />
        </div>
      </div>

      <div className="relative z-10 pt-[80px]">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Home darkMode={darkMode} />
        <About />
        <Skills />
        <Projects />
        <Work />
      </div>

    </div>
  );
}

export default App;