import Link from 'next/link';
import { PostMeta } from '../types';

const Articles = ({ title, posts }: { posts: PostMeta[]; title?: string }) => {
  return (
    <>
      {title && <h2 className="text-2xl font-bold py-3">{title}</h2>}
      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <div>
              <Link href={`/posts/${post.slug}`}>
                <a className="text-blue-500 font-black">{post.title}</a>
              </Link>
              <p className="max-w-xl pt-2">{post.excerpt}</p>
              <div className="space-x-3 pt-2">
                {post.tags?.map((tag) => (
                  <Link href={`/tags/${tag}`} key={tag}>
                    <a className="text-gray-500 ">{tag}</a>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Articles;
