import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Content from '../components/Content';

const Home: NextPage = () => {
  return (
    <Layout>
      <Content>
        <h2 className="text-2xl font-bold">Hello world</h2>
        <p>{`i'm Chris Ho`}</p>
      </Content>
    </Layout>
  );
};

export default Home;
