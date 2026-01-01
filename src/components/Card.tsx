import Link from 'next/link';

import { ChevronRightIcon } from 'lucide-react';

import { ContentItem } from '@/lib/content';

interface CardProps {
  data: ContentItem;
  href: string;
  children: React.ReactNode;
  topRight?: React.ReactNode;
  externalUrl?: string;
}

export default function Card({
  data,
  href,
  children,
  topRight,
  externalUrl,
}: CardProps) {
  return (
    <div className="bg-zinc-50 p-4 border border-transparent relative">
      {topRight && (
        <div className="absolute top-4 right-4 flex items-center gap-4 text-sm text-zinc-600">
          {topRight}
        </div>
      )}
      <h3 className="text-lg font-semibold">{data.title}</h3>
      {children}
      <div className="flex justify-end items-center gap-4 absolute bottom-4 right-4">
        <div className="flex items-center">
          <Link
            href={href}
            className="text-sm text-zinc-600 hover:text-black transition-colors"
          >
            查看详细
          </Link>
          <ChevronRightIcon className="w-3 h-3" strokeWidth={2} />
        </div>
        {externalUrl && (
          <div className="flex items-center">
            <a
              href={externalUrl}
              className="text-sm text-zinc-600 hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              访问链接
            </a>
            <ChevronRightIcon className="w-3 h-3" strokeWidth={2} />
          </div>
        )}
      </div>
    </div>
  );
}
