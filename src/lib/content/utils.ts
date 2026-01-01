import { MDX_EXTENSION } from './constants';

export function isMdxFile(file: string): boolean {
  return file.endsWith(MDX_EXTENSION);
}

export function isIndexFile(file: string): boolean {
  return file === 'index.mdx';
}

export function getSlugFromFile(file: string): string {
  return file.replace(MDX_EXTENSION, '');
}

export function sortContentByDate<T extends { date: string }>(items: T[]): T[] {
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
