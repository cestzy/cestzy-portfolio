import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import LightLogo from '../assets/logos/light.svg';
import DarkLogo from '../assets/logos/dark.svg';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [nav, setNav] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const brandTexts = ["cestzyrus", "@cestzy"];

  // Rotating brand text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % brandTexts.length);
        setFade(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, [brandTexts.length]);

  const handleClick = () => setNav(!nav);

  return (
    <nav className={`fixed top-0 left-0 w-full h-[80px] z-50 backdrop-blur-md transition-colors duration-300 ${darkMode ? 'bg-[#111111]/85 text-gray-300 border-b border-gray-800/50' : 'bg-white/85 text-gray-800 border-b border-gray-200/80'}`}>
      {/* Centered Inner Container */}
      <div className="max-w-5xl mx-auto h-full flex justify-between items-center px-6 sm:px-8">
        
        {/* BRAND / ROTATING LOGO */}
        <div>
          <a href="#home" className="text-xl font-bold tracking-wider cursor-pointer flex items-center">
            <span className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {brandTexts[textIndex]}
            </span>
            <span className="text-pink-500 ml-0.5">.</span>
          </a>
        </div>

        {/* DESKTOP MENU & THEME TOGGLE */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 font-medium text-sm">
            <li><a href="#home" className="hover:text-pink-500 transition-colors">Home</a></li>
            <li><a href="#work" className="hover:text-pink-500 transition-colors">Work</a></li>
            <li><a href="#about" className="hover:text-pink-500 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a></li>
          </ul>

          {/* THEME TOGGLE BUTTON */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`relative group flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer overflow-hidden ${darkMode ? 'border-gray-700 bg-[#1c1c1e] hover:border-pink-500' : 'border-gray-300 bg-gray-100 hover:border-pink-500'}`}
          >
            <span className='absolute inset-0 bg-pink-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out'></span>
            <img 
              src={darkMode ? LightLogo : DarkLogo} 
              alt="Theme Toggle Icon" 
              className='w-5 h-5 relative z-10 transition-colors transition-transform duration-300 group-hover:rotate-45' 
            />
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`relative group flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 cursor-pointer overflow-hidden ${darkMode ? 'border-gray-700 bg-[#1c1c1e]' : 'border-gray-300 bg-gray-100'}`}
          >
            <img 
              src={darkMode ? LightLogo : DarkLogo} 
              alt="Theme Toggle Icon" 
              className='w-4 h-4 relative z-10' 
            />
          </button>

          <div onClick={handleClick} className="z-10 cursor-pointer">
            {!nav ? <HiMenu size={24} /> : <HiX size={24} />}
          </div>
        </div>

      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`md:hidden absolute top-[80px] left-0 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center transition-all duration-300 ${nav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} ${darkMode ? 'bg-[#111111]' : 'bg-white'}`}>
        <ul className="flex flex-col items-center space-y-8 text-2xl font-bold">
          <li onClick={handleClick}><a href="#home" className="hover:text-pink-500">Home</a></li>
          <li onClick={handleClick}><a href="#work" className="hover:text-pink-500">Work</a></li>
          <li onClick={handleClick}><a href="#about" className="hover:text-pink-500">About</a></li>
          <li onClick={handleClick}><a href="#projects" className="hover:text-pink-500">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;