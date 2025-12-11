import Parser from 'rss-parser';

type MediumPost = {
  title: string;
  link: string;
};

export async function getMediumLinks(): Promise<MediumPost[]> {
  const parser = new Parser({
    headers: { "User-Agent": "Mozilla/5.0" }
  });

  const feed = await parser.parseURL('https://rajendran22.medium.com/feed');

  return feed.items.slice(0, 5).map((item) => ({
    title: item.title ?? 'Untitled',
    link: item.link ?? item.guid ?? '#'
  }));
}
