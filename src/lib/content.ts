export type ContentType = 'paper' | 'code' | 'resource';

export interface ContentItem {
  slug: string;
  title: string;
  categories: string[];
  date: string;
  tags?: string[];
  arxiv?: string;
  github?: string;
  stars?: number;
  related?: RelatedResource[];
}

export interface RelatedResource {
  title: string;
  url: string;
}

export interface ContentData extends ContentItem {
  content: string;
}
