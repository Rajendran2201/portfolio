// lib/getMediumLinks.ts
import Parser from 'rss-parser';

type MediumPost = {
  title: string;
  link: string;
};

export async function getMediumLinks(): Promise<MediumPost[]> {
  const parser = new Parser();
  const feed = await parser.parseURL('https://medium.com/feed/%40rajendran22');

  return feed.items.slice(0, 5).map((item) => ({
    title: item.title || 'Untitled',
    link: item.link || '#',
  }));
}
