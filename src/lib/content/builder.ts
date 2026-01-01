import type { ContentData, ContentItem, MdxFrontmatter } from './types';

export function buildContentItem(
  slug: string,
  data: MdxFrontmatter,
): ContentItem {
  return {
    slug,
    title: data.title || '',
    categories: data.categories || [],
    date: data.date ? String(data.date) : '',
    arxiv: data.arxiv
      ? {
          id: data.arxiv.id,
          title: data.arxiv.title || '',
          subjects: data.arxiv.subjects || [],
          description: data.arxiv.description,
        }
      : undefined,
    github: data.github
      ? {
          name: data.github.name,
          description: data.github.description,
          stars: data.github.stars,
          tags: data.github.tags || [],
        }
      : undefined,
    related: data.related || [],
  };
}

export function buildContentData(
  slug: string,
  data: MdxFrontmatter,
  content: string,
): ContentData {
  return {
    slug,
    title: data.title || '',
    categories: data.categories || [],
    date: data.date ? String(data.date) : '',
    arxiv: data.arxiv
      ? {
          id: data.arxiv.id,
          subjects: data.arxiv.subjects || [],
          description: data.arxiv.description,
        }
      : undefined,
    github: data.github
      ? {
          name: data.github.name,
          description: data.github.description,
          stars: data.github.stars,
          tags: data.github.tags || [],
        }
      : undefined,
    related: data.related || [],
    content,
  };
}
