import { ContentData } from '@/lib/content';

import ContentMetadata from './ContentMetadata';
import ContentTableOfContents from './ContentTableOfContents';

interface ContentSidebarProps {
  content: ContentData;
}

export default function ContentSidebar({ content }: ContentSidebarProps) {
  return (
    <aside className="col-span-12 lg:col-span-4 space-y-8">
      <ContentTableOfContents content={content.content} />
      <ContentMetadata content={content} />
    </aside>
  );
}
