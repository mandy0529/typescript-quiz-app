import React from 'react';

type Props = {
  question: string;
  answers: Array<string>;
  callback: any;
  userAnswer: any;
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
    <div>
      <p className="number">
        question :{questionNr}/{totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers.map((answer) => {
          return (
            <div>
              <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html: answer}}></span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
