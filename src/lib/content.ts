export type ContentType = 'paper' | 'code' | 'resource';

export interface ArxivDescription {
  zh?: string;
  en?: string;
}

export interface ArxivInfo {
  id: string;
  subjects?: string[];
  description?: string | ArxivDescription;
}

export interface GithubInfo {
  name: string;
  description?: string;
  stars?: number;
  tags?: string[];
}

export interface ContentItem {
  slug: string;
  title: string;
  categories: string[];
  date: string;
  arxiv?: ArxivInfo;
  github?: GithubInfo;
  related?: RelatedResource[];
}

export interface RelatedResource {
  title: string;
  url: string;
  description?: string;
}

export interface ContentData extends ContentItem {
  content: string;
}
