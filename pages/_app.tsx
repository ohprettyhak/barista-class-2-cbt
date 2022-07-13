import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "@/config/seo-config";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

import "pretendard/dist/web/static/pretendard.css";
import "@/styles/ridi-batang.css";

import customTheme from "@/config/theme";

function MyApp({ Component, pageProps }: AppProps) {
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
