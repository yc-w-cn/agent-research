import Link from 'next/link';

import { ContentItem } from '@/lib/content';

interface CardProps {
  data: ContentItem;
  href: string;
  children: React.ReactNode;
}

export default function Card({ data, href, children }: CardProps) {
  return (
    <div className="bg-zinc-50 p-4 border border-transparent">
      <h3 className="text-lg font-semibold">{data.title}</h3>
      {children}
    </div>
  );
}
