// lib/getMediumLinks.ts - IMPROVED VERSION
import Parser from 'rss-parser';

export type MediumPost = {
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

const MEDIUM_USERNAME = 'asrajendrayadav';
const MAX_POSTS = 5;
const CACHE_DURATION = 5 * 60 * 1000;

let cachedData: {
  posts: MediumPost[];
  timestamp: number;
} | null = null;

export async function getMediumLinks(): Promise<MediumPost[]> {
  // Check cache first
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    console.log('✅ Returning cached Medium posts');
    return cachedData.posts;
  }

  const parser = new Parser<any, MediumFeedItem>({
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      'Accept': 'application/rss+xml, application/xml, text/xml',
    },
    timeout: 15000, // Increased timeout for production
  });

  // Use RSS2JSON as a fallback service to avoid CORS issues
  const timestamp = Date.now();
  const directFeedUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
  const proxyFeedUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(directFeedUrl)}&api_key=your_api_key_here&count=${MAX_POSTS}`;

  try {
    console.log('🔄 Attempting to fetch Medium posts...');
    
    // Try direct feed first
    let feed;
    try {
      console.log('📡 Trying direct Medium RSS feed...');
      feed = await parser.parseURL(directFeedUrl);
      console.log('✅ Direct Medium RSS feed successful');
    } catch (directError) {
      console.warn('⚠️ Direct feed failed, trying proxy service...', directError);
      
      // Fallback to RSS2JSON service
      try {
        const response = await fetch(proxyFeedUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          signal: AbortSignal.timeout(10000), // 10 second timeout
        });

        if (!response.ok) {
          throw new Error(`RSS2JSON service failed: ${response.status} ${response.statusText}`);
        }

        const jsonData = await response.json();
        
        if (jsonData.status !== 'ok') {
          throw new Error(`RSS2JSON error: ${jsonData.message || 'Unknown error'}`);
        }

        // Convert RSS2JSON format to our expected format
        feed = {
          items: jsonData.items?.map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            contentSnippet: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
            categories: item.categories || [],
            guid: item.guid
          })) || []
        };
        
        console.log('✅ RSS2JSON proxy service successful');
      } catch (proxyError) {
        console.error('❌ Both direct and proxy methods failed');
        throw new Error(`All Medium feed methods failed. Direct: ${directError}. Proxy: ${proxyError}`);
      }
    }

    if (!feed || !feed.items || feed.items.length === 0) {
      console.warn('⚠️ Feed returned no items');
      return cachedData?.posts || [];
    }

    console.log(`📊 Successfully fetched ${feed.items.length} items from Medium`);

    const posts: MediumPost[] = feed.items
      .slice(0, MAX_POSTS)
      .map((item: MediumFeedItem): MediumPost => ({
        title: item.title || 'Untitled Post',
        link: item.link || '#',
        pubDate: item.pubDate,
        contentSnippet: item.contentSnippet,
        categories: item.categories || [],
        guid: item.guid
      }))
      .filter((post: MediumPost) => post.title !== 'Untitled Post' && post.link !== '#');

    // Cache the results
    cachedData = {
      posts,
      timestamp: Date.now()
    };

    console.log(`✅ Processed ${posts.length} valid Medium posts`);
    return posts;
    
  } catch (error) {
    console.error('❌ Error fetching Medium feed:', error);
    
    // Return cached data if available
    if (cachedData && cachedData.posts.length > 0) {
      console.log('📋 Returning cached data due to fetch error');
      return cachedData.posts;
    }

    // Return empty array instead of throwing
    console.log('📭 No cached data available, returning empty array');
    return [];
  }
}
