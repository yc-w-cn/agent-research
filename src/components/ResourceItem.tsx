import dayjs from 'dayjs';

import { ContentItem } from '@/lib/content';
import { getRelatedResourceUrl } from '@/lib/content-loader';

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
      href={`/resources/${data.slug}`}
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

function getRelatedResourceInfo(slug: string) {
  const { relatedResourcesMap } = require('@/lib/content-loader');
  return relatedResourcesMap.get(slug);
}
