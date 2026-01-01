// 需要安装依赖：pnpm add gray-matter

export type ContentType = 'paper' | 'code' | 'resource';

export interface ContentItem {
  slug: string;
  type: ContentType;
  title: string;
  category: string;
  date: string;
  tags?: string[];
  arxiv?: string;
  github?: string;
  stars?: number;
  related?: RelatedResource[];
}

export interface RelatedResource {
  type: 'note' | 'code' | 'paper' | 'resource';
  title: string;
  url: string;
}

export interface ContentData extends ContentItem {
  content: string;
}
