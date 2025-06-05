import Link from 'next/link';
import Header from '@/components/Header'
export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Wanna contact me?</h2>
        <p className="text-gray-400 mb-4">Feel free to reach out via email or social media!</p>
        <button className="px-6 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
          Email me
        </button>
      </section>
    </div>
  );
}