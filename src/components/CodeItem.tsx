import Link from 'next/link';

import dayjs from 'dayjs';

import { ContentItem } from '@/lib/content';

interface CodeItemProps {
  data: ContentItem;
}

export default function CodeItem({ data }: CodeItemProps) {
  return (
    <Link href={`/code/${data.slug}`} className="block">
      <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
        {data.title}
      </h3>
      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
        <span>{dayjs(data.date).format('YYYY-MM-DD')}</span>
        {data.github && (
          <a
            href={`https://github.com/${data.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
        )}
        {data.stars && (
          <span className="flex items-center gap-1">⭐ {data.stars}</span>
        )}
      </div>
      {data.tags && data.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {data.tags.map((tag) => (
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
