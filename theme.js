import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  fonts: {
    base: "-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif",
    batang:
      "RIDIBatang, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif",
  },
  components: {
    Button: {
      baseStyle: (props) => ({
        _hover: {
          textDecoration: "none",
        },
      }),
    },
    Heading: {
      baseStyle: (props) => ({
        fontFamily: "base",
      }),
    },
    Text: {
      baseStyle: (props) => ({
        transition: "all 0.1s ease-in-out",
      }),
      variants: {
        small: (props) => ({
          margin: "0",
          marginBottom: "2",
          fontSize: "sm",
        }),
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: "gray.800",
        textDecoration: "none",
        transition: "all 0.2s ease-in-out",
        _hover: {
          textDecoration: "none",
        },
      }),
    },
  },
  styles: {
    global: (props) => ({
      html: {
        h: "100%",
      },
      body: {
        h: "100%",
        fontFamily: "base",
        lineHeight: "base",
      },
      a: {
        color: "gray.800",
      },
      "*::selection": {
        background: mode("blackAlpha.300", "whiteAlpha.300")(props),
        WebkitAppearance: "none",
      },
    }),
  },
  shadows: { outline: "0 0 0 2px var(--chakra-colors-gray-400)" },
});

export default customTheme;
