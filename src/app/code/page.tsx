import Link from 'next/link';

import SearchBar from '@/components/SearchBar';
import { getContentByType } from '@/lib/content-loader';

export default async function CodePage() {
  const code = await getContentByType('code');

  const groupedCode = code.reduce<Record<string, typeof code>>((acc, item) => {
    const category = item.category || '其他';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

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
            开源
            <br />
            <span className="text-zinc-400">代码</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-600 max-w-xl">
            收集整理高质量的 Agent 相关开源项目
          </p>
          <div className="mt-12 max-w-2xl">
            <SearchBar items={code} />
          </div>
        </header>

        <section className="space-y-12">
          {Object.entries(groupedCode).map(([category, items]) => (
            <div key={category} className="border-t border-zinc-200 pt-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                {category}
              </h2>
              <div className="space-y-6">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/code/${item.slug}`}
                    className="group block"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                          {item.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
                          <span>{item.date}</span>
                          {item.github && (
                            <a
                              href={`https://github.com/${item.github}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-black transition-colors"
                            >
                              GitHub
                            </a>
                          )}
                          {item.stars && (
                            <span className="flex items-center gap-1">
                              ⭐ {item.stars}
                            </span>
                          )}
                        </div>
                        {item.tags && item.tags.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
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
