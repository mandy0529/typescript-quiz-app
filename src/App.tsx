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

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const correctObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, correctObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber((prev) => prev + 1);
    }
  };

  return (
    <>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>start</button>
      ) : null}
      {!gameOver && <p>Score : {score}</p>}
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
      {!gameOver && !loading && userAnswers.length === number + 1 && (
        <button onClick={nextQuestion}>next question</button>
      )}
    </>
  );
};

export default App;
