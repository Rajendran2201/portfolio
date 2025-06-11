import { remark } from "remark";
import html from "remark-html";

const repo = "Rajendran2201/my-portfolio-blog";
const folder = "posts";
const token = process.env.GITHUB_TOKEN;

// Helper: create URL-friendly slug from filename
function slugify(filename: string) {
  return filename
    .replace(/\.md$/, "")          // Remove extension
    .toLowerCase()
    .replace(/\s+/g, "-")          // Replace spaces with dashes
    .replace(/[^\w-]+/g, "")       // Remove invalid chars except dash
    .replace(/--+/g, "-")          // Merge multiple dashes
    .replace(/^-+|-+$/g, "");      // Trim dashes at start/end
}

// Fetch list of posts from GitHub (with optional auth token)
export async function getGitHubPosts() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${folder}`, {
    headers,
  });

  const files = await res.json();

  if (!Array.isArray(files)) {
    console.error("GitHub API Error:", files);
    return [];
  }

  return files
    .filter((file: any) => file.name.endsWith(".md"))
    .map((file: any) => ({
      slug: slugify(file.name),       // URL-friendly slug
      originalName: file.name,        // Original filename with extension
      download_url: file.download_url,
      html_url: file.html_url,
    }));
}

// Fetch and convert markdown file content to HTML by filename
export async function getMarkdownContent(filename: string): Promise<string> {
  const rawUrl = `https://raw.githubusercontent.com/${repo}/main/${folder}/${filename}`;

  const res = await fetch(rawUrl, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
  if (!res.ok) throw new Error(`Failed to fetch markdown file: ${filename}`);

  const markdown = await res.text();

  const processedContent = await remark().use(html).process(markdown);
  return processedContent.toString(); // returns HTML string
}
