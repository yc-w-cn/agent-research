import ContentPage from '@/components/ContentPage';
import PaperItem from '@/components/PaperItem';
import { getContentByType } from '@/lib/content-loader';

export default async function PapersPage() {
  const papers = await getContentByType('paper');

  return (
    <ContentPage
      title="学术论文"
      description="探索最新的 Agent 领域研究成果"
      items={papers}
      renderItem={(data) => <PaperItem data={data} />}
    />
  );
}
