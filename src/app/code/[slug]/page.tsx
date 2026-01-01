// 需要安装依赖：pnpm add next-mdx-remote

import Link from 'next/link';
import { notFound } from 'next/navigation';

import MDXContent from '@/components/MDXContent';
import { getContentBySlug, getContentByType } from '@/lib/content-loader';

export async function generateStaticParams() {
  const codes = await getContentByType('code');
  return codes.map((code) => ({
    slug: code.slug,
  }));
}

export default async function CodeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getContentBySlug('code', slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-5xl px-8 py-32">
        <Link
          href="/code"
          className="inline-block mb-12 text-zinc-600 hover:text-black transition-colors"
        >
          ← 返回代码列表
        </Link>

        <article>
          <header className="mb-16">
            <h1 className="text-5xl font-bold tracking-tight leading-none mb-6">
              {content.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-zinc-600">
              <span>{content.date}</span>
              {content.github && (
                <a
                  href={`https://github.com/${content.github}`}
                  className="hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {content.stars && (
                <span className="flex items-center gap-1">
                  ⭐ {content.stars}
                </span>
              )}
            </div>
            {content.tags && content.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {content.tags.map((tag) => (
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
                    <p className="text-sm text-zinc-600 mt-1">
                      {resource.type === 'note' && '笔记'}
                      {resource.type === 'code' && '代码'}
                      {resource.type === 'paper' && '论文'}
                      {resource.type === 'resource' && '资源'}
                    </p>
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
