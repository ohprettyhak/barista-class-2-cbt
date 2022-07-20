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

export type ProblemStates = {
  correct: boolean;
  wrong: boolean;
};

export type ProblemResult = {
  visible: boolean;
  correctCount: number;
  wrongCount: number;
};
