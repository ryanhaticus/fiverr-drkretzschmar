import 'tailwindcss/tailwind.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dr. Kretzschmar</title>
        <link rel='icon' type='image/svg+xml' href='/wrench.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
