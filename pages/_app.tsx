import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "@/config/seo-config";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

import "pretendard/dist/web/static/pretendard.css";
import "@/styles/ridi-batang.css";

import customTheme from "@/config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.startsWith("/barista-class-2-cbt/"))
      router.push("https://cbt.haklee.me/barista-c2");
  }, []);

  return (
    <>
      <NextNProgress
        height={2}
        color="rgba(0, 0, 0, 0.16)"
        options={{ showSpinner: false }}
      />
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
