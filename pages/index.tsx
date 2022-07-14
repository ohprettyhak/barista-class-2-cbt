import { Grid, Heading, Text } from "@chakra-ui/react";
import { Select } from "chakra-react-select";

import Layout from "@/components/layout";
import CardButton from "@/components/card-button";

import CONFIG from "@/config/config";

export default function HomePage() {
  return (
    <Layout>
      <Heading mt={12} fontSize="lg">
        🔥 연습 문제
      </Heading>
      <Text mt="1">시험에 나오는 연습 문제를 풀어봅시다.</Text>
      <Grid
        gridTemplateColumns={{
          base: "100%",
          sm: "minmax(0, 1fr) minmax(0, 1fr)",
          md: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
        }}
        gridGap={4}
        mt={6}
        placeItems="start"
        justifyContent="space-around"
      >
        <CardButton
          href="/"
          title="커피 학개론"
          description="커피 학개론 문제를 풉니다."
        />
        <CardButton
          href="/"
          title="커피 배전"
          description="로스팅과 향미 평가(커피 배전) 문제를 풉니다."
        />
        <CardButton
          href="/"
          title="커피 추출"
          description="커피 추출 문제를 풉니다."
        />
        <CardButton
          href="/"
          title="모든 문제"
          description="모든 연습 문제를 풉니다."
        />
      </Grid>
      <Heading mt={12} fontSize="lg">
        📝 모의고사
      </Heading>
      <Text mt="1">임의 50문제를 제한시간 내에 풀어봅시다.</Text>
      <Grid
        gridTemplateColumns={{
          base: "100%",
          sm: "minmax(0, 1fr) minmax(0, 1fr)",
          md: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
        }}
        gridGap={4}
        mt={6}
        placeItems="start"
        justifyContent="space-around"
      >
        <CardButton
          href="/"
          title="문제 풀기"
          description="모의고사를 풉니다."
        />
      </Grid>
      <Heading mt={12} fontSize="lg">
        🎓 기출문제
      </Heading>
      <Text mt="1">기출문제를 제한시간 내에 풀어봅시다.</Text>
      <Grid
        gridTemplateColumns={{
          base: "100%",
        }}
        mt={6}
      >
        <Select
          size="md"
          focusBorderColor="gray.400"
          selectedOptionColor="gray"
          options={CONFIG.EXAM}
          defaultValue={CONFIG.EXAM[0]}
        />
      </Grid>
    </Layout>
  );
}
