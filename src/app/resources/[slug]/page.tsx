import { notFound } from 'next/navigation';

import ContentDetailPage from '@/components/ContentDetailPage';
import { getContentBySlug, getContentByType } from '@/lib/content-loader';

export async function generateStaticParams() {
  const resources = await getContentByType('resource');
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export default async function ResourceDetailPage({
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
      backHref="/resources"
      backText="返回资源列表"
    />
  );
}
