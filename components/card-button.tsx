import Link from "next/link";
import { Text, Link as ChakraLink } from "@chakra-ui/react";

export default function CardButton({
  href,
  title,
  description,
}: CardButtonProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink
        w="100%"
        h="100%"
        p="4"
        boxShadow="sm"
        borderRadius="8px"
        backgroundColor="gray.50"
        transition="all 0.2s ease-in-out"
        _hover={{ backgroundColor: "gray.200" }}
      >
        <Text fontSize="xl" fontWeight="bold">
          {`${title} →`}
        </Text>
        <Text my={2}>{description}</Text>
      </ChakraLink>
    </Link>
  );
}

type CardButtonProps = {
  href: string;
  title: string;
  description: string;
};
