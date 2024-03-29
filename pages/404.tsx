import { Box, Text, Button } from '@chakra-ui/react';
import { FaRegFlushed } from 'react-icons/fa';

import Link from '@/components/Link';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <Box mt={24}>
        <Box display="flex" color="gray.800" justifyContent="center">
          <FaRegFlushed size={64} />
        </Box>
        <Text mt={6} fontWeight="semibold" color="gray.800" textAlign="center">
          잘못된 주소이거나, 비공개된 페이지입니다.
        </Text>
        <Box mt={8} display="flex" justifyContent="center">
          <Link href="/" isExternal={true} variant="button">
            ← 돌아가기
          </Link>
        </Box>
      </Box>
    </Layout>
  );
}
