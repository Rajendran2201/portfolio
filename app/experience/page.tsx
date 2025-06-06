// app/experience/page.tsx
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { experiences } from '@/src/data/experienceData'; 

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Experience Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-20 md:pt-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          Work
        </h2>

        <div className="space-y-6 sm:space-y-8 max-w-3xl w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
