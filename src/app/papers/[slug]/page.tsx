import { notFound } from 'next/navigation';

import ContentDetailPage from '@/components/ContentDetailPage';
import { getContentBySlug, getContentByType } from '@/lib/content-loader';

export async function generateStaticParams() {
  const papers = await getContentByType('paper');
  return papers.map((paper) => ({
    slug: paper.slug,
  }));
}

export default async function PaperDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  return (
    <ContentDetailPage
      content={content}
      backHref="/papers"
      backText="返回论文列表"
    />
  );
}
