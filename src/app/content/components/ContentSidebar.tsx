import { ContentData } from '@/lib/content';

import ContentTableOfContents from './ContentTableOfContents';

interface ContentSidebarProps {
  content: ContentData;
}

export default function ContentSidebar({ content }: ContentSidebarProps) {
  return (
    <aside className="col-span-12 lg:col-span-4">
      <ContentTableOfContents content={content.content} />
    </aside>
  );
}
