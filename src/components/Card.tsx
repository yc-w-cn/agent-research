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
      <Link href={href} className="block">
        <h3 className="text-lg font-semibold">{data.title}</h3>
      </Link>
      {children}
    </div>
  );
}
