import dayjs from 'dayjs';

import { ContentItem } from '@/lib/content';

import Card from './Card';

interface PaperItemProps {
  data: ContentItem;
}

export default function PaperItem({ data }: PaperItemProps) {
  return (
    <Card data={data} href={`/papers/${data.slug}`}>
      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
        <span>{dayjs(data.date).format('YYYY-MM-DD')}</span>
        {data.arxiv && (
          <a
            href={`https://arxiv.org/abs/${data.arxiv.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            arXiv:{data.arxiv.id}
          </a>
        )}
      </div>
      {data.arxiv?.subjects && data.arxiv.subjects.length > 0 && (
        <div className="mt-2 text-xs text-zinc-600">
          {data.arxiv.subjects.join('; ')}
        </div>
      )}
      {data.arxiv?.description && (
        <div className="mt-2 text-sm text-zinc-700">
          {data.arxiv.description}
        </div>
      )}
    </Card>
  );
}
