import { ContentItem } from '@/lib/content';

import Navigation from './Navigation';
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
      <Navigation />

      <main className="mx-auto max-w-5xl px-8 py-16">
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight leading-none">
            {title}
            <br />
            <span className="text-zinc-400">{subtitle}</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-xl">{description}</p>
          <div className="mt-8 max-w-2xl">
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
