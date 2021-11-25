import React, {useContext, useState} from 'react';
import {IfStatement} from 'typescript';

type IAppProvider = {
  children: React.ReactNode;
};
export type IAppState = {
  loading: boolean;
  questions: string[];
  number: number;
  userAnswers: string[];
  score: number;
  gameOver: boolean;
};

const AppContext = React.createContext<IAppState | null>(null);

const AppProvider = ({children}: IAppProvider) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(loading, '1');
  return (
    <AppContext.Provider
      value={{loading, questions, number, userAnswers, score, gameOver}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("plz don't make me give up");
  return context;
};

export default AppProvider;
