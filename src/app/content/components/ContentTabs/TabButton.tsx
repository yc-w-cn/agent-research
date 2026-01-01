import { cn } from '@/lib/utils';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  hasContent: boolean;
  isLast: boolean;
  onClick: () => void;
}

export default function TabButton({
  label,
  isActive,
  hasContent,
  isLast,
  onClick,
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!hasContent}
      className={cn(
        'px-4 py-2 text-sm border transition-colors cursor-pointer',
        'bg-white text-zinc-600',
        isActive ? 'border-black' : 'border-zinc-300 hover:border-zinc-400',
        !isLast && 'border-r-0',
        !hasContent && 'opacity-40 cursor-not-allowed',
      )}
    >
      {label}
    </button>
  );
}
