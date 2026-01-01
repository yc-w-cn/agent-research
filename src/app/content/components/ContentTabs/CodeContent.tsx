import { Star } from 'lucide-react';

import GitHubIcon from '@/components/GitHubIcon';
import Tags from '@/components/Tags';
import { ContentData } from '@/lib/content';
import { formatStars } from '@/lib/utils';

interface CodeContentProps {
  github: NonNullable<ContentData['github']>;
}

export default function CodeContent({ github }: CodeContentProps) {
  const [owner, repo] = github.name.split('/');

  return (
    <div className="space-y-4 p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-zinc-500">{owner}</div>
          <a
            href={`https://github.com/${github.name}`}
            className="text-lg font-medium hover:text-zinc-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`https://github.com/${github.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-black transition-colors text-sm"
          >
            <GitHubIcon />
            <span>代码仓库</span>
          </a>
          {github.stars && (
            <span className="flex items-center gap-1 text-sm text-zinc-600">
              <Star className="w-4 h-4" />
              <span>{formatStars(github.stars)}</span>
            </span>
          )}
        </div>
      </div>
      {github.description && (
        <p className="text-sm text-zinc-600 whitespace-pre-wrap">
          {github.description}
        </p>
      )}
      {github.tags && github.tags.length > 0 && <Tags tags={github.tags} />}
    </div>
  );
}
