export type PracticeProps = {
  slug: string;
  data: Array<ProblemDataProps>;
};

export type ProblemDataProps = {
  id: number;
  title: string;
  description: string;
  example: Array<string>;
  answer: string;
  commentary: string;
};
