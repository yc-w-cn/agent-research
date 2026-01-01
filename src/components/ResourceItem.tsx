import { ContentItem } from '@/lib/content';
import { getRelatedResourceInfo } from '@/lib/content/client';

import Card from './Card';

interface ResourceItemProps {
  data: ContentItem;
}

export default function ResourceItem({ data }: ResourceItemProps) {
  const relatedInfo = getRelatedResourceInfo(data.slug);
  const externalUrl = relatedInfo?.related.url || null;
  const parentSlug = relatedInfo?.parentSlug || null;

  return (
    <Card
      data={data}
      href={parentSlug ? `/content/${parentSlug}` : `/content/${data.slug}`}
      externalUrl={externalUrl || undefined}
    >
      {relatedInfo?.related.description && (
        <div className="mt-3 text-sm text-zinc-700">
          {relatedInfo.related.description}
        </div>
      )}
    </Card>
  );
}
