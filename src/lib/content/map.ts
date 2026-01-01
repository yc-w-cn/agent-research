import fs from 'fs';

import { CONTENT_DIR } from './constants';
import { parseMdxFile } from './parser';
import type { RelatedResource } from './types';
import { isIndexFile, isMdxFile } from './utils';

const relatedResourcesMap = new Map<
  string,
  { parentSlug: string; related: RelatedResource }
>();

export function buildRelatedResourcesMap() {
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
}

export function getRelatedResourcesMap() {
  return relatedResourcesMap;
}

export { relatedResourcesMap };

export function getRelatedResourceInfo(slug: string) {
  return relatedResourcesMap.get(slug);
}

export function getRelatedResourceUrl(slug: string): string | null {
  const relatedInfo = relatedResourcesMap.get(slug);
  return relatedInfo?.related.url || null;
}
