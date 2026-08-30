import React from 'react';
import { techCardsItems } from '@/lib/constants';

const Skills = () => {
  return (
    <div id='skills' name='skills' className='w-full min-h-screen py-20 bg-transparent text-neutral-900 dark:text-neutral-300'>
      {/* Container */}
      <div className='max-w-5xl mx-auto px-6 sm:px-8 flex flex-col justify-center w-full h-full'>
        
        {/* SECTION HEADER */}
        <div className='mb-10'>
          <h2 className='text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-3 inline-block border-b-4 border-pink-600 pb-1'>
            Technologies
          </h2>
          <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-medium'>
            Tools, Frameworks, and Languages I work with regularly
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
          {techCardsItems.map((tech, index) => (
            <div 
              key={index} 
              className={`group flex items-center p-3 rounded-2xl bg-[#ebdde0] dark:bg-[#212224] border border-neutral-200/80 dark:border-neutral-800/80 hover:bg-white dark:hover:bg-[#28292c] hover:shadow-[0_4px_20px_rgba(236,72,153,0.15)] hover:scale-[1.03] transition-all duration-300 cursor-pointer backdrop-blur-md ${tech.bgColor || ''}`}
            >
              {/* ICON CONTAINER */}
              <div className='w-11 h-11 flex-shrink-0 flex items-center justify-center p-2 mr-3.5 rounded-xl bg-white dark:bg-[#3f3f40] border border-neutral-200/60 dark:border-neutral-700/50 shadow-sm hover:bg-white-600'>
                <img className='w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110' src={tech.imageUrl} alt={`${tech.name} icon`} />
              </div>

              {/* TECH INFO */}
              <div className='flex flex-col'>
                <span className='font-bold text-neutral-900 dark:text-white text-sm group-hover:text-pink-600 dark:group-hover:text-white transition-colors duration-150'>
                  {tech.name}
                </span>
                <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium group-hover:text-black dark:group-hover:text-pink-400'>
                  {tech.description}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;