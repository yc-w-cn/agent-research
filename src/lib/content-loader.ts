import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import type { ContentData, ContentItem, ContentType } from './content';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

export async function getContentByType(
  type: ContentType,
): Promise<ContentItem[]> {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const items: ContentItem[] = [];

  for (const file of files) {
    if (file === 'index.mdx' || !file.endsWith('.mdx')) continue;

    const filePath = path.join(CONTENT_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    const item: ContentItem = {
      slug: file.replace('.mdx', ''),
      title: data.title || '',
      categories: data.categories || [],
      date: data.date ? String(data.date) : '',
      tags: data.tags || [],
      arxiv: data.arxiv,
      github: data.github,
      stars: data.stars,
      related: data.related || [],
    };

    const shouldInclude =
      (type === 'paper' && item.arxiv) ||
      (type === 'code' && item.github) ||
      (type === 'resource' && item.related && item.related.length > 0);

    if (shouldInclude) {
      items.push(item);
    }
  }

  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getContentBySlug(
  slug: string,
): Promise<ContentData | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || '',
    categories: data.categories || [],
    date: data.date ? String(data.date) : '',
    tags: data.tags || [],
    arxiv: data.arxiv,
    github: data.github,
    stars: data.stars,
    related: data.related || [],
    content,
  };
}

export async function getAllContent(): Promise<ContentItem[]> {
  const types: ContentType[] = ['paper', 'code', 'resource'];
  const allContentMap = new Map<string, ContentItem>();

  for (const type of types) {
    const items = await getContentByType(type);
    for (const item of items) {
      allContentMap.set(item.slug, item);
    }
  }

  return Array.from(allContentMap.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function searchContent(query: string): Promise<ContentItem[]> {
  const allContent = await getAllContent();
  const lowerQuery = query.toLowerCase();

  return allContent.filter((item) => {
    return (
      item.title.toLowerCase().includes(lowerQuery) ||
      item.categories.some((cat) => cat.toLowerCase().includes(lowerQuery)) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}
