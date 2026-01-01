import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllContent, getContentBySlug } from '@/lib/content';

import ContentDetailPage from '../components/ContentDetailPage';

export async function generateStaticParams() {
  return getAllContent();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContentBySlug(slug);

  if (!content) {
    return {
      title: '内容未找到',
    };
  }

  const description =
    content.arxiv?.description ||
    content.github?.description ||
    content.content.slice(0, 160);

  return {
    title: content.title,
    description:
      typeof description === 'string'
        ? description
        : description.zh || description.en || '',
    keywords: content.categories,
    openGraph: {
      title: content.title,
      description:
        typeof description === 'string'
          ? description
          : description.zh || description.en || '',
      type: 'article',
      publishedTime: content.date,
    },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  return <ContentDetailPage content={content} />;
}
