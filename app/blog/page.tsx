import Header from '@/components/Header';
import { getMediumLinks } from '@/lib/getMediumLinks';
import { getGitHubPosts } from '@/lib/githubPosts';
import ParticlesBackground from '@/components/ParticlesBackground';
import BooksCarousel from '@/components/booksCarousel';


export default async function Blog() {
  const mediumPosts = await getMediumLinks();
  const githubPosts = await getGitHubPosts();

  const allPosts = [
    ...mediumPosts.map((post) => ({
      title: post.title,
      link: post.link,
      type: 'medium',
    })),
    ...githubPosts.map((post) => ({
      title: post.slug,
      link: `/posts/${post.slug}`,
      type: 'github',
    })),
  ];

  return (
    <>
      <ParticlesBackground />

      <div className="relative min-h-screen bg-transparent text-white z-40">
        <Header />

        <section id="blog" className="py-16 px-6 max-w-4xl mx-auto relative z-40">
          <h2 className="text-4xl font-bold mb-8 text-white text-left">Blog</h2>

          <ul className="space-y-4 list-disc list-inside text-white text-base">
            {allPosts.map((post, index) => (
              <li
                key={index}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                <a
                  href={post.link}
                  target={post.type === 'medium' ? '_blank' : '_self'}
                  rel={post.type === 'medium' ? 'noopener noreferrer' : undefined}
                  className="underline-offset-2 hover:underline"
                >
                  {post.title}
                </a>
                <span className="ml-2 text-xs text-gray-400">
                  [{post.type === 'medium' ? 'Medium' : 'GitHub'}]
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Books Carousel */}
        <section id="books" className="py-16 px-6 max-w-6xl mx-auto relative z-40">
          <h2 className="text-4xl font-bold mb-8 text-white text-left">📚 Books I've Read</h2>
          <BooksCarousel />
        </section>
      </div>
    </>
  );
}