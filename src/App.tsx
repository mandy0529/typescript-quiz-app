import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchData, Difficulty, IQuizAllState, IAnswerObject} from './utils/api';

const App = () => {
  const TOTAL_QUESTIONS = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<IQuizAllState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<IAnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchData(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setNumber(0);
    setUserAnswers([]);
    setScore(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>start</button>
      ) : null}
      {!gameOver && <p>Score</p>}
      {loading && <p>. . . Loading</p>}
      {!loading && !gameOver && (
        <QuestionCard
          question={questions[number].question}
          answers={questions[number].answers}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
        />
      )}
      {!gameOver ||
        (!loading && userAnswers.length === number + 1 && (
          <button onClick={nextQuestion}>next question</button>
        ))}
    </>
  );
};

export default App;
