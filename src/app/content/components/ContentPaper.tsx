'use client';

import DescriptionText from '@/components/DescriptionText';
import DetailLanguageSwitcher from '@/components/DetailLanguageSwitcher';
import Tags from '@/components/Tags';
import { getArxivSubjectName } from '@/lib/arxiv-subjects';
import { ContentData } from '@/lib/content';

import { useLanguage } from '@/contexts/LanguageContext';

interface ContentPaperProps {
  content: ContentData;
}

export default function ContentPaper({ content }: ContentPaperProps) {
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

  if (!description && !content.arxiv) {
    return null;
  }

  return (
    <div className="col-span-12 mb-8">
      <div className="p-6 bg-zinc-50 border-l-2 border-black">
        <div className="flex justify-between items-start mb-4">
          <div className="text-sm text-zinc-500 uppercase tracking-wider">
            {content.arxiv?.title}
          </div>
          {(hasZhDescription || hasEnDescription) && (
            <DetailLanguageSwitcher
              hasZhContent={hasZhDescription}
              hasEnContent={hasEnDescription}
            />
          )}
        </div>

        {content.arxiv && (
          <div className="mb-4">
            <a
              href={`https://arxiv.org/abs/${content.arxiv.id}`}
              className="text-base font-medium hover:text-zinc-600 transition-colors inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              arXiv:{content.arxiv.id}
            </a>
          </div>
        )}

        {description && (
          <div className="text-base text-zinc-700 leading-relaxed">
            <DescriptionText text={description} />
          </div>
        )}

        {content.arxiv &&
          content.arxiv.subjects &&
          content.arxiv.subjects.length > 0 && (
            <Tags
              tags={content.arxiv.subjects.map((subject) =>
                getArxivSubjectName(subject),
              )}
            />
          )}
      </div>
    </div>
  );
}
