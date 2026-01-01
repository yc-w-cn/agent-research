'use client';

import Navigation from '@/components/Navigation';
import { ContentData } from '@/lib/content';

import ContentMain from './ContentMain';
import ContentSidebar from './ContentSidebar';

interface ContentDetailPageProps {
  content: ContentData;
}

export default function ContentDetailPage({ content }: ContentDetailPageProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <article className="grid grid-cols-12 gap-8">
          <header className="col-span-12 mb-4">
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              {content.title}
            </h1>
          </header>

          <ContentSidebar content={content} />

          <ContentMain content={content} />
        </article>
      </div>
    </div>
  );
}
