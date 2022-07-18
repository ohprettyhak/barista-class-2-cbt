import Link from 'next/link';
import { useState } from 'react';
import { Grid, Box, Button, Heading, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';

import Layout from '@/components/layout';
import CardButton from '@/components/card-button';

import config from '@/config/config';

export default function HomePage() {
  const [examId, setExamId] = useState(config.exam[0].value);

  const onChangeExamSelect = (event: any) => {
    setExamId(event.value);
  };

  return (
    <Layout>
      <Heading mt={12} fontSize="lg">
        🔥 연습 문제
      </Heading>
      <Text mt="1.5">시험에 나오는 연습 문제를 풀어봅시다.</Text>
      <Grid
        gridTemplateColumns={{
          base: '100%',
          sm: 'minmax(0, 1fr) minmax(0, 1fr)',
          md: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)',
        }}
        gridGap={4}
        mt={6}
        placeItems="start"
        justifyContent="space-around"
      >
        <CardButton
          href="/practice/[slug]"
          slug="introduction"
          title="커피 학개론"
          description="커피 학개론 문제를 풉니다."
        />
        <CardButton
          href="/practice/[slug]"
          slug="roasting"
          title="커피 배전"
          description="로스팅과 향미 평가(커피 배전) 문제를 풉니다."
        />
        <CardButton
          href="/practice/[slug]"
          slug="extraction"
          title="커피 추출"
          description="커피 추출 문제를 풉니다."
        />
        <CardButton href="/practice" title="모든 문제" description="모든 연습 문제를 풉니다." />
      </Grid>
      <Heading mt={16} fontSize="lg">
        📝 모의고사
      </Heading>
      <Text mt="1.5">임의 50문제를 제한시간 내에 풀어봅시다.</Text>
      <Grid
        gridTemplateColumns={{
          base: '100%',
          sm: 'minmax(0, 1fr) minmax(0, 1fr)',
          md: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)',
        }}
        gridGap={4}
        mt={6}
        placeItems="start"
        justifyContent="space-around"
      >
        <CardButton href="/" title="문제 풀기" description="모의고사를 풉니다." />
      </Grid>
      <Heading mt={16} fontSize="lg">
        🎓 기출문제
      </Heading>
      <Text mt="1.5">기출문제를 제한시간 내에 풀어봅시다.</Text>
      <Grid
        gridTemplateColumns={{
          base: '100%',
        }}
        mt={6}
        pb={6}
        rowGap={8}
      >
        <Select
          size="md"
          focusBorderColor="gray.400"
          selectedOptionColor="gray"
          options={config.exam}
          defaultValue={config.exam[0]}
          onChange={onChangeExamSelect}
        />
        <Box>
          <Link href={`exam/${examId}`} passHref>
            <Button as="a" borderRadius="8px">
              문제 풀기 →
            </Button>
          </Link>
        </Box>
      </Grid>
    </Layout>
  );
}
