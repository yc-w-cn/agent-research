import MDXContent from '@/components/MDXContent';
import { ContentData } from '@/lib/content';

interface ContentMainProps {
  content: ContentData;
}

export default function ContentMain({ content }: ContentMainProps) {
  return (
    <main className="col-span-12 lg:col-span-8">
      <div className="prose prose-lg max-w-none">
        <MDXContent content={content.content} />
      </div>
    </main>
  );
}
