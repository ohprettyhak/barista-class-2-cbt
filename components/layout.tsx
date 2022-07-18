import Link from 'next/link';
import { Container, Text, Link as ChakraLink } from '@chakra-ui/react';

import Navigation from '@/components/navigation';

export default function Layout({ title, keywords, description, children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <Container as="main" maxW="container.lg" pt={12}>
        {children}
      </Container>
      <Text py={{ base: 6, sm: 8 }} fontSize="sm" fontWeight="semibold" textAlign="center" userSelect="none">
        © 2022 Hak Lee. | Illustrations by&nbsp;
        <Link href="https://icons8.com/illustrations" passHref>
          <ChakraLink
            target="_blank"
            opacity="1"
            borderBottomWidth="1px"
            borderBottomColor="gray.800"
            _hover={{
              opacity: '0.7',
            }}
          >
            Ouch!
          </ChakraLink>
        </Link>
      </Text>
    </>
  );
}

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: [string];
  children: React.ReactNode;
};
