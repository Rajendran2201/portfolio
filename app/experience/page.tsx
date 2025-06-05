"use client";
import Link from 'next/link';
import { motion } from 'motion/react';
import Header from '@/components/Header';

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Experience Section with Animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Work</h2>
        <div className="space-y-8 max-w-3xl">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white">Project 1</h3>
            <p className="text-gray-400 mt-2">A short description of your first project or work experience.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white">Project 2</h3>
            <p className="text-gray-400 mt-2">A short description of your second project or work experience.</p>
          </div>
        </div>
        <Link href="/contact">
          <button className="mt-12 px-8 py-3 border-2 border-yellow-500 text-yellow-500 text-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
            Contact me
          </button>
        </Link>
      </motion.section>
    </div>
  );
}