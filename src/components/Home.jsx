import React from 'react';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import { Link } from 'react-scroll';

import LocationIcon from '../assets/logos/location.svg';
import EmailIcon from '../assets/logos/email.svg';
import GithubIcon from '../assets/logos/github.svg';
import LinkedinIcon from '../assets/logos/linkedin.svg';

const Home = ({ darkMode = true }) => {
  return (
    <div id='home' name='home' className='w-full min-h-screen flex flex-col justify-center'>
      <div className='max-w-5xl mx-auto px-6 sm:px-8 flex flex-col justify-center h-full -mt-12 sm:-mt-20'>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-150'>
          Cestzyrus Taggueg
        </h1>

        <div className='flex items-center gap-2 pt-5 text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-colors duration-150'>
          <img 
            src={LocationIcon} 
            alt='Location' 
            className={`w-4 h-4 object-contain transition-all ${darkMode ? 'brightness-0 invert' : 'brightness-0'}`} 
          />
          <span>Philippines</span>
          <span className='text-gray-400 dark:text-gray-600'>•</span>
          <span className='italic'>BS Computer Science, Isabela State University</span>
        </div>

        <h2 className='text-lg sm:text-2xl font-bold text-gray-700 dark:text-gray-300 tracking-wide transition-colors duration-150'>
          FULL-STACK WEB DEVELOPER
        </h2>
        <span className='italic'>Open for work</span>

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2 max-w-[700px]'>
          <div className='flex items-center gap-5'>
            <a 
              href='mailto:cestzyruss@gmail.com' 
              className='hover:opacity-80 transition-opacity'
              aria-label='Email'
            >
              <img 
                src={EmailIcon} 
                alt='Email' 
                className={`w-6 h-6 object-contain transition-all ${darkMode ? 'brightness-0 invert' : 'brightness-0'}`} 
              />
            </a>
            <a 
              href='https://www.linkedin.com/in/cestzyrus' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='hover:opacity-80 transition-opacity'
              aria-label='LinkedIn'
            >
              <img 
                src={LinkedinIcon} 
                alt='LinkedIn' 
                className={`w-6 h-6 object-contain transition-all ${darkMode ? 'brightness-0 invert' : 'brightness-0'}`} 
              />
            </a>
            <a 
              href='https://github.com/cestzy' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='hover:opacity-80 transition-opacity'
              aria-label='GitHub'
            >
              <img 
                src={GithubIcon} 
                alt='GitHub' 
                className={`w-6 h-6 object-contain transition-all ${darkMode ? 'brightness-0 invert' : 'brightness-0'}`} 
              />
            </a>
            
          </div>

          <div className='flex items-center gap-4'>
            
            {/* View Work Button */}
            <Link to='work' smooth={true} duration={500}>
              <button className='text-gray-900 dark:text-white group border-3 border-gray dark:border-gray-700 hover:border-pink-600 dark:hover:border-pink-600 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 px-6 py-3 flex items-center gap-2 rounded-full hover:scale-105 cursor-pointer transition-all duration-150'>
                <span>View Work</span>
                <HiArrowNarrowRight className='group-hover:rotate-90 transition-transform duration-300' />
              </button>
            </Link>

            {/* Resume Download Button */}
            <a 
              href="/CV_TAGGUEG_v1.pdf" 
              download="CV_TAGGUEG_v1.pdf"
              className='text-gray-900 dark:text-white group border-3 border-gray dark:border-gray-700 hover:border-pink-600 dark:hover:border-pink-600 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 px-6 py-3 flex items-center gap-2 rounded-full hover:scale-105 cursor-pointer transition-all duration-150'
            >
              <span>Resume</span>
              <HiDownload size={16} />
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;