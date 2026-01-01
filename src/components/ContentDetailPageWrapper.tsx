'use client';

import { ContentData } from '@/lib/content';

import { useLanguage } from '@/contexts/LanguageContext';

import ContentDetailPage from './ContentDetailPage';
import DetailLanguageSwitcher from './DetailLanguageSwitcher';

interface ContentDetailPageWrapperProps {
  content: ContentData;
}

export default function ContentDetailPageWrapper({
  content,
}: ContentDetailPageWrapperProps) {
  const { language } = useLanguage();

  const hasZhDescription = Boolean(
    typeof content.arxiv?.description === 'object'
      ? content.arxiv.description?.zh
      : content.arxiv?.description,
  );
  const hasEnDescription = Boolean(
    typeof content.arxiv?.description === 'object'
      ? content.arxiv.description?.en
      : content.arxiv?.description,
  );

  const getDescription = () => {
    if (typeof content.arxiv?.description === 'object') {
      if (language === 'zh' && content.arxiv.description?.zh) {
        return content.arxiv.description.zh;
      }
      if (language === 'en' && content.arxiv.description?.en) {
        return content.arxiv.description.en;
      }
    }
    return typeof content.arxiv?.description === 'string'
      ? content.arxiv.description
      : null;
  };

  const description = getDescription();

  return (
    <>
      {(hasZhDescription || hasEnDescription) && (
        <div className="fixed top-20 right-6 z-50">
          <DetailLanguageSwitcher
            hasZhContent={hasZhDescription}
            hasEnContent={hasEnDescription}
          />
        </div>
      )}
      <ContentDetailPage content={content} description={description} />
    </>
  );
}
