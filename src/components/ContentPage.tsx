import Link from 'next/link';

import { ContentItem } from '@/lib/content';

import SearchBar from './SearchBar';

interface ContentPageProps {
  title: string;
  subtitle: string;
  description: string;
  items: ContentItem[];
  renderItem: (item: ContentItem) => React.ReactNode;
}

export default function ContentPage({
  title,
  subtitle,
  description,
  items,
  renderItem,
}: ContentPageProps) {
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
            {title}
            <br />
            <span className="text-zinc-400">{subtitle}</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-600 max-w-xl">{description}</p>
          <div className="mt-12 max-w-2xl">
            <SearchBar items={items} />
          </div>
        </header>

        <section className="space-y-6">
          {items.map((item) => (
            <div key={item.slug} className="group">
              {renderItem(item)}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
