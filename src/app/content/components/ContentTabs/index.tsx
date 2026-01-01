'use client';

import { useState } from 'react';

import { ContentData } from '@/lib/content';

import CodeContent from './CodeContent';
import PaperContent from './PaperContent';
import ResourcesContent from './ResourcesContent';
import TabButton from './TabButton';

type TabType = 'paper' | 'code' | 'resources';

interface ContentTabsProps {
  content: ContentData;
}

export default function ContentTabs({ content }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('paper');

  const hasPaper = Boolean(content.arxiv);
  const hasCode = Boolean(content.github);
  const hasResources = Boolean(content.related && content.related.length > 0);

  return (
    <div className="col-span-12 mb-8">
      <div className="flex mb-0">
        <TabButton
          label="论文"
          isActive={activeTab === 'paper'}
          hasContent={hasPaper}
          isFirst={true}
          isLast={false}
          onClick={() => {
            setActiveTab('paper');
          }}
        />
        <TabButton
          label="代码"
          isActive={activeTab === 'code'}
          hasContent={hasCode}
          isFirst={false}
          isLast={false}
          onClick={() => {
            setActiveTab('code');
          }}
        />
        <TabButton
          label="相关资源"
          isActive={activeTab === 'resources'}
          hasContent={hasResources}
          isFirst={false}
          isLast={true}
          onClick={() => {
            setActiveTab('resources');
          }}
        />
      </div>

      <div className=" bg-zinc-50 mt-4">
        {activeTab === 'paper' && <PaperContent content={content} />}
        {activeTab === 'code' && content.github && (
          <CodeContent github={content.github} />
        )}
        {activeTab === 'resources' && content.related && (
          <ResourcesContent resources={content.related} />
        )}
      </div>
    </div>
  );
}
