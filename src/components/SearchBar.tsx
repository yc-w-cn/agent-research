'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Search } from 'lucide-react';

import type { ContentItem } from '@/lib/content';

interface SearchBarProps {
  items: ContentItem[];
  placeholder?: string;
}

export default function SearchBar({
  items,
  placeholder = '搜索论文、代码或资源...',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ContentItem[]>([]);

  const handleSearch = (value: string) => {
    setQuery(value);
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setResults([]);
      return;
    }

    const lowerQuery = trimmedValue.toLowerCase();
    const filtered = items.filter((item) => {
      const titleMatch =
        item.title?.toLowerCase().includes(lowerQuery) ?? false;
      const categoriesMatch =
        item.categories?.some((cat) =>
          cat.toLowerCase().includes(lowerQuery),
        ) ?? false;
      const tagsMatch =
        item.github?.tags?.some((tag) =>
          tag.toLowerCase().includes(lowerQuery),
        ) ?? false;

      return titleMatch || categoriesMatch || tagsMatch;
    });
    setResults(filtered);
  };

  const getItemType = (item: ContentItem) => {
    if (item.arxiv) return { label: '论文', path: '/papers' };
    if (item.github) return { label: '代码', path: '/code' };
    if (item.related && item.related.length > 0)
      return { label: '资源', path: '/resources' };
    return { label: '资源', path: '/resources' };
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 border border-zinc-200 focus:border-black focus:outline-none transition-colors"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-zinc-200 shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((item) => {
            const { label, path } = getItemType(item);
            return (
              <Link
                key={item.slug}
                href={`${path}/${item.slug}`}
                className="block px-4 py-3 hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-b-0"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs text-zinc-500 uppercase tracking-wide mt-1">
                    {label}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-black">
                      {item.title}
                    </h3>
                    {item.categories && item.categories.length > 0 && (
                      <p className="text-xs text-zinc-500 mt-1">
                        {item.categories.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
