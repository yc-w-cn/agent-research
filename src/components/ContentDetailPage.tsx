import Link from 'next/link';

import dayjs from 'dayjs';

import { ContentData } from '@/lib/content';

import MDXContent from './MDXContent';

interface ContentDetailPageProps {
  content: ContentData;
  backHref: string;
  backText: string;
}

export default function ContentDetailPage({
  content,
  backHref,
  backText,
}: ContentDetailPageProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-5xl px-8 py-32">
        <Link
          href={backHref}
          className="inline-block mb-12 text-zinc-600 hover:text-black transition-colors"
        >
          ← {backText}
        </Link>

        <article>
          <header className="mb-16">
            <h1 className="text-5xl font-bold tracking-tight leading-none mb-6">
              {content.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-zinc-600">
              <span>{dayjs(content.date).format('YYYY-MM-DD')}</span>
              {content.arxiv && (
                <a
                  href={`https://arxiv.org/abs/${content.arxiv.id}`}
                  className="hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arXiv:{content.arxiv.id}
                </a>
              )}
              {content.github && (
                <a
                  href={`https://github.com/${content.github.repo}`}
                  className="hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {content.github?.stars && (
                <span className="flex items-center gap-1">
                  ⭐ {content.github.stars}
                </span>
              )}
            </div>
            {content.github?.tags && content.github.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {content.github.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-zinc-100 text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <MDXContent content={content.content} />

          {content.related && content.related.length > 0 && (
            <section className="mt-16 pt-8 border-t border-zinc-200">
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                相关资源
              </h2>
              <div className="space-y-4">
                {content.related.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    className="block group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                      {resource.title}
                    </h3>
                  </a>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </div>
  );
}
