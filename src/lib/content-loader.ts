import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import type { ContentData, ContentItem, ContentType } from './content';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

const TYPE_TO_DIR: Record<ContentType, string> = {
  paper: 'papers',
  code: 'code',
  resource: 'resources',
};

export async function getContentByType(
  type: ContentType,
): Promise<ContentItem[]> {
  const typeDir = path.join(CONTENT_DIR, TYPE_TO_DIR[type]);

  if (!fs.existsSync(typeDir)) {
    return [];
  }

  const files = fs.readdirSync(typeDir);
  const items: ContentItem[] = [];

  for (const file of files) {
    if (file === 'index.mdx' || !file.endsWith('.mdx')) continue;

    const filePath = path.join(typeDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    items.push({
      slug: file.replace('.mdx', ''),
      type,
      title: data.title || '',
      category: data.category || '',
      date: data.date ? String(data.date) : '',
      tags: data.tags || [],
      arxiv: data.arxiv,
      github: data.github,
      stars: data.stars,
      related: data.related || [],
    });
  }

  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getContentBySlug(
  type: ContentType,
  slug: string,
): Promise<ContentData | null> {
  const filePath = path.join(CONTENT_DIR, TYPE_TO_DIR[type], `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    type,
    title: data.title || '',
    category: data.category || '',
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
  const allContent: ContentItem[] = [];

  for (const type of types) {
    const items = await getContentByType(type);
    allContent.push(...items);
  }

  return allContent.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function searchContent(query: string): Promise<ContentItem[]> {
  const allContent = await getAllContent();
  const lowerQuery = query.toLowerCase();

  return allContent.filter((item) => {
    return (
      item.title.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}
