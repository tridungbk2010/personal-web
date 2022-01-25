import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { getAllPosts } from '../../@api';
import { PostMeta } from '../../types';
import Articles from '../../components/Articles';
import Layout from '../../components/Layout';

const Tag: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  slug,
  posts,
}) => {
  return (
    <Layout>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <Articles posts={posts} title={`Tag: ${slug}`} />
    </Layout>
  );
};

export default Tag;

export const getStaticProps: GetStaticProps<{
  slug: string;
  posts: PostMeta[];
}> = async ({ params }) => {
  const { slug } = params as { slug: string };
  const postsBySlug = getAllPosts().filter((p) => p.meta.tags?.includes(slug));
  return {
    props: {
      slug,
      posts: postsBySlug.map((p) => p.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.map((p) => p.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({
    params: {
      slug: tag,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
