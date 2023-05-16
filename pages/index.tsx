import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mike&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-blue-800 p-10">time to build!</h1>

    </div>
  );
};

export default Home;
