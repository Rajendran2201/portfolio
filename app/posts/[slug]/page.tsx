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
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-sm">{title}</h1>

        <a
          href={post.html_url ?? post.download_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-yellow-400 text-yellow-400 font-semibold py-2 px-4 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          View on GitHub
        </a>
      </header>

      <MarkdownContent content={content} />
    </div>
  );
}
