'use client';

import { useState } from 'react';

import { ContentData } from '@/lib/content';
import { cn } from '@/lib/utils';

import ContentPaper from './ContentPaper';

type TabType = 'paper' | 'code' | 'resources';

function formatStars(stars: number): string {
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1)}k`;
  }
  return stars.toString();
}

interface ContentTabsProps {
  content: ContentData;
}

export default function ContentTabs({ content }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('paper');

  const hasPaper = Boolean(content.arxiv);
  const hasCode = Boolean(content.github);
  const hasResources = Boolean(content.related && content.related.length > 0);

  return (
    <div className="col-span-12 mb-8">
      <div className="flex mb-0">
        <button
          onClick={() => {
            setActiveTab('paper');
          }}
          disabled={!hasPaper}
          className={cn(
            'px-4 py-2 text-sm border transition-colors cursor-pointer',
            'bg-white text-zinc-600',
            activeTab === 'paper'
              ? 'border-black'
              : 'border-zinc-300 hover:border-zinc-400 border-r-0',
            !hasPaper ? 'opacity-40 cursor-not-allowed' : '',
          )}
        >
          论文
        </button>
        <button
          onClick={() => {
            setActiveTab('code');
          }}
          disabled={!hasCode}
          className={cn(
            'px-4 py-2 text-sm border transition-colors cursor-pointer',
            'bg-white text-zinc-600',
            activeTab === 'code'
              ? 'border-black'
              : 'border-zinc-300 hover:border-zinc-400 border-r-0',
            !hasCode ? 'opacity-40 cursor-not-allowed' : '',
          )}
        >
          代码
        </button>
        <button
          onClick={() => {
            setActiveTab('resources');
          }}
          disabled={!hasResources}
          className={cn(
            'px-4 py-2 text-sm border transition-colors cursor-pointer',
            'bg-white text-zinc-600',
            activeTab === 'resources'
              ? 'border-black'
              : 'border-zinc-300 hover:border-zinc-400',
            !hasResources ? 'opacity-40 cursor-not-allowed' : '',
          )}
        >
          相关资源
        </button>
      </div>

      <div className="p-6 bg-zinc-50 border border-zinc-300 mt-4">
        {activeTab === 'paper' && <ContentPaper content={content} />}

        {activeTab === 'code' && content.github && (
          <div className="space-y-4">
            <a
              href={`https://github.com/${content.github.name}`}
              className="text-lg font-medium hover:text-zinc-600 transition-colors block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.github.name}
            </a>
            {content.github.stars && (
              <div className="text-sm text-zinc-600">
                {formatStars(content.github.stars)} stars
              </div>
            )}
            {content.github.tags && content.github.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
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

        {activeTab === 'resources' &&
          content.related &&
          content.related.length > 0 && (
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
          )}
      </div>
    </div>
  );
}
