import React, { useState } from 'react';
import { portfolioProjects } from '@/lib/constants';
import { HiExternalLink, HiX } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

// ASSET IMPORTS FOR VERCEL PRODUCTION BUNDLING
import screen1 from '../assets/screen-1.svg';
import screen2 from '../assets/screen-2.svg';
import screen3 from '../assets/screen-3.svg';

const Projects = () => {
  // State to manage the active modal for project screenshots
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <div id="projects" className="w-full min-h-screen py-20 bg-transparent text-neutral-900 dark:text-white">
      
      {/* SECTION CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        
        {/* SECTION HEADER */}
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-neutral-900 dark:text-white transition-colors duration-150">
            Projects
          </p>
          <p className="py-4 text-neutral-600 dark:text-neutral-400 transition-colors duration-150">
            My personal projects
          </p>
        </div>

        {/* PROJECTS GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setActiveModalProject(project)}
              className="group bg-white/90 dark:bg-black/90 backdrop-blur-md p-4 sm:p-5 rounded-[2rem] border-2 border-neutral-900/10 dark:border-white/20 hover:border-pink-500/60 dark:hover:border-pink-500/60 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
            >
              <div>
                {/* PREVIEW IMAGE BOX WITH INNER ROUNDED CORNERS */}
                <div className="w-full h-60 sm:h-64 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 relative flex items-center justify-center">
                  
                  {/* TOP-LEFT CIRCULAR ICON BUTTONS */}
                  <div 
                    className="absolute top-3 left-3 flex items-center gap-2 z-10" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.liveDemoUrl !== "#" && (
                      <a 
                        href={project.liveDemoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/90 dark:bg-neutral-900/90 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white hover:scale-110 transition-all duration-200 shadow-md"
                        title="Live Preview"
                      >
                        <HiExternalLink size={18} />
                      </a>
                    )}
                    <a 
                      href={project.sourceCodeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/90 dark:bg-neutral-900/90 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white hover:scale-110 transition-all duration-200 shadow-md"
                      title="GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>

                  {/* PROJECT IMAGE */}
                  <img 
                    src={screen1} 
                    alt={`${project.heading} preview`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* HOVER GALLERY OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-medium text-white gap-1.5 backdrop-blur-[2px]">
                    <span>Click card to view gallery</span>
                  </div>
                </div>

                {/* PROJECT DETAILS CONTENT */}
                <div className="p-3 sm:p-4 space-y-2 mt-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-500 transition-colors duration-150">
                    {project.heading}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed transition-colors duration-150">
                    {project.description}
                  </p>

                  {/* TECH STACK BADGES */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 font-medium transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {activeModalProject && (
        <div 
          onClick={() => setActiveModalProject(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-800 w-full max-w-3xl rounded-[2rem] p-6 relative max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200 transition-colors"
          >
            {/* MODAL HEADER */}
            <div className="flex justify-between items-center pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {activeModalProject.heading}
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Scroll to explore application screenshots
                </p>
              </div>
              <button 
                onClick={() => setActiveModalProject(null)}
                className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 p-2 rounded-full border border-neutral-200 dark:border-neutral-800 transition-colors cursor-pointer"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* SCROLLABLE SCREENSHOT CONTAINER */}
            <div className="py-6 space-y-6 overflow-y-auto max-h-[60vh] pr-2">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                <img src={screen1} alt="Screenshot 1" className="w-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                <img src={screen2} alt="Screenshot 2" className="w-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                <img src={screen3} alt="Screenshot 3" className="w-full object-cover" />
              </div>
            </div>

            {/* MODAL FOOTER ACTIONS */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-end gap-3">
              {activeModalProject.liveDemoUrl !== "#" && (
                <a 
                  href={activeModalProject.liveDemoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md"
                >
                  <span>Preview App</span>
                  <HiExternalLink size={16} />
                </a>
              )}
              <a 
                href={activeModalProject.sourceCodeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all"
              >
                <span>GitHub Repo</span>
                <FaGithub size={16} />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;