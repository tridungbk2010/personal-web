import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllPosts } from '../../@api';
import { PostMeta } from '../../types';
import Articles from '../../components/Articles';
import Layout from '../../components/Layout';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <Articles posts={posts} title="Blog" />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  posts: PostMeta[];
}> = async () => {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return {
    props: {
      posts,
    },
  };
};
