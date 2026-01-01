import Link from 'next/link';

import SearchBar from '@/components/SearchBar';
import { getContentByType } from '@/lib/content-loader';

export default async function PapersPage() {
  const papers = await getContentByType('paper');

  const groupedPapers = papers.reduce<Record<string, typeof papers>>(
    (acc, paper) => {
      const category = paper.category || '其他';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(paper);
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-5xl px-8 py-32">
        <Link
          href="/"
          className="inline-block mb-12 text-zinc-600 hover:text-black transition-colors"
        >
          ← 返回首页
        </Link>

        <header className="mb-24">
          <h1 className="text-8xl font-bold tracking-tight leading-none">
            学术
            <br />
            <span className="text-zinc-400">论文</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-600 max-w-xl">
            探索最新的 Agent 领域研究成果
          </p>
          <div className="mt-12 max-w-2xl">
            <SearchBar items={papers} />
          </div>
        </header>

        <section className="space-y-12">
          {Object.entries(groupedPapers).map(([category, items]) => (
            <div key={category} className="border-t border-zinc-200 pt-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                {category}
              </h2>
              <div className="space-y-6">
                {items.map((paper) => (
                  <Link
                    key={paper.slug}
                    href={`/papers/${paper.slug}`}
                    className="group block"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                      {paper.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
                      <span>{paper.date}</span>
                      {paper.arxiv && (
                        <a
                          href={`https://arxiv.org/abs/${paper.arxiv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black transition-colors"
                        >
                          arXiv:{paper.arxiv}
                        </a>
                      )}
                      {paper.github && (
                        <a
                          href={`https://github.com/${paper.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                    {paper.tags && paper.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {paper.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
