import Image from 'next/image';
import type {
  GetStaticProps,
  NextPage,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getPostFromSlug, getSlugs } from '../../@api';
import { PostMeta } from '../../types';
import Layout from '../../components/Layout';
import YouTube from '../../components/Youtube';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/night-owl.css';
import Content from '../../components/Content';

type MdxPost = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
};

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return (
    <Layout>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <Content>
        <h1>{post.meta.title}</h1>
        <MDXRemote {...post.source} components={{ YouTube, Image }} />
      </Content>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((sl) => ({
    params: {
      slug: sl,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: MdxPost }> = async ({
  params,
}) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      post: { source: mdxSource, meta },
    },
  };
};
