import Link from 'next/link';

import { ContentItem } from '@/lib/content';

interface ResourceItemProps {
  contentItem: ContentItem;
}

export default function ResourceItem({ contentItem }: ResourceItemProps) {
  return (
    <Link href={`/resources/${contentItem.slug}`} className="block">
      <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
        {contentItem.title}
      </h3>
      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
        <span>{contentItem.date}</span>
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
