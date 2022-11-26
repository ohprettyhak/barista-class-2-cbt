import { Container, Text } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';

export default function Layout({ title, keywords, description, children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <Container as="main" maxW="container.lg" pt={12}>
        {children}
      </Container>
      <Text py={{ base: 6, sm: 8 }} fontSize="sm" fontWeight="semibold" textAlign="center" userSelect="none">
        © 2022 Hak Lee.
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
