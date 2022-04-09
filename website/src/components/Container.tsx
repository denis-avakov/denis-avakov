import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Container({ children, ...customMetaTags }: any) {
  const router = useRouter();

  const meta = {
    title: 'Denis Avakov — React, React Native and Node developer',
    description: 'Front-end developer and JavaScript enthusiast.',
    image: 'http://denis-avakov.ru/static/images/banner.png',
    type: 'website',
    ...customMetaTags
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://denis-avakov.ru${router.asPath}`} />

        <meta property="og:url" content={`https://denis-avakov.ru${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Denis Avakov" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      {children}
    </>
  );
}
