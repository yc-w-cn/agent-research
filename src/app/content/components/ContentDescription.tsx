'use client';

import DetailLanguageSwitcher from '@/components/DetailLanguageSwitcher';
import { ContentData } from '@/lib/content';

import { useLanguage } from '@/contexts/LanguageContext';

interface ContentDescriptionProps {
  content: ContentData;
}

export default function ContentDescription({
  content,
}: ContentDescriptionProps) {
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

  if (!description) {
    return null;
  }

  return (
    <div className="relative">
      {(hasZhDescription || hasEnDescription) && (
        <div className="absolute -top-12 right-0 z-10">
          <DetailLanguageSwitcher
            hasZhContent={hasZhDescription}
            hasEnContent={hasEnDescription}
          />
        </div>
      )}
      <div className="p-6 bg-zinc-50 border-l-2 border-black">
        <div className="text-sm text-zinc-500 mb-2 uppercase tracking-wider">
          论文简介
        </div>
        <p className="text-base text-zinc-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
