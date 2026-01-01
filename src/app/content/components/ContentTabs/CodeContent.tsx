import { ContentData } from '@/lib/content';

function formatStars(stars: number): string {
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1)}k`;
  }
  return stars.toString();
}

interface CodeContentProps {
  github: NonNullable<ContentData['github']>;
}

export default function CodeContent({ github }: CodeContentProps) {
  return (
    <div className="space-y-4">
      <a
        href={`https://github.com/${github.name}`}
        className="text-lg font-medium hover:text-zinc-600 transition-colors block"
        target="_blank"
        rel="noopener noreferrer"
      >
        {github.name}
      </a>
      {github.stars && (
        <div className="text-sm text-zinc-600">
          {formatStars(github.stars)} stars
        </div>
      )}
      {github.tags && github.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {github.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 bg-zinc-100 text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
