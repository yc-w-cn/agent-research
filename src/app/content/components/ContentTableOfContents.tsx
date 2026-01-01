'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  level: number;
  title: string;
}

interface ContentTableOfContentsProps {
  content: string;
}

export default function ContentTableOfContents({
  content,
}: ContentTableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
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

    setTocItems(items);
  }, [content]);

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="border-l-2 border-black pl-6">
      <div className="text-sm text-zinc-500 mb-4 uppercase tracking-wider">
        目录
      </div>
      <nav className="space-y-2">
        {tocItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block hover:text-zinc-600 transition-colors ${
              item.level === 1
                ? 'text-base font-medium'
                : item.level === 2
                  ? 'text-sm ml-4'
                  : 'text-xs ml-8'
            }`}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
