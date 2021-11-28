import React from 'react';
import {IAnswerObject} from '../utils/api';
import styled from 'styled-components';

type Props = {
  question: string;
  answers: Array<string>;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: IAnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <>
      <p className="number">
        question :{questionNr}/{totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers.map((answer) => {
          return (
            <Wrapper
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
              key={answer}
            >
              <button disabled={!!userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html: answer}}></span>
              </button>
            </Wrapper>
          );
        })}
      </div>
    </>
  );
};

type IButton = {
  correct: boolean;
  userClicked: boolean;
};
const Wrapper = styled.div<IButton>`
  button {
    background: ${({correct, userClicked}) =>
      correct ? 'green' : !correct && userClicked ? 'red' : null};
  }
`;

export default QuestionCard;
