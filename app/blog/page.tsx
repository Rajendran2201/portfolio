// app/blog/page.tsx
import Header from '@/components/Header';
import { getMediumLinks } from '@/lib/getMediumLinks';

export default async function Blog() {
  const posts = await getMediumLinks();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <section id="blog" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white text-left">Blog</h2>
        <ul className="space-y-4 list-disc list-inside text-white text-base">
          {posts.map((post, index) => (
            <li key={index} className="hover:text-yellow-400 transition-colors duration-200">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
