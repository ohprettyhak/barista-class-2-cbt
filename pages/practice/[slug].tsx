import Layout from "@/components/layout";

export default function PracticePage({ slug }: any) {
  return (
    <Layout>
      <>{slug}</>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "introduction" } },
      { params: { slug: "roasting" } },
      { params: { slug: "extraction" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return {
    props: {
      slug,
    },
  };
}
