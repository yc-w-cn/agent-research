import { ContentItem } from '@/lib/content';

import Navigation from './Navigation';
import SearchBar from './SearchBar';

interface ContentPageProps {
  title: string;
  description: string;
  items: ContentItem[];
  renderItem: (item: ContentItem) => React.ReactNode;
  searchPlaceholder?: string;
}

export default function ContentPage({
  title,
  description,
  items,
  renderItem,
  searchPlaceholder,
}: ContentPageProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <main className="mx-auto max-w-5xl px-8 pt-16 pb-16">
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight leading-none">
            {title}
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-xl">{description}</p>
          <div className="mt-8 max-w-2xl">
            <SearchBar items={items} placeholder={searchPlaceholder} />
          </div>
        </header>

        <section className="space-y-8">
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
