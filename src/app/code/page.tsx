import CodeItem from '@/components/CodeItem';
import ContentPage from '@/components/ContentPage';
import { getContentByType } from '@/lib/content-loader';

export default async function CodePage() {
  const code = await getContentByType('code');

  return (
    <ContentPage
      title="开源"
      subtitle="代码"
      description="收集整理高质量的 Agent 相关开源项目"
      items={code}
      renderItem={(data) => <CodeItem data={data} />}
    />
  );
}
