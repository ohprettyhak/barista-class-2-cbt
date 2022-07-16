import Link from "next/link";
import { Container } from "@chakra-ui/react";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Layout({
  title,
  keywords,
  description,
  children,
}: LayoutProps) {
  return (
    <>
      <Navigation />
      <Container
        as="main"
        maxW="container.lg"
        h="auto"
        minH="100%"
        pt={12}
        pb={72}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: [string];
  children: React.ReactNode;
};
