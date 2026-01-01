import { Star } from 'lucide-react';

import { ContentItem } from '@/lib/content';

import Card from './Card';
import GitHubIcon from './GitHubIcon';
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
  const topRightContent = (
    <>
      {data.github && (
        <a
          href={`https://github.com/${data.github.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition-colors"
        >
          <GitHubIcon />
          <span>代码仓库</span>
        </a>
      )}
      {data.github?.stars && (
        <span className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{formatStars(data.github.stars)}</span>
        </span>
      )}
    </>
  );

  return (
    <Card data={data} href={`/content/${data.slug}`} topRight={topRightContent}>
      {data.github?.description && (
        <p className="mt-2 text-sm text-zinc-600 whitespace-pre-wrap">
          {data.github.description}
        </p>
      )}
      {data.github?.tags && data.github.tags.length > 0 && (
        <Tags tags={data.github.tags} />
      )}
    </Card>
  );
}
