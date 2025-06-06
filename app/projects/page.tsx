import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 pt-20 md:pt-24">
        <div className="relative flex-shrink-0 w-full max-w-[300px] sm:max-w-[350px] md:w-auto">
          <Image
            src="/hero.png"
            alt="Raj's photo"
            width={300}
            height={400}
            className="rounded-lg w-full h-auto"
            priority
          />
          <div className="absolute bottom-2 left-2 flex space-x-2">
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left max-w-lg">
          <p className="text-gray-500 dark:text-gray-300 text-base sm:text-lg">Hey guys,</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-4">I’m Raj.</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6">I explore, create, and bring ideas to life.</h2>
          <p className="text-gray-500 dark:text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">
            Undergraduate AI Student, who loves building things in public. Manifests code to work, writes blogs, and loves to teach.
          </p>
          <Link href="/about">
            <button
              className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 border-2 border-yellow-500 text-yellow-500 text-sm sm:text-base md:text-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
              aria-label="Learn more about Raj"
            >
              Get to know me
            </button>
          </Link>
          <p className="text-gray-500 dark:text-gray-300 mt-6 sm:mt-8 italic text-sm sm:text-base md:text-lg">
            “Whoever is delighted in solitude, is either a wild beast or a god.”
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}