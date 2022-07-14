import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Flex,
  Box,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import CONFIG from "@/config/config";

export default function Navigation() {
  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      h={12}
      borderBottomStyle="solid"
      borderBottomWidth="1px"
      borderBottomColor="gray.100"
    >
      <Container
        as={Flex}
        maxW="container.lg"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center">
          <Link href="/" passHref>
            <ChakraLink
              display="flex"
              gap={1}
              opacity="1"
              userSelect="none"
              alignItems="center"
              _hover={{
                opacity: "0.7",
              }}
            >
              <Image src="/favicon.ico" width="20px" height="20px" />
              {CONFIG.TITLE}
            </ChakraLink>
          </Link>
          <Text
            as="span"
            px={1.5}
            py="3px"
            ml={2}
            color="gray.500"
            fontSize={2.5}
            fontWeight="semibold"
            borderRadius="4px"
            backgroundColor="gray.100"
          >
            {CONFIG.VERSION}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
