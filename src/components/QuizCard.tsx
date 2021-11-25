import React from 'react';
import {IAppState, useGlobalContext} from '../contexts/AppContext';

const QuizCard = () => {
  const {loading, questions, number} = useGlobalContext();
  console.log(loading, questions, number, '3');
  return (
    <h1>쓰레기</h1>
    // <div>
    //   <p className="number">question : {score}/ 10</p>
    //   <p dangerouslySetInnerHTML={{__html: questions}}></p>
    //   <div>
    //     {answer.map((item) => {
    //       return (
    //         <div>
    //           <button disabled={userAnswers} onClick={callback}>
    //             <span dangerouslySetInnerHTML={{__html: item}}></span>
    //           </button>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default QuizCard;
