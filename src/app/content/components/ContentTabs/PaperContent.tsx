'use client';

import { ChevronRightIcon } from 'lucide-react';

import DescriptionText from '@/components/DescriptionText';
import DetailLanguageSwitcher from '@/components/DetailLanguageSwitcher';
import Tags from '@/components/Tags';
import { getArxivSubjectName } from '@/lib/arxiv-subjects';
import { ContentData } from '@/lib/content';

import { useLanguage } from '@/contexts/LanguageContext';

interface PaperContentProps {
  content: ContentData;
}

export default function PaperContent({ content }: PaperContentProps) {
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
      <div className="p-6 bg-zinc-50">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold text-zinc-900 tracking-wider">
            {content.arxiv?.title}
          </div>
          {(hasZhDescription || hasEnDescription) && (
            <DetailLanguageSwitcher
              hasZhContent={hasZhDescription}
              hasEnContent={hasEnDescription}
            />
          )}
        </div>

        {description && (
          <div className="text-base text-zinc-700 leading-relaxed">
            <DescriptionText text={description} />
          </div>
        )}

        <div className="flex justify-between mt-4 items-end">
          {content.arxiv &&
            content.arxiv.subjects &&
            content.arxiv.subjects.length > 0 && (
              <Tags
                tags={content.arxiv.subjects.map((subject) =>
                  getArxivSubjectName(subject),
                )}
              />
            )}
          {content.arxiv && (
            <div className="flex items-center">
              <a
                href={`https://arxiv.org/abs/${content.arxiv.id}`}
                className="text-sm hover:text-zinc-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                arXiv:{content.arxiv.id}
              </a>
              <ChevronRightIcon className="w-3 h-3" strokeWidth={2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
