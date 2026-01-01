import { Star } from 'lucide-react';

import { ContentItem } from '@/lib/content';

import Card from './Card';
import Tags from './Tags';

interface CodeItemProps {
  data: ContentItem;
}

function formatStars(stars: number): string {
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1)}k`;
  }
  return stars.toString();
}

export default function CodeItem({ data }: CodeItemProps) {
  return (
    <Card data={data} href={`/code/${data.slug}`}>
      {data.github?.description && (
        <p className="mt-2 text-sm text-zinc-600 whitespace-pre-wrap">
          {data.github.description}
        </p>
      )}
      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
        {data.github && (
          <a
            href={`https://github.com/${data.github.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-black transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>代码仓库</span>
          </a>
        )}
        {data.github?.stars && (
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{formatStars(data.github.stars)}</span>
          </span>
        )}
      </div>
      {data.github?.tags && data.github.tags.length > 0 && (
        <Tags tags={data.github.tags} />
      )}
    </Card>
  );
}
