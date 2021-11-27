import {ShufleAnswers} from './helpers';

export const apiUrl =
  'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple';
export const BASE_URL = 'https://opentdb.com/api.php?';

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type IQuiz = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: any[];
};

export type IAnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type IQuizAllState = IQuiz & {answers: Array<string>};

export const fetchData = async (amount: number, difficulty: Difficulty) => {
  const endPoint = `${BASE_URL}amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(endPoint);
  const {results} = await response.json();
  const data = results.map((item: IQuiz) => {
    return {
      ...item,
      answers: ShufleAnswers([...item.incorrect_answers, item.correct_answer]),
    };
  });
  return data;
};
