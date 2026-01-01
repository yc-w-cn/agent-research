import Link from 'next/link';

import { ContentItem } from '@/lib/content';

interface CodeItemProps {
  contentItem: ContentItem;
}

export default function CodeItem({ contentItem }: CodeItemProps) {
  return (
    <Link href={`/code/${contentItem.slug}`} className="block">
      <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
        {contentItem.title}
      </h3>
      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
        <span>{contentItem.date}</span>
        {contentItem.github && (
          <a
            href={`https://github.com/${contentItem.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
        )}
        {contentItem.stars && (
          <span className="flex items-center gap-1">
            ⭐ {contentItem.stars}
          </span>
        )}
      </div>
      {contentItem.tags && contentItem.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {contentItem.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
