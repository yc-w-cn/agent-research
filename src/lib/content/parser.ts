import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { CONTENT_DIR, MDX_EXTENSION } from './constants';
import type { MdxFrontmatter } from './types';

export function parseMdxFile(file: string): {
  slug: string;
  data: MdxFrontmatter;
  content: string;
} {
  const filePath = path.join(CONTENT_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const slug = file.replace(MDX_EXTENSION, '');

  return { slug, data, content };
}
