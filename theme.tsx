import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  fonts: {
    base: '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    batang:
      'RIDIBatang, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'base',
      },
    },
    Text: {
      baseStyle: {
        transition: 'all 0.1s ease-in-out',
      },
      variants: {
        small: {
          margin: '0',
          marginBottom: '2',
          fontSize: 'sm',
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'gray.800',
        textDecoration: 'none',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          textDecoration: 'none',
        },
      },
      variants: {
        button: {
          display: 'flex',
          h: '10',
          minW: '10',
          px: '4',
          fontSize: 'md',
          fontWeight: 'semibold',
          lineHeight: '1.2',
          verticalAlign: 'middle',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'md',
          bg: 'gray.50',
          _hover: {
            bg: 'gray.200',
          },
        },
      },
    },
  },
  styles: {
    global: {
      html: {
        h: '100%',
      },
      body: {
        h: '100%',
        fontFamily: 'base',
        lineHeight: 'base',
      },
      '#__next': {
        h: '100%',
      },
      a: {
        color: 'gray.800',
      },
      '*::selection': {
        background: 'blackAlpha.300',
        WebkitAppearance: 'none',
      },
    },
  },
  shadows: { outline: '0 0 0 2px var(--chakra-colors-gray-400)' },
});

export default customTheme;
