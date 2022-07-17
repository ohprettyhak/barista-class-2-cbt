import Link from "next/link";
import { Text, Link as ChakraLink } from "@chakra-ui/react";

export default function CardButton({
  href,
  slug,
  title,
  description,
  textColor,
  backgroundColor,
  hoverBackgroundColor,
}: CardButtonProps) {
  return (
    <Link
      href={
        slug !== ""
          ? { pathname: href, query: { slug: slug } }
          : { pathname: href }
      }
      passHref
    >
      <ChakraLink
        w="100%"
        h="100%"
        p="4"
        userSelect="none"
        boxShadow="sm"
        borderRadius="8px"
        backgroundColor={backgroundColor}
        transition="all 0.2s ease-in-out"
        _hover={{
          backgroundColor: `${hoverBackgroundColor}`,
        }}
      >
        <Text fontSize="xl" fontWeight="extrabold" color={textColor}>
          {`${title} →`}
        </Text>
        <Text my={2} color={textColor}>
          {description}
        </Text>
      </ChakraLink>
    </Link>
  );
}

const defaultProps: CardButtonProps = {
  href: "",
  slug: "",
  title: "",
  description: "",
  textColor: "gray.800",
  backgroundColor: "gray.50",
  hoverBackgroundColor: "gray.200",
};

type CardButtonProps = {
  href: string;
  slug: string;
  title: string;
  description: string;
  textColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
};

CardButton.defaultProps = defaultProps;
