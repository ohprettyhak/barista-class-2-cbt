import Link from "next/link";
import { Container } from "@chakra-ui/react";

import Navigation from "@/components/navigation";

export default function Layout({
  title,
  keywords,
  description,
  children,
}: LayoutProps) {
  return (
    <>
      <Navigation />
      <Container maxW="container.lg" pt={12}>
        {children}
      </Container>
    </>
  );
}

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: [string];
  children: React.ReactNode;
};
