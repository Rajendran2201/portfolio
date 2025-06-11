// lib/getMediumLinks.ts
import Parser from 'rss-parser';

// Define types for better type safety
type MediumPost = {
  title: string;
  link: string;
  pubDate?: string;
  contentSnippet?: string;
  categories?: string[];
  guid?: string;
};

type MediumFeedItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  contentSnippet?: string;
  categories?: string[];
  guid?: string;
};

// Configuration
const MEDIUM_USERNAME = 'asrajendrayadav';
const MAX_POSTS = 5;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

// In-memory cache to reduce API calls during development
let cachedData: {
  posts: MediumPost[];
  timestamp: number;
} | null = null;

/**
 * Fetches Medium articles from RSS feed with caching and error handling
 */
export async function getMediumLinks(): Promise<MediumPost[]> {
  // Check cache first (useful during development)
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    console.log('Returning cached Medium posts');
    return cachedData.posts;
  }

  const parser = new Parser<any, MediumFeedItem>({
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      'Accept': 'application/rss+xml, application/xml, text/xml',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
    timeout: 10000, // 10 second timeout
  });

  // Add timestamp and random parameter to bust all caches
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);
  const feedUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}?t=${timestamp}&r=${random}`;

  try {
    console.log(`Fetching Medium feed from: ${feedUrl}`);
    
    const feed = await parser.parseURL(feedUrl);
    
    if (!feed || !feed.items) {
      throw new Error('Invalid feed response - no items found');
    }

    console.log(`Successfully fetched ${feed.items.length} items from Medium RSS feed`);
    
    // Log feed metadata for debugging
    console.log('Feed info:', {
      title: feed.title,
      description: feed.description,
      lastBuildDate: feed.lastBuildDate,
      itemCount: feed.items.length
    });

    // Process and validate feed items
    const posts: MediumPost[] = feed.items
      .slice(0, MAX_POSTS)
      .map((item: MediumFeedItem, index: number) => {
        console.log(`Processing item ${index + 1}:`, {
          title: item.title,
          pubDate: item.pubDate,
          link: item.link,
          hasContent: !!item.contentSnippet
        });

        return {
          title: item.title || 'No Title Available',
          link: item.link || '#',
          pubDate: item.pubDate,
          contentSnippet: item.contentSnippet,
          categories: item.categories || [],
          guid: item.guid
        };
      })
      .filter(post => post.title !== 'No Title Available' && post.link !== '#');

    // Cache the results
    cachedData = {
      posts,
      timestamp: Date.now()
    };

    console.log(`Processed ${posts.length} valid Medium posts`);
    
    // Log the latest post for verification
    if (posts.length > 0) {
      console.log('Latest post:', {
        title: posts[0].title,
        pubDate: posts[0].pubDate,
        link: posts[0].link
      });
    }

    return posts;
    
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    
    // Provide more specific error information
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
    }

    // Return cached data if available, otherwise empty array
    if (cachedData) {
      console.log('Returning cached data due to fetch error');
      return cachedData.posts;
    }

    return [];
  }
}

/**
 * Alternative function that forces a fresh fetch (bypasses cache)
 */
export async function getMediumLinksFresh(): Promise<MediumPost[]> {
  // Clear cache to force fresh fetch
  cachedData = null;
  return getMediumLinks();
}

/**
 * Get cached posts without making a network request
 */
export function getCachedMediumLinks(): MediumPost[] | null {
  return cachedData?.posts || null;
}

/**
 * Clear the cache manually
 */
export function clearMediumCache(): void {
  cachedData = null;
  console.log('Medium cache cleared');
}

// Export types for use in other files
export type { MediumPost };