'use client';

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-3 py-1.5 border border-zinc-300 text-zinc-700 hover:border-gray-400 transition-colors"
          onMouseEnter={(e) => {
            e.stopPropagation();
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
