import Link from 'next/link';
import { PostMeta } from '../types';

const Articles = ({ title, posts }: { posts: PostMeta[]; title?: string }) => {
  return (
    <div className="dark:text-white">
      {title && <h1 className="text-3xl font-bold pt-3 pb-5">{title}</h1>}
      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <div>
              <Link href={`/posts/${post.slug}`}>
                <a className="dark:text-teal-400 font-bold text-xl hover:text-gray-500 dark:hover:text-teal-300">
                  {post.title}
                </a>
              </Link>
              <p className="max-w-xl pt-2">{post.excerpt}</p>
              <div className="space-x-3 mt-5">
                {post.tags?.map((tag) => (
                  <Link href={`/tags/${tag}`} key={tag}>
                    <a className="text-gray-500 py-1 px-3 dark:bg-gray-700 dark:hover:text-gray-100 bg-slate-100 rounded-xl text-sm hover:text-gray-800">
                      {tag}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
