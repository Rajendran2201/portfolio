'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { projects } from '@/src/data/projectsData'; 

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 text-white-400 flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CodeBracketIcon className="w-10 h-10 text-white-400" />
            My Projects
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-yellow-500/10 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <h2 className="text-xl font-semibold text-yellow-300 mb-2">{project.title}</h2>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-yellow-400/10 text-white-300 px-2 py-1 rounded-full"
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
                    className="text-sm text-yellow-400 hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
