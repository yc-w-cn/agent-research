import fs from 'fs';

import { buildContentData, buildContentItem } from './builder';
import { setRelatedResourcesMap } from './client';
import { CONTENT_DIR } from './constants';
import { parseMdxFile } from './parser';
import type {
  ContentData,
  ContentItem,
  ContentType,
  RelatedResource,
} from './types';
import { isIndexFile, isMdxFile, sortContentByDate } from './utils';

let isMapInitialized = false;

export function buildRelatedResourcesMap() {
  if (isMapInitialized) return;

  const relatedResourcesMap = new Map<
    string,
    { parentSlug: string; related: RelatedResource }
  >();

  const files = fs.readdirSync(CONTENT_DIR);

  for (const file of files) {
    if (isIndexFile(file) || !isMdxFile(file)) continue;

    const { slug, data } = parseMdxFile(file);

    if (data.related && Array.isArray(data.related)) {
      data.related.forEach((related: RelatedResource, index: number) => {
        const relatedSlug = `${slug}-related-${index}`;
        relatedResourcesMap.set(relatedSlug, { parentSlug: slug, related });
      });
    }
  }

  setRelatedResourcesMap(relatedResourcesMap);
  isMapInitialized = true;
}

function ensureMapInitialized() {
  if (!isMapInitialized) {
    buildRelatedResourcesMap();
  }
}

export async function getContentByType(
  type: ContentType,
  includeOriginal = true,
): Promise<ContentItem[]> {
  ensureMapInitialized();

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

    if (shouldInclude && (includeOriginal || !item.related)) {
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
  ensureMapInitialized();

  const { getRelatedResourceInfo } = await import('./client');
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
