'use client';

import { cn } from '@/lib/utils';

import { Language, useLanguage } from '@/contexts/LanguageContext';

interface DetailLanguageSwitcherProps {
  hasZhContent: boolean;
  hasEnContent: boolean;
}

export default function DetailLanguageSwitcher({
  hasZhContent,
  hasEnContent,
}: DetailLanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    if ((lang === 'zh' && hasZhContent) || (lang === 'en' && hasEnContent)) {
      setLanguage(lang);
    }
  };

  return (
    <div className="flex">
      <button
        onClick={() => {
          handleLanguageChange('zh');
        }}
        disabled={!hasZhContent}
        className={cn(
          'px-3 py-1.5 text-sm border transition-colors cursor-pointer',
          'bg-white text-zinc-600',
          language === 'zh'
            ? 'border-black'
            : 'border-zinc-300 hover:border-zinc-400 border-r-0',
          !hasZhContent ? 'opacity-40 cursor-not-allowed' : '',
        )}
      >
        中文
      </button>
      <button
        onClick={() => {
          handleLanguageChange('en');
        }}
        disabled={!hasEnContent}
        className={cn(
          'px-3 py-1.5 text-sm border transition-colors cursor-pointer',
          'bg-white text-zinc-600',
          language === 'en'
            ? 'border-black'
            : 'border-zinc-300 hover:border-zinc-400 border-l-0',
          !hasEnContent ? 'opacity-40 cursor-not-allowed' : '',
        )}
      >
        EN
      </button>
    </div>
  );
}
