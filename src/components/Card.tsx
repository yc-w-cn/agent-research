import Link from 'next/link';

import { ChevronRightIcon } from 'lucide-react';

import { ContentItem } from '@/lib/content';

interface CardProps {
  data: ContentItem;
  href: string;
  children: React.ReactNode;
}

export default function Card({ data, href, children }: CardProps) {
  return (
    <div className="bg-zinc-50 p-4 border border-transparent relative">
      <h3 className="text-lg font-semibold">{data.title}</h3>
      {children}
      <div className="flex justify-end items-center absolute bottom-4 right-4">
        <Link
          href={href}
          className="text-sm text-zinc-600 hover:text-black transition-colors"
        >
          查看详细
        </Link>
        <ChevronRightIcon className="w-3 h-3" strokeWidth={2} />
      </div>
    </div>
  );
}
