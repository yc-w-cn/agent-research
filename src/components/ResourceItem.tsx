import { ContentItem } from '@/lib/content';
import {
  getRelatedResourceInfo,
  getRelatedResourceUrl,
} from '@/lib/content/client';

import Card from './Card';

interface ResourceItemProps {
  data: ContentItem;
}

export default function ResourceItem({ data }: ResourceItemProps) {
  const externalUrl = getRelatedResourceUrl(data.slug);
  const relatedInfo = externalUrl ? getRelatedResourceInfo(data.slug) : null;

  return (
    <Card
      data={data}
      href={`/content/${data.slug}`}
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
