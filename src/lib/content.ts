export type ContentType = 'paper' | 'code' | 'resource';

export interface ArxivInfo {
  id: string;
  subjects?: string[];
  description?: string;
}

export interface GithubInfo {
  repo: string;
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
