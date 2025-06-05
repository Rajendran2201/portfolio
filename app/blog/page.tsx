import Link from 'next/link'; // Fixed import
import Header from '@/components/Header'

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Blog Post 1</h3>
            <p className="text-gray-400 mt-2">A short excerpt from your first blog post.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Blog Post 2</h3>
            <p className="text-gray-400 mt-2">A short excerpt from your second blog post.</p>
          </div>
        </div>
      </section>
    </div>
  );
}