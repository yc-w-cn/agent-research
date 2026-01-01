import ContentList from '@/components/ContentList';
import PaperItem from '@/components/PaperItem';
import { getContentByType } from '@/lib/content-loader';

export default async function PapersPage() {
  const papers = await getContentByType('paper');

  return (
    <ContentList
      title="学术"
      subtitle="论文"
      description="探索最新的 Agent 领域研究成果"
      items={papers}
      renderItem={(contentItem) => <PaperItem contentItem={contentItem} />}
    />
  );
}
