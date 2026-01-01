import { notFound } from 'next/navigation';

import ContentDetailPage from '@/components/ContentDetailPage';
import { getContentBySlug, getContentByType } from '@/lib/content-loader';

export async function generateStaticParams() {
  const codes = await getContentByType('code');
  return codes.map((code) => ({
    slug: code.slug,
  }));
}

export default async function CodeDetailPage({
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
