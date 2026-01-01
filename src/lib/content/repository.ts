import fs from 'fs';

import { buildContentData, buildContentItem } from './builder';
import { CONTENT_DIR } from './constants';
import { getRelatedResourceInfo } from './map';
import { parseMdxFile } from './parser';
import type { ContentData, ContentItem, ContentType } from './types';
import { isIndexFile, isMdxFile, sortContentByDate } from './utils';

export async function getContentByType(
  type: ContentType,
): Promise<ContentItem[]> {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const items: ContentItem[] = [];

  for (const file of files) {
    if (isIndexFile(file) || !isMdxFile(file)) continue;

    const { slug, data } = parseMdxFile(file);
    const item = buildContentItem(slug, data);

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

  return sortContentByDate(items);
}

export async function getContentBySlug(
  slug: string,
): Promise<ContentData | null> {
  const relatedInfo = getRelatedResourceInfo(slug);

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

  const filePath = `${CONTENT_DIR}/${slug}.mdx`;

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const { slug: parsedSlug, data, content } = parseMdxFile(`${slug}.mdx`);
  return buildContentData(parsedSlug, data, content);
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

  return sortContentByDate(Array.from(allContentMap.values()));
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
