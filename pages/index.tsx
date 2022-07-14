import Link from "next/link";
import { Grid, Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";

import Layout from "@/components/layout";
import CardButton from "@/components/card-button";

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
          md: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
        }}
        gridColumnGap={{ base: "0", md: "4" }}
        gridRowGap={{ base: "4", md: "0" }}
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
      </Grid>
    </Layout>
  );
}
