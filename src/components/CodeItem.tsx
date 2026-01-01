import dayjs from 'dayjs';

import { ContentItem } from '@/lib/content';

import Card from './Card';

interface CodeItemProps {
  data: ContentItem;
}

export default function CodeItem({ data }: CodeItemProps) {
  return (
    <Card data={data} href={`/code/${data.slug}`}>
      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
        <span>{dayjs(data.date).format('YYYY-MM-DD')}</span>
        {data.github && (
          <a
            href={`https://github.com/${data.github.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
        )}
        {data.github?.stars && (
          <span className="flex items-center gap-1">
            ⭐ {data.github.stars}
          </span>
        )}
      </div>
      {data.github?.tags && data.github.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {data.github.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 border border-zinc-200 text-zinc-700 hover:border-zinc-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}
