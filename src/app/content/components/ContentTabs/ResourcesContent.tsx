import { ContentData } from '@/lib/content';

interface ResourcesContentProps {
  resources: NonNullable<ContentData['related']>;
}

export default function ResourcesContent({ resources }: ResourcesContentProps) {
  return (
    <div className="space-y-4">
      {resources.map((resource, index) => (
        <a
          key={index}
          href={resource.url}
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-base font-medium group-hover:text-zinc-600 transition-colors leading-relaxed">
            {resource.title}
          </h3>
          {resource.description && (
            <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
              {resource.description}
            </p>
          )}
        </a>
      ))}
    </div>
  );
}
