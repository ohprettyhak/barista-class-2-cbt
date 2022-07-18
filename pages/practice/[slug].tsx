import Link from 'next/link';
import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';
import shuffle from 'array-shuffle';
import { Flex, Box, Heading, Text, Button, Divider, useToast } from '@chakra-ui/react';

import Layout from '@/components/layout';
import { PracticeProps, ProblemDataProps } from '@/types/types';

export default function PracticePage({ slug, data }: PracticeProps) {
  const [problems, setProblems] = useState<Array<ProblemDataProps> | null>(null);
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(false);

  const [corrects, setCorrects] = useState<Array<number>>([]);
  const [wrongs, setWrongs] = useState<Array<number>>([]);
  const [solved, setSolved] = useState<Array<number>>([]);

  useEffect(() => setProblems(shuffle(data)), [data]);

  const toast = useToast();

  function showCorrectAnswer(event: number) {
    let texts: Array<HTMLElement | null> = [];
    let buttons: Array<HTMLElement | null> = [];
    let correct = -1;

    Array(4)
      .fill(0)
      .map((_, number) => {
        texts.push(document.getElementById(`text-example-${number + 1}`));
        buttons.push(document.getElementById(`btn-example-${number + 1}`));
        if (problems![current].answer === texts[number]?.innerHTML) correct = number;
      });

    if (buttons[correct]) buttons[correct]!.style.backgroundColor = 'var(--chakra-colors-blue-100)';

    if (correct === event) {
      if (wrongs.indexOf(current) === -1 && corrects.indexOf(current) === -1) corrects.push(current);
    } else {
      if (wrongs.indexOf(current) === -1 && corrects.indexOf(current) === -1) wrongs.push(current);
      if (buttons[event]) buttons[event]!.style.backgroundColor = 'var(--chakra-colors-red-100)';
    }
    if (solved.indexOf(current) === -1) solved.push(current);
  }

  function checkIsSolved(): boolean {
    if (wrongs.indexOf(current) === -1 && corrects.indexOf(current) === -1) {
      toast({
        title: '문제를 풀어주세요',
        status: 'error',
        variant: 'subtle',
        duration: 3000,
        isClosable: true,
      });
      return false;
    }
    return true;
  }

  function getNextProblem() {
    if (!checkIsSolved()) return;
    setCurrent(current + 1);
    Array(4)
      .fill(0)
      .map((_, number) => {
        document.getElementById(`btn-example-${number + 1}`)!.style.removeProperty('background-color');
      });
  }

  function getPreviosProblem() {
    setCurrent(current - 1);
    Array(4)
      .fill(0)
      .map((_, number) => {
        document.getElementById(`btn-example-${number + 1}`)!.style.removeProperty('background-color');
      });
  }

  function getResult() {
    if (!checkIsSolved()) return;
    setResult(true);
  }

  function solveWorngProblem() {
    let temp: Array<ProblemDataProps> = [];
    wrongs.map((it, _) => temp.push(problems![it]));
    setProblems(temp);
    setResult(false);
    setCorrects([]);
    setWrongs([]);
    setSolved([]);
    setCurrent(0);
  }

  return (
    <Layout>
      {problems && (
        <>
          {result ? (
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
              <Text mt={1} fontSize="sm" textAlign="center">
                {slug}
              </Text>
              <Divider my={5} />
              <Flex flexDirection="column" gap={1.5}>
                <Text textAlign="center">총 문제 : {problems.length}</Text>
                <Text textAlign="center">맞춘 문제 : {corrects.length}</Text>
                <Text textAlign="center">틀린 문제 : {wrongs.length}</Text>
              </Flex>
              <Text my={3} fontWeight="semibold" textAlign="center">
                백점 기준 환산 : {Math.round(((100 * corrects.length) / problems.length) * 100) / 100}점
              </Text>
              <Flex mt={6} justifyContent="center" gap={4}>
                <Link href="/" passHref>
                  <Button as="a" h="auto" px={3} py={2} fontSize="sm">
                    &#8592; 메인 가기
                  </Button>
                </Link>
                {wrongs.length !== 0 && (
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
                  />
                )}
                <Divider my={5} />
                {shuffle(problems[current].example).map((it, number) => (
                  <Button
                    key={number}
                    id={`btn-example-${number + 1}`}
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
                      solved.indexOf(current) !== -1 && problems[current]!.answer === it ? 'blue.100' : 'transparent'
                    }
                    onClick={() => showCorrectAnswer(number)}
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
                      {number + 1}
                    </Text>
                    <Text as="span" id={`text-example-${number + 1}`} display="inline-block">
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
                  onClick={() => getPreviosProblem()}
                >
                  &#8592; 이전 문제
                </Button>
                <Button
                  h="auto"
                  px={3}
                  py={2}
                  fontSize="sm"
                  onClick={current === problems.length - 1 ? () => getResult() : () => getNextProblem()}
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
