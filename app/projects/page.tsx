'use client';

import Header from '@/components/Header';
import ParticlesBackground from '@/components/ParticlesBackground';
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { projects } from '@/src/data/projectsData'; 

export default function Projects() {
  return (
    <>
      {/* ParticlesBackground - completely independent layer */}
      <ParticlesBackground />
      
      <div className="relative min-h-screen bg-transparent text-white">
        {/* Header */}
        <div className="relative z-50">
          <Header />
        </div>
        
        {/* Main content */}
        <div className="relative z-40 px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-8 text-white flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CodeBracketIcon className="w-10 h-10 text-white" />
              My Projects
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-yellow-500/20 hover:bg-gray-900/90 hover:border-yellow-400/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h2 className="text-xl font-semibold text-yellow-300 mb-2">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full border border-yellow-400/30 backdrop-blur-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300 hover:underline transition-colors duration-200 font-medium"
                    >
                      View Project 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}