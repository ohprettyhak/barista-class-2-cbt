import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function SocialButton({
  href,
  label,
  children,
}: SocialButtonProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink
        target="_blank"
        aria-label={label}
        display="inline-flex"
        color="gray.500"
        alignItems="center"
        justifyContent="center"
        opacity="1"
        _hover={{
          opacity: "0.7",
        }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}

type SocialButtonProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};
