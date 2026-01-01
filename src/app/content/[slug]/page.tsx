import { notFound } from 'next/navigation';

import ContentDetailPageWrapper from '@/components/ContentDetailPageWrapper';
import { getAllContent, getContentBySlug } from '@/lib/content';

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

  return <ContentDetailPageWrapper content={content} />;
}
