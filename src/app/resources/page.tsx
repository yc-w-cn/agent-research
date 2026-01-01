import ContentList from '@/components/ContentList';
import ResourceItem from '@/components/ResourceItem';
import { getContentByType } from '@/lib/content-loader';

export default async function ResourcesPage() {
  const resources = await getContentByType('resource');

  return (
    <ContentList
      title="相关"
      subtitle="资源"
      description="汇总 Agent 研究所需的各类资源"
      items={resources}
      renderItem={(contentItem) => <ResourceItem contentItem={contentItem} />}
    />
  );
}
