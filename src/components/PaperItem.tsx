'use client';

import dayjs from 'dayjs';

import { getArxivSubjectName } from '@/lib/arxiv-subjects';
import { ContentItem } from '@/lib/content';

import { Language, useLanguage } from '@/contexts/LanguageContext';

import Card from './Card';
import Tags from './Tags';

interface PaperItemProps {
  data: ContentItem;
}

export default function PaperItem({ data }: PaperItemProps) {
  const { language, setLanguage } = useLanguage();

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

  const handleLanguageChange = (lang: Language) => {
    if ((lang === 'zh' && hasZhContent) || (lang === 'en' && hasEnContent)) {
      setLanguage(lang);
    }
  };

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
    <Card data={data} href={`/papers/${data.slug}`}>
      <div className="absolute top-4 right-4 flex gap-1">
        <button
          onClick={() => {
            handleLanguageChange('zh');
          }}
          disabled={!hasZhContent}
          className={`px-2 py-1 text-xs border transition-colors ${
            language === 'zh'
              ? 'bg-black text-white border-black'
              : 'bg-white text-zinc-600 border-zinc-300 hover:border-zinc-400'
          } ${!hasZhContent ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          中文
        </button>
        <button
          onClick={() => {
            handleLanguageChange('en');
          }}
          disabled={!hasEnContent}
          className={`px-2 py-1 text-xs border transition-colors ${
            language === 'en'
              ? 'bg-black text-white border-black'
              : 'bg-white text-zinc-600 border-zinc-300 hover:border-zinc-400'
          } ${!hasEnContent ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          EN
        </button>
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
          <p>{description}</p>
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
