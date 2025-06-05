  "use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="min-h-screen flex flex-col md:flex-row items-end justify-start px-0 md:px-0"
      >
        <div className="relative flex-shrink-0 w-full md:w-auto md:pl-0 pl-0 md:pb-0 pb-0">
          <Image
            src="/hero.png"
            alt="Raj's photo"
            width={300}
            height={400}
            className="rounded-lg md:rounded-none md:rounded-bl-lg md:mb-0 mb-0 md:ml-0 ml-0"
          />
          <div className="absolute bottom-0 left-0 flex space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start md:ml-20 md:mb-24 mb-12 text-center md:text-left max-w-xl">
          <p className="text-gray-400 text-lg">Hey guys,</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">I'm Raj.</h1>
          <h2 className="text-2xl md:text-3xl mt-6">I explore, create, and bring ideas to life.</h2>
          <p className="text-gray-400 mt-6 text-base md:text-lg">
            Undergraduate AI Student, who loves building things in public. Manifests code to work, writes blogs, and loves to teach.
          </p>
          <Link href="/about">
            <button className="mt-8 px-6 py-3 border-2 border-yellow-500 text-yellow-500 text-base md:text-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
              Get to know me
            </button>
          </Link>
          <p className="text-gray-400 mt-10 italic text-base md:text-lg">
            "Whoever is delighted in solitude, is either a wild beast or a god."
          </p>
        </div>
      </motion.section>
    </div>
  );
}
