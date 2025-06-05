import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* About Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6">
        <div className="relative">
          <Image
            src="/hero.png"
            alt="Raj's photo"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute bottom-0 left-0 flex space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
        <div className="md:ml-16 mt-12 md:mt-0 text-center md:text-left">
          <p className="text-gray-400 text-lg">Hey guys,</p>
          <h1 className="text-6xl md:text-7xl font-bold mt-4">I’m Raj.</h1>
          <h2 className="text-3xl mt-6">I explore, create, and bring ideas to life.</h2>
          <p className="text-gray-400 mt-6 max-w-md text-lg">
            Undergraduate AI Student, who loves building things in public. Manifests code to work, writes blogs, and loves to teach.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-8 py-3 border-2 border-yellow-500 text-yellow-500 text-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
              Contact me
            </button>
          </Link>
          <p className="text-gray-400 mt-10 italic text-lg">
            “Whoever is delighted in solitude, is either a wild beast or a god.”
          </p>
        </div>
      </section>
    </div>
  );
}