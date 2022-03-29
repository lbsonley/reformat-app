/* eslint-disable import/no-relative-packages */
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Reformat App</title>
        <meta name="description" content="Reformat App Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
