'use client';

import { useState } from 'react';

import dayjs from 'dayjs';

import { getArxivSubjectName } from '@/lib/arxiv-subjects';
import { ContentItem } from '@/lib/content';

import Card from './Card';
import DescriptionText from './DescriptionText';
import LanguageSwitcher from './LanguageSwitcher';
import Tags from './Tags';

interface PaperItemProps {
  data: ContentItem;
}

export default function PaperItem({ data }: PaperItemProps) {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');

  const hasZhContent = Boolean(
    typeof data.arxiv?.description === 'object'
      ? data.arxiv.description?.zh
      : data.arxiv?.description,
  );
  const hasEnContent = Boolean(
    typeof data.arxiv?.description === 'object'
      ? data.arxiv.description?.en
      : data.arxiv?.description,
  );

  const getDescription = () => {
    if (typeof data.arxiv?.description === 'object') {
      if (language === 'zh' && data.arxiv.description?.zh) {
        return data.arxiv.description.zh;
      }
      if (language === 'en' && data.arxiv.description?.en) {
        return data.arxiv.description.en;
      }
    }
    return typeof data.arxiv?.description === 'string'
      ? data.arxiv.description
      : null;
  };

  const description = getDescription();

  return (
    <Card data={data} href={`/content/${data.slug}`}>
      <div className="absolute top-4 right-4">
        <LanguageSwitcher
          hasZhContent={hasZhContent}
          hasEnContent={hasEnContent}
          language={language}
          setLanguage={setLanguage}
        />
      </div>
      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
        <span>{dayjs(data.date).format('YYYY-MM-DD')}</span>
        {data.arxiv && (
          <a
            href={`https://arxiv.org/abs/${data.arxiv.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            arXiv:{data.arxiv.id}
          </a>
        )}
      </div>
      {description && (
        <div className="mt-4 text-sm text-zinc-700">
          <DescriptionText text={description} />
        </div>
      )}
      {data.arxiv?.subjects && data.arxiv.subjects.length > 0 && (
        <Tags
          tags={data.arxiv.subjects.map((subject) =>
            getArxivSubjectName(subject),
          )}
        />
      )}
    </Card>
  );
}
