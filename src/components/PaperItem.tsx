import dayjs from 'dayjs';

import { getArxivSubjectName } from '@/lib/arxiv-subjects';
import { ContentItem } from '@/lib/content';

import Card from './Card';
import Tags from './Tags';

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
      {data.arxiv?.description && (
        <div className="mt-4 text-sm text-zinc-700 space-y-2">
          {data.arxiv.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
      {data.arxiv?.subjects && data.arxiv.subjects.length > 0 && (
        <Tags
          tags={data.arxiv.subjects.map((subject) =>
            getArxivSubjectName(subject),
          )}
        />
      )}
    </Card>
  );
}
