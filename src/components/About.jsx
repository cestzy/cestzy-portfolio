import React from 'react';

const About = () => {
  return (
    <div id='about' name='about' className='max-w-5xl mx-auto w-full min-h-screen py-20 flex flex-col justify-center'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='w-full grid grid-cols-2 gap-8 px-4 mb-8'>
          <div className='sm:text-right pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-900 dark:text-white transition-colors duration-150'>
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className='w-full grid sm:grid-cols-2 gap-8 px-4 items-baseline'>
          <div className='sm:text-right text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-150'>
            <p>Hi. I'm Cestzyrus Taggueg, a 23-year-old web developer based in the Philippines</p>
          </div>
          <div className='sm:text-left text-2xl sm:text-2xl font-bold text-gray-500 dark:text-gray-400 leading-snug transition-colors duration-150'>
            <p>My main focus is in improving digital experiences and building adaptive full-stack web applications</p>  
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;