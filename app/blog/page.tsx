import Header from '@/components/Header';
import { getMediumLinks, type MediumPost } from '@/lib/getMediumLinks';
import { getGitHubPosts } from '@/lib/githubPosts';
import ParticlesBackground from '@/components/ParticlesBackground';
import BooksCarousel from '@/components/booksCarousel';
import { notFound } from 'next/navigation';

// Disable caching for this page to always fetch fresh data
export const revalidate = 0;

type BlogPost = {
  title: string;
  link: string;
  type: 'medium' | 'github';
  pubDate?: string;
  contentSnippet?: string;
  categories?: string[];
};

async function fetchBlogData() {
  try {
    console.log('Fetching blog data...');
    
    // Fetch both Medium and GitHub posts concurrently
    const [mediumPosts, githubPosts] = await Promise.allSettled([
      getMediumLinks().catch(err => {
        console.warn('Medium posts failed:', err);
        return [];
      }),
      getGitHubPosts().catch(err => {
        console.warn('GitHub posts failed:', err);
        return [];
      })
    ]);

    // Handle Medium posts result
    const mediumData: MediumPost[] = mediumPosts.status === 'fulfilled' 
      ? mediumPosts.value 
      : [];
    
    if (mediumPosts.status === 'rejected') {
      console.error('Failed to fetch Medium posts:', mediumPosts.reason);
    }

    // Handle GitHub posts result
    const githubData = githubPosts.status === 'fulfilled' 
      ? githubPosts.value 
      : [];
    
    if (githubPosts.status === 'rejected') {
      console.error('Failed to fetch GitHub posts:', githubPosts.reason);
    }

    // Combine and format all posts
    const allPosts: BlogPost[] = [
      ...mediumData.map((post) => ({
        title: post.title,
        link: post.link,
        type: 'medium' as const,
        pubDate: post.pubDate,
        contentSnippet: post.contentSnippet,
        categories: post.categories,
      })),
      ...githubData.map((post) => ({
        title: post.slug,
        link: `/posts/${post.slug}`,
        type: 'github' as const,
        // Add pubDate if your GitHub posts have date info
        // pubDate: post.date,
      })),
    ];

    // Sort posts by date (newest first) if pubDate is available
    allPosts.sort((a, b) => {
      if (!a.pubDate || !b.pubDate) return 0;
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });

    console.log(`Successfully fetched ${mediumData.length} Medium posts and ${githubData.length} GitHub posts`);

    return {
      allPosts,
      mediumCount: mediumData.length,
      githubCount: githubData.length,
      errors: {
        medium: mediumPosts.status === 'rejected' ? mediumPosts.reason : null,
        github: githubPosts.status === 'rejected' ? githubPosts.reason : null,
      }
    };

  } catch (error) {
    console.error('Error in fetchBlogData:', error);
    // Instead of returning empty data, you might want to throw or handle this differently
    // Consider if this should cause a 404 or show an error page
    return {
      allPosts: [],
      mediumCount: 0,
      githubCount: 0,
      errors: {
        medium: null,
        github: null,
        general: error instanceof Error ? error.message : 'Unknown error occurred'
      }
    };
  }
}

export default async function Blog() {
  try {
    const { allPosts, mediumCount, githubCount, errors } = await fetchBlogData();
    
    // Log for debugging
    console.log('Blog page render:', {
      totalPosts: allPosts.length,
      mediumCount,
      githubCount,
      hasErrors: Object.values(errors).some(error => error !== null)
    });

    return (
      <>
        <ParticlesBackground />

        <div className="relative min-h-screen bg-transparent text-white z-40">
          <Header />

          <section id="blog" className="py-16 px-6 max-w-4xl mx-auto relative z-40">
            <h2 className="text-4xl font-bold mb-8 text-white text-left">Blog</h2>

            {allPosts.length > 0 ? (
              <ul className="space-y-4 list-disc list-inside text-white text-base">
                {allPosts.map((post, index) => (
                  <li
                    key={`${post.type}-${post.link}-${index}`}
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
            ) : (
              <div className="text-gray-400">
                <p>No blog posts available at the moment.</p>
                {Object.values(errors).some(error => error !== null) && (
                  <p className="mt-2 text-sm">There were some issues loading content. Please try again later.</p>
                )}
              </div>
            )}

            {/* Debug info (remove in production) */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-700/30">
                <summary className="text-gray-400 cursor-pointer hover:text-white">
                  🐛 Debug Info (Dev Only)
                </summary>
                <pre className="mt-2 text-xs text-gray-500 overflow-auto">
                  {JSON.stringify({ 
                    totalPosts: allPosts.length, 
                    mediumCount, 
                    githubCount, 
                    errors,
                    timestamp: new Date().toISOString()
                  }, null, 2)}
                </pre>
              </details>
            )}
          </section>

          {/* Books Carousel */}
          <section id="books" className="py-16 px-6 max-w-6xl mx-auto relative z-40">
            <h2 className="text-4xl font-bold mb-8 text-white text-left">📚 Books I've Read</h2>
            <BooksCarousel />
          </section>
        </div>
      </>
    );
  } catch (error) {
    console.error('Blog page error:', error);
    // You might want to show an error page instead of 404
    // throw error; // This would trigger error.tsx if you have one
    notFound(); // This triggers 404
  }
}