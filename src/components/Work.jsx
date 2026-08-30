import React from 'react';
import { HiExternalLink } from 'react-icons/hi';

const Work = () => {
  return (
    <div id="work" className="w-full min-h-[70vh] py-20 bg-transparent text-neutral-900 dark:text-white">
      
      {/* SECTION CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        
        {/* SECTION HEADER */}
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-neutral-900 dark:text-white transition-colors duration-150">
            Relevant Experience
          </p>
          <p className="py-4 text-neutral-600 dark:text-neutral-400 text-sm transition-colors duration-150">
            Internship
          </p>
        </div>

        {/* EXPERIENCE CARD CONTAINER */}
        <div className="space-y-6">
          
          <div className="group bg-white/90 dark:bg-black/90 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border-2 border-neutral-900/10 dark:border-white/20 hover:border-pink-500/60 dark:hover:border-pink-500/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-500 transition-colors duration-150">
                  Salesforce Developer Intern
                </h3>
                <p className="text-pink-600 dark:text-pink-500 text-sm font-semibold mt-0.5">
                  Accenture
                </p>
              </div>

              {/* DATE & LOCATION BADGE */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 self-start sm:self-center">
                <span>Remote</span>
                <span>•</span>
                <span>Feb 2026 – Apr 2026</span>
              </div>
            </div>

            {/* DESCRIPTION & ACTION FOOTER */}
            <div className="pt-5 space-y-5">
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed transition-colors duration-150">
                Completed 447 hours of intensive training under Accenture Academy, focusing on platform development, workflow automation, and custom Lightning Web Components (LWC) components.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                
                {/* TECH STACK BADGES */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 font-medium transition-colors duration-150">
                    Salesforce Flow
                  </span>
                  <span className="text-xs bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 font-medium transition-colors duration-150">
                    Apex & LWC
                  </span>
                </div>

                {/* CERTIFICATION LINK BUTTON */}
                <a 
                  href="https://drive.google.com/file/d/1o8KkScn9nsiIK4wxmvzgIijcKWZ_Ph7j/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:scale-105"
                >
                  <span>View Certification</span>
                  <HiExternalLink size={15} />
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Work;