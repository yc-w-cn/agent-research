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
          id:
            typeof data.arxiv === 'string'
              ? data.arxiv
              : data.arxiv.id || String(data.arxiv),
          subjects:
            typeof data.arxiv === 'string' ? [] : data.arxiv.subjects || [],
          description:
            typeof data.arxiv === 'string' ? undefined : data.arxiv.description,
        }
      : undefined,
    github: data.github
      ? {
          name:
            typeof data.github === 'string'
              ? data.github
              : data.github.name || String(data.github),
          description:
            typeof data.github === 'string'
              ? undefined
              : data.github.description,
          stars:
            typeof data.github === 'string' ? undefined : data.github.stars,
          tags: typeof data.github === 'string' ? [] : data.github.tags || [],
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
          id:
            typeof data.arxiv === 'string'
              ? data.arxiv
              : data.arxiv.id || String(data.arxiv),
          subjects:
            typeof data.arxiv === 'string' ? [] : data.arxiv.subjects || [],
          description:
            typeof data.arxiv === 'string' ? undefined : data.arxiv.description,
        }
      : undefined,
    github: data.github
      ? {
          name:
            typeof data.github === 'string'
              ? data.github
              : data.github.name || String(data.github),
          description:
            typeof data.github === 'string'
              ? undefined
              : data.github.description,
          stars:
            typeof data.github === 'string' ? undefined : data.github.stars,
          tags: typeof data.github === 'string' ? [] : data.github.tags || [],
        }
      : undefined,
    related: data.related || [],
    content,
  };
}
