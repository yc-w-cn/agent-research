import CodeItem from '@/components/CodeItem';
import ContentList from '@/components/ContentList';
import { getContentByType } from '@/lib/content-loader';

export default async function CodePage() {
  const code = await getContentByType('code');

  return (
    <ContentList
      title="开源"
      subtitle="代码"
      description="收集整理高质量的 Agent 相关开源项目"
      items={code}
      renderItem={(contentItem) => <CodeItem contentItem={contentItem} />}
    />
  );
}
