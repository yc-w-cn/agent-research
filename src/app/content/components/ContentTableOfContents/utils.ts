export interface TocItem {
  id: string;
  level: number;
  title: string;
}

export function parseContentToToc(content: string): TocItem[] {
  const items: TocItem[] = [];
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    items.push({ id, level, title });
  }

  return items;
}

export function getTocItemClassName(level: number): string {
  const baseClass =
    'block hover:text-zinc-600 transition-colors leading-relaxed';

  if (level === 1) {
    return `${baseClass} text-base font-medium`;
  }

  if (level === 2) {
    return `${baseClass} text-sm ml-4`;
  }

  return `${baseClass} text-sm ml-8 text-zinc-600`;
}
