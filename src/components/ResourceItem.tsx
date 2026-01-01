import dayjs from 'dayjs';

import { ContentItem } from '@/lib/content';

import Card from './Card';

interface ResourceItemProps {
  data: ContentItem;
}

export default function ResourceItem({ data }: ResourceItemProps) {
  return (
    <Card data={data} href={`/resources/${data.slug}`}>
      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
        <span>{dayjs(data.date).format('YYYY-MM-DD')}</span>
      </div>
      {data.related && data.related.length > 0 && (
        <div className="mt-3 space-y-2">
          {data.related.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              className="block group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-sm text-zinc-700 group-hover:text-black transition-colors">
                {resource.title}
              </div>
              {resource.description && (
                <div className="text-xs text-zinc-600 mt-1">
                  {resource.description}
                </div>
              )}
            </a>
          ))}
        </div>
      )}
    </Card>
  );
}
