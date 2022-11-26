import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

import 'pretendard/dist/web/static/pretendard.css';
import '@/styles/ridi-batang.css';

import SEO from '@/config/seo-config';
import customTheme from '@/config/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.startsWith('/barista-class-2-cbt/')) router.push('https://cbt.haklee.me/barista-c2');
  }, [router]);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://cbt.haklee.me/barista-c2/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cbt.haklee.me/barista-c2/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://cbt.haklee.me/barista-c2/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="https://cbt.haklee.me/barista-c2/favicon/site.webmanifest" />
        <link rel="mask-icon" href="https://cbt.haklee.me/barista-c2/favicon/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NextNProgress height={2} color="rgba(0, 0, 0, 0.16)" options={{ showSpinner: false }} />
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
