import { getGitHubPosts, getMarkdownContent } from "@/lib/githubPosts";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/markdownContent";

export async function generateStaticParams() {
  const posts = await getGitHubPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const { slug } = await params;

  const posts = await getGitHubPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  let content = null;
  try {
    content = await getMarkdownContent(post.originalName);
  } catch {
    return notFound();
  }

  if (!content) return notFound();

  const title = post.originalName.replace(/\.md$/, "");

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-3xl mx-auto">
      <header className="mb-10">
        {/* Title full width on first line */}
        <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-sm mb-4">{title}</h1>

        {/* Button right aligned on next line */}
        <div className="flex justify-end">
          <a
            href={post.html_url ?? post.download_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-yellow-400 border-dotted text-white font-semibold py-1.5 px-3 rounded
              transition duration-300 ease-in-out hover:bg-yellow-400 hover:text-black hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.02c0 4.424 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.892 1.53 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.34-2.22-.254-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.03-2.692-.103-.254-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025a9.564 9.564 0 0 1 2.5-.336c.85.004 1.705.115 2.5.337 1.909-1.296 2.748-1.025 2.748-1.025.546 1.378.202 2.394.1 2.647.64.702 1.028 1.597 1.028 2.692 0 3.854-2.337 4.7-4.566 4.95.359.31.678.92.678 1.855 0 1.337-.012 2.416-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.02C22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>

            Read on GitHub
          </a>
        </div>
      </header>

      <MarkdownContent content={content} />
    </div>
  );
}
