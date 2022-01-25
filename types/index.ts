export type PostMeta = {
  excerpt?: string;
  slug: string;
  title: string;
  tags?: string[];
  date: string;
};
export type Post = {
  content: string;
  meta: PostMeta;
};
