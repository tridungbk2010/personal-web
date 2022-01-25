import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { Post } from '../types';

const POST_PATH = path.join(process.cwd(), 'posts');

export function getSlugs(): string[] {
  const paths = sync(`${POST_PATH}/*.mdx`);

  return paths.map((p) => {
    const parts = p.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split('.');
    return slug;
  });
}

export function getAllPosts() {
  return getSlugs()
    .map(getPostFromSlug)
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
}

export function getPostFromSlug(slug: string): Post {
  const postPath = path.join(POST_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);

  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt,
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
}
