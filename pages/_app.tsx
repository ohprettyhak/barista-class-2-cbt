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
        <link rel="shortcut icon" href="https://cbt.haklee.me/barista-c2/favicon.ico" />
        <link rel="icon" href="https://cbt.haklee.me/barista-c2/favicon.ico" />
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
