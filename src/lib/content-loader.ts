import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import type {
  ContentData,
  ContentItem,
  ContentType,
  RelatedResource,
} from './content';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

export const relatedResourcesMap = new Map<
  string,
  { parentSlug: string; related: RelatedResource }
>();

function buildRelatedResourcesMap() {
  if (!fs.existsSync(CONTENT_DIR)) {
    return;
  }

  const files = fs.readdirSync(CONTENT_DIR);

  for (const file of files) {
    if (file === 'index.mdx' || !file.endsWith('.mdx')) continue;

    const filePath = path.join(CONTENT_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    const slug = file.replace('.mdx', '');

    if (data.related && Array.isArray(data.related)) {
      data.related.forEach((related: RelatedResource, index: number) => {
        const relatedSlug = `${slug}-related-${index}`;
        relatedResourcesMap.set(relatedSlug, { parentSlug: slug, related });
      });
    }
  }
}

buildRelatedResourcesMap();

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
      arxiv: data.arxiv
        ? {
            id: data.arxiv.id || String(data.arxiv),
            subjects: data.arxiv.subjects || [],
            description: data.arxiv.description,
          }
        : undefined,
      github: data.github
        ? {
            name: data.github.name || String(data.github),
            description: data.github.description,
            stars: data.github.stars,
            tags: data.github.tags || [],
          }
        : undefined,
      related: data.related || [],
    };

    const shouldInclude =
      (type === 'paper' && item.arxiv) ||
      (type === 'code' && item.github) ||
      (type === 'resource' && item.related && item.related.length > 0);

    if (shouldInclude && type !== 'resource') {
      items.push(item);
    }

    if (type === 'resource' && item.related && item.related.length > 0) {
      item.related.forEach((related, index) => {
        items.push({
          slug: `${item.slug}-related-${index}`,
          title: related.title,
          categories: item.categories,
          date: item.date,
          related: undefined,
        });
      });
    }
  }

  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getContentBySlug(
  slug: string,
): Promise<ContentData | null> {
  const relatedInfo = relatedResourcesMap.get(slug);

  if (relatedInfo) {
    const parentContent = await getContentBySlug(relatedInfo.parentSlug);
    if (!parentContent) {
      return null;
    }

    return {
      ...parentContent,
      slug,
      title: relatedInfo.related.title,
      content: relatedInfo.related.description || '',
    };
  }

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
    arxiv: data.arxiv
      ? {
          id: data.arxiv.id || String(data.arxiv),
          subjects: data.arxiv.subjects || [],
          description: data.arxiv.description,
        }
      : undefined,
    github: data.github
      ? {
          name: data.github.name || String(data.github),
          description: data.github.description,
          stars: data.github.stars,
          tags: data.github.tags || [],
        }
      : undefined,
    related: data.related || [],
    content,
  };
}

export function getRelatedResourceUrl(slug: string): string | null {
  const relatedInfo = relatedResourcesMap.get(slug);
  return relatedInfo?.related.url || null;
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
      item.github?.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}
