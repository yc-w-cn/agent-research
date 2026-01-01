'use client';

import { cn } from '@/lib/utils';

import { Language } from '@/contexts/LanguageContext';

interface LanguageSwitcherProps {
  hasZhContent: boolean;
  hasEnContent: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function LanguageSwitcher({
  hasZhContent,
  hasEnContent,
  language,
  setLanguage,
}: LanguageSwitcherProps) {
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
          'px-2 py-1 text-xs border transition-colors cursor-pointer',
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
          'px-2 py-1 text-xs border transition-colors cursor-pointer',
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
