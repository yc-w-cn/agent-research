import ContentPage from '@/components/ContentPage';
import ResourceItem from '@/components/ResourceItem';
import { getContentByType } from '@/lib/content';

export default async function ResourcesPage() {
  const resources = await getContentByType('resource');

  return (
    <ContentPage
      title="相关资源"
      description="汇总 Agent 研究所需的各类资源"
      items={resources}
      renderItem={(data) => <ResourceItem data={data} />}
      searchPlaceholder="搜索相关资源..."
    />
  );
}
