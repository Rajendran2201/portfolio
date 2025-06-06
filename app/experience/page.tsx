import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen" >
      {/* Header */}
      <Header />

      {/* Experience Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-20 md:pt-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Work</h2>
        <div className="space-y-6 sm:space-y-8 max-w-3xl w-full">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold">Project 1</h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">A short description of your first project or work experience.</p>
          </div>
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold">Project 2</h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">A short description of your second project or work experience.</p>
          </div>
        </div>
        <Link href="/contact">
          <button
            className="mt-8 sm:mt-12 px-4 sm:px-8 py-2 sm:py-3 border-2 border-yellow-500 text-yellow-500 text-sm sm:text-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
            aria-label="Contact Raj"
          >
            Contact me
          </button>
        </Link>
      </section>

    </div>
  );
}