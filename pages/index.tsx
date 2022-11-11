import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { PostMeta } from '../types';
import { getAllPosts } from '../@api';
import avatarUrl from '../public/chrisho.jpeg'
import { displayDate } from '../utils/dateTime';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <div className="flex justify-between mt-10">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-900 dark:text-white">
            Dung Ho
          </h1>
          <h2 className="text-gray-600 dark:text-gray-400 pt-1">
            Front-end developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 pt-5 max-w-lg">
            I am a developer passionate in Javascript. On my way to achieve the
            goals my favorite quote is Work smarter, not harder.
          </p>
        </div>
        <div>
          <Image
            src={avatarUrl}
            className="rounded-full"
            width={128}
            height={128}
            alt="avatar"
          />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-xl uppercase tracking-tight mb-6 text-gray-600 dark:text-white">
          Latest Posts
        </h3>
        <div className="space-y-5">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="text-xl font-bold text-teal-400 hover:text-teal-500 dark:text-teal-500 dark:hover:text-white">

                {post.title}

              </Link>
              <p className="text-gray-600 text-sm dark:text-gray-500">
                {displayDate(post.date)}
              </p>
              <p className="text-gray-600 max-w-xl mt-2 dark:text-gray-400">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  posts: PostMeta[];
}> = async () => {
  const posts = getAllPosts()
    .map((post) => post.meta).reverse().slice(0, 2);
  return {
    props: {
      posts,
    },
  };
};
