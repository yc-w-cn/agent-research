'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Search } from 'lucide-react';

import type { ContentItem } from '@/lib/content';

interface SearchBarProps {
  items: ContentItem[];
}

export default function SearchBar({ items }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ContentItem[]>([]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = value.toLowerCase();
    const filtered = items.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
    });
    setResults(filtered);
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      paper: '论文',
      code: '代码',
      resource: '资源',
    };
    return labels[type] || type;
  };

  const getTypePath = (type: string) => {
    const paths: Record<string, string> = {
      paper: '/papers',
      code: '/code',
      resource: '/resources',
    };
    return paths[type] || '/';
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
          placeholder="搜索论文、代码或资源..."
          className="w-full pl-12 pr-4 py-3 border border-zinc-200 focus:border-black focus:outline-none transition-colors"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-zinc-200 shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((item) => (
            <Link
              key={`${item.type}-${item.slug}`}
              href={`${getTypePath(item.type)}/${item.slug}`}
              className="block px-4 py-3 hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <span className="text-xs text-zinc-500 uppercase tracking-wide mt-1">
                  {getTypeLabel(item.type)}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-black">
                    {item.title}
                  </h3>
                  {item.category && (
                    <p className="text-xs text-zinc-500 mt-1">
                      {item.category}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
