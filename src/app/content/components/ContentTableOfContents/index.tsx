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
    <div className="py-8 pr-8">
      <div className="text-xs text-zinc-400 mb-8 tracking-[0.2em] font-bold">
        CONTENTS
      </div>
      <nav className="space-y-4">
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
