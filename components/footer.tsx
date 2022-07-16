import Link from "next/link";
import {
  Container,
  Box,
  Flex,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import config from "@/config/config";
import SocialButton from "@/components/social-button";

export default function Footer() {
  return (
    <Box
      as="footer"
      position="relative"
      h={48}
      py={10}
      borderTopColor="gray.200"
      borderTopStyle="solid"
      borderTopWidth="1px"
      backgroundColor="gray.50"
      transform="translateY(-100%)"
    >
      <Container
        display="flex"
        maxW="container.lg"
        justifyContent="space-between"
        userSelect="none"
      >
        <Box>
          <Text fontSize="1.1rem" fontWeight="semibold" color="gray.500">
            {config.title}
          </Text>
          <Link href="mailto:hello@haklee.me" passHref>
            <ChakraLink
              mt={1.5}
              fontSize="sm"
              fontWeight="normal"
              color="gray.500"
              opacity="1"
              _hover={{
                opacity: "0.7",
              }}
            >
              hello@haklee.me
            </ChakraLink>
          </Link>
          <Flex mt={6} gap={6}>
            <SocialButton
              href={`https://github.com/${config.social.github}`}
              label="Link to Github"
            >
              <FaGithub size={22} />
            </SocialButton>
            <SocialButton
              href={`https://instagram.com/${config.social.instagram}`}
              label="Link to Instagram"
            >
              <FaInstagram size={22} />
            </SocialButton>
            <SocialButton
              href={`https://linkedin.com/in/${config.social.linkedIn}`}
              label="Link to Linkedin"
            >
              <FaLinkedinIn size={22} />
            </SocialButton>
          </Flex>
        </Box>
        <Box mt="auto">
          <Text fontSize="sm" fontWeight="normal" color="gray.500">
            {config.copyright}
          </Text>
          <Text mt={1} fontSize="sm" fontWeight="normal" color="gray.500">
            Illustration by{" "}
            <Link href="https://icons8.com/illustrations" passHref>
              <ChakraLink
                target="_blank"
                color="gray.600"
                borderBottomColor="gray.600"
                borderBottomWidth="1px"
                opacity="1"
                _hover={{
                  opacity: "0.7",
                }}
              >
                Ouch!
              </ChakraLink>
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
