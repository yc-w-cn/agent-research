import dayjs from 'dayjs';

import { ContentData, getRelatedResourceUrl } from '@/lib/content';

import MDXContent from './MDXContent';
import Navigation from './Navigation';

interface ContentDetailPageProps {
  content: ContentData;
}

export default function ContentDetailPage({ content }: ContentDetailPageProps) {
  const externalUrl = getRelatedResourceUrl(content.slug);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <main className="mx-auto max-w-5xl px-8 py-16">
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
                  href={`https://github.com/${content.github.name}`}
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
            {externalUrl && (
              <div className="mt-6">
                <a
                  href={externalUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-zinc-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  访问链接
                </a>
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
