import Header from '@/components/Header';
import { getMediumLinks } from '@/lib/getMediumLinks';
import { getGitHubPosts } from '@/lib/githubPosts';
import ParticlesWrapper from '@/components/ParticlesWrapper';

export default async function Blog() {
  const [mediumPosts, githubPosts] = await Promise.all([
    getMediumLinks(),
    getGitHubPosts(),
  ]);

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
      <ParticlesWrapper />

      <div className="relative min-h-screen bg-transparent text-white z-40">
        <Header />
        
        <main className="py-16 px-6 max-w-7xl mx-auto relative z-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section id="blog">
              <h2 className="text-4xl font-bold mb-8">Blog</h2>

              <ul className="space-y-4 list-disc list-inside text-base">
                {allPosts.map((post, index) => (
                  <li key={index} className="hover:text-yellow-400">
                    <a
                      href={post.link}
                      target={post.type === "medium" ? "_blank" : "_self"}
                      rel={post.type === "medium" ? "noopener noreferrer" : undefined}
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
          </div>
        </main>
      </div>
    </>
  );
}
