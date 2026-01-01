'use client';

import { useEffect, useState } from 'react';

import { getTocItemClassName, parseContentToToc, type TocItem } from './utils';

interface ContentTableOfContentsProps {
  content: string;
}

export default function ContentTableOfContents({
  content,
}: ContentTableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const items = parseContentToToc(content);
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
        {tocItems.map((item, index) => (
          <a
            key={`${item.id}-${index}`}
            href={`#${item.id}`}
            className={getTocItemClassName(item.level)}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
