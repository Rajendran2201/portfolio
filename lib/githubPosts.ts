
// lib/githubPosts.ts - IMPROVED VERSION
import { remark } from "remark";
import html from "remark-html";

const repo = "Rajendran2201/my-portfolio-blog";
const folder = "posts";
const token = process.env.GITHUB_TOKEN;

function slugify(filename: string) {
  return filename
    .replace(/\.md$/, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getGitHubPosts() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    'User-Agent': 'Portfolio-Blog-Reader/1.0',
  };
  
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
    console.log('🔑 Using GitHub token for authentication');
  } else {
    console.warn('⚠️ No GitHub token found - rate limits may apply');
  }

  const apiUrl = `https://api.github.com/repos/${repo}/contents/${folder}`;
  
  try {
    console.log('📂 Fetching GitHub posts from:', apiUrl);
    
    const res = await fetch(apiUrl, {
      headers,
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}. Response: ${errorText}`);
    }

    const files = await res.json();
    
    if (!Array.isArray(files)) {
      console.error('❌ GitHub API returned non-array response:', files);
      
      // Check if it's a rate limit or other API error
      if (files.message) {
        throw new Error(`GitHub API error: ${files.message}`);
      }
      
      return [];
    }

    const markdownFiles = files
      .filter((file: any) => file.name.endsWith(".md"))
      .map((file: any) => ({
        slug: slugify(file.name),
        originalName: file.name,
        download_url: file.download_url,
        html_url: file.html_url,
      }));

    console.log(`✅ Found ${markdownFiles.length} markdown files in GitHub repository`);
    return markdownFiles;
    
  } catch (error) {
    console.error('❌ Error fetching GitHub posts:', error);
    
    // Provide more specific error information
    if (error instanceof Error) {
      console.error('GitHub fetch error details:', {
        message: error.message,
        name: error.name,
      });
    }

    // Return empty array instead of throwing
    return [];
  }
}

export async function getMarkdownContent(filename: string): Promise<string> {
  const rawUrl = `https://raw.githubusercontent.com/${repo}/main/${folder}/${filename}`;
  
  try {
    console.log('📄 Fetching markdown content:', rawUrl);
    
    const res = await fetch(rawUrl, {
      headers: token ? { 
        Authorization: `Bearer ${token}`,
        'User-Agent': 'Portfolio-Blog-Reader/1.0'
      } : {
        'User-Agent': 'Portfolio-Blog-Reader/1.0'
      },
      signal: AbortSignal.timeout(15000), // 15 second timeout
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch markdown file: ${filename}. Status: ${res.status} ${res.statusText}`);
    }

    const markdown = await res.text();
    const processedContent = await remark().use(html).process(markdown);
    
    console.log('✅ Successfully processed markdown content');
    return processedContent.toString();
    
  } catch (error) {
    console.error(`❌ Error fetching markdown content for ${filename}:`, error);
    throw error;
  }
}