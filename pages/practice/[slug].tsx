import Link from 'next/link';
import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { Flex, Box, Heading, Text, Button, Divider, useToast } from '@chakra-ui/react';

import Layout from '@/components/layout';
import { PracticeProps, ProblemDataProps, ProblemStates, ProblemResult } from '@/types/types';

export default function PracticePage({ slug, data }: PracticeProps) {
  const [problems, setProblems] = useState<Array<ProblemDataProps> | null>(null);
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState<ProblemResult>({ visible: false, correctCount: 0, wrongCount: 0 });
  const [solve, setSolve] = useState<Array<ProblemStates>>([]);

  useEffect(() => setProblems(_.shuffle(data)), [data]);

  const toast = useToast();

  function showCorrectAnswer(event: number) {
    let texts: Array<HTMLElement | null> = [];
    let buttons: Array<HTMLElement | null> = [];
    let correct = -1;

    _.range(4).map((_, idx) => {
      texts.push(document.getElementById(`text-example-${idx + 1}`));
      buttons.push(document.getElementById(`btn-example-${idx + 1}`));
      if (problems![current].answer === texts[idx]?.innerHTML) correct = idx;
    });

    if (buttons[correct]) buttons[correct]!.style.backgroundColor = 'var(--chakra-colors-blue-100)';
    if (correct === event) {
      if (solve.length < current + 1) solve.push({ correct: true, wrong: false });
    } else {
      if (solve.length < current + 1) solve.push({ correct: false, wrong: true });
      if (buttons[event]) buttons[event]!.style.backgroundColor = 'var(--chakra-colors-red-100)';
    }
  }

  function getOtherProblem(direction: number) {
    if (direction === 1 && solve.length < current + 1) {
      toast({ title: '문제를 풀어주세요', status: 'error', variant: 'subtle', duration: 3000 });
      return;
    }

    setCurrent(current + direction);
    _.range(4).map((_, idx) => {
      document.getElementById(`btn-example-${idx + 1}`)!.style.removeProperty('background-color');
    });
  }

  function getResult() {
    if (solve.length < current + 1) {
      toast({ title: '문제를 풀어주세요', status: 'error', variant: 'subtle', duration: 3000 });
      return;
    }

    let correctCount = 0;
    let wrongCount = 0;
    solve.map((it) => {
      if (it.correct) correctCount += 1;
      if (it.wrong) wrongCount += 1;
    });
    setResult({ visible: true, correctCount: correctCount, wrongCount: wrongCount });
  }

  function solveWorngProblem() {
    let temp: Array<ProblemDataProps> = [];
    solve.map((it, idx) => {
      if (it.wrong) temp.push(problems![idx]);
    });
    setProblems(temp);
    setResult({ visible: false, correctCount: 0, wrongCount: 0 });
    setSolve([]);
    setCurrent(0);
  }

  return (
    <Layout>
      {problems && (
        <>
          {result.visible ? (
            <Box
              width="100%"
              maxWidth="xl"
              p={4}
              my={{ base: 8, sm: 12 }}
              mx="auto"
              boxShadow="md"
              borderRadius="8px"
              backgroundColor="rgba(0, 0, 0, 0.02)"
            >
              <Heading fontSize="xl" textAlign="center">
                연습 결과
              </Heading>
              <Text mt={1} color="gray.500" fontSize="sm" textAlign="center">
                {slug}
              </Text>
              <Divider my={5} />
              <Flex flexDirection="column" gap={1.5}>
                <Text textAlign="center">총 문제 : {problems.length}</Text>
                <Text textAlign="center">맞춘 문제 : {result.correctCount}</Text>
                <Text textAlign="center">틀린 문제 : {result.wrongCount}</Text>
              </Flex>
              <Text my={3} fontWeight="semibold" textAlign="center">
                백점 기준 환산 : {Math.round(((100 * result.correctCount) / problems.length) * 100) / 100}점
              </Text>
              <Flex mt={6} justifyContent="center" gap={4}>
                <Link href="/" passHref>
                  <Button as="a" h="auto" px={3} py={2} fontSize="sm">
                    &#8592; 메인 가기
                  </Button>
                </Link>
                {result.wrongCount > 0 && (
                  <Button h="auto" px={3} py={2} fontSize="sm" onClick={() => solveWorngProblem()}>
                    ⟳ 틀린 문제 다시 풀기
                  </Button>
                )}
              </Flex>
            </Box>
          ) : (
            <>
              <Text mt={{ base: 8, sm: 12 }} fontWeight="bold" textAlign="center">
                {current + 1} / {problems.length}
              </Text>
              <Box
                width="100%"
                maxWidth="xl"
                p={4}
                my={{ base: 8, sm: 12 }}
                mx="auto"
                fontFamily="batang"
                boxShadow="md"
                borderRadius="8px"
                backgroundColor="rgba(0, 0, 0, 0.02)"
              >
                <Text>{problems[current].title}</Text>
                {problems[current].description !== '' && (
                  <Text
                    mt={4}
                    p={2.5}
                    fontSize="sm"
                    userSelect="none"
                    borderColor="gray.400"
                    borderWidth="1px"
                    dangerouslySetInnerHTML={{
                      __html: problems[current].description,
                    }}
                    sx={{
                      li: { listStyle: 'none', padding: '1px 0' },
                      img: { margin: '0 auto' },
                    }}
                  />
                )}
                <Divider my={5} />
                {_.shuffle(problems[current].example).map((it, idx) => (
                  <Button
                    key={idx}
                    id={`btn-example-${idx + 1}`}
                    display="flex"
                    h="auto"
                    my={0.5}
                    p={2}
                    gap={1.5}
                    fontSize="sm"
                    textAlign="left"
                    lineHeight="base"
                    whiteSpace="normal"
                    backgroundColor={
                      solve.length >= current + 1 && problems[current]!.answer === it ? 'blue.100' : 'transparent'
                    }
                    onClick={() => showCorrectAnswer(idx)}
                  >
                    <Text
                      as="span"
                      display="inline-block"
                      w="18px"
                      h="18px"
                      p="1px"
                      mb="auto"
                      flexShrink="0"
                      fontSize="0.7rem"
                      borderRadius="50%"
                      borderWidth="1px"
                      borderColor="gray.800"
                      textAlign="center"
                      verticalAlign="center"
                    >
                      {idx + 1}
                    </Text>
                    <Text as="span" id={`text-example-${idx + 1}`} display="inline-block">
                      {it}
                    </Text>
                  </Button>
                ))}
              </Box>
              <Box as="span" display="flex" w="auto" pb={{ base: 4, sm: 6 }} justifyContent="center" gap={4}>
                <Button
                  h="auto"
                  p={3}
                  fontSize="sm"
                  disabled={current === 0 ? true : false}
                  onClick={() => getOtherProblem(-1)}
                >
                  &#8592; 이전 문제
                </Button>
                <Button
                  h="auto"
                  px={3}
                  py={2}
                  fontSize="sm"
                  onClick={current === problems.length - 1 ? () => getResult() : () => getOtherProblem(1)}
                >
                  {current === problems.length - 1 ? '결과 확인' : '다음 문제'}
                  &nbsp;&#8594;
                </Button>
              </Box>
            </>
          )}
        </>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'introduction' } }, { params: { slug: 'roasting' } }, { params: { slug: 'extraction' } }],
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const problemJsonData = fs.readFileSync(path.join('datas/practice', slug + '.json'), 'utf-8');
  const data: Array<ProblemDataProps> = JSON.parse(problemJsonData);
  return {
    props: {
      slug: slug,
      data: data,
    },
  };
}
