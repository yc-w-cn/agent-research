import { notFound } from 'next/navigation';

import { getAllContent, getContentBySlug } from '@/lib/content';

import ContentDetailPage from '../components/ContentDetailPage';

export async function generateStaticParams() {
  return getAllContent();
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
