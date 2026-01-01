import type { RelatedResource } from './types';

let relatedResourcesMap = new Map<
  string,
  { parentSlug: string; related: RelatedResource }
>();

export function setRelatedResourcesMap(
  map: Map<string, { parentSlug: string; related: RelatedResource }>,
) {
  relatedResourcesMap = map;
}

export function getRelatedResourceInfo(slug: string) {
  return relatedResourcesMap.get(slug);
}

export function getRelatedResourceUrl(slug: string): string | null {
  const relatedInfo = relatedResourcesMap.get(slug);
  return relatedInfo?.related.url || null;
}

export function getRelatedResourceParentSlug(slug: string): string | null {
  const relatedInfo = relatedResourcesMap.get(slug);
  return relatedInfo?.parentSlug || null;
}
