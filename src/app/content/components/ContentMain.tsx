import MDXContent from '@/components/MDXContent';
import { ContentData } from '@/lib/content';

import ContentDescription from './ContentDescription';

interface ContentMainProps {
  content: ContentData;
}

export default function ContentMain({ content }: ContentMainProps) {
  return (
    <main className="col-span-12 lg:col-span-8">
      <ContentDescription content={content} />
      <div className="prose prose-lg max-w-none">
        <MDXContent content={content.content} />
      </div>
    </main>
  );
}
