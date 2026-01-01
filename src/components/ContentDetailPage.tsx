import dayjs from 'dayjs';

import { ContentData } from '@/lib/content';
import { getRelatedResourceUrl } from '@/lib/content/client';

import MDXContent from './MDXContent';
import Navigation from './Navigation';

interface ContentDetailPageProps {
  content: ContentData;
  description?: string | null;
}

export default function ContentDetailPage({
  content,
  description,
}: ContentDetailPageProps) {
  const externalUrl = getRelatedResourceUrl(content.slug);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <article className="grid grid-cols-12 gap-8">
          <header className="col-span-12 mb-4">
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              {content.title}
            </h1>
          </header>

          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="border-l-2 border-black pl-6 space-y-6">
              <div>
                <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">
                  日期
                </div>
                <div className="text-base font-medium">
                  {dayjs(content.date).format('YYYY-MM-DD')}
                </div>
              </div>

              {content.arxiv && (
                <div>
                  <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">
                    论文
                  </div>
                  <a
                    href={`https://arxiv.org/abs/${content.arxiv.id}`}
                    className="text-base font-medium hover:text-zinc-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    arXiv:{content.arxiv.id}
                  </a>
                  {content.arxiv.subjects &&
                    content.arxiv.subjects.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {content.arxiv.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="text-xs px-3 py-1.5 bg-zinc-100 text-zinc-700"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    )}
                </div>
              )}

              {content.github && (
                <div>
                  <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">
                    代码仓库
                  </div>
                  <a
                    href={`https://github.com/${content.github.name}`}
                    className="text-base font-medium hover:text-zinc-600 transition-colors block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.github.name}
                  </a>
                  {content.github.stars && (
                    <div className="mt-2 text-sm text-zinc-600">
                      {content.github.stars.toLocaleString()} stars
                    </div>
                  )}
                  {content.github.tags && content.github.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {content.github.tags.map((tag) => (
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
              )}

              {externalUrl && (
                <div>
                  <a
                    href={externalUrl}
                    className="inline-block px-6 py-3 text-sm bg-black text-white hover:bg-zinc-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    访问链接
                  </a>
                </div>
              )}
            </div>

            {content.related && content.related.length > 0 && (
              <div className="border-l-2 border-black pl-6">
                <div className="text-sm text-zinc-500 mb-4 uppercase tracking-wider">
                  相关资源
                </div>
                <div className="space-y-4">
                  {content.related.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      className="block group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-base font-medium group-hover:text-zinc-600 transition-colors leading-relaxed">
                        {resource.title}
                      </h3>
                      {resource.description && (
                        <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                          {resource.description}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-12 lg:col-span-8">
            {description && (
              <div className="mb-8 p-6 bg-zinc-50 border-l-2 border-black">
                <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">
                  论文简介
                </div>
                <p className="text-base text-zinc-700 leading-relaxed">
                  {description}
                </p>
              </div>
            )}
            <div className="prose prose-lg max-w-none">
              <MDXContent content={content.content} />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
